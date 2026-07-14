"use client";

import { useEffect, useRef, useState } from "react";

const perks = [
  { icon: "⚡", text: "Start in minutes" },
  { icon: "🎓", text: "Certificate included" },
  { icon: "🔒", text: "No coding needed" },
  { icon: "🌍", text: "100% online & flexible" },
];

const floatingWords = [
  { text: "ML", x: "8%", y: "18%", delay: "0s", size: "13px" },
  { text: "NLP", x: "88%", y: "12%", delay: "0.4s", size: "12px" },
  { text: "LLMs", x: "5%", y: "72%", delay: "0.8s", size: "11px" },
  { text: "GPT", x: "91%", y: "68%", delay: "0.2s", size: "12px" },
  { text: "Agents", x: "50%", y: "6%", delay: "0.6s", size: "11px" },
  { text: "RAG", x: "78%", y: "80%", delay: "1s", size: "10px" },
  { text: "Prompts", x: "18%", y: "88%", delay: "0.3s", size: "11px" },
  { text: "AI Ethics", x: "65%", y: "90%", delay: "0.7s", size: "10px" },
];

export default function CTA() {
  const [vis, setVis] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handle = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    card.addEventListener("mousemove", handle);
    return () => card.removeEventListener("mousemove", handle);
  }, []);

  const handleSubmit = async () => {
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        .cta-root { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-8px) rotate(1deg); }
          66%       { transform: translateY(-4px) rotate(-1deg); }
        }
        @keyframes wordDrift {
          0%, 100% { transform: translateY(0); opacity: 0.18; }
          50%       { transform: translateY(-10px); opacity: 0.32; }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes checkDraw {
          from { stroke-dashoffset: 40; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes pulseRing {
          0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(250,204,21,0.5); }
          70%  { transform: scale(1); box-shadow: 0 0 0 12px rgba(250,204,21,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(250,204,21,0); }
        }
        @keyframes borderRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }

        .cta-anim-1 { animation: fadeUp 0.7s ease both 0.1s; }
        .cta-anim-2 { animation: fadeUp 0.7s ease both 0.22s; }
        .cta-anim-3 { animation: fadeUp 0.7s ease both 0.34s; }
        .cta-anim-4 { animation: fadeUp 0.7s ease both 0.48s; }
        .cta-anim-5 { animation: fadeUp 0.7s ease both 0.62s; }

        .shimmer-yellow {
          background: linear-gradient(90deg, #b45309 0%, #facc15 30%, #fef08a 50%, #facc15 70%, #b45309 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

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

        .dot-pattern {
          background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* ── BIG CARD ── */
        .big-card {
          position: relative;
          border-radius: 28px;
          background: #0f1e4a;
          overflow: hidden;
          border: 1px solid rgba(250,204,21,0.15);
          box-shadow: 0 40px 100px rgba(15,30,74,0.3), 0 0 0 1px rgba(255,255,255,0.04);
        }

        /* rotating conic gradient border */
        .big-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 30px;
          background: conic-gradient(from 0deg, #facc15, #ef4444, #6366f1, #10b981, #facc15);
          z-index: -1;
          animation: borderRotate 6s linear infinite;
          opacity: 0.5;
        }

        .floating-word {
          position: absolute;
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.1em;
          color: rgba(250,204,21,0.15);
          pointer-events: none;
          user-select: none;
          animation: wordDrift 4s ease-in-out infinite;
        }

        /* mesh gradient orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }

        /* ── EMAIL INPUT ── */
        .email-wrap {
          display: flex;
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
          backdrop-filter: blur(4px);
        }
        .email-wrap:focus-within {
          border-color: rgba(250,204,21,0.5);
          box-shadow: 0 0 0 3px rgba(250,204,21,0.1);
        }
        .email-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          padding: 14px 18px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
        }
        .email-input::placeholder { color: rgba(255,255,255,0.3); }
        .email-btn {
          margin: 6px;
          padding: 10px 22px;
          background: #facc15;
          color: #0f1e4a;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }
        .email-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .email-btn:hover::before { transform: translateX(100%); }
        .email-btn:hover:not(:disabled) {
          background: #fde047;
          transform: scale(1.02);
          box-shadow: 0 6px 20px rgba(250,204,21,0.4);
        }
        .email-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        /* ── PERKS ── */
        .perk-item {
          display: flex;
          align-items: center;
          gap: 8px;
          animation: slideIn 0.5s ease both;
        }

        /* ── PULSE BADGE ── */
        .pulse-badge {
          animation: pulseRing 2.2s ease-in-out infinite;
        }

        /* spinner */
        .spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(15,30,74,0.3);
          border-top-color: #0f1e4a;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }

        .check-path {
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: checkDraw 0.5s ease 0.1s both;
        }

        /* success */
        .success-anim { animation: scaleIn 0.5s cubic-bezier(.22,1,.36,1) both; }

        /* ── SIDE DECORATIVE CARDS ── */
        .mini-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 16px;
          backdrop-filter: blur(4px);
          transition: transform 0.3s, background 0.3s;
        }
        .mini-card:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.07);
        }

        .tag-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(250,204,21,0.1); color: #facc15;
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          font-weight: 600; padding: 5px 12px; border-radius: 100px;
          border: 1px solid rgba(250,204,21,0.25);
        }
      `}</style>

      <section ref={sectionRef} className="cta-root relative bg-[#f7f5f0] py-0 pb-10 px-6 md:px-12 lg:px-20 overflow-hidden">

        {/* dot pattern bg */}
        <div className="dot-pattern absolute inset-0 opacity-60 pointer-events-none" />

        {/* ghost watermark */}
        <div className="pointer-events-none select-none absolute bottom-0 right-0 font-display text-[clamp(80px,14vw,220px)] text-[#0f1e4a]/[0.025] leading-none uppercase whitespace-nowrap">
          Begin
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">

          

          {/* ── MAIN BIG CARD ── */}
          <div className={vis ? "cta-anim-2" : "opacity-0"}>
            <div ref={cardRef} className="big-card">

              {/* mesh orbs */}
              <div className="orb w-96 h-96" style={{ background: "rgba(250,204,21,0.08)", top: "-20%", left: "-10%" }} />
              <div className="orb w-80 h-80" style={{ background: "rgba(99,102,241,0.08)", bottom: "-15%", right: "-5%" }} />
              <div className="orb w-64 h-64" style={{ background: "rgba(16,185,129,0.06)", top: "30%", right: "20%" }} />

              {/* dynamic cursor glow */}
              <div
                className="absolute w-[400px] h-[400px] rounded-full pointer-events-none transition-all duration-300 ease-out"
                style={{
                  background: "radial-gradient(circle, rgba(250,204,21,0.07) 0%, transparent 70%)",
                  left: `calc(${mousePos.x * 100}% - 200px)`,
                  top: `calc(${mousePos.y * 100}% - 200px)`,
                }}
              />

              {/* floating tech words */}
              {floatingWords.map((w, i) => (
                <div
                  key={i}
                  className="floating-word"
                  style={{ left: w.x, top: w.y, fontSize: w.size, animationDelay: w.delay, animationDuration: `${3.5 + i * 0.4}s` }}
                >
                  {w.text}
                </div>
              ))}

              {/* top rainbow stripe */}
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, #facc15 0%, #ef4444 33%, #6366f1 66%, #10b981 100%)" }} />

              {/* inner content */}
              <div className="relative z-10 px-8 md:px-14 py-14 md:py-16 flex flex-col items-center text-center">

                {/* live badge */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="pulse-badge w-2.5 h-2.5 rounded-full bg-[#facc15] inline-block" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#facc15] font-semibold">
                    Enrolling Now
                  </span>
                </div>

                {/* headline */}
                <h2 className="font-display text-[clamp(42px,7vw,60px)] leading-[0.88] uppercase mb-6">
                  <span className="block text-white">Your AI future</span>
                  <span className="block shimmer-yellow">starts today.</span>
                </h2>

                <p className="text-white/50 text-sm leading-relaxed max-w-md font-light mb-10">
                  Join thousands of non-technical professionals who are already using AI
                  to work smarter, faster, and with more confidence.
                </p>

                {/* email capture */}
                {/* {submitted ? (
                  <div className="success-anim flex flex-col items-center gap-3 mb-8">
                    <div className="w-14 h-14 rounded-full bg-[#facc15]/10 border-2 border-[#facc15] flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path className="check-path" d="M5 13l4 4L19 7" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-sm">You&apos;re on the list!</p>
                    <p className="text-white/40 text-xs">Check your inbox for next steps.</p>
                  </div>
                ) : (
                  <div className="w-full max-w-md mb-8">
                    <div className="email-wrap">
                      <input
                        type="email"
                        className="email-input"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onKeyDown={e => e.key === "Enter" && handleSubmit()}
                      />
                      <button className="email-btn" onClick={handleSubmit} disabled={submitting}>
                        {submitting
                          ? <span className="flex items-center gap-2"><span className="spinner" /> Sending</span>
                          : "Get Syllabus →"
                        }
                      </button>
                    </div> 
                  </div>
                )} */}

                {/* perks row */}
                {/* <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                  {perks.map((p, i) => (
                    <div key={i} className="perk-item" style={{ animationDelay: `${0.7 + i * 0.1}s` }}>
                      <span className="text-base">{p.icon}</span>
                      <span className="text-white/50 text-xs font-light">{p.text}</span>
                    </div>
                  ))}
                </div> */}
              </div>

              {/* bottom: mini stat cards row */}
              {/* <div className="relative z-10 border-t border-white/[0.06] px-8 md:px-14 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { val: "11", label: "Modules", color: "#6366f1" },
                  { val: "4", label: "Projects", color: "#10b981" },
                  { val: "1", label: "Certificate", color: "#facc15" },
                  { val: "0", label: "Coding Needed", color: "#ef4444" },
                ].map((s, i) => (
                  <div key={i} className="mini-card text-center">
                    <p className="font-display text-3xl leading-none" style={{ color: s.color }}>{s.val}</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mt-1">{s.label}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* ── BELOW CARD: trust + secondary CTA ── */}
          <div className={`mt-12 flex flex-col md:flex-row items-center justify-between gap-6 ${vis ? "cta-anim-5" : "opacity-0"}`}>

            {/* social proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {["#6366f1","#10b981","#ef4444","#0ea5e9","#facc15"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#f7f5f0] flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: c }}
                  >
                    {["J","M","A","R","S"][i]}
                  </div>
                ))}
              </div>
              <p className="text-[#6b7280] text-sm font-light">
                <span className="font-semibold text-[#0f1e4a]">2,400+</span> learners already enrolled
              </p>
            </div>

            {/* secondary link */}
            {/* <div className="flex items-center gap-6">
              <a href="#" className="text-[#6b7280] text-sm hover:text-[#0f1e4a] transition-colors underline underline-offset-2 font-light">
                View full curriculum
              </a>
              <span className="text-[#d1d5db]">·</span>
              <a href="#" className="text-[#6b7280] text-sm hover:text-[#0f1e4a] transition-colors underline underline-offset-2 font-light">
                Read the FAQ
              </a>
              <span className="text-[#d1d5db]">·</span>
              <a href="#" className="text-[#6b7280] text-sm hover:text-[#0f1e4a] transition-colors underline underline-offset-2 font-light">
                Talk to us
              </a>
            </div> */}
          </div>
        </div>

        {/* bottom hr */}
        {/* <div className="mt-16 h-px w-full bg-linear-to-r from-transparent via-[#d1d5db] to-transparent" /> */}

        {/* site footer strip */}
        {/* <p className="text-center text-[10px] uppercase tracking-[0.2em] text-[#d1d5db] mt-6">
          Beyond AI · Trusted Learning · Built for Real-World Clarity
        </p> */}
      </section>
    </>
  );
}