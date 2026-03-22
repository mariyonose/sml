import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const targets = [
  {
    id: 'patients',
    label: 'For Patients',
    labelJa: 'インバウンド患者様へ',
    tagline: '一生に一度の決断を、\n日本が誇る最高峰の技術とともに。',
    body: '言葉や文化の壁を超え、あなたが本当に求めていた「名医」との出会いと、心安らぐ医療体験を約束します。',
    image: '/images/targets/patients.jpg',
    accent: '#0047AB',
    number: '01',
    linkTo: '/doctors',
    linkLabel: 'Premium Doctor Guideを見る',
  },
  {
    id: 'clinics',
    label: 'For Clinics',
    labelJa: '提携クリニック様へ',
    tagline: '貴院の卓越した価値を、\n世界のスタンダードへ。',
    body: 'インバウンドの煩雑な準備やリスクを安心に変え、日本の名医が世界中の患者様から指名されるためにサポートします。',
    image: '/images/targets/clinics.jpg',
    accent: '#0D9488',
    number: '02',
    linkTo: '/for-clinics',
    linkLabel: 'クリニック向けページを見る',
  },
  {
    id: 'agents',
    label: 'For Agents',
    labelJa: 'パートナーエージェント様へ',
    tagline: '信頼をカタチにし、\n最高の満足を共に届ける。',
    body: '名医の可視化と手続きの一本化で、エージェント様の負担を解消。患者様が心から感動する、質の高い日本医療のインフラを提供します。',
    image: '/images/targets/agents.jpg',
    accent: '#7C3AED',
    number: '03',
    linkTo: '/agents',
    linkLabel: 'エージェント向けページを見る',
  },
];

export default function TargetMessage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // スマホはスクロール連動しない
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top;
      const scrollable = containerHeight - viewportHeight;
      const p = Math.max(0, Math.min(1, scrolled / scrollable));
      setProgress(p);
      const idx = Math.min(2, Math.floor(p * 3));
      setActiveIndex(idx);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const current = targets[activeIndex];

  const scrollToIndex = (i: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const scrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (i / 3) * scrollable + 1;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  // ===== スマホレイアウト（縦積みカード） =====
  if (isMobile) {
    return (
      <section className="bg-slate-900 py-12 px-0">
        {/* セクションヘッダー */}
        <div className="px-5 mb-8">
          <p className="text-xs tracking-[0.3em] font-medium uppercase mb-3 text-brand-blue">WHO WE SERVE</p>
          <h2 className="text-white font-bold text-xl leading-snug">
            インバウンド市場の橋渡し役として、<br />
            <span className="text-brand-blue">３者</span>をつなぎます。
          </h2>
        </div>

        {/* カード縦積み */}
        <div className="flex flex-col gap-0">
          {targets.map((t, i) => (
            <div key={t.id} className="relative overflow-hidden" style={{ height: '70vw', minHeight: '240px', maxHeight: '320px' }}>
              {/* 背景写真 */}
              <img
                src={t.image}
                alt={t.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* オーバーレイ */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.88) 100%)',
                }}
              />
              {/* 番号装飾 */}
              <div
                className="absolute top-2 right-3 font-black text-white/10 select-none pointer-events-none"
                style={{ fontSize: '5rem', lineHeight: 1 }}
              >
                {t.number}
              </div>
              {/* テキスト */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="px-2 py-0.5 text-xs font-bold tracking-widest uppercase text-white"
                    style={{ background: t.accent }}
                  >
                    {t.label}
                  </span>
                  <span className="text-white/50 text-xs">{t.labelJa}</span>
                </div>
                <h3
                  className="text-white font-bold leading-tight mb-3 whitespace-pre-line text-lg"
                  style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
                >
                  {t.tagline}
                </h3>
                <Link
                  to={t.linkTo}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white border border-white/40 hover:bg-white/10 transition-all duration-300"
                  style={{ backdropFilter: 'blur(4px)' }}
                >
                  <span>{t.linkLabel}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // ===== PCレイアウト（左右分割・スクロール連動） =====
  return (
    <section ref={containerRef} style={{ height: '300vh' }} className="relative">
      {/* スティッキーコンテナ */}
      <div className="sticky top-0 h-screen overflow-hidden flex">

        {/* ─── 左サイド：固定タイトルエリア ─── */}
        <div
          className="relative z-20 flex flex-col justify-center px-10 xl:px-12 2xl:px-16 flex-shrink-0"
          style={{
            width: 'clamp(300px, 32vw, 440px)',
            background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 100%)',
          }}
        >
          {/* アクセントライン（左端） */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-700"
            style={{ background: `linear-gradient(to bottom, transparent, ${current.accent}, transparent)` }}
          />

          {/* セクションラベル */}
          <p className="text-xs tracking-[0.3em] font-medium uppercase mb-6 transition-colors duration-700 whitespace-nowrap" style={{ color: current.accent }}>
            WHO WE SERVE
          </p>

          {/* メインタイトル */}
          <h2 className="text-white font-bold leading-snug mb-5" style={{ fontSize: 'clamp(1.15rem, 1.6vw, 1.55rem)' }}>
            インバウンド市場の
            <br />
            橋渡し役として、
            <br />
            <span className="transition-colors duration-700" style={{ color: current.accent }}>３者</span>
            をつなぎます。
          </h2>

          {/* 区切り線 */}
          <div className="w-10 h-0.5 mb-8 transition-colors duration-700" style={{ background: current.accent }} />

          {/* ナビゲーション */}
          <nav className="flex flex-col gap-5">
            {targets.map((t, i) => (
              <button
                key={t.id}
                onClick={() => scrollToIndex(i)}
                className="flex items-center gap-3 text-left group"
              >
                <div
                  className="flex-shrink-0 rounded-full transition-all duration-500"
                  style={{
                    width: i === activeIndex ? 10 : 6,
                    height: i === activeIndex ? 10 : 6,
                    background: i === activeIndex ? t.accent : 'rgba(255,255,255,0.25)',
                  }}
                />
                <div>
                  <span
                    className="block text-sm font-semibold transition-all duration-500 whitespace-nowrap"
                    style={{ color: i === activeIndex ? 'white' : 'rgba(255,255,255,0.35)' }}
                  >
                    {t.label}
                  </span>
                  {i === activeIndex && (
                    <span className="block text-xs mt-0.5 transition-all duration-500 whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {t.labelJa}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </nav>

          {/* プログレスバー */}
          <div className="mt-10">
            <div className="w-full h-px bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${progress * 100}%`, background: current.accent }}
              />
            </div>
            <div className="mt-2 text-xs text-white/25 text-right">{activeIndex + 1} / {targets.length}</div>
          </div>
        </div>

        {/* ─── 右サイド：写真フルカバー ─── */}
        <div className="relative flex-1 overflow-hidden">
          {/* 背景写真（AnimatePresenceで切り替え） */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0"
            >
              <img
                src={current.image}
                alt={current.label}
                className="w-full h-full object-cover"
              />
              {/* ダークオーバーレイ（テキスト可読性確保） */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.55) 80%, rgba(0,0,0,0.80) 100%)',
                }}
              />
              {/* 左端グラデーション（左サイドとの境界） */}
              <div
                className="absolute inset-y-0 left-0 w-24"
                style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.6), transparent)' }}
              />
            </motion.div>
          </AnimatePresence>

          {/* 大きな番号装飾（背景） */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + '-num'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.12 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute top-4 left-6 font-black text-white select-none pointer-events-none"
              style={{ fontSize: 'clamp(8rem, 18vw, 18rem)', lineHeight: 1 }}
            >
              {current.number}
            </motion.div>
          </AnimatePresence>

          {/* テキストオーバーレイ（左下） */}
          <div className="absolute inset-0 flex items-end p-10 xl:p-14 2xl:p-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + '-text'}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: 0.12 }}
                className="w-full max-w-2xl"
              >
                {/* ラベルバッジ */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="px-3 py-1 text-xs font-bold tracking-widest uppercase text-white"
                    style={{ background: current.accent }}
                  >
                    {current.label}
                  </span>
                  <span className="text-white/60 text-sm">{current.labelJa}</span>
                </div>

                {/* タグライン */}
                <h3
                  className="text-white font-bold leading-tight mb-5 whitespace-pre-line"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.8rem)', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
                >
                  {current.tagline}
                </h3>

                {/* 区切り線 */}
                <div className="w-14 h-0.5 mb-5" style={{ background: current.accent }} />

                {/* 本文 */}
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg mb-8" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                  {current.body}
                </p>

                {/* リンクボタン */}
                <Link
                  to={current.linkTo}
                  className="inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold text-white border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 group"
                  style={{ backdropFilter: 'blur(4px)' }}
                >
                  <span>{current.linkLabel}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
