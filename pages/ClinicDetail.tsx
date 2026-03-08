
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CLINICS, DOCTORS, CASES } from '../data';
import { Language } from '../types';

interface ClinicDetailProps {
  lang: Language;
}

export const ClinicDetail: React.FC<ClinicDetailProps> = ({ lang }) => {
  const { id } = useParams<{ id: string }>();
  const clinic = CLINICS.find(c => c.id === id);
  
  if (!clinic) return <div className="p-20 text-center">Clinic not found</div>;

  const affiliatedDoctors = DOCTORS.filter(d => clinic.doctors.includes(d.id));
  const clinicCases = CASES.filter(c => affiliatedDoctors.some(d => d.id === c.doctorId));

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      {/* Clinic Hero - Massive Image with Minimal Text */}
      <section className="relative h-[70vh] flex flex-col justify-center overflow-hidden border-b border-slate-50">
        <div className="absolute inset-0 z-0">
          <img 
            src={clinic.image} 
            alt={clinic.name} 
            className="w-full h-full object-cover grayscale-[20%]" 
          />
          <div className="absolute inset-0 bg-white/20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
           <div className="max-w-2xl bg-white/90 backdrop-blur-xl p-16 md:p-24 shadow-2xl">
              <span className="text-brand-blue font-black tracking-[0.6em] uppercase text-[10px] mb-8 block">Partner Institution</span>
              <h1 className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tighter mb-10">{clinic.name}</h1>
              <div className="flex flex-wrap gap-4">
                {clinic.features.map(f => (
                  <span key={f} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-blue rounded-full"></span>
                    {f}
                  </span>
                ))}
              </div>
           </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-32">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-40">
            {/* About Section */}
            <section>
              <div className="flex items-end gap-6 mb-16">
                <h2 className="text-4xl font-serif text-slate-900 tracking-tight">Overview</h2>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] pb-1">概要</span>
              </div>
              <p className="text-2xl text-slate-600 leading-relaxed font-serif italic mb-20 break-keep">
                {clinic.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-4">
                    <span className="w-10 h-px bg-brand-blue"></span>
                    Medical Technology
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light break-keep">
                    SMLの厳格な基準をクリアした、世界水準の医療設備と最高峰の衛生管理体制を完備しています。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-4">
                    <span className="w-10 h-px bg-brand-teal"></span>
                    Omotenashi Support
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light break-keep">
                    海外からの患者様を温かくお迎えするためのプライベート空間と、多言語対応可能なスタッフを配置しています。
                  </p>
                </div>
              </div>
            </section>

            {/* Case Studies Gallery - Crucial requirement */}
            {clinicCases.length > 0 && (
              <section>
                <div className="flex items-end gap-6 mb-16">
                  <h2 className="text-4xl font-serif text-slate-900 tracking-tight">Clinical Results</h2>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] pb-1">症例実績</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {clinicCases.map(c => (
                    <div key={c.id} className="group cursor-pointer">
                      <div className="grid grid-cols-2 gap-px bg-slate-100 mb-8 overflow-hidden">
                        <div className="relative aspect-square">
                          <img src={c.beforeImage} alt="Before" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                          <span className="absolute bottom-4 left-4 text-[9px] font-black text-white uppercase tracking-widest px-3 py-1.5 bg-black/30 backdrop-blur-sm">Before</span>
                        </div>
                        <div className="relative aspect-square">
                          <img src={c.afterImage} alt="After" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                          <span className="absolute bottom-4 right-4 text-[9px] font-black text-white uppercase tracking-widest px-3 py-1.5 bg-brand-teal/60 backdrop-blur-sm">After</span>
                        </div>
                      </div>
                      <div className="px-2">
                        <h4 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">{c.treatment}</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">By {DOCTORS.find(d => d.id === c.doctorId)?.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Affiliated Master Doctors */}
            <section>
              <div className="flex items-end gap-6 mb-16">
                <h2 className="text-4xl font-serif text-slate-900 tracking-tight">Master Doctors</h2>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] pb-1">所属医師</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {affiliatedDoctors.map(doc => (
                  <Link 
                    key={doc.id} 
                    to={`/doctor/${doc.id}`} 
                    className="group flex gap-8 items-center border-b border-slate-100 pb-12"
                  >
                    <div className="w-32 aspect-square overflow-hidden bg-slate-50 shrink-0">
                      <img src={doc.image} alt={doc.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div>
                      <span className="text-[8px] font-black text-brand-teal uppercase tracking-widest mb-1 block">{doc.category}</span>
                      <h4 className="text-2xl font-serif text-slate-900 group-hover:text-brand-blue transition-colors">{doc.name}</h4>
                      <p className="text-[9px] text-slate-400 mt-2 font-bold uppercase tracking-[0.2em]">{doc.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-40 space-y-16">
              <div>
                <h3 className="text-xs font-black text-slate-300 tracking-[0.5em] uppercase mb-12 block">Location</h3>
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <span className="text-brand-blue font-serif italic text-xl w-12 shrink-0">ADR.</span>
                    <p className="text-sm text-slate-600 font-medium leading-loose pt-1">
                      {clinic.access}
                    </p>
                  </div>
                  {/* Minimal Map Placeholder */}
                  <div className="w-full aspect-[4/3] bg-slate-50 relative overflow-hidden group">
                     <div className="absolute inset-0 flex items-center justify-center text-slate-200 font-bold text-[10px] uppercase tracking-[0.5em]">
                       Map Projection Area
                     </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-12 text-white">
                <h4 className="text-2xl font-serif mb-6">Concierge</h4>
                <p className="text-[10px] text-slate-400 mb-12 leading-relaxed font-bold uppercase tracking-widest">
                  International Booking Desk
                </p>
                <Link 
                  to="/contact" 
                  className="block w-full text-center py-5 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
