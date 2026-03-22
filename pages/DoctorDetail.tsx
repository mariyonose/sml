
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DOCTORS, CLINICS, CASES } from '../data';
import { Language } from '../types';

interface DoctorDetailProps {
  lang: Language;
}

export const DoctorDetail: React.FC<DoctorDetailProps> = ({ lang }) => {
  const { id } = useParams<{ id: string }>();
  const doctor = DOCTORS.find(d => d.id === id);
  
  if (!doctor) return <div className="p-20 text-center">Doctor not found</div>;

  const clinic = CLINICS.find(c => c.id === doctor.clinicId);
  const doctorCases = CASES.filter(c => c.doctorId === doctor.id);

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      {/* Hero Header - Minimal & Elegant */}
      <div className="pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center md:items-start">
            <div className="w-full md:w-[450px] aspect-[3/4] bg-slate-100 shrink-0 overflow-hidden shadow-2xl">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover" 
                style={{ objectPosition: 'center 5%' }} /* バストアップ表示に調整 */
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500';
                }}
              />
            </div>
            <div className="flex-1 pt-10">
              <span className="text-brand-teal font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">
                {doctor.category} Specialist
              </span>
              <h1 className="font-serif text-slate-900 mb-6 tracking-tight leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}>{doctor.name}</h1>
              <p className="text-slate-300 text-3xl font-serif italic mb-10 tracking-wide">{doctor.nameEn}</p>
              <h2 className="text-2xl font-bold text-brand-blue mb-12 tracking-tight">{doctor.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doctor.qualifications.map(q => (
                  <div key={q} className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest py-3 border-b border-slate-50">
                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span>
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-32">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-40">
            {/* History Section */}
            <section>
              <div className="flex items-end gap-6 mb-16">
                <h3 className="text-4xl font-serif text-slate-900 tracking-tight">Biography</h3>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] pb-1">経歴</span>
              </div>
              <div className="space-y-10">
                {doctor.history.map((h, i) => (
                  <div key={i} className="flex gap-12 group border-b border-slate-50 pb-8">
                    <span className="text-brand-blue font-serif italic text-2xl shrink-0 w-24">
                      {h.split(' ')[0]}
                    </span>
                    <span className="text-slate-600 font-medium text-lg leading-relaxed pt-1">
                      {h.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Specialties Section */}
            <section>
              <div className="flex items-end gap-6 mb-16">
                <h3 className="text-4xl font-serif text-slate-900 tracking-tight">Specialties</h3>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] pb-1">得意分野</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {doctor.specialties.map(s => (
                  <div key={s} className="treatment-card py-6 text-xl font-bold text-slate-800">
                    {s}
                  </div>
                ))}
              </div>
            </section>

            {/* Cases Section - Crucial requirement */}
            {doctorCases.length > 0 && (
              <section>
                <div className="flex items-end gap-6 mb-16">
                  <h3 className="text-4xl font-serif text-slate-900 tracking-tight">Master Gallery</h3>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] pb-1">症例実績</span>
                </div>
                <div className="space-y-24">
                  {doctorCases.map(c => (
                    <div key={c.id} className="group">
                      <div className="grid grid-cols-2 gap-px bg-slate-100 mb-10">
                        <div className="relative overflow-hidden aspect-square">
                           <img src={c.beforeImage} alt="Before" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                           <span className="absolute bottom-6 left-6 text-[10px] font-black text-white uppercase tracking-[0.5em] px-4 py-2 bg-black/40 backdrop-blur-md">Before</span>
                        </div>
                        <div className="relative overflow-hidden aspect-square">
                           <img src={c.afterImage} alt="After" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                           <span className="absolute bottom-6 right-6 text-[10px] font-black text-white uppercase tracking-[0.5em] px-4 py-2 bg-brand-teal/80 backdrop-blur-md">After</span>
                        </div>
                      </div>
                      <div className="max-w-xl">
                        <h4 className="text-2xl font-serif text-slate-900 mb-4 break-keep">{c.treatment}</h4>
                        <p className="text-slate-500 font-light leading-relaxed mb-6 break-keep">{c.description}</p>
                        <p className="text-[9px] text-slate-300 font-bold uppercase tracking-widest flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                          Risk: {c.risk}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar - Reference inspired sticky layout */}
          <div className="lg:col-span-1">
            <div className="sticky top-40 space-y-16">
              {clinic && (
                <div className="border-t-4 border-brand-blue pt-12">
                  <span className="text-[10px] uppercase font-black tracking-[0.5em] text-slate-300 mb-10 block">Partner Clinic</span>
                  <div className="image-reveal aspect-video mb-10 bg-slate-100">
                    <img src={clinic.image} alt={clinic.name} className="w-full h-full object-cover" />
                  </div>
                  <h5 className="text-3xl font-serif mb-6 text-slate-900">{clinic.name}</h5>
                  <p className="text-slate-400 text-sm leading-relaxed mb-10 font-light">{clinic.description}</p>
                  <Link to={`/clinic/${clinic.id}`} className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue border-b border-brand-blue/20 pb-2 hover:border-brand-blue transition-all">
                    Clinic Profile →
                  </Link>
                </div>
              )}
              
              <div className="bg-slate-900 p-12 text-white">
                <h4 className="text-2xl font-serif mb-6">Counseling</h4>
                <p className="text-xs text-slate-400 mb-10 leading-relaxed font-bold uppercase tracking-widest">
                  Master Class Exclusive Concierge
                </p>
                <Link to="/contact" className="block w-full text-center py-5 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                  Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
