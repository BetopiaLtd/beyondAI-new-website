"use client";

import { useState, useEffect, useRef } from "react";
import Container from "../shared/Container";
import HeadingTwo from "../shared/heading/HeadingTwo";
import PageSubtitle from "../shared/heading/pageSubtitle";

const products = [
  {
    index: "01",
    title: "HRM Software",
    brand: "Beyond AI",
    tag: "Workforce Intelligence",
    accent: "#FF6B35",
    bgLight: "#FFF4EF",
    description:
      "Beyond AI HRM is a modern, enterprise-grade Human Resource Management platform designed to simplify and secure workforce operations at scale. It centralizes employee records, roles, attendance, leave, payroll readiness, performance, and analytics into one intuitive system.By automating routine HR tasks and delivering real-time insights, Beyond AI HRM helps organizations improve productivity, strengthen governance, and make smarter workforce decisions.",
    image: "/images/betopia-hrm.jpg",
    link: "/product/hrm-product",
    stat: "10K+",
    statLabel: "Employees Managed",
  },
  {
    index: "02",
    title: "ERP",
    brand: "Beyond AI",
    tag: "Unified Operations",
    accent: "#00B4A0",
    bgLight: "#EDFAF8",
    description:
      "Beyond AI ERP is an enterprise-grade, modular platform built for multi-branch and multi-location organizations that need full operational control and real-time visibility. It unifies HRMS, finance, sales, CRM, purchasing, inventory, KPI management, and analytics into one secure, integrated system.Designed for scalability, Beyond AI ERP supports both cloud and on-premise deployment and adapts to unique organizational workflows.",
    image: "/images/betopia-erp.jpg",
    link: "/product/erp-product",
    stat: "50+",
    statLabel: "Modules Available",
  },
  {
    index: "03",
    title: "Count Trust",
    brand: "Beyond AI",
    tag: "Secure Voting",
    accent: "#7C4DFF",
    bgLight: "#F3EFFF",
    description:
      "CountTrust is Beyond AI's enterprise-grade online voting platform built for organizations that need secure, transparent, and verifiable digital elections. Designed for clubs, schools, enterprises, trusts, and institutions, it supports configurable workflows and multiple election formats.Unlike generic tools, CountTrust enables controlled voting through Windows and macOS terminals, building trust in high-stakes environments with cloud or on-prem deployment.",
    image: "/images/count-trust.jpg",
    link: "/product/voting-count-trust",
    stat: "100%",
    statLabel: "Audit-Ready",
  },
  {
    index: "04",
    title: "Talkora AI",
    brand: "Beyond AI",
    tag: "Voice Automation",
    accent: "#E8335A",
    bgLight: "#FFF0F3",
    description:
      "Talkora AI is an intelligent voice and call automation platform designed to transform business communications. It enables smart outbound and inbound calls with real-time voice understanding, call handling, analytics, and smooth customer interactions.Built for businesses of all sizes, Talkora AI automates responses, routes conversations intelligently, and turns calls into actionable outcomes with enterprise-grade reliability.",
    image: "/images/talkora-ai.jpg",
    link: "https://talkoraai.com/",
    stat: "24/7",
    statLabel: "Always Active",
  },
  {
    index: "05",
    title: "Agentic AI",
    brand: "Beyond AI",
    tag: "Autonomous AI",
    accent: "#D4900A",
    bgLight: "#FFFBEF",
    description:
      "Beyond AI Agentic AI delivers autonomous AI solutions designed to execute real business tasks — not just answer queries. These AI agents power chatbots, voice assistants, scheduling, workflow automation, and decision support to streamline operations.Built for healthcare, education, and hospitality, they understand intent, act in real time, and learn continuously while operating 24/7 with strong security and high scalability.",
    image: "/images/agentic-ai.jpg",
    link: "https://agenticai.beyondailimited.com/",
    stat: "∞",
    statLabel: "Scalable Tasks",
  },
];

export default function Products() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSelect = (i: number): void => {
    if (i === active || fading) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 280);
  };

  const p = products[active];

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative py-10 lg:py-14 overflow-hidden"
    >
      {/* Font import */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');`}</style>

      {/* Soft orb */}
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full pointer-events-none" />
      <Container> 
        {/* ── HEADER ── */}
          <div className={`mb-14 `}>
            <div className="wwa-tag-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] inline-block" />
              Product
            </div>

            <div className="wwa-accent-bar h-0.5 w-12 bg-[#facc15] mb-6 rounded-full" />

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="font-display text-[clamp(44px,6vw,60px)] leading-[0.9] uppercase text-[#0f1e4a] mb-4">
                  Discover 
  {' '}
                  <span className="wwa-shimmer-blue">Beyond ai's Intelligent</span><br /> {" "} 
                  <span className="text-[#9ca3af]">Product Ecosystem. </span>
                </h2>

                {/* ── original subtitle text ── */}
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg font-light">
                 AI driven platforms powering automation, engagement, and business growth. One ecosystem   unlimited possibilities for modern enterprises.
                </p>
              </div> 
            </div>
          </div>

        {/* ── MAIN LAYOUT ── */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transitionDelay: "200ms",
          }}
        >
          <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.08)]">
            {/* ── SIDE NAV ── */}
            <nav className="flex lg:flex-col overflow-x-auto lg:overflow-visible bg-white border-b lg:border-b-0 lg:border-r border-[#EDE9E4] lg:w-64 flex-shrink-0">
              {products.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className="flex-shrink-0 text-left px-6 py-4  transition-all duration-200 hover:bg-[#FAFAF8] border-b-[3px] lg:border-b-0 lg:border-l-[3px]"
                  style={{
                    borderColor: i === active ? item.accent : "transparent",
                    background: i === active ? "#FAFAF8" : undefined,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <span
                    className="block text-base font-bold tracking-widest mb-1"
                    style={{
                      color: i === active ? item.accent : "#C4BCB4",
                    }}
                  >
                    {item.index}
                  </span>
                  <span className="block text-lg font-bold text-[#1A1612] mb-0.5 whitespace-nowrap">
                    {item.title}
                  </span>
                  <span className="block text-[11px] font-light text-[#AAA098] tracking-wide whitespace-nowrap">
                    {item.tag}
                  </span>
                </button>
              ))}
            </nav>

            {/* ── DETAIL PANEL ── */}
            <div className="relative flex-1 bg-white overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] transition-colors duration-300 z-10" />

              {/* Dot pattern */}
              <div
                className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-[0.05]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #1A1612 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />

              {/* Content */}
              <div
                className="relative z-10 p-8 sm:p-10  h-full transition-all duration-[280ms] ease-out"
                style={{
                  opacity: fading ? 0 : 1,
                  transform: fading ? "translateY(10px)" : "translateY(0)",
                 
                }}
              >
                {/* Body grid */}
                <div className="flex flex-col xl:flex-col-reverse 2xl:flex-row items-center lg:items-start 2xl:items-center gap-8 2xl:gap-12 h-full ">
                  {/* Left: description + CTA */}
                  <div className="2xl:w-1/2">
                    {/* Tag pill */}
                    <span
                      className="inline-flex items-center text-[10px] font-semibold tracking-[0.16em] uppercase px-3.5 py-1.5 rounded-full text-white mb-5"
                      style={{ background: p.accent }}
                    >
                      {p.tag}
                    </span>

                    {/* Title */}
                    <h3 className="text-[clamp(26px,3.5vw,42px)] font-extrabold leading-[1.1] tracking-tight text-[#1A1612] mb-4 2xl:mb-7">
                      <span style={{ color: p.accent }}>{p.brand} </span>
                      {p.title}
                    </h3>
                    <p className="2xl:text-lg leading-[1.8] text-[#5E574F] font-light whitespace-pre-line 2xl:mb-8">
                      {p.description}
                    </p>
                  </div>

                  {/* Right: image */}
                  <div className="2xl:w-1/2 h-full">
                    <div className="rounded-xl overflow-hidden h-full">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full  h-full lg:h-[300px] 2xl:h-full  object-cover  2xl:object-contain transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── MOBILE INDICATOR DOTS ── */}
          <div className="flex lg:hidden justify-center gap-2 mt-5">
            {products.map((item, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === active ? 20 : 7,
                  height: 7,
                  background: i === active ? p.accent : "#D6CFC8",
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
