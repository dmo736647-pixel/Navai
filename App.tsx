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
  
  // Tools state
  const [staticTools] = useState<Tool[]>(INITIAL_TOOLS);
  const [discoveredTools, setDiscoveredTools] = useState<Tool[]>([]);
  const [displayedTools, setDisplayedTools] = useState<Tool[]>(INITIAL_TOOLS);
  
  // Search State
  const [isAiSearching, setIsAiSearching] = useState(false);
  const [aiSearchError, setAiSearchError] = useState<string | null>(null);

  // Translations
  const t = TRANSLATIONS[currentLanguage];

  // Filter tools based on category and local search query
  useEffect(() => {
    let filtered = [...staticTools, ...discoveredTools];

    // Filter by category
    if (selectedCategory !== ToolCategory.ALL) {
      filtered = filtered.filter(tool => 
        // Allow fuzzy match for AI discovered categories or exact match for static enum
        tool.category === selectedCategory || 
        (tool.isAiDiscovered && tool.category.toLowerCase().includes(selectedCategory.split(' ')[0].toLowerCase()))
      );
    }

    // Filter by text search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(q) || 
        tool.description.toLowerCase().includes(q) ||
        tool.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    setDisplayedTools(filtered);
  }, [selectedCategory, searchQuery, staticTools, discoveredTools]);


  const handleAiSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsAiSearching(true);
    setAiSearchError(null);
    setSelectedCategory(ToolCategory.ALL); // Reset category to show all results

    try {
      const newTools = await findNewTools(searchQuery, currentLanguage);
      if (newTools.length > 0) {
        // Prepend new tools so they show up top
        setDiscoveredTools(prev => {
            // Avoid duplicates by URL
            const existingUrls = new Set([...prev, ...staticTools].map(t => t.url));
            const uniqueNew = newTools.filter(t => !existingUrls.has(t.url));
            return [...uniqueNew, ...prev];
        });
      } else {
        setAiSearchError(t.noToolsDesc);
      }
    } catch (err) {
      setAiSearchError("Failed to perform AI search. Check your API Key or connection.");
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
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              {t.searchPlaceholder}
            </p>

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
                    <ToolCard key={tool.id} tool={tool} currentLanguage={currentLanguage} />
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
