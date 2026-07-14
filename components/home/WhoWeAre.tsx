"use client";

import { useEffect, useRef, useState } from "react";

const whoWeAreData = [
  {
    video: "/videos/home/1.mp4",
    title: "Delivering secure, cloud-native, and AI-powered software platforms",
    id: "01",
    label: "Platform",
    tag: "Cloud-Native",
    accent: "#E34400",
  },
  {
    video: "/videos/home/3.mp4",
    title: "Expertise in Cloud, AI, Cybersecurity, and enterprise-grade products",
    id: "02",
    label: "Expertise",
    tag: "Enterprise AI",
    accent: "#0ea5e9",
  },
  {
    video: "/videos/home/2.mp4",
    title: "Vendor-neutral, multi-cloud solutions across Microsoft, AWS & Google Cloud",
    id: "03",
    label: "Multi-Cloud",
    tag: "Vendor-Neutral",
    accent: "#10b981",
  },
];

export default function WhoWeAre() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [vis, setVis] = useState(false);
  const [cardVis, setCardVis] = useState([false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) sObs.observe(sectionRef.current);

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting)
          setTimeout(() => setCardVis(p => {
            const n = [...p]; n[i] = true; return n;
          }), i * 140);
      }, { threshold: 0.08 });
      o.observe(el);
    });

    return () => sObs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        .wwa-root { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        @keyframes wwaFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wwaCardReveal {
          from { opacity: 0; transform: translateY(36px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes wwaShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes wwaLineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes wwaBarGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes wwaScan {
          0%   { top: -80px; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes wwaRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .wwa-hdr     { animation: wwaFadeUp 0.7s ease both; }
        .wwa-card-in { animation: wwaCardReveal 0.6s cubic-bezier(.22,1,.36,1) both; }

        .wwa-shimmer-blue {
          background: linear-gradient(90deg, #1a2e6b 0%, #3b5bdb 38%, #1a2e6b 60%, #0f1e4a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: wwaShimmer 4s linear infinite;
        }

        .wwa-accent-bar {
          transform-origin: left;
          animation: wwaLineGrow 0.8s cubic-bezier(.22,1,.36,1) both 0.2s;
        }

        .wwa-tag-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: #eff2ff; color: #1a2e6b;
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          font-weight: 600; padding: 5px 12px; border-radius: 100px;
          border: 1px solid #c7d2fe;
        }

        .wwa-dots {
          background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* ── VIDEO CARD ── */
        .wwa-vid-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid rgba(255,255,255,0.06);
          aspect-ratio: 6 / 5;
          transition:
            transform 0.38s cubic-bezier(.22,1,.36,1),
            box-shadow 0.38s,
            border-color 0.35s;
          cursor: default;
        }
        .wwa-vid-card:hover {
          transform: translateY(-10px) scale(1.015);
        }

        .wwa-vid-card video {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.65s cubic-bezier(.22,1,.36,1);
        }
        .wwa-vid-card:hover video { transform: scale(1.07); }

        .wwa-vid-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(5,12,26,0.98) 0%,
            rgba(5,12,26,0.78) 38%,
            rgba(5,12,26,0.38) 68%,
            rgba(5,12,26,0.12) 100%
          );
          transition: background 0.38s;
        }
        .wwa-vid-card:hover .wwa-vid-overlay {
          background: linear-gradient(
            to top,
            rgba(5,12,26,1.0) 0%,
            rgba(5,12,26,0.88) 45%,
            rgba(5,12,26,0.52) 72%,
            rgba(5,12,26,0.18) 100%
          );
        }

        /* top stripe */
        .wwa-stripe {
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; z-index: 10;
          transform-origin: left; transform: scaleX(0);
          transition: transform 0.45s cubic-bezier(.22,1,.36,1);
        }
        .wwa-vid-card:hover .wwa-stripe { transform: scaleX(1); }

        /* ghost number */
        .wwa-ghost {
          position: absolute; top: 14px; left: 18px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 100px; line-height: 1;
          color: transparent; -webkit-text-stroke: 1px;
          opacity: 0.04; pointer-events: none;
          user-select: none; z-index: 5;
          transition: opacity 0.3s;
        }
        .wwa-vid-card:hover .wwa-ghost { opacity: 0.10; }

        /* scan line */
        .wwa-scan {
          position: absolute; left: 0; right: 0;
          height: 70px; z-index: 6; pointer-events: none;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.035), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .wwa-vid-card:hover .wwa-scan {
          opacity: 1;
          animation: wwaScan 2.4s ease-in-out infinite;
        }

        /* rotating ring */
        .wwa-ring {
          position: absolute; top: 14px; right: 14px;
          width: 38px; height: 38px;
          opacity: 0; z-index: 10;
          transition: opacity 0.3s;
        }
        .wwa-vid-card:hover .wwa-ring { opacity: 0.28; }
        .wwa-ring-rot { animation: wwaRotate 14s linear infinite; }

        /* corner deco */
        .wwa-corner {
          position: absolute; bottom: 0; right: 0;
          width: 36px; height: 36px;
          border-right: 1px solid; border-bottom: 1px solid;
          border-radius: 0 0 20px 0;
          opacity: 0; z-index: 10;
          transition: opacity 0.3s;
        }
        .wwa-vid-card:hover .wwa-corner { opacity: 0.22; }

        /* content */
        .wwa-vid-content {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          justify-content: flex-end;
          padding: 24px; z-index: 20;
        }

        .wwa-meta {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 10px;
        }
        .wwa-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px; line-height: 1;
          color: rgba(255,255,255,0.25);
          transition: color 0.25s;
        }
        .wwa-vid-card:hover .wwa-num { color: rgba(255,255,255,0.55); }

        .wwa-badge {
          font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase;
          font-weight: 700; padding: 2px 9px; border-radius: 100px;
          opacity: 0; transform: translateX(-10px);
          transition: opacity 0.3s 0.05s, transform 0.3s 0.05s;
        }
        .wwa-vid-card:hover .wwa-badge { opacity: 1; transform: translateX(0); }

        .wwa-label {
          font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase;
          font-weight: 700; margin-bottom: 8px;
          transition: color 0.3s;
        }

        .wwa-title {
          font-size: clamp(15px, 1.5vw, 19px);
          font-weight: 500; line-height: 1.45;
          color: rgba(255,255,255,0.55);
          transition: color 0.3s;
        }
        .wwa-vid-card:hover .wwa-title { color: #fff; }

        .wwa-bar {
          height: 2px; border-radius: 2px; margin-top: 14px;
          transform-origin: left; transform: scaleX(0);
        }
        .wwa-vid-card:hover .wwa-bar {
          animation: wwaBarGrow 0.5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .wwa-btn {
          position: relative; overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .wwa-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%);
          transform: translateX(-100%); transition: transform 0.5s;
        }
        .wwa-btn:hover::before { transform: translateX(100%); }
        .wwa-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(15,30,74,0.25); }
      `}</style>

      <section
        ref={sectionRef}
        className="wwa-root relative bg-[#f7f5f0] py-16 lg:py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* dot bg */}
        <div className="wwa-dots absolute inset-0 opacity-50 pointer-events-none" />

        {/* ghost watermark */}
        <div className="pointer-events-none select-none absolute top-0 right-0 font-display text-[clamp(70px,11vw,170px)] text-[#0f1e4a]/[0.025] leading-none uppercase whitespace-nowrap">
          Who We Are
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">

          {/* ── HEADER ── */}
          <div className={`mb-14 ${vis ? "wwa-hdr" : "opacity-0"}`}>
            <div className="wwa-tag-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] inline-block" />
              Who We Are
            </div>

            <div className="wwa-accent-bar h-0.5 w-12 bg-[#facc15] mb-6 rounded-full" />

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="font-display text-[clamp(44px,6vw,60px)] leading-[0.9] uppercase text-[#0f1e4a] mb-4">
                  A Global IT {' '}
                  <span className="wwa-shimmer-blue">Powerhouse</span><br />
                  <span className="text-[#9ca3af]">For Secure,</span>{" "}
                  Scalable {' '}
                  <span className="text-[#9ca3af]">Platforms.</span>
                </h2>

                {/* ── original subtitle text ── */}
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg font-light">
                  Beyond AI  delivers enterprise grade cloud, AI, ERP, and cybersecurity solutions,
                  combining global standards with unmatched speed, flexibility, and ownership.
                </p>
              </div>

              {/* stat strip */}
              <div className="flex gap-4 shrink-0">
                {[
                  { val: "3+", label: "Core Pillars" },
                  { val: "15+", label: "Years Exp." },
                  { val: "3+", label: "Cloud Partners" },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-100 px-4 py-3 text-center shadow-sm">
                    <p className="font-display text-3xl text-[#1a2e6b] leading-none">{s.val}</p>
                    <p className="text-[9px] uppercase tracking-wider text-[#9ca3af] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── VIDEO CARDS — same videos, same titles ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {whoWeAreData.map((item, i) => (
              <div
                key={i}
                ref={el => { cardRefs.current[i] = el; }}
                className={`wwa-vid-card ${cardVis[i] ? "wwa-card-in" : "opacity-0"}`}
                style={{
                  animationDelay: `${i * 0.12}s`,
                  borderColor: hovered === i ? item.accent + "50" : undefined,
                  boxShadow: hovered === i ? `0 32px 64px ${item.accent}22` : undefined,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* ── original video ── */}
                <video autoPlay loop muted playsInline>
                  <source src={item.video} type="video/mp4" />
                </video>

                {/* overlay */}
                <div className="wwa-vid-overlay" />

                {/* scan line */}
                <div className="wwa-scan" />

                {/* top stripe */}
                <div
                  className="wwa-stripe"
                  style={{ background: `linear-gradient(90deg, ${item.accent}, ${item.accent}55)` }}
                />

                {/* ghost number */}
                <div
                  className="wwa-ghost"
                  style={{ WebkitTextStrokeColor: item.accent }}
                >
                  {item.id}
                </div>

                {/* rotating ring */}
                <div className="wwa-ring">
                  <svg className="wwa-ring-rot" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="19" r="16" stroke={item.accent} strokeWidth="1" strokeDasharray="3 5"/>
                  </svg>
                </div>

                {/* corner deco */}
                <div className="wwa-corner" style={{ borderColor: item.accent }} />

                {/* content */}
                <div className="wwa-vid-content">
                  <div className="wwa-meta">
                    <span className="wwa-num">{item.id}</span>
                    <span className="h-px w-4 opacity-40" style={{ background: item.accent }} />
                    <span
                      className="wwa-badge"
                      style={{ background: item.accent + "25", color: item.accent }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <p
                    className="wwa-label"
                    style={{ color: hovered === i ? item.accent : "rgba(255,255,255,0.28)" }}
                  >
                    {item.label}
                  </p>

                  {/* ── original title ── */}
                  <p className="wwa-title">{item.title}</p>

                  <div
                    className="wwa-bar"
                    style={{ background: `linear-gradient(90deg, ${item.accent}, ${item.accent}44)` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ── BOTTOM BAND ── */}
          {/* <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              {["Microsoft Partner", "AWS Certified", "Google Cloud Partner", "ISO Compliant"].map((b, i) => (
                <span
                  key={i}
                  className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[#6b7280] shadow-sm hover:-translate-y-0.5 transition-transform cursor-default"
                >
                  {b}
                </span>
              ))}
            </div>
            <a href="/about">
              <button className="wwa-btn flex items-center gap-2 px-6 py-3 bg-[#0f1e4a] text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-[#1a2e6b] transition-colors">
                Learn More About Us
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </a>
          </div> */}
        </div>
 
      </section>
    </>
  );
}