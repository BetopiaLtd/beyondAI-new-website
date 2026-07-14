"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "11", label: "Comprehensive Modules" },
  { value: "4", label: "Real-World Projects" },
  { value: "1", label: "Certificate of Completion" },
  { value: "0", label: "Coding Experience Needed" },
];

const features = [
  "Start from zero: No programming background required.",
  "Learn by doing: Short lessons + guided practice + real examples.",
  "From basics to modern AI: ML, deep learning, NLP, LLMs, generative AI, and AI agents explained simply.",
  "Responsible AI included: Bias, privacy, and safe use built into every module.",
  "Clear results: You finish with projects and a certificate.",
];

const trustBadges = [
  "Beginner-friendly teaching style",
  "Practical projects, not theory-only",
  "Ethical & responsible AI emphasis",
  "Clear assessments and feedback",
  "Instructor & mentor support",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animated particle grid canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    const dots: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    const COUNT = 60;
    for (let i = 0; i < COUNT; i++) {
      dots.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = W;
        if (d.x > W) d.x = 0;
        if (d.y < 0) d.y = H;
        if (d.y > H) d.y = 0;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250, 204, 21, ${d.alpha})`;
        ctx.fill();
      }

      // Draw lines between nearby dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(250, 204, 21, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        .hero-root {
          font-family: 'DM Sans', sans-serif;
        }

        .font-display {
          font-family: 'Bebas Neue', sans-serif;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes countUp {
          from { opacity: 0; transform: translateY(12px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 16px 2px rgba(250,204,21,0.18); }
          50%       { box-shadow: 0 0 32px 6px rgba(250,204,21,0.38); }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .animate-fade-up-1  { animation: fadeUp 0.7s ease both 0.1s; }
        .animate-fade-up-2  { animation: fadeUp 0.7s ease both 0.25s; }
        .animate-fade-up-3  { animation: fadeUp 0.7s ease both 0.4s; }
        .animate-fade-up-4  { animation: fadeUp 0.7s ease both 0.55s; }
        .animate-fade-up-5  { animation: fadeUp 0.7s ease both 0.7s; }
        .animate-fade-in    { animation: fadeIn 1s ease both 0.3s; }

        .stat-card { animation: countUp 0.6s cubic-bezier(.22,1,.36,1) both; }
        .stat-card:nth-child(1) { animation-delay: 0.5s; }
        .stat-card:nth-child(2) { animation-delay: 0.65s; }
        .stat-card:nth-child(3) { animation-delay: 0.8s; }
        .stat-card:nth-child(4) { animation-delay: 0.95s; }

        .shimmer-text {
          background: linear-gradient(90deg, #facc15 0%, #fef08a 40%, #facc15 60%, #ca8a04 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .cta-primary {
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .cta-primary:hover::before { transform: translateX(100%); }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(250,204,21,0.45); }

        .cta-secondary {
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .cta-secondary:hover {
          background: rgba(255,255,255,0.07);
          transform: translateY(-2px);
        }

        .feature-item {
          transition: color 0.2s;
        }
        .feature-item:hover { color: #facc15; }

        .card-glow {
          animation: borderGlow 3s ease-in-out infinite;
        }

        .marquee-track { animation: marquee 28s linear infinite; }

        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
        }

        .diagonal-divider {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%, 0 85%);
        }

        .stat-number {
          font-family: 'Bebas Neue', sans-serif;
          line-height: 1;
        }
      `}</style>

      <div className="hero-root min-h-screen bg-[#050c1a] text-white overflow-hidden mt-20">

        {/* ── NAV ──────────────────────────────────────────── */}
        {/* <nav className="relative z-30 flex items-center justify-between px-8 py-5 border-b border-white/5">
          <span className="font-display text-2xl tracking-widest">
            <span className="text-white">Beyond</span>
            <span className="shimmer-text">AI</span>
          </span>

          <ul className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-white/50 font-medium">
            {["Learn", "Curriculum", "Projects", "Formats", "About", "FAQ", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors duration-200">{item}</a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <button className="cta-secondary px-5 py-2 text-xs uppercase tracking-widest border border-white/20 rounded-sm text-white/70 hover:text-white">
              Talk to Us
            </button>
            <button className="cta-primary px-5 py-2 text-xs uppercase tracking-widest bg-[#facc15] text-[#050c1a] font-bold rounded-sm">
              Get the Syllabus
            </button>
          </div>
        </nav> */}

        {/* ── HERO ─────────────────────────────────────────── */}
        <div className="relative min-h-[calc(100vh-73px)] flex flex-col">
          {/* Breadcrumb */}
          <div className="ph-1 relative z-10 flex items-center gap-2 px-8 md:px-16 pt-8 text-[10px] uppercase tracking-[0.22em] text-white/20 font-medium">
            <Link href="/" className="hover:text-white/40 transition-colors">Home</Link>
            <span className="text-white/15">/</span>
            <span className="text-[#facc15]/70">AI Education</span>
          </div>

          {/* canvas bg */}
          <canvas
            ref={canvasRef}
            className="animate-fade-in absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.6 }}
          />

          {/* noise overlay */}
          <div className="noise-overlay absolute inset-0 pointer-events-none" />

          {/* radial glow */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(250,204,21,0.07) 0%, transparent 70%)" }} />

          {/* diagonal color split */}
          <div className="diagonal-divider absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(6,18,42,0.95) 0%, rgba(5,12,26,0.7) 100%)" }} />

          {/* main content grid */}
          <div className="relative z-10 flex-1 grid lg:grid-cols-[1fr_420px] gap-12 px-8 md:px-16 pt-16 pb-10 items-center max-w-[1400px] mx-auto w-full">

            {/* LEFT COLUMN */}
            <div>

              {/* badge */}
              <div className="animate-fade-up-1 inline-flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-[#facc15]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#facc15] font-semibold">
                  No Coding Required
                </span>
              </div>

              {/* headline */}
              <h1 className="animate-fade-up-2 font-display text-[clamp(32px,7vw,60px)] leading-[0.92] uppercase mb-6">
                <span className="block text-white">AI for non technical</span>
                <span className="block shimmer-text">people clear,</span> 
                <span className="block text-white/40"> practical and job relevant.</span>
                <span className="block text-white/20"></span>
              </h1>

              {/* sub */}
              <p className="animate-fade-up-3 text-white/50 text-sm leading-relaxed max-w-md mb-8 font-light">
                Beyond AI teaches you how AI works, how to use it responsibly, and how to apply it
                to real tasks, without overwhelming jargon or heavy math.
              </p>

              {/* features */}
              <ul className="animate-fade-up-4 space-y-3 mb-10">
                {features.map((f, i) => (
                  <li key={i} className="feature-item flex items-start gap-3 text-white/55 text-xs leading-relaxed cursor-default">
                    <span className="mt-0.5 w-4 h-4 shrink-0 rounded-sm border border-[#facc15]/40 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4l2 2 4-4" stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              {/* <div className="animate-fade-up-5 flex flex-wrap gap-4">
                <button className="cta-primary px-8 py-4 bg-[#facc15] text-[#050c1a] text-xs font-bold uppercase tracking-widest rounded-sm">
                  Get the Syllabus
                </button>
                <button className="cta-secondary px-8 py-4 border border-white/20 text-white/70 text-xs uppercase tracking-widest rounded-sm">
                  View Curriculum (11 Modules)
                </button>
              </div> */}
            </div>

            {/* RIGHT COLUMN – stat card */}
            <div className="animate-fade-in">
              <div className="card-glow relative rounded-2xl border border-[#facc15]/20 bg-white/[0.03] backdrop-blur-sm p-8 overflow-hidden">

                {/* card inner glow */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(250,204,21,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

                <p className="text-xs uppercase tracking-[0.2em] text-white/35 mb-8 font-medium">
                  What you walk away with
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {stats.map((s, i) => (
                    <div key={i} className="stat-card group">
                      <div className="stat-number text-[clamp(48px,6vw,72px)] text-[#facc15] group-hover:scale-105 transition-transform duration-200 inline-block">
                        {s.value}
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1 leading-tight">
                        {s.label}
                      </p>
                      <div className="mt-3 h-px bg-linear-to-r from-[#facc15]/30 to-transparent" />
                    </div>
                  ))}
                </div>


<Link href="/contact">
                <button className="cta-primary w-full py-4 bg-[#1a2e6b] hover:bg-[#1e368a] text-white text-xs font-semibold uppercase tracking-widest rounded-lg transition-colors">
                  Get Started Today →
                </button>
</Link>

                {/* decorative corner */}
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-[#facc15]/20 rounded-bl-2xl pointer-events-none" />
              </div>
            </div>
          </div>

          {/* ── TRUST STRIP ──────────────────────────────── */}
          <div className="relative z-10 border-t border-white/5 bg-[#facc15]/[0.03] py-4 overflow-hidden">
            <div className="flex">
              <div className="marquee-track flex shrink-0 gap-0">
                {[...trustBadges, ...trustBadges].map((badge, i) => (
                  <span key={i} className="inline-flex items-center gap-3 px-8 text-[10px] uppercase tracking-[0.2em] text-white/35 whitespace-nowrap">
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