"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const directors = [
  { id: "01", name: "President", dept: "Leadership", accent: "#facc15" },
  { id: "02", name: "Deputy Director", dept: "Executive", accent: "#0ea5e9" },
  { id: "03", name: "Board of Directors", dept: "Technology", accent: "#10b981" },
  // { id: "04", name: "Chief Technology Officer", dept: "Finance", accent: "#a855f7" }, 
];

const trustBadges = [
  "Executive Leadership",
  "Global Vision",
  "Strategic Direction",
  "Corporate Governance",
  "Innovation & Growth",
  "15+ Years Enterprise Experience",
  "Vendor Neutral Expertise",
];

export default function BoardOfDirectorsHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.65, y: 0.4 });

  // Auto-cycle
  useEffect(() => {
    const id = setInterval(() => {
      setActive(p => (p + 1) % directors.length);
      setTick(p => p + 1);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handle = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      setMousePos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
    };
    hero.addEventListener("mousemove", handle);
    return () => hero.removeEventListener("mousemove", handle);
  }, []);

  // Canvas — geometric diamond grid unique to this page
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.003;

      // Diamond / rotated-square grid
      const spacing = 56;
      for (let x = -spacing; x < W + spacing; x += spacing) {
        for (let y = -spacing; y < H + spacing; y += spacing) {
          const wave = Math.sin(x * 0.013 + t * 0.9) * Math.cos(y * 0.011 + t * 0.7);
          const alpha = 0.025 + wave * 0.018;
          if (alpha <= 0) continue;
          const s = 8 + wave * 3;
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(Math.PI / 4);
          ctx.beginPath();
          ctx.rect(-s / 2, -s / 2, s, s);
          ctx.strokeStyle = `rgba(250,204,21,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.restore();
        }
      }

      // Floating dots
      for (let i = 0; i < 28; i++) {
        const x = ((Math.sin(i * 2.3 + t * 0.38) + 1) / 2) * W;
        const y = ((Math.cos(i * 1.7 + t * 0.26) + 1) / 2) * H;
        const r = 1 + Math.sin(i * 1.1 + t) * 0.5;
        const alpha = 0.06 + Math.sin(i + t) * 0.04;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250,204,21,${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    const onResize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  const cur = directors[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        .bod-root { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        @keyframes bodFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bodFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes bodShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes bodMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes bodGlow {
          0%, 100% { box-shadow: 0 0 18px 3px rgba(250,204,21,0.12); }
          50%       { box-shadow: 0 0 32px 7px rgba(250,204,21,0.26); }
        }
        @keyframes bodBarGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes bodSwap {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bodPulse {
          0%   { box-shadow: 0 0 0 0 rgba(250,204,21,0.45); }
          70%  { box-shadow: 0 0 0 10px rgba(250,204,21,0); }
          100% { box-shadow: 0 0 0 0 rgba(250,204,21,0); }
        }
        @keyframes bodRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes bodCountUp {
          from { opacity: 0; transform: scale(0.85) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes bodAvatarIn {
          from { opacity: 0; transform: scale(0.7) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes bodFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }

        .bod-1 { animation: bodFadeUp 0.7s ease both 0.05s; }
        .bod-2 { animation: bodFadeUp 0.7s ease both 0.18s; }
        .bod-3 { animation: bodFadeUp 0.7s ease both 0.32s; }
        .bod-4 { animation: bodFadeUp 0.7s ease both 0.46s; }
        .bod-5 { animation: bodFadeUp 0.7s ease both 0.60s; }
        .bod-fi { animation: bodFadeIn 1s ease both 0.2s; }

        .shimmer-gold-bod {
          background: linear-gradient(90deg, #facc15 0%, #fef08a 38%, #facc15 55%, #ca8a04 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: bodShimmer 3s linear infinite;
        }
        .shimmer-white-bod {
          background: linear-gradient(90deg, #fff 0%, #e0e7ff 40%, #fff 60%, #c7d2fe 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: bodShimmer 4.5s linear infinite;
        }

        .bod-cta-p {
          position: relative; overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .bod-cta-p::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          transform: translateX(-100%); transition: transform 0.5s;
        }
        .bod-cta-p:hover::before { transform: translateX(100%); }
        .bod-cta-p:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(250,204,21,0.4); }

        .bod-cta-s {
          transition: background 0.2s, transform 0.2s;
        }
        .bod-cta-s:hover { background: rgba(255,255,255,0.07); transform: translateY(-2px); }

        .bod-card-glow { animation: bodGlow 3.5s ease-in-out infinite; }
        .bod-marquee   { animation: bodMarquee 30s linear infinite; }
        .bod-pulse     { animation: bodPulse 2s ease-in-out infinite; }
        .bod-rot       { animation: bodRotate 18s linear infinite; }
        .bod-swap      { animation: bodSwap 0.4s cubic-bezier(.22,1,.36,1) both; }
        .bod-float     { animation: bodFloat 5s ease-in-out infinite; }

        .noise-bod {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
        }
        .diag-bod {
          clip-path: polygon(0 0, 100% 0, 100% 86%, 55% 100%, 0 92%);
        }

        /* director row */
        .dir-row {
          position: relative;
          display: flex; align-items: center; gap: 12px;
          padding: 11px 14px; border-radius: 12px;
          cursor: pointer;
          transition: background 0.22s, border-color 0.22s;
          border: 1px solid transparent;
        }
        .dir-row:hover, .dir-row.dir-active {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.06);
        }
        .dir-bar {
          position: absolute; left: 0; top: 50%;
          width: 3px; height: 0; border-radius: 2px;
          transform: translateY(-50%);
          transition: height 0.35s cubic-bezier(.22,1,.36,1);
        }
        .dir-row.dir-active .dir-bar { height: 55%; }

        .dir-avatar {
          width: 36px; height: 36px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.25s;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px; line-height: 1;
        }

        .dir-name {
          font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.35);
          transition: color 0.22s;
        }
        .dir-row.dir-active .dir-name,
        .dir-row:hover .dir-name { color: #fff; }

        .dir-dept {
          font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase;
          color: rgba(255,255,255,0.18);
          transition: color 0.22s; margin-left: auto;
          white-space: nowrap;
        }
        .dir-row.dir-active .dir-dept { color: rgba(255,255,255,0.4); }

        /* stat card */
        .bod-stat {
          animation: bodCountUp 0.55s cubic-bezier(.22,1,.36,1) both;
        }
        .bod-stat:nth-child(1) { animation-delay: 0.4s; }
        .bod-stat:nth-child(2) { animation-delay: 0.52s; }
        .bod-stat:nth-child(3) { animation-delay: 0.64s; }

        /* avatar stack */
        .bod-avatar-item {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 2px solid #050c1a;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px; line-height: 1;
          animation: bodAvatarIn 0.5s cubic-bezier(.22,1,.36,1) both;
          margin-left: -8px;
        }
        .bod-avatar-item:first-child { margin-left: 0; }
        .bod-avatar-item:nth-child(1) { animation-delay: 0.5s; }
        .bod-avatar-item:nth-child(2) { animation-delay: 0.6s; }
        .bod-avatar-item:nth-child(3) { animation-delay: 0.7s; }
        .bod-avatar-item:nth-child(4) { animation-delay: 0.8s; }
        .bod-avatar-item:nth-child(5) { animation-delay: 0.9s; }

        .bod-progress {
          transform-origin: left;
          animation: bodBarGrow 2.8s linear both;
        }
      `}</style>

      <div className="bod-root min-h-screen bg-[#050c1a] text-white overflow-hidden mt-20 ">

         

        {/* ── HERO BODY ── */}
        <div ref={heroRef} className="relative min-h-[calc(100vh-73px)] flex flex-col">

          {/* canvas */}
          <canvas
            ref={canvasRef}
            className="bod-fi absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.5 }}
          />

          {/* noise */}
          <div className="noise-bod absolute inset-0 pointer-events-none" />

          {/* diagonal bg */}
          <div className="diag-bod absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(140deg, rgba(5,12,26,0.97) 0%, rgba(5,12,26,0.62) 100%)" }} />

          {/* radial glows */}
          <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(250,204,21,0.06) 0%, transparent 70%)" }} />
          <div
            className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none transition-all duration-700"
            style={{ background: `radial-gradient(circle, ${cur.accent}0b 0%, transparent 70%)` }}
          />

          {/* cursor glow */}
          <div
            className="pointer-events-none absolute w-[450px] h-[450px] rounded-full transition-all duration-500 ease-out"
            style={{
              background: `radial-gradient(circle, ${cur.accent}0c 0%, transparent 70%)`,
              left: `calc(${mousePos.x * 100}% - 225px)`,
              top: `calc(${mousePos.y * 100}% - 225px)`,
            }}
          />

          {/* breadcrumb */}
          <div className="bod-1 relative z-10 flex items-center gap-2 px-8 md:px-16 pt-8 text-[10px] uppercase tracking-[0.22em] text-white/20 font-medium">
            <Link href="/" className="hover:text-white/40 transition-colors">Home</Link>
            <span className="text-white/15">/</span> 
            <span className="text-[#facc15]/70">Board of Directors</span>
          </div>

          {/* ── MAIN GRID ── */}
          <div className="relative z-10 flex-1 grid lg:grid-cols-[1fr_480px] gap-10 px-8 md:px-16 pt-10 pb-10 items-center max-w-[1440px] mx-auto w-full">

            {/* ──── LEFT ──── */}
            <div>

              {/* badge */}
              <div className="bod-1 inline-flex items-center gap-3 mb-7">
                <span className="bod-pulse w-2 h-2 rounded-full bg-[#facc15] inline-block" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#facc15] font-semibold">
                  Corporate Governance
                </span>
                <span className="h-px w-10 bg-[#facc15]/35" />
              </div>

              {/* headline */}
              <h1 className="bod-2 font-display text-[clamp(42px,6vw,60px)] leading-[0.88] uppercase mb-5">
                <span className="block text-white/18">Meet Our Board of</span> 
                <span className="block shimmer-gold-bod">Directors &amp; Leaders.</span>
              </h1>

              {/* sub */}
              <p className="bod-3 text-white/42 text-sm leading-relaxed max-w-[460px] mb-9 font-light">
                The visionaries and strategists driving Beyond AI forward. Our board brings
                decades of combined experience across enterprise technology, cloud infrastructure,
                AI, cybersecurity, and global business leadership.
              </p>

              {/* director rows */}
              <div className="bod-4 mb-9 space-y-0.5">
                {directors.map((d, i) => (
                  <div
                    key={i}
                    className={`dir-row ${active === i ? "dir-active" : ""}`}
                    onMouseEnter={() => { setActive(i); setTick(t => t + 1); }}
                  >
                    <div className="dir-bar" style={{ background: d.accent }} />

                    {/* avatar circle */}
                    <div
                      className="dir-avatar"
                      style={{
                        background: active === i ? d.accent + "22" : "rgba(255,255,255,0.04)",
                        color: d.accent,
                      }}
                    >
                      {d.id}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="dir-name">{d.name}</p>
                      {active === i && (
                        <div
                          className="mt-1 h-[2px] w-24 rounded-full bod-progress"
                          key={`p-${tick}`}
                          style={{ background: d.accent }}
                        />
                      )}
                    </div>

                    {/* <span className="dir-dept hidden sm:block">{d.dept}</span> */}

                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center ml-1 flex-shrink-0 transition-all"
                      style={{ background: active === i ? d.accent + "20" : "transparent" }}
                    >
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
                        <path d="M9 18l6-6-6-6" stroke={active === i ? d.accent : "rgba(255,255,255,0.15)"}
                          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              {/* <div className="bod-5 flex flex-wrap gap-4">
                <button className="bod-cta-p px-8 py-4 bg-[#facc15] text-[#050c1a] text-xs font-bold uppercase tracking-widest rounded-sm">
                  View Full Profiles
                </button>
                <button className="bod-cta-s px-8 py-4 border border-white/18 text-white/55 text-xs uppercase tracking-widest rounded-sm">
                  Corporate Governance
                </button>
              </div> */}
            </div>

            {/* ──── RIGHT ──── */}
            <div className="bod-fi flex flex-col gap-4">

              {/* main showcase card */}
              <div className="bod-card-glow relative rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm overflow-hidden">

                {/* dynamic top stripe */}
                <div
                  className="h-[3px] w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${cur.accent}, ${cur.accent}44)` }}
                />

                {/* inner glow */}
                <div
                  className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none transition-all duration-500"
                  style={{
                    background: `radial-gradient(circle, ${cur.accent}18 0%, transparent 70%)`,
                    transform: "translate(30%,-30%)",
                  }}
                />

                {/* rotating ring decoration */}
                <div className="absolute bottom-5 right-5 w-20 h-20 pointer-events-none opacity-[0.06]">
                  <svg className="bod-rot" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="36" stroke={cur.accent} strokeWidth="1" strokeDasharray="4 6"/>
                  </svg>
                </div>

                <div className="relative z-10 p-7">

                  {/* role label + number */}
                  <div key={`meta-${active}`} className="bod-swap flex items-start justify-between mb-5">
                    <div>
                      <p
                        className="text-[10px] uppercase tracking-[0.22em] font-bold mb-1"
                        style={{ color: cur.accent }}
                      >
                        Director {cur.id}
                      </p>
                      <h3 className="font-display text-[clamp(24px,3vw,40px)] text-white uppercase leading-tight">
                        {cur.name}
                      </h3>
                      {/* <p className="text-white/35 text-xs mt-1 uppercase tracking-widest">{cur.dept} Division</p> */}
                    </div>

                    {/* large decorative number */}
                    <span
                      className="font-display text-[80px] leading-none opacity-10 select-none"
                      style={{ color: cur.accent }}
                    >
                      {cur.id}
                    </span>
                  </div>

                  {/* divider */}
                  <div className="h-px w-full bg-white/[0.06] mb-5" />

                  {/* stat row */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { val: "6", label: "Board Members" },
                      { val: "15+", label: "Yrs Combined" },
                      { val: "4", label: "Global Offices" },
                    ].map((s, i) => (
                      <div key={i} className="bod-stat text-center p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                        <p className="font-display text-3xl leading-none" style={{ color: cur.accent }}>{s.val}</p>
                        <p className="text-[9px] uppercase tracking-widest text-white/28 mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* governance pillars */}
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/28 font-semibold mb-3">Governance Pillars</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Strategic Vision", "Risk Oversight", "Financial Integrity", "Innovation", "Ethics & Compliance"].map((p, i) => (
                      <span
                        key={i}
                        className="text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: cur.accent + "18", color: cur.accent, border: `1px solid ${cur.accent}30` }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* avatar stack */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex">
                      {directors.map((d, i) => (
                        <div
                          key={i}
                          className="bod-avatar-item"
                          style={{ background: d.accent + "28", color: d.accent, borderColor: "#050c1a" }}
                          title={d.name}
                        >
                          {d.id}
                        </div>
                      ))}
                    </div>
                    <p className="text-white/35 text-xs font-light">All {directors.length} board members</p>
                  </div>

                  {/* <button
                    className="bod-cta-p w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest"
                    style={{
                      background: cur.accent === "#facc15" ? "#facc15" : "#1a2e6b",
                      color: cur.accent === "#facc15" ? "#050c1a" : "#fff",
                    }}
                  >
                    View Full Profile — {cur.name} →
                  </button> */}

                  {/* corner deco */}
                  <div
                    className="absolute bottom-0 left-0 w-12 h-12 border-l border-b rounded-bl-2xl pointer-events-none transition-all duration-500"
                    style={{ borderColor: cur.accent + "28" }}
                  />
                </div>
              </div>

              {/* bottom mini badges */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: "🏛️", label: "Governance", sub: "Corporate standards" },
                  { icon: "🌍", label: "Global Reach", sub: "4 countries" },
                  { icon: "🎯", label: "Strategic", sub: "Vision-led growth" },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="bod-float rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center hover:bg-white/[0.06] transition-colors"
                    style={{ animationDelay: `${i * 0.8}s` }}
                  >
                    <div className="text-xl mb-1">{b.icon}</div>
                    <p className="text-white text-[11px] font-medium leading-tight">{b.label}</p>
                    <p className="text-white/25 text-[9px] mt-0.5">{b.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* trust marquee */}
          <div className="relative z-10 border-t border-white/[0.05] bg-[#facc15]/[0.02] py-4 overflow-hidden">
            <div className="flex">
              <div className="bod-marquee flex shrink-0 gap-0">
                {[...trustBadges, ...trustBadges].map((badge, i) => (
                  <span key={i} className="inline-flex items-center gap-3 px-8 text-[10px] uppercase tracking-[0.2em] text-white/28 whitespace-nowrap">
                    <span className="text-[#facc15]">✦</span>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}