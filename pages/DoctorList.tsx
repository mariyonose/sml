
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DOCTORS } from '../data';
import { Language } from '../types';

interface DoctorListProps {
  lang: Language;
}

export const DoctorList: React.FC<DoctorListProps> = ({ lang }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialFilter = queryParams.get('cat') || 'All';
  
  const [filter, setFilter] = useState<string>(initialFilter);
  
  // URLパラメータが変わった時にフィルタを更新
  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  const categories = ['All', 'Regenerative', 'Facial', 'Body', 'Reproductive', 'Life'];

  const filteredDoctors = filter === 'All' 
    ? DOCTORS 
    : DOCTORS.filter(d => d.category === filter);

  return (
    <div className="bg-white min-h-screen py-32 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[10px] font-black text-brand-blue tracking-[0.6em] uppercase mb-6 block">The Master Minds</span>
          <h1 className="text-5xl font-serif text-slate-900 mb-8 tracking-tight">認定医師一覧</h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed break-keep">
            日本が誇る各分野のスペシャリスト。Master Classの厳しい認定基準をクリアしたトップドクターのみを掲載しています。
            {filter !== 'All' && <span className="block mt-4 font-bold text-brand-blue">カテゴリー: {filter}</span>}
          </p>
        </div>

        {/* Minimal Filters */}
        <div className="flex flex-wrap justify-center gap-8 mb-24 border-b border-slate-100 pb-12">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[11px] font-bold uppercase tracking-widest transition-all relative py-2 ${
                filter === cat 
                ? 'text-brand-blue after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-brand-blue' 
                : 'text-slate-300 hover:text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Doctor Grid - Clean Portfolio Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {filteredDoctors.map(doc => (
            <Link to={`/doctor/${doc.id}`} key={doc.id} className="group flex flex-col items-center text-center">
              <div className="w-full aspect-[3/4] overflow-hidden mb-10 bg-slate-50">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  style={{ objectPosition: 'center 5%' }} /* バストアップ表示に調整 */
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500';
                  }}
                />
              </div>
              <span className="text-[9px] font-black text-brand-teal uppercase tracking-[0.4em] mb-4">{doc.category}</span>
              <h3 className="text-3xl font-serif text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">{doc.name}</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-6">{doc.title}</p>
              <div className="w-8 h-px bg-slate-200 group-hover:w-24 group-hover:bg-brand-blue transition-all duration-700 mx-auto"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
