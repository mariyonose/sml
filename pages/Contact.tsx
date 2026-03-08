
import React, { useState } from 'react';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [target, setTarget] = useState<'agent' | 'patient' | 'physician'>('agent');

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight break-keep">お問い合わせ</h1>
          <p className="text-slate-500 break-keep">お気軽にご相談ください。専属コンシェルジュが多言語で対応いたします。</p>
        </div>

        <div className="flex justify-center gap-2 mb-12 p-1 bg-slate-100 rounded-lg">
          {(['agent', 'patient', 'physician'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTarget(t)}
              className={`flex-1 py-3 text-sm font-bold rounded-md transition-all ${
                target === t ? 'bg-white text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {t === 'agent' ? 'エージェント様' : t === 'patient' ? '患者様' : '医師・クリニック様'}
            </button>
          ))}
        </div>

        <form className="space-y-8 bg-white p-10 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">お名前 / Name</label>
              <input type="text" className="w-full bg-slate-50 border-0 p-4 rounded-sm focus:ring-2 focus:ring-slate-900 outline-none" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">メールアドレス / Email</label>
              <input type="email" className="w-full bg-slate-50 border-0 p-4 rounded-sm focus:ring-2 focus:ring-slate-900 outline-none" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">国・地域 / Country</label>
            <input type="text" className="w-full bg-slate-50 border-0 p-4 rounded-sm focus:ring-2 focus:ring-slate-900 outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">お問い合わせ内容 / Inquiry</label>
            <textarea rows={6} className="w-full bg-slate-50 border-0 p-4 rounded-sm focus:ring-2 focus:ring-slate-900 outline-none resize-none" required></textarea>
          </div>

          <button type="submit" className="w-full bg-slate-900 text-white font-bold py-6 hover:bg-slate-800 transition-all text-lg tracking-widest uppercase">
            Send Message
          </button>

          <div className="flex justify-center gap-8 pt-8 border-t">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">WeChat ID</p>
              <p className="font-bold text-slate-900">SSF_Global_Medical</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Response Time</p>
              <p className="font-bold text-slate-900">within 24 hours</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
