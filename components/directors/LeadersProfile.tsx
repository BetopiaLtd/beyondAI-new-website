"use client";

import Image from "next/image";
import Container from "../shared/Container";
import { leaders } from "@/data/directors";

export default function LeadersProfile() {
  return (
    <section className="bg-[#FFF8F8] px-4">
      <Container>

        {/* Title */}
        <h2 className="text-2xl lg:text-[36px] font-bold mb-12 bg-linear-to-r from-[#081224] to-[#4366A7] py-10 px-6 text-white rounded-2xl">
          Profile of Leaders
        </h2>

        <div className="space-y-8">
          {leaders.map((leader, index) => (
            <LeaderCard key={index} {...leader} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ================= COMPONENT ================= */

function LeaderCard({
  name,
  role,
  image,
  paragraphs,
  reverse = false,
}: {
  name: string;
  role: string;
  image: string;
  paragraphs: string[];
  reverse?: boolean;
}) {
  return (
    <div className="bg-white border border-[#E3440066] rounded-2xl px-6 lg:px-10 ">
      <div
        className={`
          flex flex-col lg:flex-row items-center lg:items-end lg:gap-8
          ${reverse ? "lg:flex-row-reverse" : ""}
        `}
      >
        {/* Image */}
        <div className="shrink-0">
          <Image
            src={image}
            alt={name}
            width={260}
            height={260}
            className="object-contain w-48 lg:w-80 h-auto mt-4 lg:mt-0"
          />
        </div>

        {/* Content */}
        <div className="flex-1  text-center lg:text-left pt-6 pb-10">
          <div>

          <h3 className="text-xl lg:text-[36px] font-bold text-[#191919]">{name}</h3>

          <p className="text-sm lg:text-[18px] text-[#19191999] mt-2 font-medium">{role}</p>

          
          <div className="mt-4 space-y-4">
            {paragraphs.map((para, index) => (
              <p key={index} className="text-sm lg:text-[18px] text-[#19191999] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
