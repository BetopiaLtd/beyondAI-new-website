"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    num: "01",
    label: "Project 01",
    title: "Prompt System + Evaluation Checklist",
    desc: "Build a prompt system that produces consistent, reliable outputs and assess it against quality criteria.",
    icon: "⚡",
    accent: "#6366f1",
    accentBg: "#eef2ff",
    tags: ["Prompting", "Evaluation"],
    isCapstone: false,
  },
  {
    num: "02",
    label: "Project 02",
    title: "Text Classification Demo",
    desc: "Create a small demo that sorts feedback or content into meaningful categories automatically.",
    icon: "🗂️",
    accent: "#0ea5e9",
    accentBg: "#e0f2fe",
    tags: ["Classification", "Automation"],
    isCapstone: false,
  },
  {
    num: "03",
    label: "Project 03",
    title: "Knowledge Q&A Prototype",
    desc: "Build a prototype that answers questions based on a set of approved documents you provide.",
    icon: "🧠",
    accent: "#10b981",
    accentBg: "#d1fae5",
    tags: ["RAG", "Prototyping"],
    isCapstone: false,
  },
  {
    num: "04",
    label: "Project 04 — Capstone",
    title: "Agent-Style Workflow",
    desc: "Design a simple workflow that follows the pattern: plan → execute → verify → report.",
    icon: "🚀",
    accent: "#facc15",
    accentBg: "#fefce8",
    tags: ["Capstone", "AI Agents"],
    isCapstone: true,
  },
];

export default function PortfolioCertificate() {
  const [vis, setVis] = useState<boolean[]>(new Array(projects.length).fill(false));
  const [headerVis, setHeaderVis] = useState(false);
  const [certVis, setCertVis] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs: IntersectionObserver[] = [];

    const hObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeaderVis(true); }, { threshold: 0.2 });
    if (headerRef.current) hObs.observe(headerRef.current);
    obs.push(hObs);

    const cObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCertVis(true); }, { threshold: 0.2 });
    if (certRef.current) cObs.observe(certRef.current);
    obs.push(cObs);

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setTimeout(() => setVis(p => { const n = [...p]; n[i] = true; return n; }), i * 100);
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

        .pc-root { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes rotateBadge {
          0%, 100% { transform: rotate(-3deg) scale(1); }
          50%       { transform: rotate(3deg) scale(1.05); }
        }
        @keyframes certSlide {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes numberCount {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanLine {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        @keyframes emojiFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-6px) rotate(5deg); }
        }

        .header-anim { animation: fadeUp 0.7s ease both; }
        .card-anim   { animation: fadeUp 0.55s cubic-bezier(.22,1,.36,1) both; }
        .cert-anim   { animation: certSlide 0.7s cubic-bezier(.22,1,.36,1) both; }

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
          display: inline-flex; align-items: center; gap: 6px;
          background: #eff2ff; color: #1a2e6b;
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          font-weight: 600; padding: 5px 12px; border-radius: 100px;
          border: 1px solid #c7d2fe;
        }

        .dot-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 22px 22px;
        }

        /* ── PROJECT CARD ── */
        .proj-card {
          position: relative;
          background: #fff;
          border-radius: 20px;
          border: 1.5px solid #f1f5f9;
          padding: 28px;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s, border-color 0.3s;
          cursor: default;
        }
        .proj-card:hover {
          transform: translateY(-7px) scale(1.01);
          box-shadow: 0 28px 56px rgba(26,46,107,0.13);
        }

        /* scan line effect */
        .proj-card::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 60px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.06), transparent);
          pointer-events: none;
          animation: scanLine 3s ease-in-out infinite;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .proj-card:hover::after { opacity: 1; }

        /* top gradient bar */
        .proj-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 0.45s cubic-bezier(.22,1,.36,1);
        }
        .proj-card:hover .proj-bar { transform: scaleX(1); }

        /* big ghost number bg */
        .ghost-num {
          position: absolute;
          bottom: -10px; right: 10px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 96px;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px;
          pointer-events: none;
          transition: opacity 0.3s;
          opacity: 0.04;
          user-select: none;
        }
        .proj-card:hover .ghost-num { opacity: 0.08; }

        /* emoji */
        .proj-emoji {
          font-size: 28px;
          line-height: 1;
          display: inline-block;
          margin-bottom: 14px;
        }
        .proj-card:hover .proj-emoji {
          animation: emojiFloat 1.4s ease-in-out infinite;
        }

        /* tag chips */
        .chip {
          display: inline-block;
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 100px;
        }

        /* capstone badge */
        .capstone-badge {
          position: absolute;
          top: 20px; right: 20px;
          background: linear-gradient(135deg, #facc15, #f97316);
          color: #fff;
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 100px;
          animation: rotateBadge 3s ease-in-out infinite;
          box-shadow: 0 4px 12px rgba(249,115,22,0.35);
        }

        /* ── CERTIFICATE ── */
        .cert-card {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          background: linear-gradient(135deg, #0f1e4a 0%, #1a2e6b 60%, #0f1e4a 100%);
          border: 1px solid rgba(250,204,21,0.2);
        }
        .cert-card::before {
          content: '';
          position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23facc15' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }

        .cert-glow {
          animation: glowPulse 2.5s ease-in-out infinite;
        }

        .cert-medal {
          font-size: 52px;
          line-height: 1;
          filter: drop-shadow(0 0 12px rgba(250,204,21,0.5));
        }

        .cert-stripe {
          background: linear-gradient(90deg, #facc15, #ef4444, #6366f1, #10b981);
          height: 3px;
          border-radius: 20px 20px 0 0;
        }

        .workflow-step {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          white-space: nowrap;
        }
        .workflow-arrow { color: #facc15; font-weight: 700; }
      `}</style>

      <section className="pc-root relative bg-[#f7f5f0] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">

        {/* dot bg */}
        <div className="dot-pattern absolute inset-0 opacity-50 pointer-events-none" />

        {/* ghost watermark */}
        <div className="pointer-events-none select-none absolute top-0 left-0 font-display text-[clamp(80px,14vw,200px)] text-[#0f1e4a]/[0.025] leading-none uppercase whitespace-nowrap">
          Projects
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* ── HEADER ── */}
          <div ref={headerRef} className={`mb-14 ${headerVis ? "header-anim" : "opacity-0"}`}>
            <div className="tag-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] inline-block" />
              Portfolio &amp; Certificate
            </div>

            <div className="accent-bar h-0.5 w-12 bg-[#facc15] mb-6 rounded-full" />

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="font-display text-[clamp(38px,6vw,60px)] leading-[0.9] uppercase text-[#0f1e4a] mb-4">
                  Proof,{" "}
                  <span className="shimmer-text">not</span>
                  <br />
                  promises.
                </h2>
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg font-light">
                  You finish with real work you can show—mini-projects and a capstone that
                  demonstrates understanding, practical usage, and responsible AI practice.
                </p>
              </div>

              {/* stat pill cluster */}
              <div className="flex gap-3 shrink-0">
                {[
                  { val: "4", sub: "Real Projects" },
                  { val: "1", sub: "Capstone" },
                  { val: "∞", sub: "Shareable" },
                ].map((s, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-center shadow-sm min-w-[70px]">
                    <p className="font-display text-3xl text-[#1a2e6b] leading-none">{s.val}</p>
                    <p className="text-[9px] uppercase tracking-wider text-[#9ca3af] mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── PROJECT GRID ── */}
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            {projects.map((p, i) => (
              <div
                key={i}
                ref={el => { cardRefs.current[i] = el; }}
                className={`proj-card ${vis[i] ? "card-anim" : "opacity-0"}`}
                style={{ borderColor: hovered === i ? p.accent + "55" : undefined }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* bg glow */}
                <div
                  className="absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 20% 20%, ${p.accent}10 0%, transparent 60%)`,
                    opacity: hovered === i ? 1 : 0,
                  }}
                />

                {/* top bar */}
                <div className="proj-bar" style={{ background: `linear-gradient(90deg, ${p.accent}, ${p.accent}88)` }} />

                {/* ghost number */}
                <div className="ghost-num" style={{ WebkitTextStrokeColor: p.accent }}>{p.num}</div>

                {/* capstone badge */}
                {p.isCapstone && <div className="capstone-badge">✦ Capstone</div>}

                <div className="relative z-10">
                  {/* project label */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-[10px] uppercase tracking-[0.18em] font-bold"
                      style={{ color: p.accent }}
                    >
                      {p.label}
                    </span>
                    <span className="h-px flex-1 max-w-[40px]" style={{ background: p.accent + "44" }} />
                  </div>

                  {/* emoji */}
                  <div className="proj-emoji">{p.icon}</div>

                  {/* title */}
                  <h3 className="font-semibold text-[#0f1e4a] text-lg leading-snug mb-3 pr-16">
                    {p.title}
                  </h3>

                  {/* desc */}
                  <p className="text-[#6b7280] text-sm leading-relaxed font-light mb-5">{p.desc}</p>

                  {/* tags */}
                  <div className="flex gap-2 flex-wrap">
                    {p.tags.map((t) => (
                      <span key={t} className="chip" style={{ background: p.accentBg, color: p.accent }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── CERTIFICATE BANNER ── */}
          <div ref={certRef} className={certVis ? "cert-anim" : "opacity-0"}>
            <div className="cert-card shadow-[0_24px_60px_rgba(15,30,74,0.25)]">

              {/* rainbow stripe */}
              <div className="cert-stripe" />

              <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">

                {/* left glow orb */}
                <div
                  className="cert-glow absolute left-0 top-0 w-64 h-64 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(250,204,21,0.1) 0%, transparent 70%)", transform: "translate(-30%,-30%)" }}
                />

                {/* medal */}
                <div className="shrink-0 relative">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(250,204,21,0.2) 0%, transparent 70%)", transform: "scale(1.8)" }}
                  />
                  <div className="cert-medal relative z-10">🏅</div>
                </div>

                {/* center text */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#facc15] font-semibold mb-2">
                    ✦ Upon Completion
                  </p>
                  <h3 className="font-display text-[clamp(28px,4vw,52px)] text-white uppercase leading-tight mb-2">
                    Certificate of Completion
                    <span className="block text-[#facc15]"> Beyond AI</span>
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-md font-light">
                    Awarded after completing all assessments and the final capstone project.
                    Shareable proof of your new skills.
                  </p>
                </div>

                {/* right: workflow steps */}
                <div className="shrink-0 flex flex-col gap-3">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-1 text-center">Capstone Flow</p>
                  {["Plan", "Execute", "Verify", "Report"].map((step, i) => (
                    <div key={step} className="workflow-step">
                      <span
                        className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0"
                        style={{ background: "rgba(250,204,21,0.12)", color: "#facc15" }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-white/60 text-xs">{step}</span>
                      {/* {i < 3 && <span className="workflow-arrow text-xs">→</span>} */}
                    </div>
                  ))}

                  {/* <button className="mt-3 px-6 py-3 bg-[#facc15] text-[#0f1e4a] text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#fde047] transition-all hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap">
                    View Curriculum →
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom hr */}
        <div className="mt-20 h-px w-full bg-linear-to-r from-transparent via-[#d1d5db] to-transparent" />
      </section>
    </>
  );
}