"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Users, Rocket, Globe, ArrowUpRight } from "lucide-react";

const trustBadges = [
  "AI-Driven Solutions",
  "Cloud Infrastructure",
  "Cybersecurity & SOC",
  "Endpoint Technologies",
  "Enterprise Automation",
  "Scalable & Secure",
  "Real Measurable Impact",
];

const stats = [
  { icon: <Users size={15} />, label: "5000+ Employees" },
  { icon: <Rocket size={15} />, label: "85000 Projects" },
  { icon: <Globe size={15} />, label: "5 Countries" },
];

export default function HomeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Particle network canvas — same style as other heroes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    const dots: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }[] = [];
    for (let i = 0; i < 55; i++) {
      dots.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.4 + 0.5,
        alpha: Math.random() * 0.45 + 0.08,
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
        ctx.fillStyle = `rgba(227, 68, 0, ${d.alpha})`;
        ctx.fill();
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x,
            dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(227,68,0,${0.07 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        .hh-root { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes shimmerOrange {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 16px 2px rgba(227,68,0,0.15); }
          50%       { box-shadow: 0 0 32px 6px rgba(227,68,0,0.32); }
        }
        @keyframes statPop {
          from { opacity: 0; transform: translateY(10px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0 rgba(227,68,0,0.45); }
          70%  { box-shadow: 0 0 0 10px rgba(227,68,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(227,68,0,0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        .hh-1 { animation: fadeUp 0.7s ease both 0.05s; }
        .hh-2 { animation: fadeUp 0.7s ease both 0.2s; }
        .hh-3 { animation: fadeUp 0.7s ease both 0.35s; }
        .hh-4 { animation: fadeUp 0.7s ease both 0.50s; }
        .hh-5 { animation: fadeUp 0.7s ease both 0.65s; }
        .hh-fi { animation: fadeIn 1s ease both 0.2s; }

        .shimmer-orange {
          background: linear-gradient(90deg, #E34400 0%, #ff7a3d 38%, #E34400 55%, #b33300 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerOrange 3s linear infinite;
        }
        .shimmer-white {
          background: linear-gradient(90deg, #fff 0%, #f5cdb4 40%, #fff 60%, #ffe0cc 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerOrange 4.5s linear infinite;
        }

        .cta-primary-hh {
          position: relative; overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-primary-hh::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .cta-primary-hh:hover::before { transform: translateX(100%); }
        .cta-primary-hh:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(227,68,0,0.45); }

        .cta-secondary-hh {
          transition: background 0.2s, transform 0.2s;
        }
        .cta-secondary-hh:hover { background: rgba(255,255,255,0.07); transform: translateY(-2px); }

        .stat-pill {
          animation: statPop 0.55s cubic-bezier(.22,1,.36,1) both;
        }
        .stat-pill:nth-child(1) { animation-delay: 0.5s; }
        .stat-pill:nth-child(2) { animation-delay: 0.62s; }
        .stat-pill:nth-child(3) { animation-delay: 0.74s; }

        .card-glow-hh { animation: borderGlow 3.5s ease-in-out infinite; }
        .marquee-hh { animation: marquee 28s linear infinite; }
        .pulse-hh { animation: pulseRing 2s ease-in-out infinite; }
        .line-grow { transform-origin: left; animation: lineGrow 0.8s cubic-bezier(.22,1,.36,1) both 0.3s; }

        .noise-hh {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
        }

        /* Image overlay gradient — dark on left, fades to reveal image on right */
        .img-overlay {
          background: linear-gradient(
            105deg,
            rgba(5, 12, 26, 0.97) 0%,
            rgba(5, 12, 26, 0.92) 20%,
            rgba(5, 12, 26, 0.82) 31%,
            rgba(5, 12, 26, 0.40) 55%,
            rgba(5, 12, 26, 0.00) 100%
          );
        }

        /* bottom gradient fade to blend with next section */
        .bottom-fade {
          background: linear-gradient(to bottom, transparent 90%, rgba(5,12,26,0.85) 100%);
        }

        .stat-card-right {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 16px;
          text-align: center;
          transition: background 0.2s, transform 0.2s;
        }
        .stat-card-right:hover {
          background: rgba(255,255,255,0.06);
          transform: translateY(-3px);
        }
      `}</style>

      <section id="about" className="hh-root">
        <div className="relative w-full min-h-screen overflow-hidden mt-12 bg-white">
          {/* ── BACKGROUND IMAGE ── */}
          <Image
            alt="Values"
            className="hh-fi absolute top-0 left-0 w-full h-full object-cover object-center pt-20 lg:pt-10 hidden xl:flex"
            src="/home3.png"
            width={1660}
            height={563}
            priority
          />

          {/* ── LAYERED OVERLAYS ── */}
          {/* Main directional gradient — dark left, reveal image right */}
          <div className="img-overlay absolute inset-0 pointer-events-none" />
          {/* Noise texture */}
          <div className="noise-hh absolute inset-0 pointer-events-none" />
          {/* Bottom fade */}
          <div className="bottom-fade absolute inset-0 pointer-events-none" />

          {/* ── PARTICLE CANVAS ── */}
          <canvas
            ref={canvasRef}
            className="hh-fi absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.45 }}
          />

          {/* ── RADIAL GLOWS ── */}
          <div
            className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(227,68,0,0.07) 0%, transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(227,68,0,0.04) 0%, transparent 70%)",
            }}
          />

          {/* ── MAIN CONTENT ── */}
          <div className="relative z-10 flex-1 grid lg:grid-cols-[1fr_400px] gap-10 px-8 md:px-16 pt-12 pb-10 items-center max-w-[1440px] mx-auto min-h-[calc(100vh-73px)]">
            {/* ──────── LEFT ──────── */}
            <div className="flex flex-col justify-center">
              {/* Live indicator */}
              <div className="hh-1 inline-flex items-center gap-3 mb-7">
                <span className="pulse-hh w-2 h-2 rounded-full bg-[#E34400] inline-block" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#E34400] font-semibold">
                  AI · Cloud · Cybersecurity · Endpoint
                </span>
                <span className="h-px w-10 bg-[#E34400]/35" />
              </div>

              {/* Stat pills */}
              <div className="hh-1 flex flex-wrap gap-2 mb-7">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="stat-pill flex items-center gap-2 bg-[#E34400] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg"
                  >
                    {s.icon}
                    {s.label}
                  </div>
                ))}
              </div>

              {/* Accent line */}
              <div className="line-grow h-0.5 w-12 bg-[#E34400] mb-6 rounded-full" />

              {/* Headline */}
              <h1 className="hh-2 font-display text-[clamp(52px,7vw,60px)] leading-[0.88] uppercase mb-6">
                <span className="block text-white">
                  Scale Your Business With
                </span>
                <span className="block shimmer-orange">
                  Intelligent, Secure, AI-Driven
                </span>
                <span className="block text-white">Solutions.</span>
              </h1>

              {/* Sub */}
              <p className="hh-3 text-white/45 text-sm leading-relaxed max-w-[500px] mb-10 font-light">
                Beyond AI delivers end-to-end AI, Cloud, Cybersecurity, and
                Endpoint technologies designed to accelerate growth, strengthen
                security, and automate complex workflows. Deploy
                enterprise-grade solutions faster, scale without limits, and
                unlock real measurable impact across your organization.
              </p>

              {/* CTAs */}
              {/* <div className="hh-4 flex flex-wrap gap-4">
                <button className="cta-primary-hh flex items-center gap-2 px-8 py-4 bg-[#E34400] text-white text-xs font-bold uppercase tracking-widest rounded-sm">
                  Request a Demo
                  <ArrowUpRight size={16} />
                </button>
                <button className="cta-secondary-hh flex items-center gap-2 px-8 py-4 border border-white/20 text-white/60 text-xs uppercase tracking-widest rounded-sm">
                  Explore Products
                </button>
              </div> */}
            </div>

            {/* ──────── RIGHT — stat card ──────── */}
            {/* comment out in the bottom section */}
          </div>

          {/* ── TRUST MARQUEE ── */}
          <div className="relative z-10 border-t border-white/[0.05] bg-[#E34400]/[0.02] py-4 overflow-hidden">
            <div className="flex">
              <div className="marquee-hh flex shrink-0 gap-0">
                {[...trustBadges, ...trustBadges].map((badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-3 px-8 text-[10px] uppercase tracking-[0.2em] text-white/28 whitespace-nowrap"
                  >
                    <span className="text-[#E34400]">✦</span>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* <div className="hh-fi hidden lg:flex flex-col gap-4">
           <div className="card-glow-hh relative rounded-2xl border border-[#E34400]/20 p-7 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                }}>
 
                <div className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: "linear-gradient(90deg, #E34400, #ff7a3d, #E34400)" }} />
 
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(227,68,0,0.1) 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />
 
                <div className="absolute bottom-4 right-4 w-16 h-16 pointer-events-none opacity-[0.06]">
                  <svg className="animate-spin" style={{ animationDuration: "18s" }} viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="28" stroke="#E34400" strokeWidth="1.2" strokeDasharray="4 7"/>
                  </svg>
                </div>

                <div className="relative z-10">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-white/30 font-semibold mb-6">
                    At a Glance
                  </p>
 
                  <div className="grid grid-cols-2 gap-4 mb-7">
                    {[
                      { val: "5K+", label: "Employees Worldwide" },
                      { val: "85K", label: "Projects Delivered" },
                      { val: "5", label: "Countries Served" },
                      { val: "15+", label: "Years Experience" },
                    ].map((s, i) => (
                      <div key={i} className="stat-card-right">
                        <p className="font-display text-[clamp(28px,3vw,40px)] leading-none text-[#E34400]">{s.val}</p>
                        <p className="text-[9px] uppercase tracking-widest text-white/30 mt-1 leading-tight">{s.label}</p>
                        <div className="mt-2 h-px bg-linear-to-r from-[#E34400]/30 to-transparent" />
                      </div>
                    ))}
                  </div>
 
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["AI Solutions", "Cloud", "Cybersecurity", "Endpoint", "Automation"].map((chip, i) => (
                      <span key={i} className="text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(227,68,0,0.12)", color: "#ff7a3d", border: "1px solid rgba(227,68,0,0.2)" }}>
                        {chip}
                      </span>
                    ))}
                  </div>
 
 
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-l border-b border-[#E34400]/20 rounded-bl-2xl pointer-events-none" />
                </div>
              </div>
 
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: "🔒", label: "Security First", sub: "Every solution" },
                  { icon: "☁️", label: "Multi-Cloud", sub: "AWS · Azure · GCP" },
                  { icon: "⚡", label: "Fast Deploy", sub: "50% faster" },
                ].map((b, i) => (
                  <div key={i} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center hover:bg-white/[0.06] transition-colors">
                    <div className="text-lg mb-1">{b.icon}</div>
                    <p className="text-white text-[11px] font-medium leading-tight">{b.label}</p>
                    <p className="text-white/25 text-[9px] mt-0.5">{b.sub}</p>
                  </div>
                ))}
              </div>
            </div> */
}
