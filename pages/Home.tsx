
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from '../components/ScrollReveal';
import TargetMessage from '../components/TargetMessage';
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
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const getClinicName = (clinicId: string) => {
    return CLINICS.find(c => c.id === clinicId)?.name || '';
  };

  return (
    <div className="bg-white">

      {/* ===== SCROLL OVERLAP WRAPPER ===== */}
      <div style={{ position: 'relative' }}>

        {/* ===== Hero Section（sticky固定・地球儀背景固定表示）===== */}
        <section
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 0,
            height: 'calc(100svh - 0px)',
            minHeight: '600px',
          }}
          className="relative w-full overflow-hidden"
        >
          {/* ===== 背景：地球儀地図画像（固定） ===== */}
          <div className="absolute inset-0 z-0 bg-[#001122]">
            <img 
              src="https://lh3.googleusercontent.com/d/1AjYKPDgg19bcIUX-dntO1qsTwxMzGPTX" 
              alt="Japan Map Strategic Hub" 
              className="w-full h-full object-cover opacity-100 animate-ken-burns"
              referrerPolicy="no-referrer"
            />
            {/* 日本地図ドット */}
            <img
              src="/images/bg_japan_map.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-screen animate-ken-burns"
              style={{ animationDelay: '-5s' }}
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 opacity-[0.15]" style={{ 
              backgroundImage: 'linear-gradient(rgba(0,180,255,0.3) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(0,180,255,0.3) 1.5px, transparent 1.5px)',
              backgroundSize: '80px 80px',
              transform: 'perspective(600px) rotateX(55deg) translateY(-25%) scale(2.5)'
            }}></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[400%] h-[400%] opacity-30 animate-[spin_180s_linear_infinite]" style={{
                background: 'conic-gradient(from 210deg at 61% 39%, transparent 0deg, rgba(0,255,255,0.4) 0.5deg, transparent 1.5deg, transparent 30deg, rgba(255,255,255,0.2) 32deg, transparent 35deg)'
              }}></div>
            </div>
            {/* 左側グラデーション（テキスト読みやすさ確保） */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent"></div>
          </div>

          {/* ===== スマホ用テキスト・ボタン（md未満）===== */}
          <div className="md:hidden absolute inset-0 z-10 flex flex-col justify-end pb-12 px-6">
            {/* ラベル */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-3"
            >
              <span className="inline-block font-black tracking-[0.3em] uppercase text-[10px] text-cyan-400">
                Authorized Medical Portal
              </span>
            </motion.div>

            {/* メインコピー */}
            <div className="mb-3">
              <h1
                className="font-serif leading-[1.2] tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(1.9rem, 8vw, 2.6rem)' }}
              >
                {t('hero_copy').split('\n').map((line, i) => (
                  <motion.span
                    key={`sp-copy-${i}`}
                    className="block"
                    initial={hasAnimated ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  >{line}</motion.span>
                ))}
              </h1>
            </div>

            {/* サブタイトル */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p className="text-[12px] font-light leading-relaxed text-blue-100/80">
                {t('hero_subtitle')}
              </p>
            </motion.div>

            {/* ボタン */}
            <motion.div
              className="flex flex-row gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Link
                to="/for-clinics"
                className="group relative flex-1 text-center px-3 py-4 bg-brand-blue overflow-hidden shadow-lg shadow-brand-blue/40 transition-transform active:scale-95"
              >
                <span className="relative z-10 text-white font-bold text-[12px] uppercase tracking-[0.15em] whitespace-nowrap">{t('nav_for_clinics')}</span>
                <div className="absolute inset-0 bg-slate-900 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
              </Link>
              <Link
                to="/for-agents"
                className="flex-1 text-center px-3 py-4 bg-brand-teal font-bold text-[12px] uppercase tracking-[0.15em] whitespace-nowrap text-white transition-all duration-500 active:scale-95"
              >
                {t('nav_for_agents')}
              </Link>
            </motion.div>
          </div>

          {/* ===== PC用テキスト・ボタン（md以上）===== */}
          <div className="hidden md:flex absolute inset-0 z-10 items-center">
            <div className="max-w-screen-2xl mx-auto px-10 xl:px-16 2xl:px-24 w-full pb-16">
              <div className="flex flex-col gap-8 max-w-[55%] xl:max-w-[50%] 2xl:max-w-[46%]">

                {/* ラベル */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="inline-block font-black tracking-[0.5em] uppercase text-sm text-cyan-400">
                    Authorized Medical Portal
                  </span>
                </motion.div>

                {/* メインコピー */}
                <div>
                  <h1
                    className="font-serif leading-[1.1] tracking-[-0.02em] text-white"
                    style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.8rem)' }}
                  >
                    {t('hero_copy').split('\n').map((line, i) => (
                      <motion.span
                        key={`pc-copy-${i}`}
                        className="block whitespace-nowrap"
                        initial={hasAnimated ? false : { opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.6, delay: 0.3 + i * 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      >{line}</motion.span>
                    ))}
                  </h1>
                </div>

                {/* サブタイトル */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-base font-light leading-relaxed whitespace-nowrap text-blue-100/90">
                    {t('hero_subtitle')}
                  </p>
                </motion.div>

                {/* ボタン */}
                <div className="flex flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
                  <Link
                    to="/for-clinics"
                    className="group relative px-10 py-5 bg-brand-blue overflow-hidden shadow-2xl shadow-brand-blue/30 transition-transform hover:-translate-y-1"
                  >
                    <span className="relative z-10 text-white font-bold text-sm uppercase tracking-[0.4em] whitespace-nowrap">{t('nav_for_clinics')}</span>
                    <div className="absolute inset-0 bg-slate-900 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
                  </Link>
                  <Link
                    to="/for-agents"
                    className="px-10 py-5 bg-brand-teal border-transparent text-white font-bold text-sm uppercase tracking-[0.4em] whitespace-nowrap transition-all duration-500 backdrop-blur-sm shadow-sm hover:-translate-y-1 hover:bg-slate-900"
                  >
                    {t('nav_for_agents')}
                  </Link>
                </div>
              </div>
            </div>

            {/* PC：右下の情報テキスト */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-12 right-16 xl:right-20 2xl:right-28 z-20"
            >
              <div className="border-r-2 border-cyan-400 pr-8 py-2 text-right">
                <p className="text-sm font-black uppercase tracking-widest mb-1 text-cyan-400">
                  Japan Pinnacle Bridge
                </p>
                <p className="text-2xl font-serif leading-none text-white">
                  SSF Medical Link
                </p>
                <p className="text-sm font-sans text-slate-400 tracking-[0.2em] uppercase mt-2 font-bold">
                  Strategic Hub in Japan
                </p>
              </div>
            </motion.div>
          </div>

        </section>

        {/* ===== SML Mission Section（ヒーローエリアに被さるスクロール効果）=====
         * position: relative + z-index: 10 でヒーローの上に被さる
         * 角丸（rounded-t-[2.5rem]）でスライドイン感を演出
         * ================================================================= */}
        <section
          style={{
            position: 'relative',
            zIndex: 10,
            borderRadius: '2.5rem 2.5rem 0 0',
            marginTop: '-3rem',
          }}
          className="bg-slate-50 overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.12)]"
        >
          <div className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-32">
            <div className="text-center mb-12 md:mb-24">
              <ScrollReveal variant="fadeUp" delay={0}>
                <h2 className="text-xs font-black text-brand-blue tracking-[0.5em] uppercase mb-4">{t('nav_about')}</h2>
              </ScrollReveal>
              <ScrollReveal variant="maskReveal" delay={0.12}>
                <p className="text-xl md:text-3xl lg:text-4xl font-serif text-slate-900 max-w-4xl mx-auto leading-[1.4] md:leading-[1.3] break-words md:break-keep">
                  SSF Medical Linkは、最高峰の医療技術と<br className="hidden md:block" />
                  世界中のニーズを繋ぐ「信頼の架け橋」です。
                </p>
              </ScrollReveal>
            </div>
            
            {/* SML Diagram（3カラム構成）*/}
            <div className="relative max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-center relative z-10">
                {/* Left: Clinics */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-slate-100 text-center relative"
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-brand-blue/5 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-8">
                    <Stethoscope className="w-7 h-7 md:w-10 md:h-10 text-brand-blue" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-slate-900 mb-2 md:mb-4">Master Class Clinics</h3>
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
                  className="bg-brand-gradient p-8 md:p-12 rounded-full shadow-2xl text-center text-white aspect-square flex flex-col items-center justify-center relative z-20 border-4 md:border-8 border-white mx-auto w-40 md:w-auto"
                >
                  <img 
                    src="https://lh3.googleusercontent.com/d/19mi6RRwCtWuL54J9rIPHujsm-IZmXkeW" 
                    alt="SML" 
                    className="h-12 w-auto brightness-0 invert mb-4 object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <p className="text-xs font-black tracking-[0.3em] uppercase opacity-80">The Link</p>
                  <div className="hidden md:block absolute top-1/2 -left-6 w-12 h-[2px] bg-gradient-to-l from-brand-blue to-brand-cyan"></div>
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan"></div>
                </motion.div>

                {/* Right: Agents */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-slate-100 text-center relative"
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-brand-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-8">
                    <Globe className="w-7 h-7 md:w-10 md:h-10 text-brand-teal" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-slate-900 mb-2 md:mb-4">Global Network</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    世界各国の信頼できる<br />医療エージェントネットワーク
                  </p>
                  <div className="hidden md:block absolute top-1/2 -left-6 w-12 h-[2px] bg-gradient-to-l from-brand-teal to-brand-cyan"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHO WE SERVE Section ===== */}
        <TargetMessage lang={lang} />

      </div>
    </div>
  );
};

export default Home;
