import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ToolCard } from './components/ToolCard';
import { ChatBot } from './components/ChatBot';
import { Tool, ToolCategory, Language } from './types';
import { INITIAL_TOOLS, TRANSLATIONS } from './constants';
import { findNewTools } from './services/geminiService';
import { Search, Sparkles, AlertCircle, Menu, Loader2, Globe } from 'lucide-react';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory>(ToolCategory.ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [sortMode, setSortMode] = useState<'default' | 'newest' | 'recent'>('default');
  const [isSorting, setIsSorting] = useState(false);
  
  // Tools state
  const [staticTools] = useState<Tool[]>(INITIAL_TOOLS);
  const [discoveredTools, setDiscoveredTools] = useState<Tool[]>([]);
  const [displayedTools, setDisplayedTools] = useState<Tool[]>(() => {
    const m = new Map<string, Tool>();
    INITIAL_TOOLS.forEach(t => {
      if (!m.has(t.url)) m.set(t.url, t);
    });
    return Array.from(m.values());
  });
  
  // Search State
  const [isAiSearching, setIsAiSearching] = useState(false);
  const [aiSearchError, setAiSearchError] = useState<string | null>(null);

  // Translations
  const t = TRANSLATIONS[currentLanguage];

  // Sort helpers
  const getRelevanceScore = (tool: Tool, query: string): number => {
    const q = query.toLowerCase();
    const name = tool.name.toLowerCase();
    
    // Exact match gets highest score
    if (name === q) return 100;
    // Starts with query gets high score
    if (name.startsWith(q)) return 80;
    // Contains query in name gets medium score
    if (name.includes(q)) return 60;
    // Tag match
    if (tool.tags.some(t => t.toLowerCase() === q)) return 50;
    if (tool.tags.some(t => t.toLowerCase().includes(q))) return 40;
    // Description match
    if (tool.description.toLowerCase().includes(q)) return 20;
    
    return 0;
  };
  
  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '');

  // Filter tools based on category and local search query
  useEffect(() => {
    let filtered = [...staticTools, ...discoveredTools];

    // Filter by text search FIRST to narrow down
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.tags.some(tag => tag.toLowerCase().includes(q))
      );

      // If the user typed an exact tool name that exists, show ONLY exact matches
      const qExact = normalize(searchQuery.trim());
      const pool = [...staticTools, ...discoveredTools];
      const exactMatches = pool.filter(t => normalize(t.name) === qExact);
      if (exactMatches.length > 0) {
        // Prefer AI discovered matches if present
        const aiExact = exactMatches.filter(t => t.isAiDiscovered);
        const finalExact = aiExact.length > 0 ? aiExact : exactMatches;
        // De-duplicate by URL and exit early
        const exactMap = new Map<string, Tool>();
        finalExact.forEach(t => {
          if (!exactMap.has(t.url)) exactMap.set(t.url, t);
        });
        const uniqueExact = Array.from(exactMap.values());
        setDisplayedTools(uniqueExact);
        return;
      }
    }

    // THEN filter by category (if selected)
    // Note: If user is searching specifically, we might want to ignore category or apply it strictly.
    // Here we apply it strictly if it's not ALL.
    if (selectedCategory !== ToolCategory.ALL) {
      filtered = filtered.filter(tool => 
        tool.category === selectedCategory || 
        (tool.isAiDiscovered && tool.category.toLowerCase().includes(selectedCategory.split(' ')[0].toLowerCase()))
      );
    }
    
    // Sort by relevance only if there is a search query
    if (searchQuery) {
      filtered.sort((a, b) => {
        const scoreA = getRelevanceScore(a, searchQuery);
        const scoreB = getRelevanceScore(b, searchQuery);
        return scoreB - scoreA;
      });
    }
    
    // Apply sort mode
    if (sortMode !== 'default') {
      setIsSorting(true);
      filtered.sort((a, b) => {
        const at = a.createdAt ?? (a.isAiDiscovered ? 0 : -Infinity);
        const bt = b.createdAt ?? (b.isAiDiscovered ? 0 : -Infinity);
        return (bt as number) - (at as number);
      });
      setTimeout(() => setIsSorting(false), 150);
    }

    // De-duplicate final displayed tools by URL to match the count
    const uniqueMap = new Map();
    filtered.forEach(tool => {
        if (!uniqueMap.has(tool.url)) {
            uniqueMap.set(tool.url, tool);
        }
    });
    const uniqueFiltered = Array.from(uniqueMap.values());

    setDisplayedTools(uniqueFiltered);
  }, [selectedCategory, searchQuery, staticTools, discoveredTools]);

  // Removed auto-AI search effect to respect user's request for local-first search
  
  const handleAiSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsAiSearching(true);
    setAiSearchError(null);
    // Note: We do NOT reset category here, to allow searching within a category if desired,
    // or you can keep it if you prefer AI to search globally.
    // setSelectedCategory(ToolCategory.ALL); 

    try {
      const newTools = await findNewTools(searchQuery, currentLanguage);
      if (newTools.length > 0) {
        setDiscoveredTools(refreshed => {
            // Avoid duplicates by URL
            const existingUrls = new Set([...refreshed, ...staticTools].map(t => t.url));
            const uniqueNew = newTools.filter(t => !existingUrls.has(t.url));
            return [...uniqueNew, ...refreshed]; // Newest first
        });
      } else {
        // Only show error if NO local tools are found either
        if (displayedTools.length === 0) {
            setAiSearchError(t.noToolsDesc);
        }
      }
    } catch (err) {
      // Graceful degradation: If AI fails, we still have local results.
      // Only show error if user sees nothing.
      console.error("AI Search failed", err);
      if (displayedTools.length === 0) {
         setAiSearchError("AI search unavailable. Showing local matches only.");
      }
    } finally {
      setIsAiSearching(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-indigo-500/30">
      <Sidebar 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        currentLanguage={currentLanguage}
      />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Top Navigation (Logo Mobile + Language) */}
        <header className="absolute top-0 left-0 right-0 z-30 px-4 py-4 md:px-8 flex justify-between items-center pointer-events-none">
          <div className="pointer-events-auto md:hidden">
             <button onClick={() => setIsSidebarOpen(true)} className="text-slate-400 hover:text-white bg-slate-800/50 p-2 rounded-lg backdrop-blur-sm">
                <Menu size={24} />
              </button>
          </div>
          <div className="ml-auto pointer-events-auto">
              {/* Language Selector */}
              <div className="relative min-w-[120px]">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Globe size={16} className="text-slate-400" />
                </div>
                <select 
                  value={currentLanguage}
                  onChange={(e) => setCurrentLanguage(e.target.value as Language)}
                  className="w-full h-full bg-slate-800/50 backdrop-blur-md border border-slate-700/50 text-slate-200 text-sm rounded-xl py-2 pl-10 pr-4 appearance-none focus:outline-none focus:border-indigo-500 cursor-pointer hover:bg-slate-700/50 transition-colors"
                >
                  <option value="en">English</option>
                  <option value="zh">中文</option>
                  <option value="ja">日本語</option>
                  <option value="es">Español</option>
                  <option value="tk">Türkmen</option>
                  <option value="uz">Oʻzbek</option>
                  <option value="tg">Тоҷикӣ</option>
                  <option value="hy">Հայերեն</option>
                  <option value="ro">Română</option>
                </select>
              </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          
          {/* Hero Section */}
          <div className="relative pt-32 pb-16 px-4 md:px-8 text-center max-w-5xl mx-auto">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl -z-10" />
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-200">
                {t.title}
              </span>
            </h1>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-200 text-sm">
              <Sparkles size={16} className="text-indigo-300" />
              <span>{(TRANSLATIONS[currentLanguage]?.tagline) || 'NavAI helps you pick the right AI tools'}</span>
            </div>

            {/* Search Bar - Hero Style */}
            <form onSubmit={handleAiSearch} className="relative max-w-2xl mx-auto group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search size={20} className="text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 text-slate-100 text-lg rounded-2xl py-4 pl-12 pr-36 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-2xl shadow-indigo-500/5"
                />
                <div className="absolute inset-y-2 right-2 flex items-center">
                  <button 
                    type="submit" 
                    disabled={!searchQuery.trim() || isAiSearching}
                    className="h-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm px-6 rounded-xl flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/20"
                  >
                    {isAiSearching ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                    <span className="hidden sm:inline">{t.aiFind}</span>
                  </button>
                </div>
            </form>

            {/* Trending Tags */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-slate-400">
              {['ChatGPT', 'Midjourney', 'Video', 'Copywriting', 'Free'].map(tag => (
                <button 
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 md:px-8 pb-20">
            <div className="max-w-7xl mx-auto">
              
              {/* Section Title */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <span className="w-1 h-8 bg-indigo-500 rounded-full mr-2"></span>
                  {t.categories[selectedCategory]}
                  <span className="text-slate-500 text-base font-normal ml-2">
                    ({displayedTools.length})
                  </span>
                </h2>
                <div className="flex items-center gap-2">
                  <div className="hidden md:flex bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setSortMode('default')}
                      className={`px-3 py-2 text-sm ${sortMode==='default'?'bg-indigo-600 text-white':'text-slate-300 hover:text-white'}`}
                    >{t.sort?.default ?? 'Default'}</button>
                    <button
                      onClick={() => setSortMode('newest')}
                      className={`px-3 py-2 text-sm ${sortMode==='newest'?'bg-indigo-600 text-white':'text-slate-300 hover:text-white'}`}
                    >{t.sort?.newest ?? 'Newest'}</button>
                    <button
                      onClick={() => setSortMode('recent')}
                      className={`px-3 py-2 text-sm ${sortMode==='recent'?'bg-indigo-600 text-white':'text-slate-300 hover:text-white'}`}
                    >{t.sort?.recent ?? 'Recently added'}</button>
                  </div>
                  <div className="md:hidden">
                    <select
                      value={sortMode}
                      onChange={(e)=>setSortMode(e.target.value as any)}
                      className="bg-slate-800/50 border border-slate-700/50 text-slate-200 text-sm rounded-xl py-2 px-3"
                    >
                      <option value="default">{t.sort?.default ?? 'Default'}</option>
                      <option value="newest">{t.sort?.newest ?? 'Newest'}</option>
                      <option value="recent">{t.sort?.recent ?? 'Recently added'}</option>
                    </select>
                  </div>
                  {isSorting && <Loader2 size={18} className="animate-spin text-slate-400" />}
                </div>
              </div>

              {/* Error Banner */}
              {aiSearchError && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm animate-in fade-in slide-in-from-top-2">
                  <AlertCircle size={18} />
                  {aiSearchError}
                </div>
              )}

              {/* Discovery Stats (if active) */}
              {discoveredTools.length > 0 && searchQuery && !isAiSearching && (
                <div className="mb-6 flex items-center gap-2 text-sm text-slate-400 bg-indigo-500/10 border border-indigo-500/20 px-4 py-3 rounded-xl">
                  <Sparkles size={16} className="text-indigo-400" />
                  <span>Found {discoveredTools.length} new AI tools related to your search!</span>
                </div>
              )}

              {/* Grid */}
              {displayedTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {displayedTools.map((tool) => (
                    <ToolCard key={tool.url} tool={tool} currentLanguage={currentLanguage} searchQuery={searchQuery} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center bg-slate-900/30 rounded-3xl border border-slate-800/50">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <Search size={32} className="text-slate-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-300 mb-1">{t.noTools}</h3>
                  <p className="text-slate-500 max-w-sm">
                    {t.noToolsDesc} <br/>
                    {t.clickToSearch}
                  </p>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800/50 text-center text-slate-500 text-xs">
              <p>© {new Date().getFullYear()} {t.title}. {t.footer}</p>
            </footer>
          </div>
        </div>

        {/* Floating Chat Bot */}
        <ChatBot currentLanguage={currentLanguage} />
      </main>
    </div>
  );
};

export default App;
