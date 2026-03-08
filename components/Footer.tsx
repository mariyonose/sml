
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

export const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = (key: string) => UI_STRINGS[key] ? UI_STRINGS[key][lang] : key;

  return (
    <footer className="bg-brand-blue-tint border-t border-[#1b55a5]/10 text-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-10">
              <div className="flex items-center gap-3">
                <img 
                  src="https://lh3.googleusercontent.com/d/19mi6RRwCtWuL54J9rIPHujsm-IZmXkeW" 
                  alt="SSF MEDICAL LINK" 
                  className="h-14 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p className="text-slate-500 max-w-md text-sm leading-relaxed mb-10">
              日本の美容医療を最前線で支えるリーディングカンパニー。<br />SSF Medical Linkは独自の厳格な審査基準に基づき、最高峰のドクターと世界各国の患者様を繋ぐ正規のインバウンドプラットフォームです。
            </p>
            <div className="flex gap-3">
               {['#1b55a5', '#22a3d2', '#59d1a9'].map(color => (
                 <div key={color} className="w-8 h-1 rounded-full" style={{ backgroundColor: color }}></div>
               ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-black text-xs uppercase tracking-[0.3em] mb-10 text-[#1b55a5]">Sitemap</h3>
            <ul className="space-y-5 text-sm font-bold text-slate-600">
              <li><a href="#/" className="hover:text-brand-blue transition-colors">{t('nav_home')}</a></li>
              <li><a href="#/about" className="hover:text-brand-blue transition-colors">{t('nav_about')}</a></li>
              <li><a href="#/for-clinics" className="hover:text-brand-blue transition-colors">{t('nav_for_clinics')}</a></li>
              <li><a href="#/for-agents" className="hover:text-brand-blue transition-colors">{t('nav_for_agents')}</a></li>
              <li><a href="#/contact" className="hover:text-brand-blue transition-colors">{t('nav_contact')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-xs uppercase tracking-[0.3em] mb-10 text-[#1b55a5]">Global Base</h3>
            <ul className="space-y-5 text-sm text-slate-600">
              <li className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1b55a5]"></span>
                WeChat: SSF_Global
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22a3d2]"></span>
                WhatsApp: +81-3-5155-3909
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59d1a9]"></span>
                東京都新宿区新宿5-15-5ラウンドクロス新宿5丁目5階
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#1b55a5]/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-slate-400 tracking-[0.4em] font-bold">© 2026 SSF MEDICAL LINK. AUTHORIZED PLATFORM.</p>
          <div className="flex gap-10 text-[10px] text-slate-400 font-black uppercase tracking-widest">
            <a href="https://www.ssf-hd.co.jp" target="_blank" rel="noopener noreferrer" className="hover:text-[#1b55a5]">Company Profile</a>
            <a href="#" className="hover:text-[#1b55a5]">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
