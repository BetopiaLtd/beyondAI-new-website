"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M9.663 17h4.673M12 3a7 7 0 017 7c0 2.49-1.31 4.67-3.27 5.9L15 17H9l-.73-1.1A7 7 0 0112 3z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    color: "#6366f1",
    bg: "#eef2ff",
    title: "Understand AI",
    desc: "So you can use it confidently—not just follow along hoping for the best.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    color: "#0ea5e9",
    bg: "#e0f2fe",
    title: "Use AI Tools Well",
    desc: "So your work genuinely improves—not just \"looks fancy\" with AI output pasted in.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#10b981",
    bg: "#d1fae5",
    title: "Stay Safe & Responsible",
    desc: "Avoid mistakes, privacy issues, and misinformation before they become problems.",
  },
];

const workplaceItems = [
  "Writing and communication",
  "Research and information gathering",
  "Data analysis and reporting",
  "Content and creative production",
  "Decision-making workflows",
  "Customer service and automation",
];

export default function WhyItMatters() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const [rightVisible, setRightVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const headerObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) headerObs.observe(headerRef.current);
    observers.push(headerObs);

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 120);
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    const rightObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setRightVisible(true); },
      { threshold: 0.15 }
    );
    if (rightRef.current) rightObs.observe(rightRef.current);
    observers.push(rightObs);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        .wim-root { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes dotPop {
          from { transform: scale(0); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(250,204,21,0.35); }
          70%  { box-shadow: 0 0 0 10px rgba(250,204,21,0); }
          100% { box-shadow: 0 0 0 0 rgba(250,204,21,0); }
        }

        .header-anim { animation: fadeUp 0.7s ease both; }
        .card-anim   { animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) both; }
        .right-anim  { animation: fadeLeft 0.7s cubic-bezier(.22,1,.36,1) both; }

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
          animation: scaleX 0.8s cubic-bezier(.22,1,.36,1) both 0.2s;
        }

        .skill-card {
          position: relative;
          transition: transform 0.25s, box-shadow 0.25s;
          border-left: 3px solid transparent;
        }
        .skill-card:hover {
          transform: translateX(6px);
          box-shadow: 0 8px 32px rgba(26,46,107,0.1);
        }
        .skill-card.indigo  { border-left-color: #6366f1; }
        .skill-card.sky     { border-left-color: #0ea5e9; }
        .skill-card.emerald { border-left-color: #10b981; }

        .icon-wrap {
          transition: transform 0.25s;
        }
        .skill-card:hover .icon-wrap { transform: rotate(-6deg) scale(1.1); }

        .workplace-item {
          transition: transform 0.2s, color 0.2s;
        }
        .workplace-item:hover { transform: translateX(4px); color: #facc15; }

        .dot-pop { animation: dotPop 0.4s cubic-bezier(.22,1,.36,1) both; }

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

        .number-badge {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          color: #d1d5db;
          line-height: 1;
          position: absolute;
          top: 16px;
          right: 16px;
        }

        .right-card-stripe {
          background: linear-gradient(90deg, #facc15 0%, #ef4444 50%, #1a2e6b 100%);
          height: 4px;
          border-radius: 4px 4px 0 0;
        }
      `}</style>

      <section className="wim-root relative bg-[#f7f5f0] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">

        {/* dot bg */}
        <div className="dot-pattern absolute inset-0 opacity-50 pointer-events-none" />

        {/* big ghost text */}
        <div className="pointer-events-none select-none absolute -top-4 left-4 font-display text-[clamp(80px,12vw,180px)] text-[#0f1e4a]/[0.03] leading-none uppercase whitespace-nowrap">
          Why It Matters
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* ── HEADER ── */}
          <div
            ref={headerRef}
            className={`mb-14 ${headerVisible ? "header-anim" : "opacity-0"}`}
          >
            <div className="tag-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] inline-block" />
              Why It Matters
            </div>

            <div className="accent-bar h-0.5 w-12 bg-[#facc15] mb-6 rounded-full" />

            <h2 className="font-display text-[clamp(40px,6vw,60px)] leading-[0.9] uppercase text-[#0f1e4a] mb-5">
              AI is becoming a{" "}
              <span className="shimmer-text">basic skill</span>
              <br />
              <span className="text-[#9ca3af]"> like email or</span>
              <br />
              spreadsheets.
            </h2>

            <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg font-light">
              AI is already changing how people write, research, analyze data, create content,
              and make decisions. The goal isn't to &quot;replace humans&quot;—it&apos;s to help you work smarter.
            </p>
          </div>

          {/* ── CONTENT GRID ── */}
          <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">

            {/* LEFT – skill cards */}
            <div className="space-y-4">
              {skills.map((s, i) => (
                <div
                  key={i}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className={`skill-card ${["indigo", "sky", "emerald"][i]} bg-white rounded-xl shadow-[0_2px_16px_rgba(26,46,107,0.06)] p-5 flex items-start gap-4 ${visibleCards[i] ? "card-anim" : "opacity-0"}`}
                >
                  {/* number */}
                  <span className="number-badge">0{i + 1}</span>

                  {/* icon */}
                  <div
                    className="icon-wrap w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: s.bg, color: s.color }}
                  >
                    {s.icon}
                  </div>

                  {/* text */}
                  <div className="pt-0.5">
                    <h3 className="text-[#0f1e4a] font-semibold text-base mb-1">{s.title}</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed font-light">{s.desc}</p>
                  </div>

                  {/* hover arrow */}
                  <div className="ml-auto pl-4 pt-1 text-[#d1d5db] shrink-0 transition-all duration-200 group-hover:text-[#1a2e6b]">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}

              {/* small stat strip */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { num: "77%", label: "of jobs will be AI-impacted" },
                  { num: "4×", label: "productivity gain reported" },
                  { num: "2025", label: "AI literacy is now expected" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm"
                  >
                    <p className="font-display text-3xl text-[#1a2e6b]">{stat.num}</p>
                    <p className="text-[10px] text-[#9ca3af] uppercase tracking-wider mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT – workplace card */}
            <div
              ref={rightRef}
              className={rightVisible ? "right-anim" : "opacity-0"}
            >
              <div className="bg-[#0f1e4a] rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(15,30,74,0.25)]">
                {/* top tri-color stripe */}
                <div className="right-card-stripe" />

                <div className="p-8 relative">
                  {/* glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(250,204,21,0.08) 0%, transparent 70%)", transform: "translate(20%,-20%)" }} />

                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#facc15] font-semibold mb-5">
                      <span className="h-px w-6 bg-[#facc15]" />
                      Already Happening
                    </span>

                    <h3 className="font-display text-[clamp(20px,2.5vw,28px)] text-white uppercase leading-tight mb-8">
                      What AI is already
                      <br />
                      <span className="text-[#facc15]">changing</span> in
                      <br />
                      workplaces today:
                    </h3>

                    <ul className="space-y-4">
                      {workplaceItems.map((item, i) => (
                        <li
                          key={i}
                          className={`workplace-item flex items-center gap-3 text-sm text-white/70 cursor-default ${rightVisible ? "dot-pop" : "opacity-0"}`}
                          style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                        >
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ background: "#facc15", boxShadow: "0 0 6px rgba(250,204,21,0.5)" }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* divider */}
                    <div className="my-7 h-px bg-white/10" />

                    {/* bottom CTA */}
                    {/* <div className="flex items-center justify-between">
                      <p className="text-white/40 text-xs leading-relaxed max-w-[180px]">
                        Don&apos;t get left behind. Start learning today.
                      </p>
                      <button className="px-5 py-3 bg-[#facc15] text-[#0f1e4a] text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#fde047] transition-all hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap">
                        Get Started →
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* floating footnote card */}
              <div className="mt-4 bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#fff7ed] border border-[#fed7aa] flex items-center justify-center shrink-0 text-orange-500">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-xs text-[#6b7280] leading-relaxed font-light">
                  <span className="font-semibold text-[#0f1e4a]">No coding required.</span>{" "}
                  Beyond AI is designed for non-technical professionals who want to stay relevant—without writing a single line of code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom decorative strip */}
        <div className="mt-20 h-px w-full bg-linear-to-r from-transparent via-[#d1d5db] to-transparent" />
      </section>
    </>
  );
}