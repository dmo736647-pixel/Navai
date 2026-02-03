import React, { useState, useEffect, useMemo } from 'react';
import { ToolCard } from '../components/ToolCard';
import { Tool, ToolCategory } from '../types';
import { INITIAL_TOOLS, TRANSLATIONS } from '../constants';
import { findNewTools } from '../services/geminiService';
import { Search, Sparkles, AlertCircle, Loader2, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';

export const Home: React.FC = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory>(() => {
    return (location.state as any)?.category || ToolCategory.ALL;
  });

  // Listen for navigation state changes (e.g. returning from Blog page)
  useEffect(() => {
    const state = location.state as { category?: ToolCategory };
    if (state?.category && state.category !== selectedCategory) {
      setSelectedCategory(state.category);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const [searchQuery, setSearchQuery] = useState('');
  const { currentLanguage } = useLanguage();
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

  const featuredTools = useMemo(() => 
    INITIAL_TOOLS.filter(t => t.featured), 
  []);

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
    
    if (sortMode !== 'default') {
      setIsSorting(true);
      if (sortMode === 'newest') {
        filtered.sort((a, b) => {
          const at = (a.releasedAt ?? a.createdAt ?? (a.isAiDiscovered ? 0 : -Infinity)) as number;
          const bt = (b.releasedAt ?? b.createdAt ?? (b.isAiDiscovered ? 0 : -Infinity)) as number;
          return bt - at;
        });
      } else if (sortMode === 'recent') {
        filtered.sort((a, b) => {
          const at = (a.createdAt ?? (a.isAiDiscovered ? 0 : -Infinity)) as number;
          const bt = (b.createdAt ?? (b.isAiDiscovered ? 0 : -Infinity)) as number;
          return bt - at;
        });
      }
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
  }, [selectedCategory, searchQuery, staticTools, discoveredTools, sortMode]);

  const handleAiSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsAiSearching(true);
    setAiSearchError(null);

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
      console.error("AI Search failed", err);
      if (displayedTools.length === 0) {
         setAiSearchError("AI search unavailable. Showing local matches only.");
      }
    } finally {
      setIsAiSearching(false);
    }
  };

  return (
    <Layout onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory}>
      <Helmet>
        <title>{t.title} - {TRANSLATIONS[currentLanguage]?.tagline}</title>
        <meta name="description" content="Discover the best AI tools for builders, creators, and professionals. Curated and categorized for your needs." />
      </Helmet>
      
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
          
          {/* Featured Tools */}
          {selectedCategory === ToolCategory.ALL && !searchQuery && featuredTools.length > 0 && (
            <div className="mb-12">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-6 text-yellow-400">
              <Star size={20} fill="currentColor" />
              {t.featuredTools}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {featuredTools.map((tool) => (
                  <ToolCard key={`featured-${tool.url}`} tool={tool} currentLanguage={currentLanguage} searchQuery={searchQuery} />
                ))}
              </div>
            </div>
          )}
          
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
      </div>
    </Layout>
  );
};
