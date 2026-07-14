"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "01",
    title: "Cloud Services",
    short: "Scalable cloud infrastructure",
    accent: "#0ea5e9",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bullets: ["Cloud Migration", "Multi-Cloud Management", "Serverless Architecture", "Cloud Security & Compliance"],
  },
  {
    id: "02",
    title: "AI & Analytics",
    short: "Intelligent business insights",
    accent: "#a855f7",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path d="M9.663 17h4.673M12 3a7 7 0 017 7c0 2.49-1.31 4.67-3.27 5.9L15 17H9l-.73-1.1A7 7 0 0112 3z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    bullets: ["Machine Learning Models", "Natural Language Processing", "Predictive Analytics", "AI Chatbots & Automation"],
  },
  {
    id: "03",
    title: "Cyber Security",
    short: "Protect your digital assets",
    accent: "#ef4444",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bullets: ["24/7 SOC Monitoring", "Penetration Testing", "Threat Intelligence", "Incident Response"],
  },
  {
    id: "04",
    title: "Software Development",
    short: "From idea to deployment",
    accent: "#10b981",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bullets: ["Custom Web Applications", "Mobile App Development", "SaaS Product Engineering", "API & System Integration"],
  },
  {
    id: "05",
    title: "Managed Services",
    short: "Proactive IT management",
    accent: "#f97316",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          stroke="currentColor" strokeWidth="1.6"/>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    bullets: ["24/7 Infrastructure Monitoring", "IT Helpdesk & Support", "Backup & Disaster Recovery", "Security Patch Management"],
  },
  {
    id: "06",
    title: "Resource Augmentation",
    short: "Scale your team instantly",
    accent: "#facc15",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bullets: ["Dedicated IT Resources", "On-Demand Professionals", "Rapid Team Scaling", "Flexible Engagement Models"],
  },
];

const trustBadges = [
  "15+ Years Enterprise Experience",
  "AI & Machine Learning",
  "Cloud Migration Experts",
  "24/7 SOC Security",
  "Microsoft · AWS · Google Cloud",
  "50% Faster Deployment",
  "40% Cost Reduction",
  "Vendor Neutral Solutions",
];

const stats = [
  { val: "15+", label: "Years Experience" },
  { val: "50%", label: "Faster Deployment" },
  { val: "40%", label: "Cost Reduction" },
  { val: "24/7", label: "Expert Support" },
];

export default function ServicesHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeService, setActiveService] = useState(0);
  const [tick, setTick] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.7, y: 0.3 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Auto-cycle active service
  useEffect(() => {
    const id = setInterval(() => {
      setActiveService(p => (p + 1) % services.length);
      setTick(p => p + 1);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Mouse tracking for right panel glow
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handle = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      setMousePos({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
    };
    hero.addEventListener("mousemove", handle);
    return () => hero.removeEventListener("mousemove", handle);
  }, []);

  // Canvas: animated hex grid + particles
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

      // Grid dots
      const spacing = 48;
      for (let x = 0; x < W; x += spacing) {
        for (let y = 0; y < H; y += spacing) {
          const wave = Math.sin(x * 0.015 + t) * Math.cos(y * 0.015 + t * 0.7);
          const alpha = 0.03 + wave * 0.025;
          if (alpha > 0) {
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(250,204,21,${alpha})`;
            ctx.fill();
          }
        }
      }

      // Floating orb particles
      for (let i = 0; i < 24; i++) {
        const x = ((Math.sin(i * 2.5 + t * 0.4) + 1) / 2) * W;
        const y = ((Math.cos(i * 1.9 + t * 0.25) + 1) / 2) * H;
        const r = 1.2 + Math.sin(i + t * 1.2) * 0.6;
        const alpha = 0.06 + Math.sin(i * 1.3 + t) * 0.04;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250,204,21,${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    const handleResize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", handleResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", handleResize); };
  }, []);

  const active = services[activeService];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        .bsh-root { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 16px 2px rgba(250,204,21,0.12); }
          50%       { box-shadow: 0 0 28px 5px rgba(250,204,21,0.25); }
        }
        @keyframes serviceSwap {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes barProgress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0 rgba(250,204,21,0.45); }
          70%  { box-shadow: 0 0 0 10px rgba(250,204,21,0); }
          100% { box-shadow: 0 0 0 0 rgba(250,204,21,0); }
        }
        @keyframes statPop {
          from { opacity: 0; transform: translateY(10px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes dotBlink {
          0%, 100% { opacity: 1; } 50% { opacity: 0.3; }
        }

        .bsh-1 { animation: fadeUp 0.7s ease both 0.05s; }
        .bsh-2 { animation: fadeUp 0.7s ease both 0.18s; }
        .bsh-3 { animation: fadeUp 0.7s ease both 0.32s; }
        .bsh-4 { animation: fadeUp 0.7s ease both 0.46s; }
        .bsh-5 { animation: fadeUp 0.7s ease both 0.60s; }
        .bsh-fade { animation: fadeIn 1s ease both 0.25s; }

        .shimmer-gold {
          background: linear-gradient(90deg, #facc15 0%, #fef08a 38%, #facc15 55%, #ca8a04 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .shimmer-white {
          background: linear-gradient(90deg, #ffffff 0%, #c7d2fe 40%, #ffffff 60%, #e0e7ff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4.5s linear infinite;
        }

        .cta-primary {
          position: relative; overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .cta-primary:hover::before { transform: translateX(100%); }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(250,204,21,0.4); }

        .cta-secondary {
          transition: background 0.2s, transform 0.2s;
        }
        .cta-secondary:hover { background: rgba(255,255,255,0.07); transform: translateY(-2px); }

        .card-glow { animation: borderGlow 3.5s ease-in-out infinite; }
        .marquee-track { animation: marquee 32s linear infinite; }

        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
        }

        /* ── SERVICE ROW ── */
        .svc-row {
          position: relative;
          display: flex; align-items: center; gap: 12px;
          padding: 11px 14px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          border: 1px solid transparent;
        }
        .svc-row:hover, .svc-row.active {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.06);
        }
        .svc-accent-bar {
          position: absolute; left: 0; top: 50%;
          width: 3px; height: 0; border-radius: 2px;
          transform: translateY(-50%);
          transition: height 0.35s cubic-bezier(.22,1,.36,1);
        }
        .svc-row.active .svc-accent-bar { height: 55%; }

        .svc-icon-wrap {
          width: 32px; height: 32px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.25s, color 0.25s;
          color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.04);
          flex-shrink: 0;
        }
        .svc-row.active .svc-icon-wrap, .svc-row:hover .svc-icon-wrap {
          color: var(--svc-accent);
          background: color-mix(in srgb, var(--svc-accent) 12%, transparent);
        }

        .svc-title-text {
          font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.35);
          transition: color 0.25s;
        }
        .svc-row.active .svc-title-text, .svc-row:hover .svc-title-text { color: #fff; }

        .svc-short-text {
          font-size: 10px; color: rgba(255,255,255,0.2);
          transition: color 0.25s; margin-left: auto; white-space: nowrap;
        }
        .svc-row.active .svc-short-text { color: rgba(255,255,255,0.4); }

        .progress-line {
          transform-origin: left;
          animation: barProgress 3s linear both;
        }

        /* ── RIGHT CARD ── */
        .detail-card {
          position: relative;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(8px);
          overflow: hidden;
        }

        .svc-swap { animation: serviceSwap 0.4s cubic-bezier(.22,1,.36,1) both; }

        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          animation: statPop 0.6s cubic-bezier(.22,1,.36,1) both;
        }
        .stat-num:nth-child(1) { animation-delay: 0.4s; }
        .stat-num:nth-child(2) { animation-delay: 0.55s; }
        .stat-num:nth-child(3) { animation-delay: 0.7s; }
        .stat-num:nth-child(4) { animation-delay: 0.85s; }

        .pulse-dot { animation: pulseRing 2s ease-in-out infinite; }
        .blink-dot { animation: dotBlink 1.5s ease-in-out infinite; }

        .float-card {
          animation: floatY 5s ease-in-out infinite;
        }
        .float-card:nth-child(2) { animation-delay: 1.6s; }
        .float-card:nth-child(3) { animation-delay: 3.0s; }

        /* rotating ring decoration */
        .ring-rotate {
          animation: rotateSlow 12s linear infinite;
        }

        .diagonal-bg {
          clip-path: polygon(0 0, 100% 0, 100% 88%, 58% 100%, 0 93%);
        }
      `}</style>

      <div className="bsh-root min-h-screen bg-[#050c1a] text-white overflow-hidden mt-20">

        

        {/* ── HERO BODY ── */}
        <div ref={heroRef} className="relative min-h-[calc(100vh-73px)] flex flex-col">

          {/* canvas */}
          <canvas ref={canvasRef} className="bsh-fade absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.55 }} />

          {/* noise */}
          <div className="noise-bg absolute inset-0 pointer-events-none" />

          {/* diagonal bg */}
          <div className="diagonal-bg absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(140deg, rgba(5,12,26,0.97) 0%, rgba(5,12,26,0.6) 100%)" }} />

          {/* radial glows */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(250,204,21,0.06) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${active.accent}0a 0%, transparent 70%)`, transition: "background 0.5s" }} />

          {/* cursor glow */}
          <div
            className="pointer-events-none absolute w-[400px] h-[400px] rounded-full transition-all duration-500 ease-out"
            style={{
              background: `radial-gradient(circle, ${active.accent}0d 0%, transparent 70%)`,
              left: `calc(${mousePos.x * 100}% - 200px)`,
              top: `calc(${mousePos.y * 100}% - 200px)`,
            }}
          />

          {/* ── BREADCRUMB ── */}
          <div className="bsh-1 relative z-10 flex items-center gap-2 px-8 md:px-16 pt-8 text-[10px] uppercase tracking-[0.22em] text-white/20 font-medium">
            <Link href="/" className="hover:text-white/40 transition-colors">Home</Link>
            <span className="text-white/15">/</span>
            <span className="text-[#facc15]/70">Our Services</span>
          </div>

          {/* ── MAIN GRID ── */}
          <div className="relative z-10 flex-1 grid lg:grid-cols-[1fr_480px] gap-10 px-8 md:px-16 pt-8 pb-10 items-center max-w-[1440px] mx-auto w-full">

            {/* ──────── LEFT ──────── */}
            <div>

              {/* live badge */}
              <div className="bsh-1 inline-flex items-center gap-3 mb-7">
                <span className="pulse-dot blink-dot w-2 h-2 rounded-full bg-[#facc15] inline-block" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#facc15] font-semibold">
                  Enterprise Technology Services
                </span>
                <span className="h-px w-10 bg-[#facc15]/35" />
              </div>

              {/* headline */}
              <h1 className="bsh-2 font-display text-[clamp(42px,6vw,60px)] leading-[0.88] uppercase mb-5">
                <span className="block text-white/18">Enterprise Services</span>
                <span className="block shimmer-white"></span>
                <span className="block text-white"></span>
                <span className="block shimmer-gold">That Drive Innovation.</span>
              </h1>

              {/* sub */}
              <p className="bsh-3 text-white/42 text-sm leading-relaxed max-w-[460px] mb-8 font-light">
                Transform your business with cutting edge AI, scalable cloud infrastructure,
                and comprehensive cybersecurity services from industry experts with 15+ years
                of proven enterprise delivery.
              </p>

              {/* ── SERVICE LIST ── */}
              <div className="bsh-4 mb-9 space-y-0.5">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className={`svc-row ${activeService === i ? "active" : ""}`}
                    style={{ "--svc-accent": s.accent } as React.CSSProperties}
                    onMouseEnter={() => { setActiveService(i); setTick(p => p + 1); }}
                  >
                    <div className="svc-accent-bar" style={{ background: s.accent }} />
                    <div className="svc-icon-wrap">{s.icon}</div>

                    <div className="flex-1 min-w-0">
                      <p className="svc-title-text">{s.title}</p>
                      {activeService === i && (
                        <div
                          className="mt-1 h-[2px] w-full max-w-[100px] rounded-full progress-line"
                          key={`prog-${tick}`}
                          style={{ background: s.accent }}
                        />
                      )}
                    </div>

                    <span className="svc-short-text hidden sm:block">{s.short}</span>

                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center ml-1 flex-shrink-0 transition-all duration-200"
                      style={{ background: activeService === i ? s.accent + "20" : "transparent" }}
                    >
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
                        <path d="M9 18l6-6-6-6" stroke={activeService === i ? s.accent : "rgba(255,255,255,0.15)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
 
            </div>

            {/* ──────── RIGHT ──────── */}
            <div className="bsh-fade flex flex-col gap-4">

              {/* ── ACTIVE SERVICE DETAIL CARD ── */}
              <div className="card-glow detail-card">

                {/* dynamic top stripe */}
                <div
                  className="h-[3px] w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${active.accent}, ${active.accent}44)` }}
                />

                {/* inner cursor glow */}
                <div
                  className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none transition-all duration-500"
                  style={{ background: `radial-gradient(circle, ${active.accent}18 0%, transparent 70%)`, transform: "translate(30%,-30%)" }}
                />

                {/* rotating ring decoration */}
                <div className="absolute bottom-6 right-6 w-20 h-20 pointer-events-none opacity-5">
                  <svg className="ring-rotate" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="36" stroke={active.accent} strokeWidth="1" strokeDasharray="4 6"/>
                  </svg>
                </div>

                <div className="relative z-10 p-7">

                  {/* service header */}
                  <div className="flex items-start gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
                      style={{ background: active.accent + "22", color: active.accent }}
                    >
                      {active.icon}
                    </div>
                    <div>
                      <p
                        className="svc-swap text-[10px] uppercase tracking-[0.22em] font-bold mb-0.5"
                        key={`label-${activeService}`}
                        style={{ color: active.accent }}
                      >
                        Service {active.id}
                      </p>
                      <h3
                        className="svc-swap font-display text-[clamp(24px,3vw,38px)] text-white uppercase leading-tight"
                        key={`title-${activeService}`}
                      >
                        {active.title}
                      </h3>
                    </div>
                  </div>

                  {/* capability bullets */}
                  <ul
                    className="svc-swap grid grid-cols-2 gap-2.5 mb-6"
                    key={`bullets-${activeService}`}
                  >
                    {active.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/45 text-xs font-light">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: active.accent }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* stats strip */}
                  <div className="grid grid-cols-4 gap-3 mb-6 pt-4 border-t border-white/[0.06]">
                    {stats.map((s, i) => (
                      <div key={i} className="text-center">
                        <p
                          className="stat-num text-2xl leading-none"
                          style={{ color: active.accent }}
                        >
                          {s.val}
                        </p>
                        <p className="text-[9px] uppercase tracking-widest text-white/25 mt-1 leading-tight">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  {/* <button
                    className="cta-primary w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
                    style={{
                      background: active.accent === "#facc15" ? "#facc15" : "#1a2e6b",
                      color: active.accent === "#facc15" ? "#050c1a" : "#fff",
                    }}
                  >
                    Learn More — {active.title} →
                  </button> */}

                  {/* corner deco */}
                  <div
                    className="absolute bottom-0 left-0 w-12 h-12 border-l border-b rounded-bl-[20px] pointer-events-none transition-all duration-500"
                    style={{ borderColor: active.accent + "25" }}
                  />
                </div>
              </div>

              {/* ── BOTTOM MINI CARDS ── */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: "🔒", label: "Security First", sub: "Every service" },
                  { icon: "☁️", label: "Multi-Cloud", sub: "AWS · Azure · GCP" },
                  { icon: "⚡", label: "Proven Results", sub: "50% faster deploy" },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="float-card rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="text-lg mb-1">{b.icon}</div>
                    <p className="text-white text-[11px] font-medium leading-tight">{b.label}</p>
                    <p className="text-white/25 text-[9px] mt-0.5">{b.sub}</p>
                  </div>
                ))}
              </div>

              {/* cloud logos row */}
              <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] px-5 py-3.5 flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 font-medium">Vendor Neutral ·</p>
                {["Microsoft", "AWS", "Google Cloud"].map((v, i) => (
                  <span key={i} className="text-[11px] font-semibold text-white/30 hover:text-white/60 transition-colors cursor-default">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── TRUST MARQUEE ── */}
          <div className="relative z-10 border-t border-white/[0.05] bg-[#facc15]/[0.02] py-4 overflow-hidden">
            <div className="flex">
              <div className="marquee-track flex shrink-0 gap-0">
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