"use client";

import { useEffect, useRef, useState } from "react";

const coreServices = [
  {
    id: "01",
    title: "Cloud Services",
    slug: "/services/cloud-modernization",
    desc: "Scalable, secure, and cost-effective cloud solutions enabling faster innovation.",
    accent: "#0ea5e9",
    accentBg: "#e0f2fe",
    accentDim: "#0ea5e910",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bullets: [
      "Cloud Migration Services",
      "Multi-Cloud Management",
      "Cloud Infrastructure Design",
      "Serverless Architecture",
      "Cloud Security & Compliance",
      "Cloud Cost Optimization",
    ],
  },
  {
    id: "02",
    title: "AI & Analytics",
    slug: "/services/ai-analytics",
    desc: "Harness the power of artificial intelligence to transform your business operations and unlock insights.",
    accent: "#a855f7",
    accentBg: "#f5f3ff",
    accentDim: "#a855f710",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M9.663 17h4.673M12 3a7 7 0 017 7c0 2.49-1.31 4.67-3.27 5.9L15 17H9l-.73-1.1A7 7 0 0112 3z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    bullets: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "AI Chatbots & Virtual Assistants",
      "Intelligent Process Automation",
    ],
  },
  {
    id: "03",
    title: "Cyber Security",
    slug: "/services/cybersecurity",
    desc: "Comprehensive security services to protect digital assets and ensure compliance.",
    accent: "#ef4444",
    accentBg: "#fef2f2",
    accentDim: "#ef444410",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bullets: [
      "24/7 Security Monitoring (SOC)",
      "Penetration Testing & Audits",
      "Threat Intelligence",
      "Incident Response",
      "Vulnerability Management",
      "Security Compliance Consulting",
    ],
  },
  {
    id: "04",
    title: "Software Development",
    slug: "/services/software-development",
    desc: "Build scalable, secure, and high-performance digital products tailored to your business goals from idea to deployment.",
    accent: "#10b981",
    accentBg: "#d1fae5",
    accentDim: "#10b98110",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bullets: [
      "Custom Web Application Development",
      "Mobile App Development (iOS & Android)",
      "Enterprise Software Solutions",
      "SaaS Product Development",
      "UI/UX-Focused Product Engineering",
      "API Development & System Integration",
    ],
  },
  {
    id: "05",
    title: "Managed Services",
    slug: "/services/managed",
    desc: "Proactive IT management and continuous support to ensure your systems run securely, efficiently, and without disruption.",
    accent: "#f97316",
    accentBg: "#fff7ed",
    accentDim: "#f9731610",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          stroke="currentColor" strokeWidth="1.6"/>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    bullets: [
      "24/7 Infrastructure Monitoring",
      "IT Helpdesk & End-User Support",
      "Server & Network Management",
      "Cloud Infrastructure Management",
      "Backup & Disaster Recovery",
      "Security Patch & Update Management",
    ],
  },
  {
    id: "06",
    title: "Resource Augmentation",
    slug: "/services/resource-augmentation",
    desc: "Scale your teams with skilled professionals who integrate seamlessly into your existing workflows.",
    accent: "#facc15",
    accentBg: "#fefce8",
    accentDim: "#facc1510",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bullets: [
      "Dedicated IT & Engineering Resources",
      "On-Demand Skilled Professionals",
      "Short-Term & Long-Term Engagement Models",
      "Rapid Team Scaling",
      "Cost-Effective Talent Solutions",
      "Flexible Resource Management",
    ],
  },
];

export default function CoreServices() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [vis, setVis] = useState(false);
  const [cardVis, setCardVis] = useState<boolean[]>(new Array(coreServices.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (sectionRef.current) sObs.observe(sectionRef.current);

    const cObs: IntersectionObserver[] = [];
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setTimeout(() => setCardVis(p => { const n = [...p]; n[i] = true; return n; }), i * 90);
      }, { threshold: 0.08 });
      o.observe(el);
      cObs.push(o);
    });

    return () => { sObs.disconnect(); cObs.forEach(o => o.disconnect()); };
  }, []);

  const active = activeIdx !== null ? coreServices[activeIdx] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        .cs-root { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
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
        @keyframes panelSlide {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes bulletIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes borderRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0 rgba(15,30,74,0.2); }
          70%  { box-shadow: 0 0 0 8px rgba(15,30,74,0); }
          100% { box-shadow: 0 0 0 0 rgba(15,30,74,0); }
        }
        @keyframes countIn {
          from { opacity: 0; transform: scale(0.8) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .header-anim { animation: fadeUp 0.7s ease both; }
        .card-anim   { animation: fadeUp 0.55s cubic-bezier(.22,1,.36,1) both; }
        .panel-anim  { animation: panelSlide 0.45s cubic-bezier(.22,1,.36,1) both; }

        .shimmer-blue {
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
          background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* ── SERVICE CARD ── */
        .svc-card {
          position: relative;
          background: #fff;
          border-radius: 20px;
          border: 1.5px solid #f1f5f9;
          padding: 0;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(.22,1,.36,1),
                      box-shadow 0.3s,
                      border-color 0.3s;
        }
        .svc-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 24px 48px rgba(26,46,107,0.1);
        }
        .svc-card.selected {
          transform: translateY(-4px) scale(1.01);
        }

        /* top accent stripe that slides in on hover */
        .card-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(.22,1,.36,1);
        }
        .svc-card:hover .card-stripe,
        .svc-card.selected .card-stripe { transform: scaleX(1); }

        /* ghost number */
        .ghost-num {
          position: absolute;
          bottom: -8px; right: 8px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 88px; line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px;
          pointer-events: none;
          opacity: 0.04;
          user-select: none;
          transition: opacity 0.3s;
        }
        .svc-card:hover .ghost-num,
        .svc-card.selected .ghost-num { opacity: 0.09; }

        /* icon wrap */
        .icon-wrap {
          transition: transform 0.3s, background 0.3s;
        }
        .svc-card:hover .icon-wrap,
        .svc-card.selected .icon-wrap {
          transform: rotate(-8deg) scale(1.12);
        }

        /* learn more arrow */
        .learn-arrow {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.25s, transform 0.25s;
        }
        .svc-card:hover .learn-arrow,
        .svc-card.selected .learn-arrow {
          opacity: 1; transform: translateY(0);
        }

        /* ── DETAIL PANEL ── */
        .detail-panel {
          position: sticky;
          top: 24px;
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid #f1f5f9;
          background: #fff;
          box-shadow: 0 16px 48px rgba(26,46,107,0.08);
        }

        .bullet-item {
          animation: bulletIn 0.4s cubic-bezier(.22,1,.36,1) both;
        }

        .count-in { animation: countIn 0.5s cubic-bezier(.22,1,.36,1) both; }

        /* rotating ring */
        .ring-slow { animation: borderRotate 14s linear infinite; }

        /* default panel */
        .default-panel {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center; padding: 48px 32px;
          gap: 20px;
        }

        .cta-btn {
          position: relative; overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .cta-btn:hover::before { transform: translateX(100%); }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(26,46,107,0.25); }

        /* stat badge */
        .stat-badge {
          animation: countIn 0.5s cubic-bezier(.22,1,.36,1) both;
        }
        .stat-badge:nth-child(1) { animation-delay: 0.1s; }
        .stat-badge:nth-child(2) { animation-delay: 0.2s; }
        .stat-badge:nth-child(3) { animation-delay: 0.3s; }
      `}</style>

      <section ref={sectionRef} className="cs-root relative bg-[#f7f5f0] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">

        {/* dot pattern */}
        <div className="dot-pattern absolute inset-0 opacity-50 pointer-events-none" />

        {/* ghost watermark */}
        <div className="pointer-events-none select-none absolute top-0 right-0 font-display text-[clamp(80px,12vw,180px)] text-[#0f1e4a]/[0.025] leading-none uppercase whitespace-nowrap">
          Services
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">

          {/* ── HEADER ── */}
          <div className={`mb-14 ${vis ? "header-anim" : "opacity-0"}`}>
            <div className="tag-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] inline-block" />
              Our Core Services
            </div>
            <div className="accent-bar h-0.5 w-12 bg-[#facc15] mb-6 rounded-full" />

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <h2 className="font-display text-[clamp(40px,6vw,60px)] leading-[0.9] uppercase text-[#0f1e4a] mb-4">
                  What We{" "}
                  <span className="shimmer-blue">Build</span>
                  <br />
                  <span className="text-[#9ca3af]">&amp; Deliver</span>
                  <span className="text-[#0f1e4a]"> For You.</span>
                </h2>
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg font-light">
                  Six enterprise-grade service pillars , each designed to drive measurable results,
                  reduce operational friction, and keep your business ahead.
                </p>
              </div>

              {/* stat strip */}
              <div className="flex gap-4 shrink-0">
                {[
                  { val: "6", label: "Core Services" },
                  { val: "15+", label: "Yrs Expertise" },
                  { val: "3", label: "Cloud Partners" },
                ].map((s, i) => (
                  <div key={i} className={`bg-white rounded-xl border border-gray-100 px-4 py-3 text-center shadow-sm ${vis ? "stat-badge" : "opacity-0"}`}>
                    <p className="font-display text-3xl text-[#1a2e6b] leading-none">{s.val}</p>
                    <p className="text-[9px] uppercase tracking-wider text-[#9ca3af] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── MAIN CONTENT: CARDS LEFT + PANEL RIGHT ── */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">

            {/* ── CARD GRID ── */}
            <div className="grid sm:grid-cols-2 gap-5">
              {coreServices.map((svc, i) => (
                <div
                  key={i}
                  ref={el => { cardRefs.current[i] = el; }}
                  className={`svc-card ${activeIdx === i ? "selected" : ""} ${cardVis[i] ? "card-anim" : "opacity-0"}`}
                  style={{
                    borderColor: activeIdx === i ? svc.accent + "55" : undefined,
                    boxShadow: activeIdx === i ? `0 20px 48px ${svc.accent}18` : undefined,
                  }}
                  onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                >
                  {/* top stripe */}
                  <div className="card-stripe" style={{ background: `linear-gradient(90deg, ${svc.accent}, ${svc.accent}66)` }} />

                  {/* ghost number */}
                  <div className="ghost-num" style={{ WebkitTextStrokeColor: svc.accent }}>{svc.id}</div>

                  {/* hover bg glow */}
                  <div
                    className="absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at 25% 25%, ${svc.accent}0c 0%, transparent 55%)`,
                      opacity: activeIdx === i ? 1 : 0,
                    }}
                  />

                  <div className="relative z-10 p-6">
                    {/* icon + id row */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="icon-wrap w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{
                          background: activeIdx === i ? svc.accent + "18" : svc.accentBg,
                          color: svc.accent,
                        }}
                      >
                        {svc.icon}
                      </div>
                      <span
                        className="font-display text-3xl leading-none transition-colors duration-300"
                        style={{ color: activeIdx === i ? svc.accent : "#e5e7eb" }}
                      >
                        {svc.id}
                      </span>
                    </div>

                    {/* title */}
                    <h3 className="font-semibold text-[#0f1e4a] text-[15px] leading-snug mb-2">{svc.title}</h3>

                    {/* desc */}
                    <p className="text-[#6b7280] text-xs leading-relaxed font-light mb-4">{svc.desc}</p>

                    {/* bullet preview (top 3) */}
                    <ul className="space-y-1.5 mb-5">
                      {svc.bullets.slice(0, 3).map((b, j) => (
                        <li key={j} className="flex items-center gap-2 text-[#9ca3af] text-xs font-light">
                          <span className="w-1 h-1 rounded-full shrink-0" style={{ background: svc.accent }} />
                          {b}
                        </li>
                      ))}
                      <li className="flex items-center gap-2 text-[#c4c9d4] text-xs italic font-light">
                        <span className="w-1 h-1 rounded-full shrink-0 bg-gray-200" />
                        +{svc.bullets.length - 3} more capabilities
                      </li>
                    </ul>

                    {/* learn more */}
                    {/* <div className="learn-arrow" style={{ color: svc.accent }}>
                      <span>Explore service</span>
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>

            {/* ── DETAIL PANEL ── */}
            <div className="detail-panel">
              {active === null ? (
                /* default empty state */
                <div className="default-panel min-h-[500px]">
                  {/* decorative ring */}
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="ring-slow absolute inset-0 w-full h-full" viewBox="0 0 96 96" fill="none">
                      <circle cx="48" cy="48" r="44" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="5 8"/>
                    </svg>
                    <div className="w-14 h-14 rounded-2xl bg-[#eff2ff] border border-[#c7d2fe] flex items-center justify-center">
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path d="M4 6h16M4 12h16M4 18h7" stroke="#1a2e6b" strokeWidth="1.6" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl uppercase text-[#0f1e4a] mb-2">Select a Service</h4>
                    <p className="text-[#9ca3af] text-sm font-light leading-relaxed max-w-[220px] mx-auto">
                      Click any service card to explore its full capabilities and details.
                    </p>
                  </div>
                  {/* mini service dots */}
                  <div className="grid grid-cols-3 gap-2 w-full px-4">
                    {coreServices.map((s, i) => (
                      <button
                        key={i}
                        className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all group"
                        onClick={() => setActiveIdx(i)}
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                          style={{ background: s.accentBg, color: s.accent }}
                        >
                          <span className="scale-75">{s.icon}</span>
                        </div>
                        <span className="text-[9px] text-[#9ca3af] uppercase tracking-wide text-center leading-tight group-hover:text-[#0f1e4a] transition-colors">
                          {s.title.split(" ")[0]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* active service detail */
                <div key={activeIdx} className="panel-anim">
                  {/* color stripe */}
                  <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${active.accent}, ${active.accent}44)` }} />

                  {/* inner glow */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${active.accent}12 0%, transparent 70%)`, transform: "translate(30%,-30%)" }}
                  />

                  <div className="relative z-10 p-7">
                    {/* header */}
                    <div className="flex items-start gap-3 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: active.accentBg, color: active.accent }}
                      >
                        {active.icon}
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold mb-0.5" style={{ color: active.accent }}>
                          Service {active.id}
                        </p>
                        <h3 className="font-display text-[clamp(22px,2.5vw,32px)] text-[#0f1e4a] uppercase leading-tight">
                          {active.title}
                        </h3>
                      </div>
                    </div>

                    {/* description */}
                    <p className="text-[#6b7280] text-sm leading-relaxed font-light mb-6 pb-6 border-b border-gray-100">
                      {active.desc}
                    </p>

                    {/* full bullet list */}
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#9ca3af] font-semibold mb-4">
                      Capabilities
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {active.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="bullet-item flex items-center gap-3 text-[#374151] text-sm font-light"
                          style={{ animationDelay: `${i * 0.06}s` }}
                        >
                          <span
                            className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                            style={{ background: active.accentBg, color: active.accent }}
                          >
                            <svg width="10" height="10" fill="none" viewBox="0 0 10 10">
                              <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* CTA buttons */}
                    <div className="flex flex-col gap-3">
                      <a href={active.slug}>
                        <button
                          className="cta-btn w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white"
                          style={{ background: active.accent === "#facc15" ? "#1a2e6b" : active.accent }}
                        >
                          Learn More — {active.title} →
                        </button>
                      </a>
                      <a href="/meeting-scheduler">
                        <button className="w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-widest border border-gray-200 text-[#6b7280] hover:bg-gray-50 hover:text-[#0f1e4a] transition-all">
                          Book a Consultation
                        </button>
                      </a>
                    </div>

                    {/* close hint */}
                    <button
                      onClick={() => setActiveIdx(null)}
                      className="mt-4 w-full text-center text-[10px] text-[#c4c9d4] hover:text-[#9ca3af] transition-colors uppercase tracking-widest"
                    >
                      ← Back to all services
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── BOTTOM BAND: Why Choose Betopia ── */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🏆", title: "Industry Expertise", desc: "Over 15 years delivering cutting-edge technology to enterprises worldwide." },
              { icon: "🔒", title: "Security First", desc: "Every service is built with security at its core, keeping your data protected." },
              { icon: "📈", title: "Proven Results", desc: "Clients achieve 50% faster deployment and 40% cost reduction on average." },
              { icon: "🛠", title: "Dedicated Support", desc: "24/7 expert support team ready to assist with any technical challenge." },
            ].map((w, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-200 ${vis ? "card-anim" : "opacity-0"}`}
                style={{ animationDelay: `${0.6 + i * 0.1}s` }}
              >
                <div className="text-2xl mb-3">{w.icon}</div>
                <h4 className="font-semibold text-[#0f1e4a] text-sm mb-2">{w.title}</h4>
                <p className="text-[#9ca3af] text-xs leading-relaxed font-light">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 h-px w-full bg-linear-to-r from-transparent via-[#d1d5db] to-transparent" />
      </section>
    </>
  );
}