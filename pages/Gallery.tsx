
import React from 'react';
import { CASES, DOCTORS } from '../data';
import { Language } from '../types';

interface GalleryProps {
  lang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 tracking-tight break-keep">症例一覧 (Master Gallery)</h1>
            <p className="text-slate-500 break-keep">
              Master Class認定医師による高難度手術・再生医療の症例をご紹介します。Before/Afterを通じて、高い技術力と審美性をご確認ください。
            </p>
          </div>
          <div className="flex gap-4">
            <select className="bg-white border p-2 text-sm">
              <option>部位で探す</option>
              <option>顔 (Facial)</option>
              <option>体 (Body)</option>
              <option>再生医療</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {CASES.map(c => {
            const doctor = DOCTORS.find(d => d.id === c.doctorId);
            return (
              <div key={c.id} className="bg-white shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                <div className="relative grid grid-cols-2 gap-[1px] bg-white">
                  <div className="relative">
                    <img src={c.beforeImage} alt="Before" className="w-full aspect-[4/5] object-cover" />
                    <span className="absolute top-2 left-2 bg-slate-900/80 text-white text-[10px] px-2 py-0.5 rounded-sm">BEFORE</span>
                  </div>
                  <div className="relative">
                    <img src={c.afterImage} alt="After" className="w-full aspect-[4/5] object-cover" />
                    <span className="absolute top-2 right-2 bg-slate-900/80 text-white text-[10px] px-2 py-0.5 rounded-sm">AFTER</span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">{c.category}</p>
                  <h3 className="text-xl font-bold mb-4">{c.treatment}</h3>
                  <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                    <img src={doctor?.image} className="w-10 h-10 rounded-full object-cover" alt={doctor?.name} />
                    <div>
                      <p className="text-xs font-bold">{doctor?.name}</p>
                      <p className="text-[10px] text-slate-400">{doctor?.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
