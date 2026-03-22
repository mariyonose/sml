
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { CheckCircle2, ArrowRight, Video, Globe, Headphones, Award, Layout, PlayCircle, MessageSquare } from 'lucide-react';

interface ForClinicsProps {
  lang: Language;
}

export const ForClinics: React.FC<ForClinicsProps> = ({ lang }) => {
  return (
    <div className="bg-white animate-in fade-in duration-700 overflow-x-clip">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side - Visual & Title */}
        <aside className="w-full md:w-[40%] lg:w-[35%] md:h-screen md:sticky md:top-0 overflow-hidden bg-slate-900">
          <div className="relative h-[45vw] min-h-[240px] max-h-[400px] md:h-full w-full">
            <img 
              src="https://lh3.googleusercontent.com/d/1Lv8FSmO7WyBkLHpl4iOYH-aqyulGgLPw" 
              alt="Medical Facility" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/80"></div>
            
            <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-5 md:px-10 lg:px-12 pb-6 md:pb-0">
              <h1 className="font-serif text-white mb-2 md:mb-4 tracking-tighter opacity-90" style={{ fontSize: 'clamp(2rem, 5vw, 6rem)' }}>
                CLINICS
              </h1>
              <div className="h-px w-16 md:w-24 bg-brand-blue mb-3 md:mb-8"></div>
              <p className="text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                クリニック向け
              </p>
              
              <div className="hidden md:flex absolute bottom-12 left-12 md:left-16 items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
                <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">For Clinics</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Side - Content */}
        <main className="w-full md:w-[60%] lg:w-[65%] bg-white min-w-0">
          {/* Hero Section */}
          <section className="px-5 md:px-10 lg:px-16 py-12 md:py-24 lg:py-32">
            <div className="max-w-4xl">
              <p className="text-brand-blue font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6">For Medical Institutions</p>
              <h2 className="font-serif text-slate-900 mb-8 md:mb-12 tracking-tight leading-tight" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.8rem)' }}>
                クリニック様への<br />インバウンド・ソリューション
              </h2>
              <div className="space-y-4 md:space-y-6 max-w-3xl">
                <p className="text-base md:text-xl lg:text-2xl text-slate-900 font-bold leading-relaxed">
                  医療インバウンドの様々な課題を解決し成長させる。<br />それが私たちのミッションです。
                </p>
                <p className="text-sm md:text-lg text-slate-600 leading-relaxed font-light">
                  日本の自由診療業界を20年以上リードしてきた実績を背景に、貴院の価値をグローバルブランドへと昇華させ、海外の患者様へダイレクトに届けます。
                </p>
              </div>

              {/* Service Overview */}
              <div className="mt-12 md:mt-24">
                <div className="flex items-center gap-4 md:gap-8 mb-8 md:mb-12 overflow-hidden">
                  <motion.h2 
                    initial={{ x: "100%" }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="font-serif text-slate-900 tracking-tighter uppercase opacity-80 leading-none"
                    style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}
                  >
                    Service
                  </motion.h2>
                  <div className="h-[1.5px] flex-grow bg-slate-900/10"></div>
                </div>
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-8 md:mb-12 tracking-tight">インバウンド事業を成功に導く３つのサービス</h3>
                
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { num: '01', title: '受け入れコンサルティング', subtitle: 'Global Readiness', id: 'service-01' },
                    { num: '02', title: 'インバウンド患者マッチング', subtitle: 'Direct Matching', id: 'service-02' },
                    { num: '03', title: 'グローバルブランディング', subtitle: 'Global Branding', id: 'service-03' }
                  ].map((item, i) => (
                    <a 
                      key={i} 
                      href={`#${item.id}`}
                      className="flex items-center gap-5 md:gap-8 p-5 md:p-8 bg-slate-50 rounded-sm border border-slate-100 hover:bg-slate-900 transition-all duration-500 group cursor-pointer"
                    >
                      <span className="text-3xl md:text-4xl font-serif text-slate-200 group-hover:text-brand-blue transition-colors shrink-0">0{i+1}</span>
                      <div>
                        <h4 className="text-base md:text-xl font-bold text-slate-900 group-hover:text-white tracking-tight transition-colors">{item.title}</h4>
                        <p className="text-[10px] md:text-xs font-serif italic text-slate-400 group-hover:text-slate-500 tracking-widest uppercase transition-colors">{item.subtitle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Service 01: Global Readiness */}
          <section id="service-01" className="px-5 md:px-10 lg:px-16 py-16 md:py-32 bg-slate-50">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-8 mb-16 overflow-hidden">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="font-serif text-slate-900 tracking-tighter uppercase opacity-80 leading-none"
                  style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
                >
                  01
                </motion.h2>
                <div className="h-[1.5px] flex-grow bg-slate-900/10"></div>
              </div>
              
              <div className="mb-10 md:mb-20">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">受け入れコンサルティング</h3>
                <p className="text-xs md:text-sm font-serif italic text-brand-blue tracking-widest uppercase mb-4 md:mb-6">Global Readiness</p>
                <p className="text-base md:text-xl text-slate-600 font-light">外国人患者受け入れに必要な「基盤」「発信」「窓口」を整備します。</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: '院内基盤構築',
                    icon: <Layout className="w-6 h-6" />,
                    desc: '外国人患者を安全に受け入れるための最低限のルールと資材を整備。',
                    items: ['多言語対応資材の作成', '適正価格の設定支援', 'リスク管理体制の構築']
                  },
                  {
                    title: '動画制作',
                    icon: <PlayCircle className="w-6 h-6" />,
                    desc: '医師の技術と人柄を世界に伝えるハイクオリティな映像制作。',
                    items: ['ブランディング動画制作', '施術解説動画の制作', 'SNS用ショート動画']
                  },
                  {
                    title: '窓口代行',
                    icon: <MessageSquare className="w-6 h-6" />,
                    desc: 'SMLが貴院の「国際部」となり面倒な調整業務を全て代行。',
                    items: ['エージェント対応窓口', '医療翻訳・通訳手配', 'ロジスティクス管理']
                  }
                ].map((plan, i) => (
                  <div key={i} className="bg-white p-10 rounded-sm border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                    <div className="w-12 h-12 bg-slate-50 text-brand-blue rounded-full flex items-center justify-center mb-6">
                      {plan.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">{plan.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed mb-8 flex-grow">
                      {plan.desc}
                    </p>
                    <ul className="space-y-3 border-t border-slate-100 pt-6">
                      {plan.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 font-medium">
                          <div className="w-1 h-1 bg-brand-blue rounded-full mt-1.5 shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service 02: Direct Matching */}
          <section id="service-02" className="px-5 md:px-10 lg:px-16 py-16 md:py-32 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-8 mb-16 overflow-hidden">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="font-serif text-slate-900 tracking-tighter uppercase opacity-80 leading-none"
                  style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
                >
                  02
                </motion.h2>
                <div className="h-[1.5px] flex-grow bg-slate-900/10"></div>
              </div>
              
              <div className="mb-10 md:mb-20">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">インバウンド患者マッチング</h3>
                <p className="text-xs md:text-sm font-serif italic text-brand-blue tracking-widest uppercase mb-4 md:mb-6">Direct Matching</p>
                <p className="text-base md:text-xl text-slate-600 font-light leading-relaxed">
                  独自のマッチングプラットフォームから、確実な送客を。<br />
                  SMLの正規ネットワークを通じ、日本の高い医療技術を求める患者様と貴院をダイレクトにマッチング。
                </p>
              </div>

              {/* Doctor Guide Integration */}
              <div className="relative bg-white rounded-sm p-5 md:p-10 lg:p-16 border border-slate-200 mb-8 md:mb-12 overflow-clip group">
                {/* Rising Sun Background Element - Significant presence with vermilion */}
                <div className="absolute -top-48 -right-48 w-[700px] h-[700px] bg-[#e60012]/15 rounded-full z-0 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="mb-8 md:mb-12">
                    <h4 className="font-serif text-slate-900 tracking-tight leading-none mb-2 font-extralight" style={{ fontSize: 'clamp(2rem, 8vw, 7rem)' }}>
                      <span className="text-red-600">JAPAN</span> PREMIUM
                    </h4>
                    <p className="text-sm md:text-base font-sans text-brand-blue tracking-[0.5em] md:tracking-[0.8em] uppercase font-bold ml-1 mb-8 md:mb-12">
                      DOCTOR GUIDE
                    </p>
                    <Link 
                      to="/doctors"
                      className="inline-flex items-center gap-4 px-8 py-4 bg-brand-blue text-white font-black text-[10px] uppercase tracking-[0.3em] hover:bg-slate-900 transition-colors shadow-lg shadow-brand-blue/20"
                    >
                      Open Doctor Guide <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <p className="text-slate-600 text-xl leading-relaxed mb-12 font-light">
                        私たちが20年以上にわたり培ってきた「本物のドクターの目利き」を形にした、エグゼクティブのためのドクター検索ガイド。
                        SMLが認定する最高峰の医療機関として、世界中の患者様へ貴院の価値を届けます。
                      </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-sm border border-slate-200 shadow-sm max-w-md mx-auto lg:mx-0">
                      <p className="text-xl font-bold text-slate-900 uppercase tracking-widest border-b-2 border-brand-blue pb-3 mb-6">厳格な選抜基準</p>
                      <ul className="grid grid-cols-1 gap-4">
                        {[
                          '専門医資格の保有',
                          '学術活動・論文発表の実績',
                          '業界内での圧倒的な評判と信頼',
                          '倫理観と適正価格へのコミット'
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-base text-slate-800 font-bold">
                            <CheckCircle2 className="text-brand-blue w-5 h-5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* MASTER CLASS Integration */}
                <div className="relative z-10 mt-8 pt-8 border-t border-slate-100">
                  <div className="bg-black p-8 md:p-12 lg:p-20 rounded-sm text-center text-white shadow-2xl relative overflow-hidden">
                    {/* Background Image for Master Class */}
                    <div className="absolute inset-0 z-0 opacity-40">
                      <img 
                        src="https://lh3.googleusercontent.com/d/1za56Mw9hKK5myO4RvfzduHWqzquHFUZx" 
                        alt="Master Class Background" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/60"></div>
                    </div>

                    <div className="relative z-10">
                      <p className="text-[#b4975a] font-bold tracking-[0.2em] text-base md:text-xl mb-8 md:mb-12">美容外科部門の最高峰の選抜ブランドコミュニティ</p>
                      <div className="flex justify-center mb-8 md:mb-12">
                        <img 
                          src="https://lh3.googleusercontent.com/d/1I5BtkZOB-sZibOI8X_JcyO99IyxrLg1J" 
                          alt="Master Class Logo" 
                          className="h-20 md:h-28 w-auto"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-sm md:text-lg text-slate-300 leading-relaxed mb-6 md:mb-10 font-light max-w-2xl mx-auto">
                        トップ１％の医師のみが所属する権威あるコミュニティから美容外科医を推薦します。
                      </p>
                      <p className="text-xs md:text-sm text-[#b4975a] font-bold tracking-widest uppercase border border-[#b4975a]/30 inline-block px-4 md:px-6 py-2">MASTER CLASSの認定医師へなるための支援も可能です。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service 03: Global Branding */}
          <section id="service-03" className="relative px-5 md:px-10 lg:px-16 py-16 md:py-32 bg-slate-900 overflow-hidden">
            {/* Background Image for Global Branding */}
            <div className="absolute inset-0 z-0 opacity-30">
              <img 
                src="https://lh3.googleusercontent.com/d/1cGnjDrdMiEwpbpHKJm4dp0BPWPI5_Q5B" 
                alt="Global Branding Background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="flex items-center gap-8 mb-16 overflow-hidden">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
className="font-serif text-white tracking-tighter uppercase opacity-80 leading-none"
                    style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
                  >
                  03
                </motion.h2>
                <div className="h-[1.5px] flex-grow bg-white/10"></div>
              </div>
              
              <div className="mb-10 md:mb-20">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <span className="text-[#b4975a] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-xs md:text-sm border-2 border-[#b4975a] px-4 md:px-6 py-2 rounded-sm bg-[#b4975a]/10">
                    MASTER CLASS ONLY
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">グローバルブランディング</h3>
                <p className="text-xs md:text-sm font-serif italic text-brand-blue tracking-widest uppercase mb-6 md:mb-10">Global Branding</p>
                
                <h4 className="text-xl md:text-2xl font-serif text-white mb-4 md:mb-6 tracking-tight">「日本の名医」から「世界の権威」へ。</h4>
                <p className="text-base md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                  先生のブランドを世界へ発信するための特別プログラム。能動的なプロモーションにより、指名での来日患者を獲得し、グローバルな権威性を確立します。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    num: '1',
                    title: '海外イベント登壇支援',
                    desc: 'アジア・欧州で開催される医療カンファレンスやVIP向けイベントへの登壇をコーディネート。'
                  },
                  {
                    num: '2',
                    title: 'グローバルメディア露出',
                    desc: '海外富裕層向けメディアやSNSでの特集記事、インタビュー動画の配信。'
                  },
                  {
                    num: '3',
                    title: 'エージェントへの優先紹介',
                    desc: '提携する有力エージェントに対し、「推奨医師」として最優先でリストアップ。'
                  }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-2xl font-serif text-slate-500 group-hover:text-brand-blue transition-colors">{item.num}</span>
                      <div className="h-px flex-grow bg-white/10"></div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Flow Section */}
          <section className="px-5 md:px-10 lg:px-16 py-16 md:py-32 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-8 mb-16 overflow-hidden">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="font-serif text-slate-900 tracking-tighter uppercase opacity-80 leading-none"
                  style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
                >
                  FLOW
                </motion.h2>
                <div className="h-[1.5px] flex-grow bg-slate-900/10"></div>
              </div>
              
              <div className="mb-10 md:mb-20">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 tracking-tight">導入までの流れ</h3>
              </div>

              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[60px] md:left-[80px] top-0 bottom-0 w-px bg-slate-200 z-0"></div>

                <div className="space-y-24">
                  {[
                    { 
                      en: 'HEARING', 
                      jp: 'ヒアリング・現状分析', 
                      desc: '貴院の現在のインバウンド受け入れ状況や、今後の展望について詳しくお伺いします。' 
                    },
                    { 
                      en: 'PLANNING', 
                      jp: 'プランニング・ご提案', 
                      desc: 'ヒアリング内容に基づき、最適なコンサルティングプランやマーケティング戦略をご提案します。' 
                    },
                    { 
                      en: 'START', 
                      jp: 'ご契約・プロジェクト開始', 
                      desc: '契約締結後、専任のチームが貴院のインバウンド基盤構築をスタートさせます。' 
                    }
                  ].map((item, i) => (
                    <div key={i} className="relative z-10 flex flex-col md:flex-row gap-8 md:items-center">
                      <div className="flex flex-col items-center justify-center w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full bg-white border border-slate-200 shadow-sm shrink-0">
                        <span className="text-[10px] md:text-xs font-serif tracking-[0.2em] text-slate-400 mb-1 uppercase">{item.en}</span>
                        <span className="text-[10px] md:text-xs font-bold text-slate-900">{item.jp.split('・')[0]}</span>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{item.jp}</h4>
                        <p className="text-slate-500 text-lg font-light leading-relaxed max-w-2xl">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-5 md:px-10 lg:px-16 py-16 md:py-32 bg-slate-50 border-t border-slate-200">
            <div className="max-w-3xl text-center md:text-left">
              <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-5 md:mb-8">インバウンド支援サービスに関するお問い合わせ</h2>
              <p className="text-sm md:text-lg text-slate-600 mb-8 md:mb-12">
                貴院のインバウンド受け入れ体制の構築から、グローバルなブランディングまで、SMLがトータルでサポートいたします。
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 bg-brand-blue text-white rounded-sm font-bold text-sm md:text-lg hover:bg-slate-900 transition-all shadow-xl">
                お問い合わせはこちら <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </section>

          {/* Page Navigation */}
          <section className="px-5 md:px-10 lg:px-16 py-16 md:py-32 border-t border-slate-100">
            <div className="max-w-3xl">
              <div className="grid grid-cols-1 gap-5 md:gap-8">
                <Link to="/for-agents" className="group p-6 md:p-12 bg-slate-50 rounded-2xl md:rounded-sm border border-slate-100 hover:border-brand-teal transition-all">
                  <p className="text-brand-teal font-black tracking-[0.3em] uppercase text-[10px] mb-3 md:mb-4">Next Portal</p>
                  <h4 className="text-2xl md:text-3xl font-serif text-slate-900 mb-3 md:mb-6 group-hover:text-brand-teal transition-colors">For Agents</h4>
                  <p className="text-slate-500 mb-5 md:mb-8 text-sm md:text-base">エージェント企業向けのご案内はこちら</p>
                  <div className="flex items-center text-brand-teal font-bold text-xs md:text-sm uppercase tracking-widest">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
                <Link to="/about" className="group p-6 md:p-12 bg-slate-50 rounded-2xl md:rounded-sm border border-slate-100 hover:border-brand-blue transition-all">
                  <p className="text-brand-blue font-black tracking-[0.3em] uppercase text-[10px] mb-3 md:mb-4">About SML</p>
                  <h4 className="text-2xl md:text-3xl font-serif text-slate-900 mb-3 md:mb-6 group-hover:text-brand-blue transition-colors">SMLとは</h4>
                  <p className="text-slate-500 mb-5 md:mb-8 text-sm md:text-base">私たちのビジョンと選定基準について</p>
                  <div className="flex items-center text-brand-blue font-bold text-xs md:text-sm uppercase tracking-widest">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
