"use client";

import { useEffect, useRef, useState } from "react";

const floatingWords = [
  { text: "HRM", x: "6%", y: "18%", delay: "0s" },
  { text: "ERP", x: "86%", y: "14%", delay: "0.5s" },
  { text: "AI", x: "4%", y: "72%", delay: "0.9s" },
  { text: "Voting", x: "82%", y: "70%", delay: "0.3s" },
  { text: "Talkora", x: "47%", y: "7%", delay: "0.7s" },
  { text: "SaaS", x: "68%", y: "88%", delay: "1.1s" },
  { text: "Automate", x: "20%", y: "88%", delay: "0.4s" },
];

const trustBadges = [
  "AI-Driven Platforms",
  "Enterprise-Grade Security",
  "1000+ Integrations",
  "Bank-Level Encryption",
  "Real-Time Analytics",
  "99.9% Uptime SLA",
  "Scalable for Growth",
];

export function ProductCTA() {
  const [vis, setVis] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
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
        .pcta-root{font-family:'DM Sans',sans-serif}
        .font-display{font-family:'Bebas Neue',sans-serif}
        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shimmerGold{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes shimmerWhite{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes borderRot{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes floatWord{0%,100%{transform:translateY(0);opacity:0.12}50%{transform:translateY(-12px);opacity:0.22}}
        @keyframes pulseRing{0%{box-shadow:0 0 0 0 rgba(250,204,21,0.45)}70%{box-shadow:0 0 0 12px rgba(250,204,21,0)}100%{box-shadow:0 0 0 0 rgba(250,204,21,0)}}
        @keyframes shimBtn{from{transform:translateX(-100%)}to{transform:translateX(100%)}}
        @keyframes countUp{from{opacity:0;transform:scale(0.85)}to{opacity:1;transform:scale(1)}}

        .pcta-1{animation:fadeUp 0.7s ease both 0.1s}
        .pcta-2{animation:fadeUp 0.7s ease both 0.22s}
        .pcta-5{animation:fadeUp 0.7s ease both 0.64s}

        .shimmer-gold-p{background:linear-gradient(90deg,#facc15 0%,#fef08a 38%,#facc15 55%,#ca8a04 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmerGold 3s linear infinite}
        .shimmer-white-p{background:linear-gradient(90deg,#fff 0%,#c7d2fe 40%,#fff 60%,#e0e7ff 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmerGold 4.5s linear infinite}

        .pcta-big-card{position:relative;border-radius:28px;background:#0f1e4a;overflow:hidden;border:1px solid rgba(250,204,21,0.15);box-shadow:0 40px 100px rgba(15,30,74,0.28)}
        .pcta-big-card::before{content:'';position:absolute;inset:-2px;border-radius:30px;background:conic-gradient(from 0deg,#facc15,#f97316,#0ea5e9,#10b981,#a855f7,#facc15);z-index:-1;animation:borderRot 7s linear infinite;opacity:0.45}

        .float-word-p{position:absolute;font-family:'Bebas Neue',sans-serif;letter-spacing:0.1em;color:rgba(250,204,21,0.13);pointer-events:none;user-select:none;animation:floatWord 4s ease-in-out infinite;font-size:13px}
        .orb-p{position:absolute;border-radius:50%;filter:blur(60px);pointer-events:none}
        .marquee-p{animation:marquee 30s linear infinite}
        .pulse-p{animation:pulseRing 2s ease-in-out infinite}
        .noise-p{background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")}
        .dot-pat-p{background-image:radial-gradient(circle,#e2e8f0 1px,transparent 1px);background-size:24px 24px}

        .primary-p{position:relative;overflow:hidden;transition:transform 0.2s,box-shadow 0.2s}
        .primary-p::after{content:'';position:absolute;inset:0;background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.2) 50%,transparent 70%);animation:shimBtn 3s ease-in-out infinite}
        .primary-p:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgba(250,204,21,0.45)}
        .secondary-p{transition:background 0.2s,transform 0.2s}
        .secondary-p:hover{background:rgba(255,255,255,0.08);transform:translateY(-2px)}
      `}</style>

      <section ref={sectionRef} className="pcta-root relative bg-[#f7f5f0] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="dot-pat-p absolute inset-0 opacity-50 pointer-events-none" />
        <div className="pointer-events-none select-none absolute bottom-0 right-0 font-display text-[clamp(80px,14vw,220px)] text-[#0f1e4a]/[0.025] leading-none uppercase">Ecosystem</div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          {/* top label */}
          <div className={`text-center mb-12 ${vis?"pcta-1":"opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-[#eff2ff] text-[#1a2e6b] text-[10px] uppercase tracking-[0.18em] font-semibold px-4 py-2 rounded-full border border-[#c7d2fe] mb-4">
              <span className="pulse-p w-2 h-2 rounded-full bg-[#facc15] inline-block" />
              Ready to Transform?
            </div>
            <p className="font-display text-[clamp(16px,2vw,20px)] uppercase tracking-widest text-[#9ca3af]">Start your free trial today</p>
          </div>

          {/* Big card */}
          <div className={vis?"pcta-2":"opacity-0"}>
            <div ref={cardRef} className="pcta-big-card">
              <div className="noise-p absolute inset-0 pointer-events-none" />
              <div className="orb-p w-96 h-96" style={{background:"rgba(249,115,22,0.07)",top:"-20%",left:"-8%"}} />
              <div className="orb-p w-80 h-80" style={{background:"rgba(168,85,247,0.07)",bottom:"-15%",right:"-5%"}} />
              <div className="orb-p w-56 h-56" style={{background:"rgba(14,165,233,0.05)",top:"25%",right:"22%"}} />
              <div className="pointer-events-none absolute w-96 h-96 rounded-full transition-all duration-500"
                style={{background:"radial-gradient(circle,rgba(250,204,21,0.07) 0%,transparent 70%)",left:`calc(${mousePos.x*100}% - 192px)`,top:`calc(${mousePos.y*100}% - 192px)`}} />

              {floatingWords.map((w,i) => (
                <div key={i} className="float-word-p" style={{left:w.x,top:w.y,animationDelay:w.delay,animationDuration:`${3.5+i*0.35}s`}}>{w.text}</div>
              ))}

              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{background:"linear-gradient(90deg,#f97316 0%,#facc15 20%,#0ea5e9 50%,#10b981 75%,#a855f7 100%)"}} />

              <div className="relative z-10 px-8 md:px-14 py-14 grid lg:grid-cols-[1fr_400px] gap-12 items-center">
                {/* Left */}
                <div>
                  <h2 className="font-display text-[clamp(42px,6vw,60px)] leading-[0.88] uppercase mb-6">
                    <span className="block text-white/20">Ready to</span>
                    <span className="block shimmer-white-p">Transform</span>
                    <span className="block text-white">Your</span>
                    <span className="block shimmer-gold-p">Business?</span>
                  </h2>
                  <p className="text-white/45 text-sm leading-relaxed max-w-md font-light mb-8">
                    Join thousands of businesses already using Beyond AI&apos;s intelligent product ecosystem. Start your free trial today and experience the difference firsthand.
                  </p>
                  {/* <div className="grid grid-cols-3 gap-4 mb-8">
                    {[{v:"5",l:"AI Products",c:"#f97316"},{v:"1000+",l:"Integrations",c:"#0ea5e9"},{v:"24/7",l:"Support",c:"#10b981"}].map((s,i) => (
                      <div key={i} className="text-center p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                        <p className="font-display text-3xl leading-none" style={{color:s.c}}>{s.v}</p>
                        <p className="text-[9px] uppercase tracking-widest text-white/30 mt-1">{s.l}</p>
                      </div>
                    ))}
                  </div> */}
                  {/* <div className="flex flex-wrap gap-4">
                    <a href="/contact">
                      <button className="primary-p px-8 py-4 bg-[#facc15] text-[#050c1a] text-xs font-bold uppercase tracking-widest rounded-sm">Contact HR Team</button>
                    </a>
                    <a href="/meeting-scheduler">
                      <button className="secondary-p px-8 py-4 border border-white/20 text-white/60 text-xs uppercase tracking-widest rounded-sm">Book a Demo</button>
                    </a>
                  </div> */}
                </div>

                {/* Right */}
                <div className="flex flex-col gap-4">
                  {/* Product quick links */}
                  <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-5">
                    <p className="text-[9px] uppercase tracking-[0.22em] text-white/30 font-semibold mb-4">Our Products</p>
                    <div className="space-y-2">
                      {[
                        {name:"Beyond AI HRM",tag:"Most Popular",color:"#f97316",href:"#"},
                        {name:"Beyond AI ERP",tag:"New",color:"#0ea5e9",href:"#"},
                        {name:"Count Trust",tag:"Popular",color:"#10b981",href:"#"},
                        {name:"Agentic AI",tag:"Essential",color:"#a855f7",href:"#"},
                        {name:"Talkora AI",tag:"Essential",color:"#facc15",href:"#"},
                      ].map((p,i) => (
                        <a key={i} href={p.href}
                          className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/[0.05] transition-all group">
                          <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors font-light">{p.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full" style={{background:p.color+"22",color:p.color}}>{p.tag}</span>
                            {/* <svg width="10" height="10" fill="none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> */}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Contact row */}
                  <div className="grid grid-cols-2 gap-3">
                    {[{icon:"📞",l:"Call Us",v:"(512) 827-2606",href:"tel:+13128773570"},{icon:"✉️",l:"Email Us",v:"Info@beyondai.ph",href:"mailto:Info@beyondai.ph"}].map((c,i) => (
                      <a key={i} href={c.href} className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-4 hover:bg-white/[0.07] transition-all hover:-translate-y-0.5">
                        <div className="text-lg mb-2">{c.icon}</div>
                        <p className="text-[9px] uppercase tracking-[0.15em] text-white/30 mb-1">{c.l}</p>
                        <p className="text-white/60 text-[11px] font-medium leading-tight">{c.v}</p>
                      </a>
                    ))}
                  </div>

                  {/* <a href="/partner-program" className="rounded-xl bg-[#facc15]/10 border border-[#facc15]/25 p-4 flex items-center justify-between hover:bg-[#facc15]/15 transition-all group">
                    <div>
                      <p className="text-[#facc15] text-xs font-bold uppercase tracking-widest">Become a Partner</p>
                      <p className="text-white/30 text-[11px] mt-0.5">Join our partner program</p>
                    </div>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-[#facc15] group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a> */}
                </div>
              </div>

              {/* Trust marquee */}
              <div className="relative z-10 border-t border-white/[0.05] py-4 overflow-hidden">
                <div className="flex">
                  <div className="marquee-p flex shrink-0">
                    {[...trustBadges,...trustBadges].map((t,i) => (
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