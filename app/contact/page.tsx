"use client";

import { useState, useRef, useEffect } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type TouchedState = {
  [K in keyof FormState]: boolean;
};

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Email Us",
    value: "Info@beyondai.ph",
    sub: "We reply within 24 hours",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Location",
    value: "Remote-First",
    sub: "Available worldwide",
  },
  // {
  //   icon: (
  //     <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
  //       <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  //         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  //     </svg>
  //   ),
  //   label: "Office Hours",
  //   value: "Mon – Fri, 9am–6pm",
  //   sub: "GMT+0 timezone",
  // },
];

const subjects = [
  "Course Enquiry",
  "Corporate / Team Training",
  "Partnership",
  "Technical Support",
  "Other",
];

export default function Page() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [touched, setTouched] = useState<TouchedState>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  // Subtle cursor-tracking glow
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handle = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    section.addEventListener("mousemove", handle);
    return () => section.removeEventListener("mousemove", handle);
  }, []);

  const validate = (key: keyof FormState, val: string) => {
    if (!val.trim()) return "Required";
    if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Valid email required";
    return "";
  };

  const errors: Partial<FormState> = {};
  (Object.keys(form) as (keyof FormState)[]).forEach((k) => {
    const e = validate(k, form[k]);
    if (e) errors[k] = e;
  });

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
  };

  const handleBlur = (k: keyof FormState) => {
    setTouched((t) => ({ ...t, [k]: true }));
  };

  const handleSubmit = async () => {
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isValid) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSubmitting(false);
    setSubmitted(true);
  };

  const showErr = (k: keyof FormState) => touched[k] && errors[k];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        .contact-root {
          font-family: 'DM Sans', sans-serif;
          background: #f7f5f0;
        }
        .font-display { font-family: 'Bebas Neue', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes checkDraw {
          from { stroke-dashoffset: 40; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        .anim-fade-1 { animation: fadeUp 0.65s ease both 0.1s; }
        .anim-fade-2 { animation: fadeUp 0.65s ease both 0.22s; }
        .anim-fade-3 { animation: fadeUp 0.65s ease both 0.34s; }
        .anim-fade-4 { animation: fadeUp 0.65s ease both 0.46s; }
        .anim-fade-5 { animation: fadeUp 0.65s ease both 0.58s; }
        .anim-scale  { animation: scaleIn 0.5s cubic-bezier(.22,1,.36,1) both; }

        .shimmer-text {
          background: linear-gradient(90deg, #1a2e6b 0%, #3b5bdb 40%, #1a2e6b 60%, #0f1e4a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .field-wrap {
          position: relative;
        }
        .field-wrap label {
          display: block;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6b7280;
          margin-bottom: 6px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .field-wrap.focused label { color: #1a2e6b; }

        .field-input {
          width: 100%;
          background: #ffffff;
          border: 1.5px solid #e5e7eb;
          border-radius: 8px;
          padding: 13px 16px;
          font-size: 14px;
          color: #111827;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          -webkit-appearance: none;
        }
        .field-input::placeholder { color: #d1d5db; }
        .field-input:focus {
          border-color: #1a2e6b;
          box-shadow: 0 0 0 3px rgba(26,46,107,0.08);
        }
        .field-input.error {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239,68,68,0.08);
        }
        .field-input.valid { border-color: #22c55e; }

        .error-msg {
          font-size: 11px;
          color: #ef4444;
          margin-top: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .submit-btn {
          position: relative;
          overflow: hidden;
          background: #1a2e6b;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 15px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          width: 100%;
        }
        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .submit-btn:hover::before { transform: translateX(100%); }
        .submit-btn:hover:not(:disabled) {
          background: #0f1e4a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(26,46,107,0.3);
        }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }

        .check-path {
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: checkDraw 0.5s ease 0.2s both;
        }

        .info-card {
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(26,46,107,0.1);
        }

        .accent-line {
          transform-origin: left;
          animation: lineGrow 0.8s cubic-bezier(.22,1,.36,1) both 0.3s;
        }

        .select-field {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 40px;
        }

        .dot-pattern {
          background-image: radial-gradient(circle, #d1d5db 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #eff2ff;
          color: #1a2e6b;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 100px;
          border: 1px solid #c7d2fe;
        }

        textarea.field-input { resize: none; }

        .success-card {
          animation: scaleIn 0.5s cubic-bezier(.22,1,.36,1) both;
        }
      `}</style>

      <section ref={sectionRef} className="contact-root relative overflow-hidden py-24 px-6 md:px-12 lg:px-20">

        {/* dot pattern bg */}
        <div className="dot-pattern absolute inset-0 opacity-40 pointer-events-none" />

        {/* cursor glow */}
        <div
          className="pointer-events-none absolute w-[500px] h-[500px] rounded-full transition-all duration-500 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(26,46,107,0.05) 0%, transparent 70%)",
            left: cursorPos.x - 250,
            top: cursorPos.y - 250,
          }}
        />

        {/* top accent bar */}
        <div className="accent-line h-0.5 w-16 bg-[#facc15] mb-12 rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* ── HEADER ── */}
          <div className="mb-16">
            <div className="anim-fade-1 tag-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] inline-block" />
              Get in Touch
            </div>

            <h2 className="anim-fade-2 font-display text-[clamp(38px,7vw,66px)] leading-[0.9] uppercase text-[#0f1e4a] mb-4">
              Let&apos;s{" "}
              <span className="shimmer-text">Start</span>
              <br />
              <span className="text-[#d1d5db]">Your</span>{" "}
              <span className="text-[#0f1e4a]">Journey.</span>
            </h2>

            <p className="anim-fade-3 text-[#6b7280] text-sm leading-relaxed max-w-md font-light">
              Whether you're curious about the curriculum, need a group plan, or just want to
              say hello—our team is here for you.
            </p>
          </div>

          {/* ── GRID ── */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">

            {/* ── FORM CARD ── */}
            <div className="anim-fade-4 bg-white rounded-2xl shadow-[0_4px_48px_rgba(26,46,107,0.08)] border border-gray-100 overflow-hidden">

              {/* card top stripe */}
              <div className="h-1 w-full bg-linear-to-r from-[#1a2e6b] via-[#facc15] to-[#3b5bdb]" />

              <div className="p-8 md:p-10">

                {submitted ? (
                  /* ── SUCCESS STATE ── */
                  <div className="success-card flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#f0fdf4] border-2 border-[#22c55e] flex items-center justify-center mb-6">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path
                          className="check-path"
                          d="M6 14l6 6 10-10"
                          stroke="#22c55e"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="font-display text-4xl text-[#0f1e4a] mb-3 uppercase">Message Sent!</h3>
                    <p className="text-[#6b7280] text-sm max-w-xs leading-relaxed">
                      Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", subject: "", message: "" });
                        setTouched({ name: false, email: false, subject: false, message: false });
                      }}
                      className="mt-8 px-6 py-3 bg-[#eff2ff] text-[#1a2e6b] text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#e0e7ff] transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  /* ── FORM ── */
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className={`field-wrap ${focused === "name" ? "focused" : ""}`}>
                        <label htmlFor="name">Full Name</label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onFocus={() => setFocused("name")}
                          onBlur={() => { setFocused(null); handleBlur("name"); }}
                          className={`field-input ${showErr("name") ? "error" : touched.name && !errors.name ? "valid" : ""}`}
                        />
                        {showErr("name") && (
                          <p className="error-msg">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <circle cx="6" cy="6" r="5.5" stroke="#ef4444"/>
                              <path d="M6 3.5v3M6 8h.01" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className={`field-wrap ${focused === "email" ? "focused" : ""}`}>
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          onFocus={() => setFocused("email")}
                          onBlur={() => { setFocused(null); handleBlur("email"); }}
                          className={`field-input ${showErr("email") ? "error" : touched.email && !errors.email ? "valid" : ""}`}
                        />
                        {showErr("email") && (
                          <p className="error-msg">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <circle cx="6" cy="6" r="5.5" stroke="#ef4444"/>
                              <path d="M6 3.5v3M6 8h.01" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className={`field-wrap ${focused === "subject" ? "focused" : ""}`}>
                      <label htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        value={form.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => { setFocused(null); handleBlur("subject"); }}
                        className={`field-input select-field ${showErr("subject") ? "error" : touched.subject && !errors.subject ? "valid" : ""}`}
                      >
                        <option value="">Select a topic…</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {showErr("subject") && (
                        <p className="error-msg">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="5.5" stroke="#ef4444"/>
                            <path d="M6 3.5v3M6 8h.01" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round"/>
                          </svg>
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className={`field-wrap ${focused === "message" ? "focused" : ""}`}>
                      <label htmlFor="message">
                        Message
                        <span className="ml-2 text-[#d1d5db] normal-case tracking-normal">
                          ({form.message.length} / 500)
                        </span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        maxLength={500}
                        placeholder="Tell us what's on your mind…"
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        onFocus={() => setFocused("message")}
                        onBlur={() => { setFocused(null); handleBlur("message"); }}
                        className={`field-input ${showErr("message") ? "error" : touched.message && !errors.message ? "valid" : ""}`}
                      />
                      {showErr("message") && (
                        <p className="error-msg">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="5.5" stroke="#ef4444"/>
                            <path d="M6 3.5v3M6 8h.01" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round"/>
                          </svg>
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="submit-btn"
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <span className="spinner" />
                          Sending…
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-[#9ca3af]">
                      We respect your privacy. No spam, ever.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="anim-fade-5 space-y-5">

              {/* info cards */}
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="info-card bg-white rounded-xl border border-gray-100 shadow-[0_2px_16px_rgba(26,46,107,0.05)] p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#eff2ff] border border-[#c7d2fe] flex items-center justify-center text-[#1a2e6b] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#9ca3af] font-medium mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-[#0f1e4a]">{item.value}</p>
                    <p className="text-xs text-[#9ca3af] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}

              {/* CTA prompt card */}
              <div className="bg-[#0f1e4a] rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(250,204,21,0.15) 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#facc15] font-semibold mb-3">Quick Start</p>
                <h4 className="font-display text-3xl text-white uppercase leading-tight mb-3">
                  Get the Free<br />Syllabus
                </h4>
                <p className="text-white/50 text-xs leading-relaxed mb-5">
                  See the full 11-module curriculum and decide if Beyond AI is right for you—no strings attached.
                </p>
                {/* <button className="w-full py-3 bg-[#facc15] text-[#0f1e4a] text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#fde047] transition-colors">
                  Download Syllabus →
                </button> */}
              </div>

              {/* social row */}
              {/* <div className="bg-white rounded-xl border border-gray-100 p-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#9ca3af] mb-4 font-medium">Follow Along</p>
                <div className="flex gap-3">
                  {[
                    { label: "LinkedIn", color: "#0a66c2" },
                    { label: "Twitter / X", color: "#000" },
                    { label: "YouTube", color: "#ff0000" },
                  ].map((s) => (
                    <button
                      key={s.label}
                      className="flex-1 py-2.5 rounded-lg border text-xs font-medium transition-all hover:-translate-y-0.5"
                      style={{ borderColor: `${s.color}22`, color: s.color, background: `${s.color}08` }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div> 
      </section>
    </>
  );
}