
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface NewsProps {
  lang: Language;
}

export const News: React.FC<NewsProps> = ({ lang }) => {
  const newsItems = [
    {
      date: '2024.03.20',
      category: 'Press Release',
      title: 'SSF Medical Link、シンガポールでの国際カンファレンスに出展決定',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
      desc: '2024年5月に開催される国際医療カンファレンスへの出展が決定いたしました。日本の自由診療インフラの可能性を世界に発信します。'
    },
    {
      date: '2024.03.15',
      category: 'Network',
      title: '新たに3名の「Master Class」認定医師がネットワークに加わりました',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      desc: '形成外科、再生医療、不妊治療の各分野から、日本を代表する名医が新たにSMLのパートナーとして参画いたしました。'
    },
    {
      date: '2024.03.01',
      category: 'Service',
      title: '中国・上海に新たな提携エージェントデスクを開設いたしました',
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800',
      desc: '上海エリアでの需要拡大に伴い、現地エージェント様との連携を強化。よりスムーズな受診サポート体制を構築します。'
    }
  ];

  return (
    <div className="bg-white min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <p className="text-brand-blue font-black tracking-[0.4em] uppercase text-[10px] mb-6">Latest Updates</p>
          <h1 className="text-5xl font-serif text-slate-900 tracking-tight">NEWS</h1>
        </div>

        <div className="space-y-24">
          {newsItems.map((news, i) => (
            <div key={i} className="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 aspect-[16/10] overflow-hidden rounded-3xl bg-slate-100">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="md:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold text-slate-400 font-mono">{news.date}</span>
                  <span className="px-3 py-1 bg-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-widest rounded-sm">
                    {news.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-brand-blue transition-colors break-keep leading-tight">
                  {news.title}
                </h2>
                <p className="text-lg text-slate-500 font-light leading-relaxed mb-8 break-keep">
                  {news.desc}
                </p>
                <Link to="#" className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-brand-blue border-b border-brand-blue/20 pb-2 hover:border-brand-blue transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
