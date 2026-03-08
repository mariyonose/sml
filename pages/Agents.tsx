
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { Language } from '../types';
import { CheckCircle2, ArrowRight, ShieldCheck, TrendingUp, Search, Languages, DoorClosed, FileText, Shuffle, Globe, Zap, BarChart3 } from 'lucide-react';

interface AgentsProps {
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

export const ForAgents: React.FC<AgentsProps> = ({ lang }) => {
  return (
    <div className="bg-white animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side - Visual & Title */}
        <aside className="w-full md:w-[40%] lg:w-[35%] md:h-screen md:sticky md:top-0 overflow-hidden bg-slate-900">
          <div className="relative h-[60vh] md:h-full w-full">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200" 
              alt="Business Partnership" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/80"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 lg:px-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-4 tracking-tighter opacity-90">
                AGENTS
              </h1>
              <div className="h-px w-24 bg-brand-blue mb-8"></div>
              <p className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
                エージェント向け
              </p>
              
              <div className="absolute bottom-12 left-12 md:left-16 flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
                <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">For Agents</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Side - Content */}
        <main className="w-full md:w-[60%] lg:w-[65%] bg-white">
          {/* Hero Section */}
          <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
            <div className="max-w-4xl">
              <p className="text-brand-blue font-black tracking-[0.4em] uppercase text-xs mb-6">For Agents & Partners</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-12 tracking-tight leading-tight break-keep">
                エージェント様への<br />インフラ提供とパートナーシップ
              </h2>
              <div className="space-y-6 max-w-3xl">
                <p className="text-xl md:text-2xl text-slate-900 font-bold leading-relaxed break-keep">
                  SSF Medical Linkが強力なバックエンド・インフラを提供し、<br />エージェント様のビジネスを加速させます。
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-light break-keep">
                  日本の自由診療市場には、海外エージェント様が直面する多くの「壁」が存在します。私たちは20年の実績を背景に、その壁を取り払い、透明性の高い取引環境を構築します。
                </p>
              </div>

              {/* Challenges Section */}
              <div className="mt-32">
                <div className="flex items-center gap-8 mb-12 overflow-hidden">
                  <motion.h2 
                    initial={{ x: "100%" }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-9xl font-serif text-slate-900 tracking-tighter uppercase opacity-80 leading-none"
                  >
                    Issue
                  </motion.h2>
                  <div className="h-[1.5px] flex-grow bg-slate-900/10"></div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 tracking-tight break-keep">
                  日本の「本物」の医療にアクセスする際の5つの壁
                </h3>

                <div className="bg-slate-100 p-4 rounded-sm space-y-2">
                  {[
                    { id: '01', label: 'INFORMATION', title: '情報のブラックボックス化', desc: '「誰が本当の名医か」がわからない。ネット上の情報は玉石混交で、広告と実力の見極めが困難。' },
                    { id: '02', label: 'LANGUAGE', title: '言語と文化の壁', desc: '予約、問診、同意書がすべて日本語。医療専門用語の翻訳が難しく、トラブルのリスクが高い。' },
                    { id: '03', label: 'EXCLUSIVE', title: '一見さんお断り', desc: 'トップドクターは紹介制や完全予約制が多く、新規エージェントからの直接連絡は門前払いされる。' },
                    { id: '04', label: 'OPERATIONS', title: '個別手配の限界', desc: 'クリニックごとに契約・送金・調整が必要。提携先が増えるほど業務負荷が指数関数的に増大する。' },
                    { id: '05', label: 'CROSS-SELL', title: 'クロスセルの断念', desc: '「再生医療も、顔の整形もしたい」患者の要望が多岐にわたる場合、複数のクリニックを横断して調整する術がない。' }
                  ].map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row bg-white">
                      <div className="w-full md:w-[35%] p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
                        <p className="text-brand-blue font-black tracking-[0.2em] uppercase text-[10px] mb-3">{item.label}</p>
                        <h4 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">{item.title}</h4>
                      </div>
                      <div className="w-full md:w-[65%] p-8 md:p-10 flex items-center">
                        <div className="flex gap-4 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/30 mt-2 shrink-0"></div>
                          <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="px-8 md:px-16 lg:px-24 py-32 bg-slate-50">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-8 mb-16 overflow-hidden">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="text-6xl md:text-9xl font-serif text-slate-900 tracking-tighter uppercase opacity-80 leading-none"
                >
                  Solution
                </motion.h2>
                <div className="h-[1.5px] flex-grow bg-slate-900/10"></div>
              </div>
              
              <div className="mb-20">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight break-keep">SMLをハブにする理由</h3>
                <p className="text-xl text-slate-600 font-light break-keep">SSFグループの20年の実績が、エージェント様の信頼の裏付けとなります。</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: '認定ドクターへの即時アクセス',
                    icon: <Zap className="w-6 h-6" />,
                    desc: '「一見さんお断り」のトップドクターへ、SMLのネットワークを通じて即座にアクセス。',
                    items: ['SSF認定ドクターの紹介', '優先予約枠の確保', 'ドクターとの直接連携']
                  },
                  {
                    title: '公正・透明な取引環境',
                    icon: <ShieldCheck className="w-6 h-6" />,
                    desc: '不透明なキックバックを排除。クリニック公認の適正価格で提供します。',
                    items: ['適正価格の保証', '透明な報酬体系', 'コンプライアンス遵守']
                  },
                  {
                    title: '煩雑な実務の完全代行',
                    icon: <BarChart3 className="w-6 h-6" />,
                    desc: '多言語での問診、決済、キャンセル管理まで。バックエンドを全て代行。',
                    items: ['多言語問診代行', '国際決済サポート', 'ロジスティクス管理']
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

          {/* Referral Fee Section */}
          <section className="px-8 md:px-16 lg:px-24 py-32 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="relative py-24 overflow-hidden">
                {/* Offset background block */}
                <div className="absolute top-0 right-0 w-[80%] h-full bg-slate-50 -z-10 rounded-sm"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-8 mb-12">
                    <h2 className="text-6xl md:text-9xl font-serif text-slate-900 tracking-tighter uppercase opacity-80 leading-none">Business</h2>
                    <div className="h-[1.5px] flex-grow bg-slate-900/10"></div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 tracking-tight break-keep">
                    透明性の高い成果報酬モデル
                  </h3>
                  
                  <p className="text-lg text-slate-600 leading-relaxed mb-16 max-w-2xl break-keep">
                    エージェント様の集客努力を正当に評価し、安定した収益機会を提供します。不透明な上乗せを排除し、持続可能なパートナーシップを築きます。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group">
                      <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center mb-6 group-hover:border-brand-blue group-hover:bg-brand-blue/5 transition-all duration-500">
                        <TrendingUp className="w-6 h-6 text-slate-400 group-hover:text-brand-blue transition-colors" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">収益の最大化</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-light">
                        高品質な医療提供による高い成約率と、富裕層クライアントのリピート・紹介によるLTVの向上。
                      </p>
                    </div>
                    <div className="group">
                      <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center mb-6 group-hover:border-brand-blue group-hover:bg-brand-blue/5 transition-all duration-500">
                        <ShieldCheck className="w-6 h-6 text-slate-400 group-hover:text-brand-blue transition-colors" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">リスクフリーな提携</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-light">
                        固定費なし。成約時のみ手数料が発生するため、リスクなく日本市場への展開を開始いただけます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Inquiry CTA */}
          <section className="relative px-8 md:px-16 lg:px-24 py-40 bg-slate-900 text-white overflow-hidden">
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
              <p className="text-brand-blue font-black tracking-[0.4em] uppercase text-xs mb-6">Contact Us</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-12 tracking-tight leading-tight">
                日本の医療で、世界を癒す。<br />
                <span className="text-brand-blue">共に広めるパートナーを募集。</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-16 font-light">
                SSF Medical Linkは、世界各国のエージェント企業様とのパートナーシップを推進しています。提携条件やサポート内容の詳細については、お気軽にお問い合わせください。
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-6 px-12 py-6 bg-brand-blue text-white font-black text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-brand-blue/20"
              >
                Inquiry Form <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          {/* Page Navigation */}
          <section className="px-8 md:px-16 lg:px-24 py-32 border-t border-slate-100">
            <div className="max-w-3xl">
              <div className="grid grid-cols-1 gap-8">
                <Link to="/for-clinics" className="group p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-brand-blue transition-all">
                  <p className="text-brand-blue font-black tracking-[0.3em] uppercase text-[10px] mb-4">Portal for Clinics</p>
                  <h4 className="text-3xl font-serif text-slate-900 mb-6 group-hover:text-brand-blue transition-colors">For Clinics</h4>
                  <p className="text-slate-500 mb-8">提携医療機関向けのご案内。院内基盤構築から国際マーケティングまで、段階的な連携プランをご用意しています。</p>
                  <div className="flex items-center text-brand-blue font-bold text-sm uppercase tracking-widest">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
                <Link to="/about" className="group p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-brand-blue transition-all">
                  <p className="text-brand-blue font-black tracking-[0.3em] uppercase text-[10px] mb-4">About SML</p>
                  <h4 className="text-3xl font-serif text-slate-900 mb-6 group-hover:text-brand-blue transition-colors">SMLとは</h4>
                  <p className="text-slate-500 mb-8">私たちのビジョンと選定基準について</p>
                  <div className="flex items-center text-brand-blue font-bold text-sm uppercase tracking-widest">
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
