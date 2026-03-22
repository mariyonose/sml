
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, ChevronDown, CalendarDays, X, Menu } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ページ遷移時にモバイルメニューを閉じる
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // メニュー開閉時にbodyスクロールを制御
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // メインナビゲーション
  const navItems = [
    { id: 'about', label_key: 'nav_about', path: '/about' },
    { id: 'for-clinics', label_key: 'nav_for_clinics', path: '/for-clinics' },
    { id: 'for-agents', label_key: 'nav_for_agents', path: '/for-agents' },
    { id: 'news', label_key: 'nav_news', path: '/news' },
  ];

  const currentLangName = LANGUAGES.find(l => l.code === lang)?.name || 'Japanese';

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 h-16 md:h-20">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 h-full flex items-center justify-between relative">
          <Link to="/" className="shrink-0 mr-4 md:mr-12 group">
            <img 
              src="https://lh3.googleusercontent.com/d/19mi6RRwCtWuL54J9rIPHujsm-IZmXkeW" 
              alt="SSF MEDICAL LINK" 
              className="h-9 md:h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* PC メニュー項目 */}
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

          {/* PC 右側ナビゲーション */}
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

          {/* モバイル右側：お問合せ + ハンバーガーボタン */}
          <div className="xl:hidden flex items-center gap-2">
            <Link 
              to="/contact"
              className="px-3 py-1.5 bg-brand-blue text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-full"
            >
              {t('nav_contact')}
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="メニュー"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* モバイルメニュー オーバーレイ */}
      {mobileMenuOpen && (
        <div 
          className="xl:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* モバイルメニュー ドロワー */}
      <div
        className={`xl:hidden fixed top-0 right-0 h-full w-[80vw] max-w-[320px] z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* ドロワーヘッダー */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100">
          <img 
            src="https://lh3.googleusercontent.com/d/19mi6RRwCtWuL54J9rIPHujsm-IZmXkeW" 
            alt="SSF MEDICAL LINK" 
            className="h-8 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ナビゲーションリンク */}
        <nav className="px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center px-4 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                pathname === item.path 
                  ? 'bg-brand-blue/10 text-brand-blue' 
                  : 'text-slate-700 hover:bg-slate-50 hover:text-brand-blue'
              }`}
            >
              {t(item.label_key)}
            </Link>
          ))}
        </nav>

        {/* 区切り線 */}
        <div className="mx-4 h-px bg-slate-100" />

        {/* 言語切替 */}
        <div className="px-4 py-4">
          <p className="px-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Language</p>
          <div className="grid grid-cols-2 gap-2">
            {LANGUAGES.map(l => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code as Language);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-[11px] font-bold transition-colors ${
                  lang === l.code 
                    ? 'bg-brand-blue text-white' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span>{l.code === 'ja' ? '🇯🇵' : l.code === 'en' ? '🇺🇸' : l.code === 'zh' ? '🇨🇳' : '🇻🇳'}</span>
                {l.name}
              </button>
            ))}
          </div>
        </div>

        {/* お問合せボタン */}
        <div className="px-4 pt-2">
          <Link 
            to="/contact"
            className="flex items-center justify-center gap-2 w-full py-4 bg-brand-blue text-white rounded-xl text-sm font-black uppercase tracking-[0.2em] hover:bg-slate-900 transition-all"
          >
            <CalendarDays className="w-4 h-4" />
            {t('nav_contact')}
          </Link>
        </div>
      </div>
    </>
  );
};
