"use client";

import { useEffect, useRef, useState } from "react";

const audiences = [
  {
    emoji: "🎓",
    title: "Students & Graduates",
    desc: "Build modern, in-demand skills early and stand out in any career path.",
    accent: "#6366f1",
    accentBg: "#eef2ff",
    tag: "Future-Ready",
    delay: 0,
  },
  {
    emoji: "💼",
    title: "Professionals (Any Field)",
    desc: "Improve productivity and decision-making without switching careers.",
    accent: "#ef4444",
    accentBg: "#fef2f2",
    tag: "Stay Relevant",
    delay: 80,
  },
  {
    emoji: "🔄",
    title: "Career Switchers",
    desc: "Step into data or AI-adjacent roles with a clear, structured roadmap.",
    accent: "#facc15",
    accentBg: "#fefce8",
    tag: "New Paths",
    delay: 160,
  },
  {
    emoji: "📊",
    title: "Managers & Founders",
    desc: "Understand AI well enough to lead teams and evaluate AI-driven work.",
    accent: "#0ea5e9",
    accentBg: "#e0f2fe",
    tag: "Lead Smarter",
    delay: 240,
  },
  {
    emoji: "🎨",
    title: "Creators & Marketers",
    desc: "Use generative AI responsibly and effectively in your creative workflow.",
    accent: "#10b981",
    accentBg: "#d1fae5",
    tag: "Create More",
    delay: 320,
  },
];

export default function WhoThisIsFor() {
  const [visible, setVisible] = useState<boolean[]>(new Array(audiences.length).fill(false));
  const [headerVis, setHeaderVis] = useState(false);
  const [footerVis, setFooterVis] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs: IntersectionObserver[] = [];

    const hObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeaderVis(true); }, { threshold: 0.2 });
    if (headerRef.current) hObs.observe(headerRef.current);
    obs.push(hObs);

    const fObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setFooterVis(true); }, { threshold: 0.2 });
    if (footerRef.current) fObs.observe(footerRef.current);
    obs.push(fObs);

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(p => { const n = [...p]; n[i] = true; return n; }), audiences[i].delay);
        }
      }, { threshold: 0.1 });
      o.observe(el);
      obs.push(o);
    });

    return () => obs.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        .wtif-root { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUpFast {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes emojiFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes tagSlide {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .header-anim { animation: fadeUp 0.7s ease both; }
        .card-anim   { animation: scaleIn 0.55s cubic-bezier(.22,1,.36,1) both; }
        .footer-anim { animation: fadeUpFast 0.6s ease both; }

        .shimmer-text {
          background: linear-gradient(90deg, #1a2e6b 0%, #3b5bdb 40%, #1a2e6b 60%, #0f1e4a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .accent-bar {
          transform-origin: left;
          animation: lineGrow 0.8s cubic-bezier(.22,1,.36,1) both 0.2s;
        }

        .tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #eff2ff;
          color: #1a2e6b;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 100px;
          border: 1px solid #c7d2fe;
        }

        .dot-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 22px 22px;
        }

        /* ── AUDIENCE CARD ── */
        .aud-card {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid #f1f5f9;
          padding: 28px;
          overflow: hidden;
          cursor: default;
          transition: transform 0.3s cubic-bezier(.22,1,.36,1),
                      box-shadow 0.3s,
                      border-color 0.3s;
        }
        .aud-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 24px 48px rgba(26,46,107,0.12);
        }

        /* corner accent glow on hover */
        .aud-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: 20px;
          pointer-events: none;
        }
        .aud-card:hover::before { opacity: 1; }

        /* top stripe */
        .card-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 20px 20px 0 0;
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(.22,1,.36,1);
        }
        .aud-card:hover .card-stripe { transform: scaleX(1); }

        /* emoji */
        .card-emoji {
          font-size: 32px;
          line-height: 1;
          display: inline-block;
          margin-bottom: 16px;
          transition: transform 0.3s;
        }
        .aud-card:hover .card-emoji {
          animation: emojiFloat 1.2s ease-in-out infinite;
        }

        /* audience tag badge */
        .aud-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 100px;
          opacity: 0;
          transform: translateX(8px);
          transition: opacity 0.3s, transform 0.3s;
        }
        .aud-card:hover .aud-tag {
          opacity: 1;
          transform: translateX(0);
        }

        /* arrow */
        .card-arrow {
          position: absolute;
          bottom: 24px;
          right: 24px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.3s, transform 0.3s;
        }
        .aud-card:hover .card-arrow {
          opacity: 1;
          transform: translateY(0);
        }

        /* wide card (spans 2 cols) */
        .wide-card .card-inner {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        /* ── FOOTER BANNER ── */
        .footer-banner {
          background: #0f1e4a;
          border-radius: 16px;
          padding: 20px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          position: relative;
          overflow: hidden;
        }
        .footer-banner::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #facc15, #ef4444, #6366f1);
        }
      `}</style>

      <section className="wtif-root relative bg-[#f7f5f0] py-5 px-6 md:px-12 lg:px-20 overflow-hidden">

        {/* dot bg */}
        <div className="dot-pattern absolute inset-0 opacity-50 pointer-events-none" />

        {/* ghost watermark */}
        <div className="pointer-events-none select-none absolute -top-2 right-0 font-display text-[clamp(70px,10vw,160px)] text-[#0f1e4a]/[0.025] leading-none uppercase whitespace-nowrap">
          For You
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* ── HEADER ── */}
          <div ref={headerRef} className={`mb-14 ${headerVis ? "header-anim" : "opacity-0"}`}>

            <div className="tag-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] inline-block" />
              Who This Is For
            </div>

            <div className="accent-bar h-0.5 w-12 bg-[#facc15] mb-6 rounded-full" />

            <h2 className="font-display text-[clamp(36px,5.5vw,60px)] leading-[0.9] uppercase text-[#0f1e4a] mb-4">
              Designed for people who{" "}
              <br className="hidden md:block" />
              don&apos;t call themselves{" "}
              <span className="shimmer-text">&quot;tech.&quot;</span>
            </h2>

            <p className="text-[#6b7280] text-sm font-light">
              If you can use a smartphone and Google, you can learn AI here.
            </p>
          </div>

          {/* ── CARD GRID ── */}
          {/* Row 1: 3 cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-5">
            {audiences.slice(0, 3).map((a, i) => (
              <div
                key={i}
                ref={el => { cardRefs.current[i] = el; }}
                className={`aud-card ${visible[i] ? "card-anim" : "opacity-0"}`}
                style={{ borderColor: hovered === i ? a.accent + "44" : undefined }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* hover glow bg */}
                <div
                  className="absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${a.accent}0a 0%, transparent 60%)`,
                    opacity: hovered === i ? 1 : 0,
                  }}
                />

                {/* top stripe */}
                <div className="card-stripe" style={{ background: a.accent }} />

                {/* audience tag */}
                <div
                  className="aud-tag"
                  style={{ background: a.accentBg, color: a.accent }}
                >
                  {a.tag}
                </div>

                {/* content */}
                <div className="relative z-10">
                  <div className="card-emoji">{a.emoji}</div>
                  <h3 className="font-semibold text-[#0f1e4a] text-base mb-2">{a.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed font-light pr-4">{a.desc}</p>
                </div>

                {/* arrow */}
                <div
                  className="card-arrow"
                  style={{ background: a.accentBg, color: a.accent }}
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 wide cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {audiences.slice(3).map((a, idx) => {
              const i = idx + 3;
              return (
                <div
                  key={i}
                  ref={el => { cardRefs.current[i] = el; }}
                  className={`aud-card wide-card ${visible[i] ? "card-anim" : "opacity-0"}`}
                  style={{ borderColor: hovered === i ? a.accent + "44" : undefined }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className="absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at 20% 50%, ${a.accent}0a 0%, transparent 55%)`,
                      opacity: hovered === i ? 1 : 0,
                    }}
                  />
                  <div className="card-stripe" style={{ background: a.accent }} />
                  <div className="aud-tag" style={{ background: a.accentBg, color: a.accent }}>{a.tag}</div>

                  <div className="card-inner relative z-10">
                    <div className="card-emoji shrink-0">{a.emoji}</div>
                    <div>
                      <h3 className="font-semibold text-[#0f1e4a] text-base mb-2">{a.title}</h3>
                      <p className="text-[#6b7280] text-sm leading-relaxed font-light">{a.desc}</p>
                    </div>
                  </div>

                  <div className="card-arrow" style={{ background: a.accentBg, color: a.accent }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── FOOTER BANNER ── */}
          <div
            ref={footerRef}
            className={footerVis ? "footer-anim" : "opacity-0"}
          >
            <div className="footer-banner">
              {/* left glow */}
              <div
                className="absolute left-0 top-0 w-48 h-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(250,204,21,0.08) 0%, transparent 70%)" }}
              />

              <p className="text-white/60 text-sm leading-relaxed relative z-10">
                If you can use a smartphone and Google, you can learn AI here.{" "}
                <span className="text-[#facc15] font-semibold">No prior tech experience required.</span>
              </p>

              <div className="flex items-center gap-3 shrink-0 relative z-10">
                <div className="hidden sm:flex items-center gap-2">
                  {["🎓","💼","🔄","📊","🎨"].map((e, i) => (
                    <span
                      key={i}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm border border-white/10"
                    >
                      {e}
                    </span>
                  ))}
                </div>
                <button className="px-6 py-3 bg-[#facc15] text-[#0f1e4a] text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#fde047] transition-all hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap">
                  Start Learning →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="mt-20 h-px w-full bg-linear-to-r from-transparent via-[#d1d5db] to-transparent" />
      </section>
    </>
  );
}