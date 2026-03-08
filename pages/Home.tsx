
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Globe, Users, ArrowRight, 
  Activity, Dna, Baby, Smile, HeartPulse, Stethoscope 
} from 'lucide-react';
import { Language, Doctor } from '../types';
import { UI_STRINGS } from '../constants';
import { DOCTORS, CLINICS } from '../data';

interface HomeProps { lang: Language; }

export const Home: React.FC<HomeProps> = ({ lang }) => {
  const t = (key: string) => UI_STRINGS[key][lang];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(() => {
    // 山本先生を先頭に固定し、残りをシャッフル
    const firstDoc = DOCTORS.find(d => d.id === 'yamamoto');
    const otherDocs = DOCTORS.filter(d => d.id !== 'yamamoto').sort(() => Math.random() - 0.5);
    
    const sortedDocs = firstDoc ? [firstDoc, ...otherDocs] : otherDocs;
    
    return [
      { 
        id: 'brand-hero', 
        isBrand: true, 
        image: '', 
        name: 'SSF Medical Link', 
        title: 'Strategic Hub in Japan' 
      },
      ...sortedDocs.map(doc => ({ ...doc, isBrand: false }))
    ];
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [slides]);

  const getClinicName = (clinicId: string) => {
    return CLINICS.find(c => c.id === clinicId)?.name || '';
  };

  return (
    <div className="bg-white">
      {/* Dynamic Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center overflow-hidden bg-white">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide.isBrand ? (
                /* 1枚目：精密な日本地図（ユーザー指定画像） */
                <div className="relative w-full h-full overflow-hidden bg-[#001122]">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1AjYKPDgg19bcIUX-dntO1qsTwxMzGPTX" 
                    alt="Japan Map Strategic Hub" 
                    className="w-full h-full object-cover opacity-100 animate-ken-burns"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  {/* デジタルグリッド（地平線へ広がるパース） */}
                  <div className="absolute inset-0 opacity-[0.15]" style={{ 
                    backgroundImage: 'linear-gradient(rgba(0,180,255,0.3) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(0,180,255,0.3) 1.5px, transparent 1.5px)',
                    backgroundSize: '80px 80px',
                    transform: 'perspective(600px) rotateX(55deg) translateY(-25%) scale(2.5)'
                  }}></div>

                  {/* 放射状の光線 (Precision Network Rays) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-[400%] h-[400%] opacity-30 animate-[spin_180s_linear_infinite]" style={{
                      background: 'conic-gradient(from 210deg at 61% 39%, transparent 0deg, rgba(0,255,255,0.4) 0.5deg, transparent 1.5deg, transparent 30deg, rgba(255,255,255,0.2) 32deg, transparent 35deg)'
                    }}></div>
                  </div>

                  {/* User specified map image is now the primary background */}
                </div>
              ) : (
                /* 2枚目以降：認定医師のポートレート（顔が確実に見える配置） */
                <div className="absolute inset-0 w-full h-full bg-white">
                  <img 
                    src={slide.image} 
                    className="w-full h-full object-cover grayscale-[10%] animate-ken-burns" 
                    style={{ 
                      objectPosition: '80% 20%', /* 顔が確実に見えるように位置を調整 */
                      transformOrigin: '80% 20%' 
                    }} 
                    alt={slide.name}
                  />
                </div>
              )}
              
              {/* Overlay Layers */}
              {slide.isBrand ? (
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-transparent"></div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent hidden md:block"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:hidden"></div>
            </div>
          ))}
        </div>
        
        {/* Hero Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 md:pt-0">
          <div className="flex flex-col gap-12">
            <div className="max-w-4xl">
              <div className="overflow-hidden mb-8">
                <span className={`inline-block font-black tracking-[0.6em] uppercase text-[10px] animate-in slide-in-from-bottom duration-1000 ${slides[currentSlide].isBrand ? 'text-cyan-400' : 'text-brand-blue'}`}>
                  {slides[currentSlide].isBrand ? 'Authorized Medical Portal' : 'Certified Specialist Network'}
                </span>
              </div>
              
              <div className="mb-12">
                <h1 className={`text-4xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.15] tracking-tight animate-in slide-in-from-bottom duration-1000 delay-300 ${slides[currentSlide].isBrand ? 'text-white' : 'text-slate-900'}`}>
                  {t('hero_copy').split('\n').map((line, i) => (
                    <span key={i} className="block md:whitespace-nowrap py-1 break-keep">
                      {line}
                    </span>
                  ))}
                </h1>
              </div>

              <div className="overflow-hidden mb-16">
                <p className={`text-lg md:text-2xl max-w-3xl font-light leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-500 ${slides[currentSlide].isBrand ? 'text-blue-100/90' : 'text-slate-600'}`}>
                  {t('hero_subtitle')}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mt-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
              <div className="flex flex-wrap gap-6">
                <Link to="/for-clinics" className="group relative px-10 py-5 bg-brand-blue overflow-hidden shadow-2xl shadow-brand-blue/30 transition-transform hover:-translate-y-1">
                  <span className="relative z-10 text-white font-bold text-[10px] uppercase tracking-[0.4em]">
                    {t('nav_for_clinics')}
                  </span>
                  <div className="absolute inset-0 bg-slate-900 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
                </Link>
                <Link to="/for-agents" className={`px-10 py-5 border font-bold text-[10px] uppercase tracking-[0.4em] transition-all duration-500 backdrop-blur-sm shadow-sm hover:-translate-y-1 ${slides[currentSlide].isBrand ? 'bg-brand-teal border-transparent text-white hover:bg-brand-teal' : 'bg-brand-teal border-transparent text-white hover:bg-slate-900'}`}>
                  {t('nav_for_agents')}
                </Link>
              </div>

              {/* Floating Profile Info (Aligned with buttons) */}
              <div className="hidden md:block">
                <div className={`flex items-center gap-6 border-r-2 pr-8 py-2 text-right ${slides[currentSlide].isBrand ? 'border-cyan-400' : 'border-brand-blue'}`}>
                  <div>
                    <p className={`text-[9px] font-black uppercase tracking-widest mb-1 ${slides[currentSlide].isBrand ? 'text-cyan-400' : 'text-brand-blue'}`}>
                      {slides[currentSlide].isBrand ? 'Japan Pinnacle Bridge' : 'Verified Master Class Doctor'}
                    </p>
                    <p className={`text-2xl font-serif leading-none ${slides[currentSlide].isBrand ? 'text-white' : 'text-slate-900'}`}>
                      {slides[currentSlide].name}
                    </p>
                    <p className="text-[9px] font-sans text-slate-400 tracking-[0.2em] uppercase mt-2 font-bold">
                      {slides[currentSlide].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slider Indicator */}
        <div className="absolute bottom-12 right-6 z-20 flex flex-col gap-2 items-center">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className="group p-1">
              <div className={`h-4 w-[2px] transition-all duration-500 ${i === currentSlide ? (slides[currentSlide].isBrand ? 'bg-cyan-400 h-10' : 'bg-brand-blue h-10') : 'bg-slate-300 group-hover:bg-slate-500'}`}></div>
            </button>
          ))}
        </div>
      </section>

      {/* SML Mission Section (Diagram) */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black text-brand-blue tracking-[0.5em] uppercase mb-4">{t('nav_about')}</h2>
            <p className="text-3xl md:text-4xl font-serif text-slate-900 max-w-4xl mx-auto leading-relaxed break-keep">
              SSF Medical Linkは、最高峰の医療技術と<br className="hidden md:block" />
              世界中のニーズを繋ぐ「信頼の架け橋」です。
            </p>
          </div>
          
          {/* SML Diagram (Slide 4 implementation) */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
              {/* Left: Clinics */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 text-center relative"
              >
                <div className="w-20 h-20 bg-brand-blue/5 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Stethoscope className="w-10 h-10 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Master Class Clinics</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  日本国内の最高峰の技術を持つ<br />厳選された医療機関
                </p>
                {/* Connection Line to Center */}
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan"></div>
              </motion.div>

              {/* Center: SML (The Link) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-brand-gradient p-12 rounded-full shadow-2xl text-center text-white aspect-square flex flex-col items-center justify-center relative z-20 border-8 border-white"
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/19mi6RRwCtWuL54J9rIPHujsm-IZmXkeW" 
                  alt="SML" 
                  className="h-12 w-auto brightness-0 invert mb-4 object-contain" 
                  referrerPolicy="no-referrer"
                />
                <p className="text-[10px] font-black uppercase tracking-[0.3em]">The Strategic Link</p>
              </motion.div>

              {/* Right: Agents / Patients */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 text-center relative"
              >
                <div className="w-20 h-20 bg-brand-teal/5 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Globe className="w-10 h-10 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Global Network</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  世界各国のエージェント及び<br />高度な医療を求める患者様
                </p>
                {/* Connection Line from Center */}
                <div className="hidden md:block absolute top-1/2 -left-6 w-12 h-[2px] bg-gradient-to-r from-brand-cyan to-brand-teal"></div>
              </motion.div>
            </div>

            {/* Background Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-5">
              <div className="absolute inset-0 border-[40px] border-brand-blue rounded-full"></div>
              <div className="absolute inset-12 border-[20px] border-brand-teal rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <Link 
              to="/about" 
              className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-brand-blue hover:text-slate-900 transition-colors"
            >
              Learn More About SML <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* JAPAN PREMIUM DOCTOR GUIDE Section */}
      <section className="relative py-32 overflow-hidden bg-white">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Centered Branding */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <h3 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tight leading-none mb-3 font-extralight">
                JAPAN PREMIUM
              </h3>
              <p className="text-[10px] md:text-xs font-sans text-brand-blue tracking-[0.8em] uppercase font-bold">
                DOCTOR GUIDE
              </p>
            </div>
            <p className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto break-keep font-light mb-10">
              日本国内の厳選されたクリニックと名医を検索できる、エグゼクティブのためのドクター検索ガイド。
            </p>
            <Link 
              to="/doctors"
              className="inline-flex items-center gap-4 px-10 py-5 bg-brand-blue text-white font-black text-[10px] uppercase tracking-[0.3em] hover:bg-slate-900 transition-colors shadow-lg shadow-brand-blue/20"
            >
              Open Doctor Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Compact 4 Doctors Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {DOCTORS.slice(0, 4).map((doc, i) => (
              <Link key={i} to={`/doctor/${doc.id}`} className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 shadow-xl border border-slate-200">
                <img 
                  src={doc.image} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  alt={doc.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[7px] font-black text-brand-teal uppercase tracking-widest mb-1">{doc.title}</p>
                  <p className="text-xs font-bold text-white">{doc.name}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Categories at the bottom of the section */}
          <div className="pt-12 border-t border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <p className="text-brand-blue font-black tracking-[0.4em] uppercase text-[9px] mb-2">Search by Concern</p>
                <h4 className="text-xl font-serif text-slate-900">悩みから探す</h4>
              </div>
              <Link 
                to="/doctors"
                className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-brand-blue transition-colors"
              >
                View All Doctors <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { id: 'Body', title: 'Body Design', titleJa: 'ボディデザイン', icon: Activity },
                { id: 'Regenerative', title: 'Regenerative', titleJa: '再生医療', icon: Dna },
                { id: 'Reproductive', title: 'Reproductive', titleJa: '不妊治療・生殖', icon: Baby },
                { id: 'Facial', title: 'Facial Art', titleJa: 'フェイスデザイン', icon: Smile },
                { id: 'Life', title: 'Longevity', titleJa: '長寿・エイジング', icon: HeartPulse },
                { id: 'Checkup', title: 'Luxury Checkup', titleJa: '人間ドック・検診', icon: Stethoscope },
              ].map((cat, idx) => (
                <Link 
                  key={idx}
                  to={`/doctors?category=${cat.id}`}
                  className="group flex flex-col p-5 bg-slate-50 border border-slate-100 rounded-xl hover:bg-brand-blue hover:border-brand-blue transition-all duration-500"
                >
                  <cat.icon className="w-5 h-5 text-brand-blue group-hover:text-white mb-3 transition-colors" />
                  <p className="text-[7px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white/70 mb-1 transition-colors">{cat.title}</p>
                  <p className="text-xs font-bold text-slate-900 group-hover:text-white tracking-tight transition-colors">{cat.titleJa}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portal Entry Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: t('nav_for_clinics'), 
                subtitle: '提携医療機関向けのご案内',
                path: '/for-clinics', 
                desc: '最高峰の技術を持つクリニック様と、世界を繋ぐパートナーシップ。',
                image: 'https://lh3.googleusercontent.com/d/1Lv8FSmO7WyBkLHpl4iOYH-aqyulGgLPw'
              },
              { 
                title: t('nav_for_agents'), 
                subtitle: 'エージェント企業向けのご案内',
                path: '/for-agents', 
                desc: '海外エージェント様向けの強力なバックエンド・インフラ支援。',
                image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
              }
            ].map((item, i) => (
              <Link key={i} to={item.path} className="group relative aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-brand-teal font-black text-[10px] uppercase tracking-[0.3em] mb-2">{item.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white mb-2 break-keep">{item.title}</h3>
                  <p className="text-sm text-slate-200 leading-relaxed opacity-100 transition-opacity duration-500 break-keep">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center text-white font-bold text-xs uppercase tracking-widest">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section (New) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-brand-blue font-black tracking-[0.4em] uppercase text-[10px] mb-4">Latest Updates</p>
              <h2 className="text-4xl font-serif text-slate-900">NEWS</h2>
            </div>
            <Link to="/news" className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-brand-blue transition-colors flex items-center gap-2">
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                date: '2024.03.20',
                category: 'Press Release',
                title: 'SSF Medical Link、シンガポールでの国際カンファレンスに出展決定',
                image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
              },
              {
                date: '2024.03.15',
                category: 'Network',
                title: '新たに3名の「Master Class」認定医師がネットワークに加わりました',
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
              },
              {
                date: '2024.03.01',
                category: 'Service',
                title: '中国・上海に新たな提携エージェントデスクを開設いたしました',
                image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800'
              }
            ].map((news, i) => (
              <Link key={i} to="/news" className="group">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-slate-100">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-bold text-slate-400 font-mono">{news.date}</span>
                  <span className="px-2 py-0.5 bg-slate-100 text-[9px] font-black text-slate-500 uppercase tracking-widest rounded-sm">
                    {news.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-blue transition-colors break-keep">
                  {news.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
