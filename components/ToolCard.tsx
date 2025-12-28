import React, { useState } from 'react';
import { Tool, PricingModel, Language } from '../types';
import { ExternalLink, Tag, Sparkles, Zap } from 'lucide-react';
import { getFastToolSummary } from '../services/geminiService';
import { TRANSLATIONS } from '../constants';

interface ToolCardProps {
  tool: Tool;
  currentLanguage: Language;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, currentLanguage }) => {
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
      group relative flex flex-col h-full bg-slate-900 border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1
      ${tool.isAiDiscovered ? 'border-primary-500/40 shadow-[0_0_15px_rgba(99,102,241,0.15)]' : 'border-slate-800 hover:border-slate-700'}
    `}>
      {tool.isAiDiscovered && (
        <div className="absolute top-0 right-0 bg-primary-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg flex items-center gap-1 z-10">
          <Sparkles size={10} /> {t.aiFound}
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
             <div className="flex items-center gap-2 mb-1">
               <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary-400 transition-colors">
                 {tool.name}
               </h3>
             </div>
             <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{tool.category}</p>
          </div>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${pricingColor} whitespace-nowrap ml-2`}>
            {tool.pricing}
          </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {displayDescription}
        </p>

        {/* AI Quick Info Section */}
        {summary && (
          <div className="mb-4 p-3 bg-slate-800/50 rounded-lg text-xs text-slate-300 border border-slate-700/50 animate-in fade-in duration-300">
            <span className="font-semibold text-primary-400 block mb-1">⚡ {t.quickSummary}</span>
            {summary}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {tool.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="flex items-center gap-1 text-[10px] text-slate-500 bg-slate-800 px-2 py-1 rounded border border-slate-700/50">
              <Tag size={10} /> {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 bg-slate-800/30 border-t border-slate-800 flex items-center justify-between gap-2">
        <button 
          onClick={handleQuickInfo}
          disabled={loadingSummary}
          className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors disabled:opacity-50"
        >
          {loadingSummary ? <Zap size={14} className="animate-spin" /> : <Zap size={14} />}
          {summary ? t.loaded : t.quickInfo}
        </button>
        
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
        >
          {t.visitSite} <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};