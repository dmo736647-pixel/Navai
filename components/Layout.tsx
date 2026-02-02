import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Menu, Globe } from 'lucide-react';
import { ToolCategory } from '../types';
import { Link } from 'react-router-dom';
import { TRANSLATIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
  selectedCategory?: ToolCategory;
  onSelectCategory?: (category: ToolCategory) => void;
  hideSidebar?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  selectedCategory = ToolCategory.ALL,
  onSelectCategory,
  hideSidebar = false
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();
  const t = TRANSLATIONS[currentLanguage];

  return (
    <div className="flex h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-indigo-500/30">
      {!hideSidebar && (
        <Sidebar 
          key={currentLanguage}
          selectedCategory={selectedCategory} 
          onSelectCategory={onSelectCategory || (() => {})}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          currentLanguage={currentLanguage}
        />
      )}

      <main className={`flex-1 flex flex-col min-w-0 overflow-hidden relative ${hideSidebar ? '' : ''}`}>
        {/* Top Navigation (Logo Mobile + Language) */}
        <header className="absolute top-0 left-0 right-0 z-30 px-4 py-4 md:px-8 flex justify-between items-center pointer-events-none">
          {!hideSidebar && (
            <div className="pointer-events-auto md:hidden">
              <button onClick={() => setIsSidebarOpen(true)} className="text-slate-400 hover:text-white bg-slate-800/50 p-2 rounded-lg backdrop-blur-sm">
                  <Menu size={24} />
                </button>
            </div>
          )}
          
          {/* Spacer if no sidebar button */}
          {hideSidebar && <div></div>}

          <div className="ml-auto pointer-events-auto">
              {/* Language Selector */}
              <div className="relative min-w-[120px]">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Globe size={16} className="text-slate-400" />
                </div>
                <select 
                  value={currentLanguage}
                  onChange={(e) => setLanguage(e.target.value as any)}
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
          {children}

          {/* Footer */}
          <footer className="max-w-7xl mx-auto mt-20 pt-8 pb-8 border-t border-slate-800/50 text-center text-slate-500 text-xs">
            <p>© {new Date().getFullYear()} {t?.title || 'NavAI'}. {t?.footer || 'All rights reserved.'}</p>
            <div className="mt-4 flex justify-center gap-4">
              <Link to="/about" className="hover:text-slate-300 transition-colors">About Us</Link>
              <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};
