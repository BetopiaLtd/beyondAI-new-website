"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const products = [
  { id: "01", name: "HRM Software", tag: "Most Popular", accent: "#f97316", short: "Smart HR for modern orgs" },
  { id: "02", name: "Beyond AI ERP", tag: "New", accent: "#0ea5e9", short: "All in one enterprise platform" },
  { id: "03", name: "Count Trust", tag: "Popular", accent: "#10b981", short: "Secure digital voting" },
  { id: "04", name: "Agentic AI", tag: "Essential", accent: "#a855f7", short: "Automates sales & engagement" },
  { id: "05", name: "Talkora AI", tag: "Essential", accent: "#facc15", short: "AI call handling 24/7" },
];

const pillars = ["Mobile", "Integration", "Analytics", "Security", "Automation"];
const trustBadges = ["AI Driven Platforms", "Enterprise Grade Security", "1000+ App Integrations", "Real Time Analytics", "Bank Level Encryption", "Scalable for Growth"];

export default function ProductHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => { setActive(p => (p + 1) % products.length); setTick(p => p + 1); }, 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number, t = 0;
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.003;
      // Hex grid
      const s = 36;
      for (let x = 0; x < W + s; x += s * 1.5) {
        for (let y = 0; y < H + s; y += s * Math.sqrt(3)) {
          const offset = Math.floor(x / (s * 1.5)) % 2 === 0 ? 0 : s * Math.sqrt(3) / 2;
          const cx = x, cy = y + offset;
          const wave = Math.sin(cx * 0.012 + t) * Math.cos(cy * 0.010 + t * 0.8);
          const alpha = 0.025 + wave * 0.02;
          if (alpha > 0) {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 3) * i - Math.PI / 6;
              const px = cx + (s * 0.45) * Math.cos(angle);
              const py = cy + (s * 0.45) * Math.sin(angle);
              i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle = `rgba(250,204,21,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      // Particles
      for (let i = 0; i < 30; i++) {
        const x = ((Math.sin(i * 2.1 + t * 0.4) + 1) / 2) * W;
        const y = ((Math.cos(i * 1.8 + t * 0.28) + 1) / 2) * H;
        const r = 1 + Math.sin(i + t) * 0.4;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250,204,21,${0.05 + Math.sin(i + t) * 0.03})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  const cur = products[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
        .ph-root { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes borderGlow { 0%,100%{box-shadow:0 0 16px 2px rgba(250,204,21,0.12)} 50%{box-shadow:0 0 30px 5px rgba(250,204,21,0.26)} }
        @keyframes barGrow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes prodSwap { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pillFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes rotateSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulseRing { 0%{box-shadow:0 0 0 0 rgba(250,204,21,0.45)} 70%{box-shadow:0 0 0 10px rgba(250,204,21,0)} 100%{box-shadow:0 0 0 0 rgba(250,204,21,0)} }

        .ph-1{animation:fadeUp 0.7s ease both 0.05s}
        .ph-2{animation:fadeUp 0.7s ease both 0.18s}
        .ph-3{animation:fadeUp 0.7s ease both 0.32s}
        .ph-4{animation:fadeUp 0.7s ease both 0.46s}
        .ph-5{animation:fadeUp 0.7s ease both 0.60s}
        .ph-fi{animation:fadeIn 1s ease both 0.2s}

        .shimmer-gold { background:linear-gradient(90deg,#facc15 0%,#fef08a 38%,#facc15 55%,#ca8a04 100%); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:shimmer 3s linear infinite }
        .shimmer-white { background:linear-gradient(90deg,#fff 0%,#c7d2fe 40%,#fff 60%,#e0e7ff 100%); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:shimmer 4.5s linear infinite }

        .cta-p { position:relative; overflow:hidden; transition:transform 0.2s,box-shadow 0.2s }
        .cta-p::before { content:''; position:absolute; inset:0; background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.2) 50%,transparent 70%); transform:translateX(-100%); transition:transform 0.5s }
        .cta-p:hover::before { transform:translateX(100%) }
        .cta-p:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(250,204,21,0.4) }
        .cta-s { transition:background 0.2s,transform 0.2s }
        .cta-s:hover { background:rgba(255,255,255,0.07); transform:translateY(-2px) }

        .card-glow { animation:borderGlow 3.5s ease-in-out infinite }
        .marquee-ph { animation:marquee 28s linear infinite }
        .prod-swap { animation:prodSwap 0.4s cubic-bezier(.22,1,.36,1) both }
        .pill-float { animation:pillFloat 3s ease-in-out infinite }
        .rot-slow { animation:rotateSlow 18s linear infinite }
        .pulse-btn { animation:pulseRing 2s ease-in-out infinite }

        .prod-row { position:relative; display:flex; align-items:center; gap:12px; padding:10px 14px; border-radius:10px; cursor:pointer; transition:background 0.2s; border:1px solid transparent }
        .prod-row:hover,.prod-row.pr-active { background:rgba(255,255,255,0.04); border-color:rgba(255,255,255,0.06) }
        .pr-bar { position:absolute; left:0; top:50%; width:3px; height:0; border-radius:2px; transform:translateY(-50%); transition:height 0.35s cubic-bezier(.22,1,.36,1) }
        .prod-row.pr-active .pr-bar { height:55% }
        .pr-name { font-size:13px; font-weight:500; color:rgba(255,255,255,0.35); transition:color 0.25s }
        .prod-row.pr-active .pr-name,.prod-row:hover .pr-name { color:#fff }
        .pr-tag { font-size:9px; letter-spacing:0.14em; text-transform:uppercase; font-weight:700; padding:2px 8px; border-radius:100px; margin-left:auto; opacity:0; transition:opacity 0.25s }
        .prod-row.pr-active .pr-tag { opacity:1 }

        .noise-ph { background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E") }
        .diag-clip { clip-path:polygon(0 0,100% 0,100% 88%,58% 100%,0 93%) }
      `}</style>

      <div className="ph-root min-h-screen bg-[#050c1a] text-white overflow-hidden mt-20"> 

        {/* HERO */}
        <div className="relative min-h-[calc(100vh-73px)] flex flex-col">
          <canvas ref={canvasRef} className="ph-fi absolute inset-0 w-full h-full pointer-events-none" style={{opacity:0.5}} />
          <div className="noise-ph absolute inset-0 pointer-events-none" />
          <div className="diag-clip absolute inset-0 pointer-events-none" style={{background:"linear-gradient(140deg,rgba(5,12,26,0.97) 0%,rgba(5,12,26,0.6) 100%)"}} />
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none" style={{background:"radial-gradient(circle,rgba(249,115,22,0.06) 0%,transparent 70%)"}} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{background:`radial-gradient(circle,${cur.accent}0a 0%,transparent 70%)`,transition:"background 0.5s"}} />

          {/* Breadcrumb */}
          <div className="ph-1 relative z-10 flex items-center gap-2 px-8 md:px-16 pt-8 text-[10px] uppercase tracking-[0.22em] text-white/20 font-medium">
            <Link href="/" className="hover:text-white/40 transition-colors">Home</Link>
            <span className="text-white/15">/</span>
            <span className="text-[#facc15]/70">Our Products</span>
          </div>

          <div className="relative z-10 flex-1 grid lg:grid-cols-[1fr_460px] gap-10 px-8 md:px-16 pt-10 pb-10 items-center max-w-[1440px] mx-auto w-full">
            {/* LEFT */}
            <div>
              <div className="ph-1 inline-flex items-center gap-3 mb-7">
                <span className="pulse-btn w-2 h-2 rounded-full bg-[#facc15] inline-block" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#facc15] font-semibold">AI-Driven Product Ecosystem</span>
                <span className="h-px w-10 bg-[#facc15]/35" />
              </div>

              <h1 className="ph-2 font-display text-[clamp(42px,6vw,60px)] leading-[0.88] uppercase mb-5">
                <span className="block text-white/18">Discover Beyond ai&apos;s</span>
                <span className="block shimmer-white"></span>
                <span className="block text-white"></span>
                <span className="block shimmer-gold">Intelligent Product Ecosystem.</span>
              </h1>

              <p className="ph-3 text-white/42 text-sm leading-relaxed max-w-[460px] mb-8 font-light">
                AI-driven platforms powering automation, engagement, and business growth. One ecosystem unlimited possibilities for modern enterprises.
              </p>

              {/* Pillar chips */}
              <div className="ph-4 flex flex-wrap gap-2 mb-8">
                {pillars.map((p, i) => (
                  <span key={i} className="pill-float text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full border"
                    style={{background:"rgba(255,255,255,0.04)",borderColor:"rgba(255,255,255,0.08)",color:"rgba(255,255,255,0.45)",animationDelay:`${i*0.4}s`}}>
                    {p}
                  </span>
                ))}
              </div>

              {/* Product list */}
              <div className="ph-4 mb-9 space-y-0.5">
                {products.map((p, i) => (
                  <div key={i} className={`prod-row ${active===i?"pr-active":""}`}
                    onMouseEnter={() => { setActive(i); setTick(t=>t+1); }}>
                    <div className="pr-bar" style={{background:p.accent}} />
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold flex-shrink-0 transition-all duration-200"
                      style={{background:active===i?p.accent+"22":"rgba(255,255,255,0.04)",color:active===i?p.accent:"rgba(255,255,255,0.2)"}}>
                      {p.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="pr-name">{p.name}</p>
                      {active===i && <div className="mt-1 h-[2px] w-24 rounded-full" key={`bar-${tick}`} style={{background:p.accent,transformOrigin:"left",animation:"barGrow 2.6s linear both"}} />}
                    </div>
                    <span className="pr-tag" style={{background:p.accent+"22",color:p.accent}}>{p.tag}</span>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center ml-1 flex-shrink-0 transition-all"
                      style={{background:active===i?p.accent+"20":"transparent"}}>
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
                        <path d="M9 18l6-6-6-6" stroke={active===i?p.accent:"rgba(255,255,255,0.15)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
 
            </div>

            {/* RIGHT */}
            <div className="ph-fi flex flex-col gap-4">
              {/* Active product card */}
              <div className="card-glow relative rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm overflow-hidden">
                <div className="h-[3px] w-full transition-all duration-500" style={{background:`linear-gradient(90deg,${cur.accent},${cur.accent}44)`}} />
                <div className="absolute top-0 right-0 w-52 h-52 rounded-full pointer-events-none transition-all duration-500"
                  style={{background:`radial-gradient(circle,${cur.accent}18 0%,transparent 70%)`,transform:"translate(30%,-30%)"}} />
                <div className="absolute bottom-4 right-4 w-16 h-16 pointer-events-none opacity-5">
                  <svg className="rot-slow" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="28" stroke={cur.accent} strokeWidth="1" strokeDasharray="4 7"/>
                  </svg>
                </div>
                <div className="relative z-10 p-7">
                  <div key={`header-${active}`} className="prod-swap">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[9px] uppercase tracking-[0.22em] font-bold px-2 py-1 rounded-full" style={{background:cur.accent+"22",color:cur.accent}}>{cur.tag}</span>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">Product {cur.id}</span>
                    </div>
                    <h3 className="font-display text-[clamp(28px,3.5vw,44px)] text-white uppercase leading-tight mb-3">{cur.name}</h3>
                    <p className="text-white/40 text-sm font-light mb-6">{cur.short}</p>
                  </div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[{v:"1000+",l:"Integrations"},{v:"24/7",l:"Support"},{v:"99.9%",l:"Uptime"}].map((s,i) => (
                      <div key={i} className="text-center p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                        <p className="font-display text-2xl leading-none" style={{color:cur.accent}}>{s.v}</p>
                        <p className="text-[9px] uppercase tracking-widest text-white/25 mt-1">{s.l}</p>
                      </div>
                    ))}
                  </div>
                  {/* <Link href="/product">
                    <button className="cta-p w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white" style={{background:cur.accent==="facc15"?"#1a2e6b":"#1a2e6b"}}>
                      Explore {cur.name} →
                    </button>
                  </Link> */}
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-l border-b rounded-bl-2xl pointer-events-none transition-all duration-500" style={{borderColor:cur.accent+"25"}} />
                </div>
              </div>

              {/* Bottom mini cards */}
              <div className="grid grid-cols-3 gap-3">
                {[{icon:"🔒",l:"Enterprise Security",s:"Bank-level"},{icon:"⚡",l:"Powerful & Affordable",s:"Scale freely"},{icon:"🔗",l:"Solid Integration",s:"1000+ apps"}].map((b,i) => (
                  <div key={i} className="pill-float rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center hover:bg-white/[0.06] transition-colors" style={{animationDelay:`${i*0.7}s`}}>
                    <div className="text-lg mb-1">{b.icon}</div>
                    <p className="text-white text-[11px] font-medium leading-tight">{b.l}</p>
                    <p className="text-white/25 text-[9px] mt-0.5">{b.s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust marquee */}
          <div className="relative z-10 border-t border-white/[0.05] bg-[#facc15]/[0.02] py-4 overflow-hidden">
            <div className="flex">
              <div className="marquee-ph flex shrink-0 gap-0">
                {[...trustBadges,...trustBadges].map((b,i) => (
                  <span key={i} className="inline-flex items-center gap-3 px-8 text-[10px] uppercase tracking-[0.2em] text-white/28 whitespace-nowrap">
                    <span className="text-[#facc15]">✦</span>{b}
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