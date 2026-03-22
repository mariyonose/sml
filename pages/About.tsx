
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { Language } from '../types';
import { ArrowRight, ShieldCheck, TrendingUp, Users, Globe, Award, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { 
        duration: 2, 
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [motionValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

export const About: React.FC<AboutProps> = ({ lang }) => {
  return (
    <div className="bg-white animate-in fade-in duration-700 overflow-x-clip">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side - Visual & Title */}
        <aside className="w-full md:w-[40%] lg:w-[35%] md:h-screen md:sticky md:top-0 overflow-hidden bg-slate-900">
          <div className="relative h-[45vw] min-h-[240px] max-h-[400px] md:h-full w-full">
            <img 
              src="https://lh3.googleusercontent.com/d/1AjYKPDgg19bcIUX-dntO1qsTwxMzGPTX" 
              alt="Japan Map Strategic Hub" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/80"></div>
            
            <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-5 md:px-10 lg:px-12 pb-6 md:pb-0">
              <h1 className="font-serif text-white mb-2 md:mb-4 tracking-tighter opacity-90" style={{ fontSize: 'clamp(2rem, 5vw, 6rem)' }}>
                ABOUT
              </h1>
              <div className="h-px w-16 md:w-24 bg-brand-blue mb-3 md:mb-8"></div>
              <p className="text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                SMLとは
              </p>
              
              <div className="hidden md:flex absolute bottom-12 left-12 md:left-16 items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
                <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">About</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Side - Content */}
        <main className="w-full md:w-[60%] lg:w-[65%] bg-white min-w-0">
          {/* Hero Section */}
          <section className="px-5 md:px-10 lg:px-16 py-12 md:py-24 lg:py-32">
            <div className="max-w-4xl">
              <p className="text-brand-blue font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6">About SSF Medical Link</p>
              <h2 className="font-serif text-slate-900 mb-8 md:mb-12 tracking-tight leading-tight" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)' }}>
                インバウンド市場の橋渡し役<br />
                <span className="text-brand-blue">— 信頼のプラットフォーム</span>
              </h2>

              {/* Market Issues */}
              <div className="relative py-10 md:py-32 mb-12 md:mb-32">
                {/* Offset background block */}
                <div className="absolute top-0 right-0 w-full md:w-[70%] h-full bg-slate-50 -z-10 rounded-sm"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-10 overflow-hidden">
                    <h2 className="font-serif text-slate-900 tracking-tighter uppercase opacity-80 leading-none" style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}>Issue</h2>
                    <div className="h-[1.5px] flex-grow bg-slate-900/10"></div>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 mb-8 md:mb-16 tracking-tight" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.75rem)' }}>
                    今、医療インバウンドで何が起こっているのか。
                  </h3>
                  
                  <div className="space-y-6 md:space-y-10 max-w-3xl">
                    {[
                      { title: '情報の非対称性と不透明な価格', desc: '海外エージェントが患者の情報不足を利用し、通常の2〜3倍の価格を請求。差額がブローカーに流れる構造が常態化している。' },
                      { title: '「質」より「マージン」優先の選定', desc: '紹介基準が医療の質でなく、高い紹介料（キックバック）を支払えるかに偏るリスク。' },
                      { title: '日本医療ブランドの毀損', desc: '高額で満足度が低い体験が繰り返され、「高いだけで質が伴わない」という誤った評判が広がる懸念。' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 md:gap-8 group items-start">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-300 flex items-center justify-center shrink-0 group-hover:border-brand-blue group-hover:bg-brand-blue/5 transition-all duration-500">
                          <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-brand-blue transition-colors" />
                        </div>
                        <div className="pt-1 md:pt-2">
                          <h4 className="text-base md:text-xl font-bold text-slate-900 mb-2 md:mb-3 tracking-tight">{item.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed font-light">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Our Mission */}
              <div className="relative pt-4 pb-10 md:pb-16 mb-12 md:mb-24">
                {/* Offset background block */}
                <div className="absolute top-0 left-0 w-full md:w-[70%] h-full bg-slate-50 -z-10 rounded-sm"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-8 overflow-hidden">
                    <h2 className="font-serif text-slate-900 tracking-tighter uppercase opacity-80 leading-none" style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}>Mission</h2>
                    <div className="h-[1.5px] flex-grow bg-slate-900/10"></div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4 tracking-tight">
                    「医療の質で選ばれる日本」を実現する
                  </h3>

                  <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                    自費診療市場の歪みを正し、日本の医療を世界の基準へシフト。
                  </p>
                </div>
              </div>

              {/* Mission Diagram */}
              <div className="mb-12 md:mb-24 overflow-x-auto">
                <div className="min-w-[600px] lg:min-w-0">
                  {/* Connection Diagram */}
                  <div className="relative flex items-stretch justify-between gap-3 mb-8 md:mb-12">
                    {/* Horizontal Line Background */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10"></div>

                    {/* Left: Clinics */}
                    <div className="w-[30%] bg-white border border-slate-200 p-4 md:p-6 text-center flex flex-col items-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
                        <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-slate-900" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2 md:mb-4 text-sm md:text-base">提携クリニック</h4>
                      <div className="space-y-1 text-[10px] md:text-[11px] text-slate-500">
                        <p>日本のトップクラス医師</p>
                        <p>(MASTER CLASS)</p>
                        <p>高度な医療技術</p>
                      </div>
                    </div>

                    {/* Center: SML */}
                    <div className="w-[36%] bg-white border-2 border-[#b4975a] p-4 md:p-6 text-center flex flex-col items-center shadow-lg relative z-10">
                      <div className="w-14 h-14 md:w-20 md:h-20 bg-[#0f172a] rounded-full flex items-center justify-center mb-4 md:mb-6">
                        <img 
                          src="https://lh3.googleusercontent.com/d/19mi6RRwCtWuL54J9rIPHujsm-IZmXkeW" 
                          alt="SML" 
                          className="w-8 md:w-12 h-auto brightness-0 invert"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h4 className="font-bold text-[#0f172a] mb-2 md:mb-4 text-xs md:text-base">SSF Medical Link</h4>
                      <div className="space-y-1 text-[10px] md:text-[11px] text-[#b4975a] font-bold">
                        <p className="opacity-70">第三者認証機関</p>
                        <p>品質管理・適正価格</p>
                        <p>ロジスティクス</p>
                      </div>
                      {/* Connection Lines to Left/Right */}
                      <div className="absolute top-1/2 -left-3 md:-left-4 w-3 md:w-4 h-[2px] bg-[#b4975a]"></div>
                      <div className="absolute top-1/2 -right-3 md:-right-4 w-3 md:w-4 h-[2px] bg-[#b4975a]"></div>
                    </div>

                    {/* Right: Agents */}
                    <div className="w-[30%] bg-white border border-slate-200 p-4 md:p-6 text-center flex flex-col items-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
                        <Globe className="w-6 h-6 md:w-8 md:h-8 text-slate-900" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2 md:mb-4 text-sm md:text-base">海外エージェント<br />& 患者様</h4>
                      <div className="space-y-1 text-[10px] md:text-[11px] text-slate-500">
                        <p>日本医療へのアクセス</p>
                        <p>安心・安全な治療</p>
                        <p>適正な価格</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:gap-12 mb-16 md:mb-32">
                <div className="flex gap-5 md:gap-8 group">
                  <div className="text-3xl md:text-4xl font-serif text-slate-200 group-hover:text-brand-blue transition-colors duration-500 shrink-0">01</div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-4">医療品質の担保</h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      日本のトップクラス医師（MASTER CLASS）による高度な医療技術を提供。
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 md:gap-8 group">
                  <div className="text-3xl md:text-4xl font-serif text-slate-200 group-hover:text-brand-blue transition-colors duration-500 shrink-0">02</div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-4">適正価格の維持</h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      第三者認証機関として、品質管理と適正価格の維持を徹底します。
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 md:gap-8 group">
                  <div className="text-3xl md:text-4xl font-serif text-slate-200 group-hover:text-brand-blue transition-colors duration-500 shrink-0">03</div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-4">トラブル防止・仲裁</h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      ロジスティクス、翻訳、トラブル防止のガイドライン策定により、安心・安全な治療体験を提供。
                    </p>
                  </div>
                </div>
              </div>

              {/* SSF Holdings Background */}
              <div className="mb-16 md:mb-32">
                <p className="text-brand-blue font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6">Our Background</p>
                <h2 className="font-serif text-slate-900 mb-8 md:mb-12 tracking-tight leading-tight" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)' }}>
                  自費診療の360°をクリエイトする、<br />業界のリーディングカンパニー
                </h2>
                <p className="text-base md:text-xl text-slate-600 leading-relaxed mb-10 md:mb-20 max-w-3xl">
                  SMLを運営するのは、医師・クリニックが集まる場を20年以上運営してきたSSFホールディングスグループ。業界歴が長く、数多くの著名ドクターを見てきた私たちだからこそ、「誰が本物のトップドクターか」を知り,深い信頼関係を築いています。
                </p>

                <div className="grid grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-20">
                  {[
                    { label: '活動実績', value: 20, suffix: '年+', sub: '自費診療業界', highlight: true },
                    { label: '自費研online会員数', value: 19000, suffix: '名', sub: '医師・医療従事者', highlight: true },
                    { label: '美容クリニック開業累計支援実績', value: 150, suffix: '院+', sub: 'クリニック開業・経営', highlight: true },
                    { label: '年間イベント来場者数', value: 10000, suffix: '名', sub: '自費研フェスティバル等', highlight: true }
                  ].map((stat, i) => (
                    <div key={i} className={`p-5 md:p-10 rounded-2xl md:rounded-[2.5rem] border ${stat.highlight ? 'bg-white shadow-xl border-brand-blue/20' : 'bg-slate-50 border-slate-100'}`}>
                      <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 md:mb-2 leading-tight ${stat.highlight ? 'text-brand-blue' : 'text-slate-400'}`}>{stat.label}</p>
                      <p className="text-2xl md:text-4xl font-serif text-brand-blue mb-1 md:mb-2">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-[10px] md:text-xs text-slate-500 font-bold">{stat.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-12">
                  {[
                    { 
                      title: '自費研', 
                      desc: '日本最大級の自費診療メディア＆プラットフォーム。医師・歯科医師向けの情報発信、業界紙発行、「自費研フェスティバル」の企画運営。',
                      image: 'https://lh3.googleusercontent.com/d/1w27i_peIGA7fpax-b179PEiSUFuV9K4n'
                    },
                    { 
                      title: 'エスエス・エフ', 
                      desc: '美容クリニック専門のコンサルティング。開業支援、経営改善、集客支援など、150院以上の現場を知り尽くしたプロフェッショナル集団。',
                      image: 'https://lh3.googleusercontent.com/d/1T3YG3AQPvt8Bc5cYBZm1Q8LwCXu-f4Wg'
                    },
                    { 
                      title: 'エスエス・キャリア', 
                      desc: '業界最大級の医師・看護師・カウンセラー特化型人材紹介サービス。「美容医局」「美容整形ジョブ！」等の運営を通じ、医療現場の人材課題を解決。',
                      image: 'https://lh3.googleusercontent.com/d/1HjQ5y4l6-rxroOnG5w5dHx-AdL1ht1xH'
                    }
                  ].map((item, i) => (
                    <div key={i} className={`group flex flex-col ${i === 1 ? 'md:mt-24' : i === 2 ? 'md:-mt-20' : ''}`}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-5 md:mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:-translate-y-2">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 border border-black/5 rounded-sm"></div>
                      </div>
                      <div className="flex items-center gap-4 mb-3 md:mb-4">
                        <div className="w-6 md:w-8 h-[1.5px] bg-slate-900"></div>
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">{item.title}</h4>
                      </div>
                      <p className="text-slate-500 leading-relaxed text-sm font-light max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why SSF - 5 Reasons */}
              <div className="mb-16 md:mb-32">
                <h2 className="font-serif text-slate-900 mb-8 md:mb-12" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>なぜ私たちが医療インバウンドの問題を解決できるのか</h2>
                
                <div className="bg-slate-100 p-3 md:p-4 rounded-sm space-y-2">
                  {[
                    { id: '01', label: 'NETWORK', title: '業界の中心', desc: '19,000名以上の医師ネットワーク。自費研onlineを通じ、日本トップクラスの医師たちと直接的な信頼関係を構築済み。' },
                    { id: '02', label: 'KNOWLEDGE', title: '経営の知見', desc: '150院以上の開業・経営支援。クリニックの内情、オペレーション、課題を知り尽くしているからこそ、実効性のある連携が可能。' },
                    { id: '03', label: 'EXPERIENCE', title: '課題の当事者', desc: '20年間の業界牽引。業界の発展と共に歩んできたからこそ、インバウンド市場の歪み（不透明な価格構造）を誰よりも理解している。' },
                    { id: '04', label: 'BRAND', title: '信頼のブランド', desc: '最大級イベントの主催。「自費研フェスティバル」「Cutting Edge」など、医師・企業が集う場を運営し、業界からの絶大な信頼獲得。' },
                    { id: '05', label: 'PARTNERSHIP', title: 'グローバルパートナーシップ', desc: '伊藤忠商事 × JD.com（京東健康）。中国最大級のヘルスケアプラットフォームとの連携により、圧倒的な集客力と信頼性を担保。' }
                  ].map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row bg-white">
                      <div className="w-full md:w-[40%] px-4 py-4 md:p-8 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-slate-100">
                        <p className="text-brand-blue font-black tracking-[0.2em] uppercase text-[10px] md:mb-3">{item.label}</p>
                        <h4 className="text-sm md:text-base font-bold text-slate-900 tracking-tight leading-tight text-right md:text-left">{item.title}</h4>
                      </div>
                      <div className="w-full md:w-[60%] px-4 py-4 md:p-8 flex items-center">
                        <div className="flex gap-3 md:gap-4 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/30 mt-2 shrink-0"></div>
                          <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Promises Section */}
              <div className="mb-16 md:mb-32">
                <p className="text-brand-blue font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6">Our 3 Promises</p>
                <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-8 md:mb-16">SMLが提供する3つの価値</h3>
                <div className="space-y-8 md:space-y-16">
                  <div className="flex gap-5 md:gap-8">
                    <Globe className="w-8 h-8 md:w-10 md:h-10 text-brand-blue shrink-0" />
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-4">1. 可視化 (Visible)</h4>
                      <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                        ブラックボックス化していた「医療の質」と「価格」を可視化。患者が納得して選択できる環境を整えます。
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 md:gap-8">
                    <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-brand-blue shrink-0" />
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-4">2. 信頼 (Trusted)</h4>
                      <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                        SSFホールディングスグループが第三者認証機関として介在することで、エージェント・患者・クリニック間の信頼を担保します。
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 md:gap-8">
                    <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-brand-blue shrink-0" />
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-4">3. 最適 (Optimal)</h4>
                      <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                        単なる紹介に留まらず、来日前から帰国後まで、患者一人ひとりに最適な医療体験をトータルコーディネート。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrated Doctor Guide & Master Class Section */}
              <div className="mb-16 md:mb-32">
                <p className="text-brand-blue font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6">The Authority</p>
                <h2 className="font-serif text-slate-900 mb-8 md:mb-16 tracking-tight leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
                  医師の選定と「MASTER CLASS」
                </h2>

                <div className="relative bg-white rounded-sm p-5 md:p-10 lg:p-16 border border-slate-200 mb-8 md:mb-12 overflow-clip group">
                  {/* Rising Sun Background Element */}
                  <div className="absolute -top-48 -right-48 w-[700px] h-[700px] bg-[#e60012]/10 rounded-full z-0 pointer-events-none"></div>

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
                        className="inline-flex items-center gap-3 md:gap-4 px-5 md:px-8 py-3 md:py-4 bg-brand-blue text-white font-black text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-slate-900 transition-colors shadow-lg shadow-brand-blue/20"
                      >
                        Open Doctor Guide <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                      <div>
                        <p className="text-slate-600 text-base md:text-xl leading-relaxed mb-8 md:mb-12 font-light">
                          SSFホールディングスグループが20年以上にわたり培ってきた「本物のドクターの目利き」を形にした、エグゼクティブのためのドクター検索ガイド。
                          検診、予防医療、生殖医療など、各分野の真のスペシャリストをネットワークしています。
                        </p>
                      </div>
                      <div className="bg-slate-50 p-5 md:p-8 rounded-sm border border-slate-200 shadow-sm max-w-md mx-auto lg:mx-0">
                        <p className="text-base md:text-xl font-bold text-slate-900 uppercase tracking-widest border-b-2 border-brand-blue pb-3 mb-4 md:mb-6">厳格な選抜基準</p>
                        <ul className="grid grid-cols-1 gap-3 md:gap-4">
                          {[
                            '専門医資格の保有',
                            '学術活動の実績',
                            '業界内での評判',
                            '倫理観のコミット'
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm md:text-base text-slate-800 font-bold">
                              <CheckCircle2 className="text-brand-blue w-4 h-4 md:w-5 md:h-5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* MASTER CLASS Integration */}
                  <div className="relative z-10 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-slate-100">
                    <div className="bg-black p-8 md:p-12 lg:p-20 rounded-sm text-center text-white shadow-2xl relative overflow-hidden">
                      {/* Background Image */}
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
            </div>
          </section>

          {/* Inquiry CTA */}
          <section className="relative px-5 md:px-16 lg:px-24 py-20 md:py-40 bg-slate-900 text-white overflow-hidden">
            {/* Background Visual */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://lh3.googleusercontent.com/d/1AjYKPDgg19bcIUX-dntO1qsTwxMzGPTX" 
                alt="Japan Map Background" 
                className="absolute right-0 top-0 h-full w-auto object-cover opacity-30 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
              <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-red-600/20 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-3xl">
              <p className="text-brand-blue font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6">Contact Us</p>
              <h2 className="font-serif mb-8 md:mb-12 tracking-tight leading-tight" style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)' }}>
                日本の医療を、<br />
                <span className="text-brand-blue">世界のスタンダードへ。</span>
              </h2>
              <p className="text-base md:text-xl text-slate-400 leading-relaxed mb-10 md:mb-16 font-light">
                SSF Medical Linkとの提携や、サービスに関するお問い合わせはこちらから。
                私たちは、日本が誇る最高峰の医療を、世界中の患者様へ届ける架け橋となります。
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-4 md:gap-6 px-8 md:px-12 py-4 md:py-6 bg-brand-blue text-white font-black text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-brand-blue/20"
              >
                Inquiry Form <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </section>

          {/* Page Navigation */}
          <section className="px-5 md:px-16 lg:px-24 py-16 md:py-32 border-t border-slate-100">
            <div className="max-w-3xl">
              <div className="grid grid-cols-1 gap-5 md:gap-8">
                <Link to="/for-clinics" className="group p-6 md:p-12 bg-slate-50 rounded-2xl md:rounded-[3rem] border border-slate-100 hover:border-brand-blue transition-all">
                  <p className="text-brand-blue font-black tracking-[0.3em] uppercase text-[10px] mb-3 md:mb-4">Portal for Clinics</p>
                  <h4 className="text-2xl md:text-3xl font-serif text-slate-900 mb-3 md:mb-6 group-hover:text-brand-blue transition-colors">For Clinics</h4>
                  <p className="text-slate-500 mb-5 md:mb-8 text-sm md:text-base">提携医療機関向けのご案内。院内基盤構築から国際マーケティングまで、段階的な連携プランをご用意しています。</p>
                  <div className="flex items-center text-brand-blue font-bold text-xs md:text-sm uppercase tracking-widest">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
                <Link to="/for-agents" className="group p-6 md:p-12 bg-slate-50 rounded-2xl md:rounded-[3rem] border border-slate-100 hover:border-brand-teal transition-all">
                  <p className="text-brand-teal font-black tracking-[0.3em] uppercase text-[10px] mb-3 md:mb-4">Portal for Agents</p>
                  <h4 className="text-2xl md:text-3xl font-serif text-slate-900 mb-3 md:mb-6 group-hover:text-brand-teal transition-colors">For Agents</h4>
                  <p className="text-slate-500 mb-5 md:mb-8 text-sm md:text-base">エージェント企業向けのご案内。ワンストップで日本最高峰の医療ネットワークへアクセス可能なハブ機能を提供します。</p>
                  <div className="flex items-center text-brand-teal font-bold text-xs md:text-sm uppercase tracking-widest">
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
