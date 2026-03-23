
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from '../components/ScrollReveal';
import TargetMessage from '../components/TargetMessage';
import { 
  Globe, ArrowRight, 
  Activity, Dna, Baby, Smile, HeartPulse, Stethoscope 
} from 'lucide-react';
import { Language } from '../types';
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

      {/* ===== SCROLL OVERLAP WRAPPER =====
       * ヒーローを sticky で固定し、SMLとはセクションが上から被さるように実装
       * 参考: sanwa-fl.co.jp の About Sanwa Facade Lab と同じ動き
       * ====================================== */}
      <div style={{ position: 'relative' }}>

        {/* ===== Dynamic Hero Section（sticky固定・後続セクションに被さられる）===== */}
        <section
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 0,
            height: '85vh',
            minHeight: '560px',
          }}
          className="relative w-full flex items-center overflow-hidden bg-white"
        >
          {/* ===== 地球儀背景（固定表示）===== */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full overflow-hidden bg-[#001122]">
              <img 
                src="https://lh3.googleusercontent.com/d/1AjYKPDgg19bcIUX-dntO1qsTwxMzGPTX" 
                alt="Japan Map Strategic Hub" 
                className="w-full h-full object-cover opacity-100 animate-ken-burns"
                referrerPolicy="no-referrer"
              />
              {/* 背景素材：日本地図ドット＋日の丸 */}
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
            </div>
            {/* 左側グラデーション（テキスト可読性確保） */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-transparent"></div>
          </div>
          
          {/* ===== スマホ用ヒーローレイアウト（md未満）: 中央配置 ===== */}
          <div className="md:hidden absolute inset-0 z-10 flex flex-col justify-center">
            {/* 中央：キャッチコピー・サブタイトル・ボタン */}
            <div className="px-5 w-full">
              {/* ラベル */}
              <motion.div key="sp-label" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-2">
                <span className="inline-block font-black tracking-[0.3em] uppercase text-[10px] text-cyan-400">
                  Authorized Medical Portal
                </span>
              </motion.div>
              {/* メインコピー */}
              <div className="mb-2">
                <h1
                  className="font-serif leading-[1.1] tracking-[-0.02em] text-white"
                  style={{ fontSize: 'clamp(1.9rem, 7vw, 2.5rem)' }}
                >
                  {t('hero_copy').split('\n').map((line, i) => (
                    <motion.span key={`sp-copy-${i}`} className="block"
                      initial={hasAnimated ? false : { opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.6, delay: 0.3 + i * 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    >{line}</motion.span>
                  ))}
                </h1>
              </div>
              {/* サブタイトル */}
              <motion.div key="sp-sub" className="mb-4" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>
                <p className="text-xs font-light leading-relaxed text-blue-100/90">
                  {t('hero_subtitle')}
                </p>
              </motion.div>
              {/* ボタン */}
              <div className="flex flex-row gap-3">
                <Link to="/for-clinics" className="group relative flex-shrink-0 px-4 py-2.5 bg-brand-blue overflow-hidden shadow-xl shadow-brand-blue/30 transition-transform hover:-translate-y-1">
                  <span className="relative z-10 text-white font-bold text-[11px] uppercase tracking-[0.2em] whitespace-nowrap">{t('nav_for_clinics')}</span>
                  <div className="absolute inset-0 bg-slate-900 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
                </Link>
                <Link to="/for-agents" className="flex-shrink-0 px-4 py-2.5 border font-bold text-[11px] uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 backdrop-blur-sm shadow-sm hover:-translate-y-1 bg-brand-teal border-transparent text-white">
                  {t('nav_for_agents')}
                </Link>
              </div>
            </div>
          </div>

          {/* ===== PC用ヒーローレイアウト（md以上）: 元の左カラム構成 ===== */}
          <div className="hidden md:block relative z-10 w-full h-full">
            <div className="max-w-screen-2xl mx-auto px-10 xl:px-16 2xl:px-24 h-full flex items-center pb-16">
              {/* 左カラム：ラベル・コピー・サブタイトル・ボタン */}
              <div className="flex flex-col gap-8 w-full max-w-[55%] xl:max-w-[50%] 2xl:max-w-[46%]">

                {/* ラベル */}
                <motion.div key="pc-label" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
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
                      <motion.span key={`pc-copy-${i}`} className="block whitespace-nowrap"
                        initial={hasAnimated ? false : { opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.6, delay: 0.3 + i * 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      >{line}</motion.span>
                    ))}
                  </h1>
                </div>

                {/* サブタイトル */}
                <motion.div key="pc-sub" className="overflow-visible" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}>
                  <p className="text-base font-light leading-relaxed whitespace-nowrap text-blue-100/90">
                    {t('hero_subtitle')}
                  </p>
                </motion.div>

                {/* ボタン */}
                <div className="flex flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
                  <Link to="/for-clinics" className="group relative px-10 py-5 bg-brand-blue overflow-hidden shadow-2xl shadow-brand-blue/30 transition-transform hover:-translate-y-1">
                    <span className="relative z-10 text-white font-bold text-sm uppercase tracking-[0.4em] whitespace-nowrap">{t('nav_for_clinics')}</span>
                    <div className="absolute inset-0 bg-slate-900 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
                  </Link>
                  <Link to="/for-agents" className="px-10 py-5 border font-bold text-sm uppercase tracking-[0.4em] whitespace-nowrap transition-all duration-500 backdrop-blur-sm shadow-sm hover:-translate-y-1 bg-brand-teal border-transparent text-white hover:bg-brand-teal">
                    {t('nav_for_agents')}
                  </Link>
                </div>
              </div>
            </div>

            {/* ブランド情報（右下に絶対配置） */}
            <div className="absolute bottom-12 right-16 xl:right-20 2xl:right-28 z-20">
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
            </div>
          </div>
          

        </section>

        {/* ===== SML Mission Section（ヒーローエリアに被さるスクロール効果）=====
         * position: relative + z-index: 10 でヒーローの上に被さる
         * 角丸（rounded-t-[2.5rem]）でスライドイン感を演出
         * 動画をセクション全体の背景に敷き、マスクをかけて元の3カラムデザインを維持
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
                  <p className="text-xs font-black uppercase tracking-[0.3em]">The Strategic Link</p>
                </motion.div>

                {/* Right: Agents / Patients */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-slate-100 text-center relative"
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-brand-teal/5 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-8">
                    <Globe className="w-7 h-7 md:w-10 md:h-10 text-brand-teal" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-slate-900 mb-2 md:mb-4">Global Network</h3>
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

            <div className="mt-12 md:mt-24 text-center">
              <Link 
                to="/about" 
                className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.4em] text-brand-blue hover:text-slate-900 transition-colors"
              >
                Learn More About SML <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>{/* end scroll overlap wrapper */}

      {/* ===== 3ターゲット向けメッセージ Section ===== */}
      <TargetMessage />

      {/* ===== JAPAN PREMIUM DOCTOR GUIDE Section ===== */}
      <section className="relative py-16 md:py-32 overflow-hidden bg-slate-50">
        {/* Japan Map 背景素材 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg_japan_map.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.18, mixBlendMode: 'multiply' }}
          />
        </div>
        {/* 上下グラデーションで馴染ませる */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <div className="mb-8">
              <ScrollReveal variant="fadeUp" delay={0}>
                <h3 className="font-serif text-slate-900 tracking-tight leading-none mb-4 font-extralight" style={{ fontSize: 'clamp(2rem, 8vw, 6rem)' }}>
                  <span className="text-red-600">JAPAN</span> PREMIUM
                </h3>
              </ScrollReveal>
              <ScrollReveal variant="fadeIn" delay={0.2}>
                <p className="text-base md:text-lg font-sans text-brand-blue tracking-[0.8em] uppercase font-bold">
                  DOCTOR GUIDE
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto break-keep font-light mb-10">
                日本国内の厳選されたクリニックと名医を検索できる、エグゼクティブのためのドクター検索ガイド。
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.4}>
              <Link 
                to="/doctors"
                className="inline-flex items-center gap-4 px-10 py-5 bg-brand-blue text-white font-black text-sm uppercase tracking-[0.3em] hover:bg-slate-900 transition-colors shadow-lg shadow-brand-blue/20"
              >
                Open Doctor Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          {/* ===== 医師カード：自動横スクロール（マーキー）===== */}
          {/* 顔の位置を揃えるため aspect-[3/4] + object-top で統一 */}
          <div className="relative overflow-hidden mb-10 md:mb-20 marquee-pause">
            {/* 左右フェードグラデーション */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
            
            <div 
              className="flex gap-6"
              style={{
                animation: 'marquee-scroll 30s linear infinite',
                width: 'max-content',
              }}
            >
              {/* 医師カードを2セット並べてシームレスなループを実現 */}
              {[...DOCTORS, ...DOCTORS].map((doc, i) => (
                <Link 
                  key={`${doc.id}-${i}`} 
                  to={`/doctor/${doc.id}`} 
                  className="group relative flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-xl border border-slate-200"
                  style={{ width: '260px', height: '347px' }} // 3:4 比率で固定
                >
                  <img 
                    src={doc.image} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    alt={doc.name} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-black text-brand-teal uppercase tracking-widest mb-1">{doc.title}</p>
                    <p className="text-base font-bold text-white">{doc.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="pt-8 md:pt-12 border-t border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-3 md:gap-4">
              <ScrollReveal variant="slideRight" delay={0}>
                <div>
                  <p className="text-brand-blue font-black tracking-[0.4em] uppercase text-sm mb-2">Search by Concern</p>
                  <h4 className="text-2xl md:text-4xl font-serif text-slate-900">悩みから探す</h4>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="slideLeft" delay={0.1}>
                <Link 
                  to="/doctors"
                  className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-slate-400 hover:text-brand-blue transition-colors"
                >
                  View All Doctors <ArrowRight className="w-3 h-3" />
                </Link>
              </ScrollReveal>
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
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-white/70 mb-1 transition-colors">{cat.title}</p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-white tracking-tight transition-colors">{cat.titleJa}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Portal Entry Section ===== */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <ScrollRevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.15}>
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
              <ScrollRevealItem key={i}>
              <Link to={item.path} className="group relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl bg-slate-100 block">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8">
                  <p className="text-brand-teal font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-1 md:mb-2">{item.subtitle}</p>
                  <h3 className="text-xl md:text-4xl font-bold text-white mb-2 md:mb-3 break-keep">{item.title}</h3>
                  <p className="text-sm md:text-lg text-slate-200 leading-relaxed break-keep hidden md:block">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center text-white font-bold text-sm uppercase tracking-widest">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
                </Link>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* ===== News Section ===== */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-8">
            <ScrollReveal variant="slideRight" delay={0}>
              <div>
                <p className="text-brand-blue font-black tracking-[0.4em] uppercase text-sm mb-4">Latest Updates</p>
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900">NEWS</h2>
              </div>
            </ScrollReveal>
            <Link to="/news" className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 hover:text-brand-blue transition-colors flex items-center gap-2">
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ScrollRevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" staggerDelay={0.12}>
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
              <ScrollRevealItem key={i}>
                <Link to="/news" className="group block">
                  <div className="aspect-[16/9] overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-6 bg-slate-100">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-bold text-slate-400 font-mono">{news.date}</span>
                    <span className="px-3 py-1 bg-slate-100 text-xs font-black text-slate-500 uppercase tracking-widest rounded-sm">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-blue transition-colors break-keep">
                    {news.title}
                  </h3>
                </Link>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* マーキーアニメーション用スタイル */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-pause:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
