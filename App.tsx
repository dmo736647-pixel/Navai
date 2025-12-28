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
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans">
      <Sidebar 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        currentLanguage={currentLanguage}
      />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Header / Search Bar */}
        <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-30 px-4 py-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button onClick={() => setIsSidebarOpen(true)} className="md:hidden text-slate-400 hover:text-white">
                <Menu size={24} />
              </button>
              <h2 className="text-xl font-semibold hidden md:block">
                {t.categories[selectedCategory]}
                <span className="text-slate-500 text-sm font-normal ml-3">
                  {displayedTools.length} tools
                </span>
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              {/* Search Form */}
              <form onSubmit={handleAiSearch} className="w-full md:w-[400px] relative group">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-slate-500 group-focus-within:text-primary-500 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-xl py-3 pl-10 pr-32 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-sm"
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <button 
                    type="submit" 
                    disabled={!searchQuery.trim() || isAiSearching}
                    className="bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-600 flex items-center gap-1.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAiSearching ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
                    {t.aiFind}
                  </button>
                </div>
              </form>

              {/* Language Selector */}
              <div className="relative min-w-[120px]">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Globe size={16} className="text-slate-400" />
                </div>
                <select 
                  value={currentLanguage}
                  onChange={(e) => setCurrentLanguage(e.target.value as Language)}
                  className="w-full h-full bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-xl py-3 pl-10 pr-4 appearance-none focus:outline-none focus:border-primary-500 cursor-pointer hover:bg-slate-750"
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

          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Error Banner */}
            {aiSearchError && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm animate-in fade-in slide-in-from-top-2">
                <AlertCircle size={18} />
                {aiSearchError}
              </div>
            )}

            {/* Discovery Stats (if active) */}
            {discoveredTools.length > 0 && searchQuery && !isAiSearching && (
              <div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
                <Sparkles size={14} className="text-primary-500" />
                <span>Including {discoveredTools.length} AI-discovered tools related to your searches.</span>
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
              <div className="flex flex-col items-center justify-center h-64 text-center">
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
          <footer className="max-w-7xl mx-auto mt-12 py-8 border-t border-slate-800 text-center text-slate-500 text-xs">
            <p>© {new Date().getFullYear()} {t.title}. {t.footer}</p>
          </footer>
        </div>

        {/* Floating Chat Bot */}
        <ChatBot currentLanguage={currentLanguage} />
      </main>
    </div>
  );
};

export default App;