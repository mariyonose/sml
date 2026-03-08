
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, ChevronDown, CalendarDays } from 'lucide-react';
import { UI_STRINGS, LANGUAGES } from '../constants';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const t = (key: string) => (UI_STRINGS[key] ? UI_STRINGS[key][lang] : key);
  const { pathname } = useLocation();
  const [showLangMenu, setShowLangMenu] = useState(false);

  // メインナビゲーション
  const navItems = [
    { id: 'about', label_key: 'nav_about', path: '/about' },
    { id: 'for-clinics', label_key: 'nav_for_clinics', path: '/for-clinics' },
    { id: 'for-agents', label_key: 'nav_for_agents', path: '/for-agents' },
    { id: 'news', label_key: 'nav_news', path: '/news' },
  ];

  const currentLangName = LANGUAGES.find(l => l.code === lang)?.name || 'Japanese';

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 h-20">
      <div className="max-w-screen-2xl mx-auto px-6 h-full flex items-center justify-between relative">
        <Link to="/" className="shrink-0 mr-12 group">
          <img 
            src="https://lh3.googleusercontent.com/d/19mi6RRwCtWuL54J9rIPHujsm-IZmXkeW" 
            alt="SSF MEDICAL LINK" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* メニュー項目 */}
        <nav className="hidden xl:flex items-center h-full flex-1 justify-start gap-12">
          {navItems.map((item) => (
            <div 
              key={item.id} 
              className="h-full flex items-center relative"
            >
              <Link 
                to={item.path}
                className={`flex items-center h-full text-[13px] font-black uppercase tracking-wider transition-all hover:text-brand-blue whitespace-nowrap ${
                  pathname === item.path ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-slate-500'
                }`}
              >
                {t(item.label_key)}
              </Link>
            </div>
          ))}
        </nav>

        {/* 右側のナビゲーション要素 */}
        <div className="hidden xl:flex items-center gap-6">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:border-brand-blue transition-all text-slate-600"
            >
              <span className="text-lg leading-none">
                {lang === 'ja' ? '🇯🇵' : lang === 'en' ? '🇺🇸' : lang === 'zh' ? '🇨🇳' : '🇻🇳'}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider">{currentLangName}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
            </button>

            {showLangMenu && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100 z-[70]">
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code as Language);
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-5 py-3 text-[11px] font-bold transition-colors hover:bg-slate-50 flex items-center gap-3 ${
                      lang === l.code ? 'text-brand-blue bg-brand-blue/5' : 'text-slate-600'
                    }`}
                  >
                    <span>{l.code === 'ja' ? '🇯🇵' : l.code === 'en' ? '🇺🇸' : l.code === 'zh' ? '🇨🇳' : '🇻🇳'}</span>
                    {l.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact Button */}
          <Link 
            to="/contact" 
            className="flex items-center gap-3 px-8 py-3 bg-brand-blue text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-lg shadow-brand-blue/20"
          >
            <CalendarDays className="w-4 h-4" />
            {t('nav_contact')}
          </Link>
        </div>

        {/* モバイル用メニューボタン */}
        <button className="xl:hidden p-2 text-slate-900 ml-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};
