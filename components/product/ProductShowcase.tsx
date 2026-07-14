"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────
   SECTION 2 — ALL PRODUCTS SHOWCASE
───────────────────────────────────────────────── */

const allProducts = [
  {
    id: "01",
    name: "Beyond AI HRM Software",
    slug: "/product/hrm-product",
    tag: "Most Popular",
    tagColor: "#f97316",
    accent: "#f97316",
    accentBg: "#fff7ed",
    headline: "Transform your HR operations with our comprehensive human resource management system.",
    features: [
      "Employee Database & Profile Management",
      "Payroll Processing & Tax Calculations",
      "Attendance & Leave Management",
      "Performance Reviews & Goal Tracking",
      "Recruitment & Onboarding Workflows",
      "Training & Development Programs",
    ],
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "02",
    name: "Beyond AI ERP",
    slug: "/product/erp-product",
    tag: "New",
    tagColor: "#0ea5e9",
    accent: "#0ea5e9",
    accentBg: "#e0f2fe",
    headline: "Fully integrated enterprise resource planning built on the powerful Odoo framework.",
    features: [
      "Real-time Data Synchronization Across All Modules",
      "Customizable Workflows & Business Reports",
      "Mobile-Friendly Interface for Anytime Access",
      "Industry-Leading Security & Compliance",
    ],
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "03",
    name: "Beyond AI Count Trust",
    slug: "/product/voting-count-trust",
    tag: "Popular",
    tagColor: "#10b981",
    accent: "#10b981",
    accentBg: "#d1fae5",
    headline: "Secure, enterprise-grade voting platform for conducting elections with complete confidence.",
    features: [
      "Smart Registration & Verification",
      "Role-Based Dashboards",
      "Secure and Transparent Voting",
      "Integrated Payment & Membership",
      "Live Results & Reporting",
      "Branding & Customization",
    ],
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "04",
    name: "Beyond AI Agentic AI",
    slug: "/product",
    tag: "Essential",
    tagColor: "#a855f7",
    accent: "#a855f7",
    accentBg: "#f5f3ff",
    headline: "AI-powered agent that automates sales, negotiation, and customer engagement end-to-end.",
    features: [
      "Automated Sales Pipeline Management",
      "AI-Driven Negotiation Workflows",
      "Customer Engagement Automation",
      "Real-Time Conversation Intelligence",
      "CRM Integration & Data Sync",
      "Performance Analytics Dashboard",
    ],
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "05",
    name: "Talkora AI",
    slug: "/product",
    tag: "Essential",
    tagColor: "#facc15",
    accent: "#facc15",
    accentBg: "#fefce8",
    headline: "AI that answers, understands, and manages your business calls 24/7 — never miss an opportunity.",
    features: [
      "24/7 Intelligent Call Handling",
      "Natural Language Understanding",
      "Automatic Call Routing & Escalation",
      "Voice Analytics & Transcription",
      "CRM & Calendar Integration",
      "Custom Voice Persona & Branding",
    ],
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const [vis, setVis] = useState(false);
  const [cardVis, setCardVis] = useState<boolean[]>(new Array(allProducts.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (sectionRef.current) sObs.observe(sectionRef.current);
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setTimeout(() => setCardVis(p => { const n=[...p]; n[i]=true; return n; }), i * 100);
      }, { threshold: 0.08 });
      o.observe(el);
    });
    return () => sObs.disconnect();
  }, []);

  const cur = allProducts[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
        .ps-root{font-family:'DM Sans',sans-serif}
        .font-display{font-family:'Bebas Neue',sans-serif}
        @keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes lineGrow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
        @keyframes panelSlide{from{opacity:0;transform:translateX(18px)}to{opacity:1;transform:translateX(0)}}
        @keyframes bulletFade{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
        @keyframes rotSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes numPop{from{opacity:0;transform:scale(0.85)}to{opacity:1;transform:scale(1)}}

        .ps-hdr{animation:fadeUp 0.7s ease both}
        .ps-card{animation:fadeUp 0.55s cubic-bezier(.22,1,.36,1) both}
        .ps-panel{animation:panelSlide 0.4s cubic-bezier(.22,1,.36,1) both}
        .ps-bullet{animation:bulletFade 0.35s cubic-bezier(.22,1,.36,1) both}

        .shimmer-blue{background:linear-gradient(90deg,#1a2e6b 0%,#3b5bdb 38%,#1a2e6b 60%,#0f1e4a 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 4s linear infinite}
        .accent-bar{transform-origin:left;animation:lineGrow 0.8s cubic-bezier(.22,1,.36,1) both 0.2s}
        .tag-pill-ps{display:inline-flex;align-items:center;gap:6px;background:#eff2ff;color:#1a2e6b;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;padding:5px 12px;border-radius:100px;border:1px solid #c7d2fe}
        .dot-pat{background-image:radial-gradient(circle,#e2e8f0 1px,transparent 1px);background-size:24px 24px}

        .prod-tab{position:relative;display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:12px;cursor:pointer;transition:all 0.22s;border:1.5px solid transparent}
        .prod-tab:hover,.prod-tab.pt-active{background:#fff;border-color:#f1f5f9;box-shadow:0 4px 20px rgba(26,46,107,0.07)}
        .pt-stripe{position:absolute;left:0;top:50%;width:3px;height:0;border-radius:2px;transform:translateY(-50%);transition:height 0.35s cubic-bezier(.22,1,.36,1)}
        .prod-tab.pt-active .pt-stripe{height:60%}
        .pt-name{font-size:13px;font-weight:500;color:#9ca3af;transition:color 0.22s}
        .prod-tab.pt-active .pt-name,.prod-tab:hover .pt-name{color:#0f1e4a}
        .pt-tag{font-size:9px;letter-spacing:0.14em;text-transform:uppercase;font-weight:700;padding:2px 8px;border-radius:100px;margin-left:auto;opacity:0;transform:translateX(6px);transition:all 0.25s}
        .prod-tab.pt-active .pt-tag{opacity:1;transform:translateX(0)}

        .detail-panel-ps{position:sticky;top:24px;border-radius:20px;background:#fff;border:1.5px solid #f1f5f9;overflow:hidden;box-shadow:0 16px 48px rgba(26,46,107,0.08)}
        .rot-ring-ps{animation:rotSlow 18s linear infinite}

        .cta-ps{position:relative;overflow:hidden;transition:transform 0.2s,box-shadow 0.2s}
        .cta-ps::before{content:'';position:absolute;inset:0;background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.2) 50%,transparent 70%);transform:translateX(-100%);transition:transform 0.5s}
        .cta-ps:hover::before{transform:translateX(100%)}
        .cta-ps:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(26,46,107,0.22)}
      `}</style>

      <section ref={sectionRef} className="ps-root relative bg-[#f7f5f0] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="dot-pat absolute inset-0 opacity-50 pointer-events-none" />
        <div className="pointer-events-none select-none absolute top-0 right-0 font-display text-[clamp(80px,12vw,180px)] text-[#0f1e4a]/[0.025] leading-none uppercase whitespace-nowrap">Products</div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          {/* Header */}
          <div className={`mb-14 ${vis?"ps-hdr":"opacity-0"}`}>
            <div className="tag-pill-ps mb-5"><span className="w-1.5 h-1.5 rounded-full bg-[#facc15] inline-block" />All-in-One Ecosystem</div>
            <div className="accent-bar h-0.5 w-12 bg-[#facc15] mb-6 rounded-full" />
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <h2 className="font-display text-[clamp(40px,6vw,60px)] leading-[0.9] uppercase text-[#0f1e4a] mb-4">
                  All-in-One<br /><span className="shimmer-blue">Ecosystem</span><br /><span className="text-[#9ca3af]">for Modern</span> Business.
                </h2>
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg font-light">Five intelligent products , each built to solve a specific enterprise challenge, all designed to work seamlessly together in one connected ecosystem.</p>
              </div>
              <div className="flex gap-4 shrink-0">
                {[{v:"5",l:"Products"},{v:"1000+",l:"Integrations"},{v:"99.9%",l:"Uptime"}].map((s,i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-100 px-4 py-3 text-center shadow-sm">
                    <p className="font-display text-3xl text-[#1a2e6b] leading-none">{s.v}</p>
                    <p className="text-[9px] uppercase tracking-wider text-[#9ca3af] mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
            {/* Tab list */}
            <div className="space-y-2">
              {allProducts.map((p, i) => (
                <div key={i} ref={el=>{cardRefs.current[i]=el}}
                  className={`prod-tab ${active===i?"pt-active":""} ${cardVis[i]?"ps-card":"opacity-0"}`}
                  style={{animationDelay:`${i*0.09}s`}}
                  onClick={() => setActive(i)}>
                  <div className="pt-stripe" style={{background:p.accent}} />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-250"
                    style={{background:active===i?p.accentBg:"#f8fafc",color:p.accent}}>
                    {p.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="pt-name">{p.name}</p>
                    <p className="text-[11px] text-[#d1d5db] font-light truncate pr-4">{p.headline.slice(0,55)}…</p>
                  </div>
                  <span className="pt-tag" style={{background:p.accentBg,color:p.accent}}>{p.tag}</span>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="flex-shrink-0 ml-1">
                    <path d="M9 18l6-6-6-6" stroke={active===i?p.accent:"#d1d5db"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ))}
            </div>

            {/* Detail panel */}
            <div className="detail-panel-ps">
              <div key={active} className="ps-panel">
                <div className="h-[3px]" style={{background:`linear-gradient(90deg,${cur.accent},${cur.accent}44)`}} />
                <div className="absolute top-0 right-0 w-44 h-44 rounded-full pointer-events-none" style={{background:`radial-gradient(circle,${cur.accent}14 0%,transparent 70%)`,transform:"translate(30%,-30%)"}} />
                <div className="absolute bottom-4 right-4 w-14 h-14 pointer-events-none opacity-[0.06]">
                  <svg className="rot-ring-ps" viewBox="0 0 56 56" fill="none">
                    <circle cx="28" cy="28" r="24" stroke={cur.accent} strokeWidth="1.2" strokeDasharray="4 7"/>
                  </svg>
                </div>
                <div className="relative z-10 p-7">
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:cur.accentBg,color:cur.accent}}>{cur.icon}</div>
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold" style={{color:cur.accent}}>Product {cur.id}</span>
                      <h3 className="font-display text-[clamp(20px,2.5vw,30px)] text-[#0f1e4a] uppercase leading-tight">{cur.name}</h3>
                    </div>
                  </div>
                  <p className="text-[#6b7280] text-sm leading-relaxed font-light mb-5 pb-5 border-b border-gray-100">{cur.headline}</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#9ca3af] font-semibold mb-4">Key Features</p>
                  <ul className="space-y-2.5 mb-7">
                    {cur.features.map((f,i) => (
                      <li key={i} className="ps-bullet flex items-center gap-3 text-[#374151] text-sm font-light" style={{animationDelay:`${i*0.06}s`}}>
                        <span className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0" style={{background:cur.accentBg,color:cur.accent}}>
                          <svg width="10" height="10" fill="none" viewBox="0 0 10 10"><path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {/* <div className="flex flex-col gap-2.5">
                    <a href={cur.slug}>
                      <button className="cta-ps w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white" style={{background:cur.accent==="facc15"?"#1a2e6b":"#1a2e6b"}}>
                        Learn More — {cur.name} →
                      </button>
                    </a>
                    <a href="/meeting-scheduler">
                      <button className="w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-widest border border-gray-200 text-[#6b7280] hover:bg-gray-50 hover:text-[#0f1e4a] transition-all">
                        Book a Demo
                      </button>
                    </a>
                  </div> */}
                  <button onClick={()=>setActive((active+1)%allProducts.length)}
                    className="mt-3 w-full text-center text-[10px] text-[#d1d5db] hover:text-[#9ca3af] transition-colors uppercase tracking-widest">
                    Next Product →
                  </button>
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


/* ─────────────────────────────────────────────────
   SECTION 3 — WHY CHOOSE Beyond AI
───────────────────────────────────────────────── */

const reasons = [
  {
    icon: "⚡",
    title: "Powerful & Affordable",
    desc: "Get enterprise-level features without the enterprise price tag. Our solutions are designed to scale with your business growth.",
    accent: "#f97316",
    accentBg: "#fff7ed",
    stat: "40%", statLabel: "Cost Reduction",
  },
  {
    icon: "🔗",
    title: "Solid Integration",
    desc: "Connect seamlessly with over 1,000+ apps and services. Our open API makes integration simple and straightforward.",
    accent: "#0ea5e9",
    accentBg: "#e0f2fe",
    stat: "1000+", statLabel: "Integrations",
  },
  {
    icon: "🌐",
    title: "Business Connectivity",
    desc: "Break down silos and keep your entire team connected. Real-time collaboration tools that actually work.",
    accent: "#10b981",
    accentBg: "#d1fae5",
    stat: "99.9%", statLabel: "Uptime SLA",
  },
  {
    icon: "📊",
    title: "Data-Driven Insights",
    desc: "Transform raw data into actionable insights. Advanced analytics and customizable dashboards at your fingertips.",
    accent: "#a855f7",
    accentBg: "#f5f3ff",
    stat: "Real-time", statLabel: "Analytics",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    desc: "Your data security is our top priority. Bank-level encryption, compliance certifications, and regular security audits.",
    accent: "#ef4444",
    accentBg: "#fef2f2",
    stat: "256-bit", statLabel: "Encryption",
  },
];

export function WhyChooseBeyondAI() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [vis, setVis] = useState(false);
  const [cardVis, setCardVis] = useState<boolean[]>(new Array(reasons.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (sectionRef.current) sObs.observe(sectionRef.current);
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setTimeout(() => setCardVis(p => { const n=[...p]; n[i]=true; return n; }), i * 100);
      }, { threshold: 0.1 });
      o.observe(el);
    });
    return () => sObs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
        .wcb-root{font-family:'DM Sans',sans-serif}
        .font-display{font-family:'Bebas Neue',sans-serif}
        @keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes lineGrow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
        @keyframes emojiFloat{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-7px) rotate(5deg)}}
        @keyframes statCount{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}

        .wcb-hdr{animation:fadeUp 0.7s ease both}
        .wcb-card{animation:fadeUp 0.55s cubic-bezier(.22,1,.36,1) both}

        .shimmer-blue{background:linear-gradient(90deg,#1a2e6b 0%,#3b5bdb 38%,#1a2e6b 60%,#0f1e4a 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 4s linear infinite}
        .accent-bar-wcb{transform-origin:left;animation:lineGrow 0.8s cubic-bezier(.22,1,.36,1) both 0.2s}
        .dot-pat-wcb{background-image:radial-gradient(circle,#e2e8f0 1px,transparent 1px);background-size:24px 24px}
        .tag-pill-wcb{display:inline-flex;align-items:center;gap:6px;background:#eff2ff;color:#1a2e6b;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;padding:5px 12px;border-radius:100px;border:1px solid #c7d2fe}

        .reason-card{position:relative;background:#fff;border-radius:20px;border:1.5px solid #f1f5f9;padding:28px;overflow:hidden;cursor:default;transition:transform 0.3s cubic-bezier(.22,1,.36,1),box-shadow 0.3s,border-color 0.3s}
        .reason-card:hover{transform:translateY(-7px) scale(1.01);box-shadow:0 28px 56px rgba(26,46,107,0.12)}
        .rc-stripe{position:absolute;top:0;left:0;right:0;height:3px;transform-origin:left;transform:scaleX(0);transition:transform 0.4s cubic-bezier(.22,1,.36,1)}
        .reason-card:hover .rc-stripe{transform:scaleX(1)}
        .rc-ghost{position:absolute;bottom:-8px;right:8px;font-family:'Bebas Neue',sans-serif;font-size:80px;line-height:1;color:transparent;-webkit-text-stroke:1px;pointer-events:none;opacity:0.04;user-select:none;transition:opacity 0.3s}
        .reason-card:hover .rc-ghost{opacity:0.08}
        .rc-icon{font-size:32px;display:inline-block;transition:all 0.3s;margin-bottom:16px}
        .reason-card:hover .rc-icon{animation:emojiFloat 1.4s ease-in-out infinite}
        .rc-stat{font-family:'Bebas Neue',sans-serif;font-size:36px;line-height:1;transition:transform 0.3s}
        .reason-card:hover .rc-stat{transform:scale(1.05)}

        /* wide featured card */
        .featured-card{position:relative;border-radius:20px;background:#0f1e4a;overflow:hidden;padding:36px;border:1px solid rgba(250,204,21,0.15)}
        .fc-glow{position:absolute;border-radius:50%;filter:blur(60px);pointer-events:none}
      `}</style>

      <section ref={sectionRef} className="wcb-root relative bg-[#f7f5f0] py-0 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="dot-pat-wcb absolute inset-0 opacity-50 pointer-events-none" />
        <div className="pointer-events-none select-none absolute top-0 left-0 font-display text-[clamp(80px,12vw,180px)] text-[#0f1e4a]/[0.025] leading-none uppercase whitespace-nowrap">Why Beyond AI</div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          {/* Header */}
          <div className={`mb-14 ${vis?"wcb-hdr":"opacity-0"}`}>
            <div className="tag-pill-wcb mb-5"><span className="w-1.5 h-1.5 rounded-full bg-[#facc15] inline-block" />Why Choose Beyond AI</div>
            <div className="accent-bar-wcb h-0.5 w-12 bg-[#facc15] mb-6 rounded-full" />
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <h2 className="font-display text-[clamp(40px,6vw,60px)] leading-[0.9] uppercase text-[#0f1e4a] mb-4">
                  Built for<br /><span className="shimmer-blue">Enterprise.</span><br /><span className="text-[#9ca3af]">Priced for</span> Everyone.
                </h2>
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg font-light">Five reasons thousands of businesses trust Beyond AI's intelligent product ecosystem to power their operations.</p>
              </div>
            </div>
          </div>

          {/* 5 reason cards — 3 top + 2 bottom wide */}
          <div className="grid sm:grid-cols-3 gap-5 mb-5">
            {reasons.slice(0,3).map((r, i) => (
              <div key={i} ref={el=>{cardRefs.current[i]=el}}
                className={`reason-card ${cardVis[i]?"wcb-card":"opacity-0"}`}
                style={{borderColor:hovered===i?r.accent+"44":undefined,boxShadow:hovered===i?`0 24px 48px ${r.accent}18`:undefined,animationDelay:`${i*0.09}s`}}
                onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)}>
                <div className="rc-stripe" style={{background:`linear-gradient(90deg,${r.accent},${r.accent}66)`}} />
                <div className="rc-ghost" style={{WebkitTextStrokeColor:r.accent}}>0{i+1}</div>
                <div className="absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-300" style={{background:`radial-gradient(circle at 25% 25%,${r.accent}0c 0%,transparent 55%)`,opacity:hovered===i?1:0}} />
                <div className="relative z-10">
                  <div className="rc-icon">{r.icon}</div>
                  <div className="flex items-end justify-between mb-3">
                    <h3 className="font-semibold text-[#0f1e4a] text-[15px] leading-snug">{r.title}</h3>
                    <div className="text-right ml-4">
                      <p className="rc-stat" style={{color:r.accent}}>{r.stat}</p>
                      <p className="text-[9px] uppercase tracking-widest text-[#9ca3af] mt-0.5">{r.statLabel}</p>
                    </div>
                  </div>
                  <p className="text-[#6b7280] text-xs leading-relaxed font-light">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.slice(3).map((r, i) => {
              const gi = i + 3;
              return (
                <div key={gi} ref={el=>{cardRefs.current[gi]=el}}
                  className={`reason-card ${cardVis[gi]?"wcb-card":"opacity-0"}`}
                  style={{borderColor:hovered===gi?r.accent+"44":undefined,animationDelay:`${gi*0.09}s`}}
                  onMouseEnter={()=>setHovered(gi)} onMouseLeave={()=>setHovered(null)}>
                  <div className="rc-stripe" style={{background:`linear-gradient(90deg,${r.accent},${r.accent}66)`}} />
                  <div className="rc-ghost" style={{WebkitTextStrokeColor:r.accent}}>0{gi+1}</div>
                  <div className="absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-300" style={{background:`radial-gradient(circle at 25% 25%,${r.accent}0c 0%,transparent 55%)`,opacity:hovered===gi?1:0}} />
                  <div className="relative z-10 flex items-start gap-5">
                    <div className="rc-icon flex-shrink-0">{r.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-[#0f1e4a] text-[15px]">{r.title}</h3>
                        <div className="text-right">
                          <p className="rc-stat text-3xl" style={{color:r.accent}}>{r.stat}</p>
                          <p className="text-[9px] uppercase tracking-widest text-[#9ca3af]">{r.statLabel}</p>
                        </div>
                      </div>
                      <p className="text-[#6b7280] text-xs leading-relaxed font-light">{r.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-20 h-px w-full bg-linear-to-r from-transparent via-[#d1d5db] to-transparent" />
      </section>
    </>
  );
}