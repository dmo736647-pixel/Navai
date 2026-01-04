import React, { useState } from 'react';
import { Tool, PricingModel, Language } from '../types';
import { ExternalLink, Tag, Sparkles, Zap } from 'lucide-react';
import { getFastToolSummary } from '../services/geminiService';
import { TRANSLATIONS } from '../constants';

interface ToolCardProps {
  tool: Tool;
  currentLanguage: Language;
  searchQuery?: string;
}

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const highlightText = (text: string, query?: string) => {
  if (!query || !query.trim()) return text;
  const pattern = new RegExp(escapeRegExp(query), 'gi');
  const parts = text.split(pattern);
  const matches = text.match(pattern);
  if (!matches) return text;
  const result: React.ReactNode[] = [];
  for (let i = 0; i < parts.length; i++) {
    result.push(parts[i]);
    if (i < matches.length) {
      result.push(
        <span key={`hl-${i}`} className="bg-yellow-400/20 text-yellow-300 font-semibold px-0.5 rounded transition-all">
          {matches[i]}
        </span>
      );
    }
  }
  return result;
};

export const ToolCard: React.FC<ToolCardProps> = ({ tool, currentLanguage, searchQuery }) => {
  const [summary, setSummary] = useState<string | null>(null);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const t = TRANSLATIONS[currentLanguage].toolCard;

  const handleQuickInfo = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (summary) return; // Already loaded

    setLoadingSummary(true);
    try {
      const text = await getFastToolSummary(tool.name, currentLanguage);
      setSummary(text);
    } catch (error) {
      setSummary("Failed to load summary.");
    } finally {
      setLoadingSummary(false);
    }
  };

  const pricingColor = {
    [PricingModel.FREE]: 'bg-green-500/10 text-green-400 border-green-500/20',
    [PricingModel.FREEMIUM]: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    [PricingModel.PAID]: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    [PricingModel.TRIAL]: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  }[tool.pricing as string] || 'bg-slate-700 text-slate-300';

  // Determine the description to display
  // 1. Try to get the localized description from the 'descriptions' map
  // 2. Fallback to the default 'description' field (used for AI discovered tools or missing translations)
  const displayDescription = tool.descriptions?.[currentLanguage] || tool.description;

  return (
    <div className={`
      group relative flex flex-col h-full bg-[#151B2B] border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1
      ${tool.isAiDiscovered ? 'border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.1)]' : 'border-white/5 hover:border-indigo-500/30'}
    `}>
      {tool.isAiDiscovered && (
        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1 z-10 shadow-lg">
          <Sparkles size={10} /> {t.aiFound}
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 pr-2">
             <div className="flex items-center gap-2 mb-2">
               <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-1">
                 {highlightText(tool.name, searchQuery)}
               </h3>
             </div>
             <p className="text-xs text-indigo-400/80 font-semibold uppercase tracking-wider">
               {tool.isAiDiscovered ? tool.category : TRANSLATIONS[currentLanguage].categories[tool.category as any]}
             </p>
          </div>
          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border uppercase tracking-wide ${pricingColor} whitespace-nowrap ml-2`}>
            {tool.pricing}
          </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {highlightText(displayDescription, searchQuery)}
        </p>

        {/* AI Quick Info Section */}
        {summary && (
          <div className="mb-4 p-3 bg-indigo-500/10 rounded-xl text-xs text-slate-300 border border-indigo-500/20 animate-in fade-in duration-300">
            <span className="font-semibold text-indigo-400 block mb-1 flex items-center gap-1"><Zap size={12}/> {t.quickSummary}</span>
            {summary}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {tool.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="flex items-center gap-1 text-[10px] font-medium text-slate-500 bg-slate-800/50 px-2.5 py-1 rounded-full border border-slate-700/30">
              <Tag size={10} /> <span>{highlightText(tag, searchQuery)}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 py-4 bg-[#0B0F17]/30 border-t border-white/5 flex items-center justify-between gap-2 group-hover:bg-[#0B0F17]/50 transition-colors">
        <button 
          onClick={handleQuickInfo}
          disabled={loadingSummary}
          className="text-xs font-medium text-slate-500 hover:text-indigo-400 flex items-center gap-1.5 transition-colors disabled:opacity-50"
        >
          {loadingSummary ? <Zap size={14} className="animate-spin" /> : <Zap size={14} />}
          {summary ? t.loaded : t.quickInfo}
        </button>
        
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-white bg-slate-800 hover:bg-indigo-600 px-3 py-1.5 rounded-lg transition-all"
        >
          {t.visitSite} <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
};
