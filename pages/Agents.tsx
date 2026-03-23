
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from '../components/ScrollReveal';
import { Language } from '../types';
import { ArrowRight, ShieldCheck, TrendingUp, Zap, BarChart3, Search } from 'lucide-react';

interface AgentsProps {
  lang: Language;
}

export const ForAgents: React.FC<AgentsProps> = ({ lang }) => {
  return (
    <div className="bg-white animate-in fade-in duration-700 overflow-x-clip">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side - Visual & Title */}
        <aside className="w-full md:w-[40%] lg:w-[35%] 2xl:w-[30%] md:h-screen md:sticky md:top-0 overflow-hidden bg-slate-900">
          <div className="relative h-[45vw] min-h-[240px] max-h-[400px] md:h-full md:max-h-none w-full">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200" 
              alt="Business Partnership" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/80"></div>
            
            <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-5 md:px-10 lg:px-12 pb-6 md:pb-0">
              <h1 className="font-serif text-white mb-2 md:mb-4 tracking-tighter opacity-90" style={{ fontSize: 'clamp(2rem, 5vw, 6rem)' }}>
                AGENTS
              </h1>
              <div className="h-px w-16 md:w-24 bg-brand-blue mb-3 md:mb-8"></div>
              <p className="text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                <span className="text-white/60 font-light">for</span>エージェント
              </p>
              
              <div className="hidden md:flex absolute bottom-12 left-12 md:left-16 items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
                <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">For Agents</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Side - Content */}
        <main className="w-full md:w-[60%] lg:w-[65%] 2xl:w-[70%] bg-white min-w-0">
          {/* Hero Section */}
          <section className="px-5 md:px-10 lg:px-16 xl:px-24 py-12 md:py-24 lg:py-32">
            <div className="max-w-4xl xl:max-w-5xl">
              <ScrollReveal variant="fadeUp" delay={0}>
                <p className="text-brand-blue font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6">For Agents & Partners</p>
              </ScrollReveal>
              <ScrollReveal variant="maskReveal" delay={0.1}>
                <h2 className="font-serif text-slate-900 mb-8 md:mb-12 tracking-tight leading-tight" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.8rem)' }}>
                  エージェント様への<br />
                  インフラ提供とパートナーシップ
                </h2>
              </ScrollReveal>
              <div className="space-y-4 md:space-y-6 max-w-3xl">
                <p className="text-base md:text-xl lg:text-2xl text-slate-900 font-bold leading-relaxed">
                  SSF Medical Linkが強力なバックエンド・インフラを提供し、<br />エージェント様のビジネスを加速させます。
                </p>
                <p className="text-sm md:text-lg text-slate-600 leading-relaxed font-light">
                  日本の自由診療市場には、海外エージェント様が直面する多くの「壁」が存在します。私たちは20年の実績を背景に、その壁を取り払い、透明性の高い取引環境を構築します。
                </p>
              </div>

              {/* ISSUE Section */}
              <div className="mt-16 md:mt-32">
                <div className="flex items-center gap-4 md:gap-8 mb-8 md:mb-12 overflow-hidden">
                  <motion.h2 
                    initial={{ x: "100%" }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="font-serif text-slate-900 tracking-tighter uppercase opacity-80 leading-none"
                    style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}
                  >
                    Issue
                  </motion.h2>
                  <div className="h-[1.5px] flex-grow bg-slate-900/10"></div>
                </div>
                
                <ScrollReveal variant="fadeUp" delay={0.1}>
                  <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-8 md:mb-12 tracking-tight">
                    日本の「本物」の医療にアクセスする際の3つの壁
                  </h3>
                </ScrollReveal>

                <div className="bg-slate-100 p-4 rounded-sm space-y-2">
                  {[
                    {
                      id: '01',
                      label: 'TRUST',
                      title: '「本当に信頼できる名医」が見つからない',
                      bullets: [
                        '日本には多くの医師がいますが、技術の高さや実績を外から見極めるのは簡単ではありません。',
                        '患者様に自信を持って「この先生なら安心です」と紹介できる明確な基準がない。',
                        'エージェント様にとって、これが一番の不安要素となっています。',
                      ]
                    },
                    {
                      id: '02',
                      label: 'OPERATIONS',
                      title: 'クリニックごとの「やり取り」が大変',
                      bullets: [
                        '提携先が増えるほど、予約ルール・契約手続き・支払い調整が複雑になる。',
                        '事務作業の負担が大きく、患者様へのカウンセリングに集中できない。',
                        'バックオフィス業務に追われ、本来の営業活動が後回しになりがち。',
                      ]
                    },
                    {
                      id: '03',
                      label: 'CROSS-SELL',
                      title: '「プラスアルファ」の提案が難しい',
                      bullets: [
                        '単一の治療プランを案内するだけで終わってしまい、滞在全体の提案ができていない。',
                        '患者様のニーズをトータルで満たせず、成約の一歩手前で踏み切れないケースがある。',
                        '幅広い提案力の欠如が、リピート率の低下に繋がっている。',
                      ]
                    }
                  ].map((item) => (
                    <div key={item.id} className="bg-white p-5 md:p-8 lg:p-10">
                      <div className="mb-4 md:mb-5 pb-4 md:pb-5 border-b border-slate-100">
                        <p className="text-brand-blue font-black tracking-[0.2em] uppercase text-[10px] md:text-sm mb-1 md:mb-2">{item.label}</p>
                        <h4 className="text-base md:text-xl lg:text-2xl font-bold text-slate-900 tracking-tight leading-snug">{item.title}</h4>
                      </div>
                      <ul className="space-y-2 md:space-y-3">
                        {item.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex gap-3 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/40 mt-[0.45rem] shrink-0"></div>
                            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">{bullet}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="px-5 md:px-10 lg:px-16 xl:px-24 py-16 md:py-32 bg-slate-50">
            <div className="max-w-4xl xl:max-w-5xl mx-auto">
              <div className="flex items-center gap-8 mb-16 overflow-hidden">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="font-serif text-slate-900 tracking-tighter uppercase opacity-80 leading-none"
                  style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
                >
                  Solution
                </motion.h2>
                <div className="h-[1.5px] flex-grow bg-slate-900/10"></div>
              </div>
              
              <ScrollReveal variant="fadeUp" delay={0.05}>
                <div className="mb-8 md:mb-16">
                  <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">SOLUTION：3つの解決策</h3>
                </div>
              </ScrollReveal>

              <ScrollRevealGroup stagger={0.15}>
                {[
                  {
                    id: '1',
                    title: '独自の認定基準による「名医の可視化」',
                    icon: <Search className="w-6 h-6" />,
                    desc: '独自の認定基準に基づき、技術・人柄ともに最高峰の医師だけを厳選。エージェント様が迷うことなく、患者様へ「真の名医」を推奨できる環境を整えます。'
                  },
                  {
                    id: '2',
                    title: '全てがスムーズに完結する「ワンストップ窓口」',
                    icon: <Zap className="w-6 h-6" />,
                    desc: 'クリニックごとに異なる契約や予約、支払いなどの煩雑な実務をSMLが集約。事務負担を最小限に抑え、患者様へのカウンセリングに集中できる体制を提供します。'
                  },
                  {
                    id: '3',
                    title: '顧客満足度を最大化する「トータルプロデュース」',
                    icon: <BarChart3 className="w-6 h-6" />,
                    desc: '単一の治療に留まらず、滞在全体の満足度を高めるプランニングを支援。高品質な情報提供と丁寧なアフターケアにより、成約率とリピート率の向上を実現します。'
                  }
                ].map((plan, i) => (
                  <ScrollRevealItem key={plan.id}>
                    <div className="bg-white p-6 md:p-10 rounded-sm border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center text-sm font-black">
                          {plan.id}
                        </div>
                        <div className="w-10 h-10 bg-slate-50 text-brand-blue rounded-full flex items-center justify-center">
                          {plan.icon}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight leading-snug break-keep">{plan.title}</h4>
                      <p className="text-slate-500 text-base leading-relaxed flex-grow break-keep">
                        {plan.desc}
                      </p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </ScrollRevealGroup>
            </div>
          </section>

          {/* No Commission Banner */}
          <section className="relative overflow-hidden py-32 md:py-40">
            {/* Light geometric background */}
            <div className="absolute inset-0 bg-slate-50" />
            {/* Hexagon / diamond grid pattern */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.07]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="hex-pattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                  <polygon
                    points="30,2 58,17 58,47 30,62 2,47 2,17"
                    fill="none"
                    stroke="#0047AB"
                    strokeWidth="1"
                  />
                  <polygon
                    points="30,14 46,23 46,41 30,50 14,41 14,23"
                    fill="none"
                    stroke="#0047AB"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hex-pattern)" />
            </svg>
            {/* Diagonal lines accent */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.04]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="diag-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="20" stroke="#0047AB" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diag-pattern)" />
            </svg>
            {/* Radial glow center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />
            {/* Large decorative circles */}
            <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full border border-brand-blue/10" />
            <div className="absolute -top-12 -right-12 w-[260px] h-[260px] rounded-full border border-brand-blue/8" />
            <div className="absolute -bottom-20 -left-20 w-[320px] h-[320px] rounded-full border border-brand-blue/8" />
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />

            <div className="relative z-10 px-5 md:px-10 lg:px-16 xl:px-24">
              <div className="max-w-4xl xl:max-w-5xl mx-auto">
                <ScrollReveal variant="fadeUp" delay={0.1}>
                  <div className="text-center">
                     {/* Label */}
                    <p className="inline-block text-brand-blue font-black tracking-[0.5em] uppercase text-xs mb-8 border border-brand-blue/40 px-4 py-2">
                      Fee Structure
                    </p>
                    {/* Main heading */}
                    <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-slate-900 leading-tight tracking-tight mb-4">
                      エージェント様から
                    </p>
                    <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight tracking-tight mb-10">
                      <span
                        style={{
                          background: 'linear-gradient(90deg, #0047AB, #0369a1, #0D9488)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        手数料はいただきません。
                      </span>
                    </p>
                    {/* Divider */}
                    <div className="flex items-center justify-center gap-4 mb-10">
                      <div className="h-px w-16 bg-gradient-to-r from-transparent to-brand-blue/60" />
                      <div className="w-2 h-2 bg-brand-blue/60 rotate-45" />
                      <div className="h-px w-16 bg-gradient-to-l from-transparent to-brand-blue/60" />
                    </div>
                    {/* Description */}
                    <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto break-keep">
                      SMLへの参加・ご利用にあたって、エージェント様側に費用は一切発生しません。<br className="hidden md:block" />
                      安心してパートナーシップをご検討ください。
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Inquiry CTA */}
          <section className="relative px-5 md:px-10 lg:px-16 xl:px-24 py-20 md:py-40 bg-slate-900 text-white overflow-hidden">
            {/* Background Visual: Japan Map & Hinomaru */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://lh3.googleusercontent.com/d/1AjYKPDgg19bcIUX-dntO1qsTwxMzGPTX" 
                alt="Japan Map Background" 
                className="absolute right-0 top-0 h-full w-auto object-cover opacity-30 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              {/* Hinomaru (Rising Sun) Decorative Elements */}
              <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
              <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-red-600/20 rounded-full"></div>
              <div className="absolute right-[18%] top-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-red-600/5 rounded-full border border-red-600/10"></div>
              
              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-3xl">
              <p className="text-brand-blue font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6">Contact Us</p>
              <h2 className="font-serif mb-12 tracking-tight leading-[1.3] break-keep" style={{ fontSize: 'clamp(1.5rem, 3.4vw, 3.4rem)' }}>
                <span className="block mb-4">日本の医療で、世界を癒す。</span>
                <span className="text-brand-blue block">共に広めるパートナーを募集。</span>
              </h2>
              <p className="text-base md:text-xl text-slate-400 leading-relaxed mb-10 md:mb-16 font-light">
                SSF Medical Linkは、世界各国のエージェント企業様とのパートナーシップを推進しています。提携条件やサポート内容の詳細については、お気軽にお問い合わせください。
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-4 md:gap-6 px-8 md:px-12 py-4 md:py-6 bg-brand-blue text-white font-black text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-brand-blue/20"
              >
                Inquiry Form <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </section>

          {/* Page Navigation */}
          <section className="px-5 md:px-10 lg:px-16 xl:px-24 py-16 md:py-32 border-t border-slate-100">
            <div className="max-w-3xl xl:max-w-4xl">
              <div className="grid grid-cols-1 gap-5 md:gap-8">
                <Link to="/for-clinics" className="group p-6 md:p-12 bg-slate-50 rounded-2xl md:rounded-[3rem] border border-slate-100 hover:border-brand-blue transition-all">
                  <p className="text-brand-blue font-black tracking-[0.3em] uppercase text-[10px] md:text-sm mb-3 md:mb-4">Portal for Clinics</p>
                  <h4 className="text-2xl md:text-3xl font-serif text-slate-900 mb-3 md:mb-6 group-hover:text-brand-blue transition-colors">For Clinics</h4>
                  <p className="text-slate-500 mb-5 md:mb-8 text-sm md:text-base">提携医療機関向けのご案内。院内基盤構築から国際マーケティングまで、段階的な連携プランをご用意しています。</p>
                  <div className="flex items-center text-brand-blue font-bold text-xs md:text-sm uppercase tracking-widest">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
                <Link to="/about" className="group p-6 md:p-12 bg-slate-50 rounded-2xl md:rounded-[3rem] border border-slate-100 hover:border-brand-blue transition-all">
                  <p className="text-brand-blue font-black tracking-[0.3em] uppercase text-[10px] md:text-sm mb-3 md:mb-4">About SML</p>
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
