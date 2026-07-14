"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   SECTION 1 — HOW WE WORK (Process)
───────────────────────────────────────── */

const steps = [
  {
    num: "01",
    title: "Discovery & Consultation",
    desc: "We start by understanding your business goals, current infrastructure, pain points, and growth targets through deep-dive consultations with your key stakeholders.",
    accent: "#0ea5e9",
    accentBg: "#e0f2fe",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    deliverables: ["Needs Assessment Report", "Technology Audit", "Stakeholder Alignment"],
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    desc: "Our experts design a tailored technology strategy with a clear roadmap, timeline, and measurable KPIs aligned to your business objectives.",
    accent: "#a855f7",
    accentBg: "#f5f3ff",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    deliverables: ["Technology Roadmap", "Risk Analysis", "ROI Projections"],
  },
  {
    num: "03",
    title: "Design & Architecture",
    desc: "We architect secure, scalable solutions using industry best practices , vendor-neutral across Microsoft, AWS, and Google Cloud.",
    accent: "#10b981",
    accentBg: "#d1fae5",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    deliverables: ["Solution Architecture", "Security Blueprint", "Tech Stack Selection"],
  },
  {
    num: "04",
    title: "Build & Implement",
    desc: "Our certified engineers execute with precision , deploying infrastructure, developing software, and integrating systems with minimal disruption to your operations.",
    accent: "#f97316",
    accentBg: "#fff7ed",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    deliverables: ["Agile Sprints", "CI/CD Pipelines", "Zero-Downtime Deployment"],
  },
  {
    num: "05",
    title: "Test & Validate",
    desc: "Rigorous quality assurance, security audits, and performance testing ensure everything meets enterprise-grade standards before going live.",
    accent: "#ef4444",
    accentBg: "#fef2f2",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    deliverables: ["QA & Testing Reports", "Security Audit", "Performance Benchmarks"],
  },
  {
    num: "06",
    title: "Launch & Optimize",
    desc: "We go live, monitor in real-time, and continuously optimize , backed by our 24/7 support team to ensure sustained performance and growth.",
    accent: "#facc15",
    accentBg: "#fefce8",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    deliverables: ["Go-Live Support", "24/7 Monitoring", "Continuous Optimization"],
  },
];

export function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const [vis, setVis] = useState(false);
  const [stepVis, setStepVis] = useState<boolean[]>(new Array(steps.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (sectionRef.current) sObs.observe(sectionRef.current);

    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setTimeout(() => setStepVis(p => { const n = [...p]; n[i] = true; return n; }), i * 100);
      }, { threshold: 0.1 });
      o.observe(el);
    });

    return () => sObs.disconnect();
  }, []);

  const active = steps[activeStep];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
        .hww-root { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes lineGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes heightGrow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes panelIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes delivIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes counterAnim {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }

        .hww-hdr { animation: fadeUp 0.7s ease both; }
        .step-anim { animation: fadeUp 0.5s cubic-bezier(.22,1,.36,1) both; }
        .panel-in { animation: panelIn 0.4s cubic-bezier(.22,1,.36,1) both; }
        .deliv-in { animation: delivIn 0.35s cubic-bezier(.22,1,.36,1) both; }

        .shimmer-blue {
          background: linear-gradient(90deg, #1a2e6b 0%, #3b5bdb 38%, #1a2e6b 60%, #0f1e4a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .accent-bar { transform-origin: left; animation: lineGrow 0.8s cubic-bezier(.22,1,.36,1) both 0.2s; }

        .tag-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: #eff2ff; color: #1a2e6b; font-size: 10px;
          letter-spacing: 0.18em; text-transform: uppercase; font-weight: 600;
          padding: 5px 12px; border-radius: 100px; border: 1px solid #c7d2fe;
        }

        .dot-pattern {
          background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* connector line */
        .connector {
          position: absolute;
          left: 20px; top: 52px; bottom: -16px;
          width: 1px;
          transform-origin: top;
          animation: heightGrow 0.5s cubic-bezier(.22,1,.36,1) both;
        }

        /* step row */
        .step-row {
          position: relative;
          display: flex; align-items: flex-start; gap: 16px;
          padding: 14px 16px 14px 8px;
          border-radius: 14px;
          cursor: pointer;
          transition: background 0.2s;
          border: 1px solid transparent;
        }
        .step-row:hover { background: rgba(255,255,255,0.7); }
        .step-row.active-step {
          background: #fff;
          border-color: #f1f5f9;
          box-shadow: 0 4px 20px rgba(26,46,107,0.07);
        }

        /* step icon */
        .step-icon {
          width: 40px; height: 40px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s;
          position: relative; z-index: 1;
        }
        .step-row:hover .step-icon,
        .step-row.active-step .step-icon { transform: scale(1.08); }

        /* right panel */
        .detail-panel-hww {
          position: sticky; top: 24px;
          border-radius: 20px;
          background: #fff;
          border: 1.5px solid #f1f5f9;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(26,46,107,0.08);
        }

        .rot-ring { animation: rotSlow 16s linear infinite; }
        .cta-btn-hww {
          position: relative; overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-btn-hww::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          transform: translateX(-100%); transition: transform 0.5s;
        }
        .cta-btn-hww:hover::before { transform: translateX(100%); }
        .cta-btn-hww:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(26,46,107,0.2); }
      `}</style>

      <section ref={sectionRef} className="hww-root relative bg-[#f7f5f0] py-5 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="dot-pattern absolute inset-0 opacity-50 pointer-events-none" />
        <div className="pointer-events-none select-none absolute top-0 left-0 font-display text-[clamp(80px,12vw,180px)] text-[#0f1e4a]/[0.025] leading-none uppercase whitespace-nowrap">Process</div>

        <div className="relative z-10 max-w-[1400px] mx-auto">

          {/* header */}
          <div className={`mb-14 ${vis ? "hww-hdr" : "opacity-0"}`}>
            <div className="tag-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] inline-block" />
              How We Work
            </div>
            <div className="accent-bar h-0.5 w-12 bg-[#facc15] mb-6 rounded-full" />
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <h2 className="font-display text-[clamp(40px,6vw,60px)] leading-[0.9] uppercase text-[#0f1e4a] mb-4">
                  Our Proven
                  <br />
                  <span className="shimmer-blue">6-Step</span>{" "}
                  <span className="text-[#9ca3af]">Delivery</span>
                  <br />
                  Process.
                </h2>
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg font-light">
                  From first conversation to live deployment , every engagement follows a structured,
                  transparent process designed to deliver measurable outcomes on time and on budget.
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                {[{ val: "6", label: "Clear Steps" }, { val: "100%", label: "Transparent" }, { val: "0", label: "Surprise Costs" }].map((s, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-100 px-4 py-3 text-center shadow-sm">
                    <p className="font-display text-3xl text-[#1a2e6b] leading-none">{s.val}</p>
                    <p className="text-[9px] uppercase tracking-wider text-[#9ca3af] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* main grid */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">

            {/* step list */}
            <div className="space-y-1">
              {steps.map((step, i) => (
                <div
                  key={i}
                  ref={el => { stepRefs.current[i] = el; }}
                  className={`step-row ${activeStep === i ? "active-step" : ""} ${stepVis[i] ? "step-anim" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                  onClick={() => setActiveStep(i)}
                >
                  {/* connector line (not on last) */}
                  {i < steps.length - 1 && (
                    <div className="connector" style={{ background: `linear-gradient(to bottom, ${step.accent}40, ${steps[i + 1].accent}20)` }} />
                  )}

                  {/* icon */}
                  <div className="step-icon" style={{ background: activeStep === i ? step.accentBg : "#f8fafc", color: step.accent }}>
                    {step.icon}
                  </div>

                  {/* content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-display text-xs" style={{ color: activeStep === i ? step.accent : "#d1d5db" }}>{step.num}</span>
                      <h4 className={`font-semibold text-sm transition-colors ${activeStep === i ? "text-[#0f1e4a]" : "text-[#6b7280]"}`}>
                        {step.title}
                      </h4>
                      {activeStep === i && (
                        <span className="ml-auto text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full" style={{ background: step.accentBg, color: step.accent }}>Active</span>
                      )}
                    </div>
                    <p className="text-[#9ca3af] text-xs leading-relaxed font-light pr-4">{step.desc}</p>
                    {/* deliverables preview */}
                    {activeStep === i && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {step.deliverables.map((d, j) => (
                          <span key={j} className="text-[10px] px-2.5 py-1 rounded-full font-medium" style={{ background: step.accentBg, color: step.accent }}>
                            ✓ {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* step number big */}
                  <span className="font-display text-4xl shrink-0 transition-all duration-200 leading-none"
                    style={{ color: activeStep === i ? step.accent + "30" : "#f1f5f9" }}>
                    {step.num}
                  </span>
                </div>
              ))}
            </div>

            {/* detail panel */}
            <div className="detail-panel-hww">
              <div key={activeStep} className="panel-in">
                <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${active.accent}, ${active.accent}44)` }} />
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${active.accent}14 0%, transparent 70%)`, transform: "translate(30%,-30%)" }}
                />
                <div className="relative z-10 p-8">
                  {/* rotating ring */}
                  <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
                    <svg className="rot-ring absolute inset-0 w-full h-full" viewBox="0 0 64 64" fill="none">
                      <circle cx="32" cy="32" r="29" stroke={active.accent} strokeWidth="1" strokeDasharray="4 6" opacity="0.3"/>
                    </svg>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: active.accentBg, color: active.accent }}>
                      {active.icon}
                    </div>
                  </div>

                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold mb-1" style={{ color: active.accent }}>Step {active.num}</p>
                  <h3 className="font-display text-[clamp(22px,2.5vw,32px)] text-[#0f1e4a] uppercase leading-tight mb-4">{active.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed font-light mb-6 pb-6 border-b border-gray-100">{active.desc}</p>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#9ca3af] font-semibold mb-4">Key Deliverables</p>
                  <div className="space-y-3 mb-8">
                    {active.deliverables.map((d, i) => (
                      <div key={i} className="deliv-in flex items-center gap-3" style={{ animationDelay: `${i * 0.08}s` }}>
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: active.accentBg, color: active.accent }}>
                          <svg width="10" height="10" fill="none" viewBox="0 0 10 10">
                            <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-[#374151] text-sm font-light">{d}</span>
                      </div>
                    ))}
                  </div>

                  {/* step nav */}
                  <div className="flex gap-2 mb-6">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStep(i)}
                        className="flex-1 h-1.5 rounded-full transition-all duration-300"
                        style={{ background: i === activeStep ? active.accent : "#e5e7eb" }}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="flex-1 py-3 rounded-xl text-xs font-semibold uppercase tracking-widest border border-gray-200 text-[#9ca3af] hover:bg-gray-50 disabled:opacity-30 transition-all"
                    >← Prev</button>
                    <button
                      onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                      disabled={activeStep === steps.length - 1}
                      className="cta-btn-hww flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-white transition-all disabled:opacity-30"
                      style={{ background: active.accent === "#facc15" ? "#1a2e6b" : active.accent }}
                    >Next →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 h-px w-full bg-linear-to-r from-transparent via-[#d1d5db] to-transparent" />
      </section>
    </>
  );
}


/* ─────────────────────────────────────────
   SECTION 2 — READY TO TRANSFORM (CTA)
───────────────────────────────────────── */

const offices = [ 
  { city: "Philippines", flag: "", detail: "Manila , Philippines" }, 
];

const trustItems = [
  "Microsoft Partner",
  "AWS Certified",
  "Google Cloud Partner",
  "ISO Compliant",
  "15+ Years Enterprise Experience",
  "24/7 SOC",
];

const floatingWords = [
  { text: "AI", x: "6%", y: "20%", delay: "0s" },
  { text: "Cloud", x: "85%", y: "15%", delay: "0.5s" },
  { text: "DevOps", x: "4%", y: "70%", delay: "0.9s" },
  { text: "Security", x: "80%", y: "72%", delay: "0.3s" },
  { text: "ML", x: "48%", y: "8%", delay: "0.7s" },
  { text: "SaaS", x: "70%", y: "88%", delay: "1.1s" },
  { text: "24/7", x: "22%", y: "88%", delay: "0.4s" },
];

export function ReadyToTransform() {
  const [vis, setVis] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [activeOffice, setActiveOffice] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActiveOffice(p => (p + 1) % offices.length), 2500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handle = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      setMousePos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
    };
    card.addEventListener("mousemove", handle);
    return () => card.removeEventListener("mousemove", handle);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
        .rtt-root { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmerGold {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes borderRot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes floatWord { 0%, 100% { transform: translateY(0); opacity: 0.12; } 50% { transform: translateY(-12px); opacity: 0.22; } }
        @keyframes pulseRing { 0% { box-shadow: 0 0 0 0 rgba(250,204,21,0.45); } 70% { box-shadow: 0 0 0 12px rgba(250,204,21,0); } 100% { box-shadow: 0 0 0 0 rgba(250,204,21,0); } }
        @keyframes officeSlide { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmerBtn {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }

        .rtt-anim-1 { animation: fadeUp 0.7s ease both 0.1s; }
        .rtt-anim-2 { animation: fadeUp 0.7s ease both 0.22s; }
        .rtt-anim-3 { animation: fadeUp 0.7s ease both 0.36s; }
        .rtt-anim-4 { animation: fadeUp 0.7s ease both 0.50s; }
        .rtt-anim-5 { animation: fadeUp 0.7s ease both 0.64s; }

        .shimmer-gold-text {
          background: linear-gradient(90deg, #facc15 0%, #fef08a 38%, #facc15 55%, #ca8a04 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerGold 3s linear infinite;
        }
        .shimmer-white-text {
          background: linear-gradient(90deg, #fff 0%, #c7d2fe 40%, #fff 60%, #e0e7ff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerGold 4.5s linear infinite;
        }

        .big-card-rtt {
          position: relative;
          border-radius: 28px;
          background: #0f1e4a;
          overflow: hidden;
          border: 1px solid rgba(250,204,21,0.15);
          box-shadow: 0 40px 100px rgba(15,30,74,0.28);
        }
        .big-card-rtt::before {
          content: '';
          position: absolute; inset: -2px; border-radius: 30px;
          background: conic-gradient(from 0deg, #facc15, #ef4444, #0ea5e9, #10b981, #a855f7, #facc15);
          z-index: -1;
          animation: borderRot 7s linear infinite;
          opacity: 0.45;
        }

        .float-word-rtt {
          position: absolute;
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.1em;
          color: rgba(250,204,21,0.13);
          pointer-events: none;
          user-select: none;
          animation: floatWord 4s ease-in-out infinite;
          font-size: 13px;
        }

        .orb-rtt {
          position: absolute; border-radius: 50%;
          filter: blur(60px); pointer-events: none;
        }

        .marquee-rtt { animation: marquee 30s linear infinite; }

        .pulse-btn { animation: pulseRing 2s ease-in-out infinite; }

        .office-card-active { animation: officeSlide 0.35s cubic-bezier(.22,1,.36,1) both; }

        .primary-cta {
          position: relative; overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .primary-cta::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          animation: shimmerBtn 3s ease-in-out infinite;
        }
        .primary-cta:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(250,204,21,0.45); }

        .secondary-cta { transition: background 0.2s, transform 0.2s; }
        .secondary-cta:hover { background: rgba(255,255,255,0.08); transform: translateY(-2px); }

        .noise-rtt {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
        }

        .dot-pattern-rtt {
          background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>

      <section ref={sectionRef} className="rtt-root relative bg-[#f7f5f0] py-0 pb-10 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="dot-pattern-rtt absolute inset-0 opacity-50 pointer-events-none" />
        <div className="pointer-events-none select-none absolute bottom-0 right-0 font-display text-[clamp(80px,14vw,220px)] text-[#0f1e4a]/[0.025] leading-none uppercase">Transform</div>

        <div className="relative z-10 max-w-[1400px] mx-auto">

          {/* header */}
          <div className={`text-center mb-12 ${vis ? "rtt-anim-1" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-[#eff2ff] text-[#1a2e6b] text-[10px] uppercase tracking-[0.18em] font-semibold px-4 py-2 rounded-full border border-[#c7d2fe] mb-5">
              <span className="pulse-btn w-2 h-2 rounded-full bg-[#facc15] inline-block" />
              Ready to Transform?
            </div>
            <h2 className="font-display text-[clamp(18px,2.5vw,22px)] uppercase tracking-widest text-[#9ca3af] mb-2">Let&apos;s Build Something</h2>
          </div>

          {/* big card */}
          <div className={vis ? "rtt-anim-2" : "opacity-0"}>
            <div ref={cardRef} className="big-card-rtt">
              <div className="noise-rtt absolute inset-0 pointer-events-none" />

              {/* orbs */}
              <div className="orb-rtt w-96 h-96" style={{ background: "rgba(250,204,21,0.07)", top: "-20%", left: "-8%" }} />
              <div className="orb-rtt w-80 h-80" style={{ background: "rgba(99,102,241,0.07)", bottom: "-15%", right: "-5%" }} />
              <div className="orb-rtt w-56 h-56" style={{ background: "rgba(16,185,129,0.05)", top: "25%", right: "22%" }} />

              {/* cursor glow */}
              <div className="pointer-events-none absolute w-96 h-96 rounded-full transition-all duration-500"
                style={{ background: "radial-gradient(circle, rgba(250,204,21,0.07) 0%, transparent 70%)", left: `calc(${mousePos.x * 100}% - 192px)`, top: `calc(${mousePos.y * 100}% - 192px)` }} />

              {/* floating words */}
              {floatingWords.map((w, i) => (
                <div key={i} className="float-word-rtt" style={{ left: w.x, top: w.y, animationDelay: w.delay, animationDuration: `${3.5 + i * 0.35}s` }}>{w.text}</div>
              ))}

              {/* rainbow stripe */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg, #facc15 0%, #ef4444 25%, #0ea5e9 50%, #10b981 75%, #a855f7 100%)" }} />

              {/* main content */}
              <div className="relative z-10 px-8 md:px-14 py-14 grid lg:grid-cols-[1fr_420px] gap-12 items-center">

                {/* left */}
                <div>
                  <h2 className="font-display text-[clamp(42px,6vw,60px)] leading-[0.88] uppercase mb-6">
                    <span className="block text-white/20">Ready to</span>
                    <span className="block shimmer-white-text">Transform</span>
                    <span className="block text-white">Your</span>
                    <span className="block shimmer-gold-text">Business?</span>
                  </h2>
                  <p className="text-white/45 text-sm leading-relaxed max-w-md font-light mb-8">
                    Let&apos;s discuss how our AI, cloud, and security services can drive your digital transformation. Our experts are ready to help you build, scale, and secure your enterprise.
                  </p>

                  {/* stat row */}
                  {/* <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { val: "15+", label: "Years Experience", color: "#facc15" },
                      { val: "50%", label: "Faster Deployment", color: "#10b981" },
                      { val: "40%", label: "Cost Reduction", color: "#0ea5e9" },
                    ].map((s, i) => (
                      <div key={i} className="text-center p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                        <p className="font-display text-3xl leading-none" style={{ color: s.color }}>{s.val}</p>
                        <p className="text-[9px] uppercase tracking-widest text-white/30 mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div> */}

                  {/* CTAs */}
                  {/* <div className="flex flex-wrap gap-4">
                    <a href="/meeting-scheduler">
                      <button className="primary-cta px-8 py-4 bg-[#facc15] text-[#050c1a] text-xs font-bold uppercase tracking-widest rounded-sm">
                        Book a Consultation
                      </button>
                    </a>
                    <a href="/partner-program">
                      <button className="secondary-cta px-8 py-4 border border-white/20 text-white/60 text-xs uppercase tracking-widest rounded-sm">
                        Become a Partner
                      </button>
                    </a>
                  </div> */}
                </div>

                {/* right */}
                <div className="flex flex-col gap-5">

                  {/* offices */}
                  <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] overflow-hidden">
                    <div className="px-5 pt-5 pb-3 border-b border-white/[0.06]">
                      <p className="text-[9px] uppercase tracking-[0.22em] text-white/30 font-semibold mb-3">Global Offices</p>
                      {/* <div className="flex gap-2">
                        {offices.map((o, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveOffice(i)}
                            className="flex-1 py-1.5 rounded-lg font-semibold transition-all text-base"
                            style={{
                              background: activeOffice === i ? "rgba(250,204,21,0.15)" : "transparent",
                              color: activeOffice === i ? "#facc15" : "rgba(255,255,255,0.25)",
                              border: `1px solid ${activeOffice === i ? "rgba(250,204,21,0.3)" : "transparent"}`,
                            }}
                          >
                            {o.flag}
                          </button>
                        ))}
                      </div> */}
                    </div>
                    <div key={activeOffice} className="office-card-active px-5 py-4">
                      <p className="text-white font-semibold text-sm">{offices[activeOffice].flag} {offices[activeOffice].city}</p>
                      <p className="text-white/40 text-xs mt-1">{offices[activeOffice].detail}</p>
                      <p className="text-white/30 text-xs mt-0.5">Info@beyondai.ph</p>
                    </div>
                  </div>

                  {/* contact cards */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: "📞", label: "Call Us", val: "(512) 827-2606", link: "tel:+13128773570" },
                      { icon: "✉️", label: "Email Us", val: "Info@beyondai.ph", link: "mailto:Info@beyondai.ph" },
                    ].map((c, i) => (
                      <a key={i} href={c.link}
                        className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-4 hover:bg-white/[0.07] transition-all hover:-translate-y-0.5">
                        <div className="text-lg mb-2">{c.icon}</div>
                        <p className="text-[9px] uppercase tracking-[0.15em] text-white/30 mb-1">{c.label}</p>
                        <p className="text-white/60 text-[11px] font-medium leading-tight">{c.val}</p>
                      </a>
                    ))}
                  </div>

                  {/* cloud partner strip */}
                  {/* <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] px-5 py-4">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 mb-3 font-medium">Vendor-Neutral Delivery</p>
                    <div className="flex items-center justify-between">
                      {["Microsoft", "AWS", "Google Cloud"].map((v, i) => (
                        <span key={i} className="text-[11px] font-semibold text-white/30 hover:text-white/60 transition-colors">{v}</span>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>

              {/* bottom trust strip inside card */}
              <div className="relative z-10 border-t border-white/[0.05] py-4 overflow-hidden">
                <div className="flex">
                  <div className="marquee-rtt flex shrink-0">
                    {[...trustItems, ...trustItems].map((t, i) => (
                      <span key={i} className="inline-flex items-center gap-3 px-8 text-[10px] uppercase tracking-[0.2em] text-white/25 whitespace-nowrap">
                        <span className="text-[#facc15]">✦</span>{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
 
        </div>
      </section>
    </>
  );
}