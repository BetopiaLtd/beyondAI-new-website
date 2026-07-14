"use client";

import Container from "../shared/Container";
import {
  ShieldCheck,
  Lightbulb,
  Users,
  BarChart3,
  Lock,
  TrendingUp,
} from "lucide-react";
const principles = [
  {
    title: "Innovation-Driven Leadership",
    text: "We embrace emerging technologies and continuous improvement to deliver modern, scalable solutions.",
    icon: Lightbulb,
    bgcolor: "#EFF6FF",
    iconColor: "#2563EB",
  },
  {
    title: "Client-Centric Approach",
    text: "Client success is our success. We prioritize understanding business needs before building technology.",
    icon: Users,
    bgcolor: "#FFFBEB",
    iconColor: "#D97706",
  },
  {
    title: "Quality & Reliability",
    text: "We maintain strict quality standards, clean architecture, and secure development practices.",
    icon: ShieldCheck,
    bgcolor: "#ECFDF5",
    iconColor: "#059669",
  },
  {
    title: "Transparency & Accountability",
    text: "We believe in open communication, clear reporting, and responsible decision-making.",
    icon: BarChart3,
    bgcolor: "#EEF2FF",
    iconColor: "#4F46E5",
  },
  {
    title: "Data Security & Ethics",
    text: "We protect client data and ensure compliance with global security standards.",
    icon: Lock,
    bgcolor: "#FEF2F2",
    iconColor: "#DC2626",
  },
  {
    title: "Sustainable Growth",
    text: "We focus on long-term partnerships rather than short-term gains.",
    icon: TrendingUp,
    bgcolor: "#EFF6FF",
    iconColor: "#2563EB",
  },
];
export default function GovernancePolicy() {
  return (
    <section className="bg-[#FFF8F8] py-10 lg:py-20">
      <Container>
        <div className="py-10 md:flex justify-between items-center mb-12 bg-linear-to-r from-[#081224] to-[#4366A7]  px-6 text-white rounded-2xl">
          {/* Title */}
          <h2 className="text-2xl lg:text-[36px] font-bold">
            Governance Policy
          </h2>
          <p className="text-sm lg:text-base text-white md:w-[38%] mt-4 md:mt-0">
            Our core principle guiding excellence, integrity, and innovation in
            software delivery. We believe that robust governance is the
            foundation of high-performance engineering
          </p>
        </div>

        {/* ================= CORE PRINCIPLES ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <PrincipleCard
                key={index}
                icon={<Icon size={28} />}
                title={item.title}
                text={item.text}
                bgcolor={item.bgcolor}
                iconColor={item.iconColor}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ================= PRINCIPLE CARD ================= */

function PrincipleCard({
  icon,
  title,
  text,
  bgcolor,
  iconColor,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  bgcolor: string;
  iconColor: string;
}) {
  return (
    <div className="bg-white border border-[#E3440066] rounded-2xl p-6 hover:shadow-md transition duration-300 hover:-translate-y-1">
      {/* Icon Wrapper */}
      <div
        style={{ backgroundColor: bgcolor, color: iconColor }}
        className="rounded-xl p-4 w-15 h-15 flex items-center justify-center"
      >
        {icon}
      </div>

      <h4 className="mt-5 font-bold text-lg lg:text-[20px]">{title}</h4>

      <p className="mt-3 text-sm lg:text-base text-[#19191999] leading-relaxed">
        {text}
      </p>
    </div>
  );
}
