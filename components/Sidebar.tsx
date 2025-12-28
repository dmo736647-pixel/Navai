import React from 'react';
import { ToolCategory, Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { 
  LayoutGrid, 
  Type, 
  Image as ImageIcon, 
  Video, 
  Music, 
  Code2, 
  Briefcase, 
  Zap,
  Menu
} from 'lucide-react';

interface SidebarProps {
  selectedCategory: ToolCategory;
  onSelectCategory: (category: ToolCategory) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  currentLanguage: Language;
}

const CATEGORY_ICONS: Record<ToolCategory, React.ReactNode> = {
  [ToolCategory.ALL]: <LayoutGrid size={20} />,
  [ToolCategory.TEXT]: <Type size={20} />,
  [ToolCategory.IMAGE]: <ImageIcon size={20} />,
  [ToolCategory.VIDEO]: <Video size={20} />,
  [ToolCategory.AUDIO]: <Music size={20} />,
  [ToolCategory.CODING]: <Code2 size={20} />,
  [ToolCategory.PRODUCTIVITY]: <Zap size={20} />,
  [ToolCategory.BUSINESS]: <Briefcase size={20} />,
};

export const Sidebar: React.FC<SidebarProps> = ({ 
  selectedCategory, 
  onSelectCategory, 
  isOpen, 
  setIsOpen,
  currentLanguage 
}) => {
  const t = TRANSLATIONS[currentLanguage];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-slate-900 border-r border-slate-800 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0
        `}
      >
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary-600 p-1.5 rounded-lg">
              <LayoutGrid className="text-white" size={24} />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {t.title}
            </h1>
          </div>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-400">
            <Menu size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-80px)]">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">
            {t.directory}
          </div>
          {Object.values(ToolCategory).map((category) => (
            <button
              key={category}
              onClick={() => {
                onSelectCategory(category);
                if (window.innerWidth < 768) setIsOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left
                ${selectedCategory === category 
                  ? 'bg-primary-600/10 text-primary-500 border border-primary-600/20' 
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'}
              `}
            >
              <span className={selectedCategory === category ? 'text-primary-500' : 'text-slate-400'}>
                {CATEGORY_ICONS[category]}
              </span>
              {t.categories[category]}
            </button>
          ))}
          
          <div className="mt-8 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <h3 className="text-sm font-semibold text-slate-200 mb-2">Need Help?</h3>
            <p className="text-xs text-slate-400 mb-3">
              Ask our AI assistant to find the perfect tool for your use case.
            </p>
          </div>
        </nav>
      </aside>
    </>
  );
};