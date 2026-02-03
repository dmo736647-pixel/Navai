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
  Menu,
  Send,
  BookOpen
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
  const location = useLocation();
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
          fixed top-0 left-0 z-50 h-full w-64 bg-[#0B0F17] border-r border-slate-800/50 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0
        `}
      >
        <div className="p-6 border-b border-slate-800/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-600/20">
              <LayoutGrid className="text-white" size={20} />
            </div>
            <h1 className="text-lg font-bold text-slate-100 tracking-tight">
              {t.title}
            </h1>
          </div>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-400">
            <Menu size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-3 mt-2">
            {t.directory}
          </div>
          {Object.values(ToolCategory).map((category) => (
            location.pathname === '/' ? (
              <button
                key={category}
                onClick={() => {
                  onSelectCategory(category);
                  if (window.innerWidth < 768) setIsOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all text-left
                  ${selectedCategory === category 
                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border border-transparent'}
                `}
              >
                <span className={selectedCategory === category ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'}>
                  {CATEGORY_ICONS[category]}
                </span>
                {t.categories[category]}
              </button>
            ) : (
              <Link
                key={category}
                to="/"
                state={{ category }}
                onClick={() => {
                  onSelectCategory(category);
                  if (window.innerWidth < 768) setIsOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all text-left
                  ${selectedCategory === category 
                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border border-transparent'}
                `}
              >
                <span className={selectedCategory === category ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'}>
                  {CATEGORY_ICONS[category]}
                </span>
                {t.categories[category]}
              </Link>
            )
          ))}

          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-3 mt-8">
            Community
          </div>
          <Link
            to="/blog"
            className={`
              w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all mb-1
              ${location.pathname === '/blog' 
                ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border border-transparent'}
            `}
            onClick={() => {
              if (window.innerWidth < 768) setIsOpen(false);
            }}
          >
            <BookOpen size={20} className={location.pathname === '/blog' ? 'text-indigo-400' : 'text-slate-500'} />
            Blog
          </Link>
          <Link
            to="/submit"
            className={`
              w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all
              ${location.pathname === '/submit' 
                ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border border-transparent'}
            `}
            onClick={() => {
              if (window.innerWidth < 768) setIsOpen(false);
            }}
          >
            <Send size={20} className={location.pathname === '/submit' ? 'text-indigo-400' : 'text-slate-500'} />
            Submit Tool
          </Link>
        </nav>
      </aside>
    </>
  );
};
