"use client";

import Image from "next/image";
import Container from "../shared/Container";

export default function OrganizationStructure() {
  return (
    <section className="bg-[#FFF8F8] pb-10 lg:pb-20 pt-20  px-4">
      <Container>
        {/* Title */}
        <h2 className="text-2xl lg:text-[36px] font-bold mb-12 bg-linear-to-r from-[#081224] to-[#4366A7] py-10 px-6 text-white rounded-2xl">
          Organization Structure
        </h2>

        {/* PRESIDENT */}
        <div className="flex flex-col items-center gap-10">
          <RoleCard
            badge="President"
            name="Ronald Vergara"
            image="/directors/ronald_vergara.jpeg"
            large
          />

          <RoleCard
            badge="Deputy Director"
            name="MD. Naimul Hasan Durjay"
            image="/directors/new/durjay.png"
          />

          <RoleCard
            badge="Director, Philippines Relations"
            name="Jeffrey Arcamo Bernaldez"
            image="/directors/jeffrey.jpeg"
          /> 
        </div>

        {/* BOARD SECTION */}
        <div className="mt-16 bg-white rounded-2xl shadow-md p-8">
          <div className="mb-8 flex gap-4 ">
            <div className="bg-[#F5490014] rounded-full p-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 16H17C16.4477 16 16 16.4477 16 17V21C16 21.5523 16.4477 22 17 22H21C21.5523 22 22 21.5523 22 21V17C22 16.4477 21.5523 16 21 16Z"
                  stroke="#F54900"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 16H3C2.44772 16 2 16.4477 2 17V21C2 21.5523 2.44772 22 3 22H7C7.55228 22 8 21.5523 8 21V17C8 16.4477 7.55228 16 7 16Z"
                  stroke="#F54900"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 2H10C9.44772 2 9 2.44772 9 3V7C9 7.55228 9.44772 8 10 8H14C14.5523 8 15 7.55228 15 7V3C15 2.44772 14.5523 2 14 2Z"
                  stroke="#F54900"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 16V13C5 12.7348 5.10536 12.4804 5.29289 12.2929C5.48043 12.1054 5.73478 12 6 12H18C18.2652 12 18.5196 12.1054 18.7071 12.2929C18.8946 12.4804 19 12.7348 19 13V16"
                  stroke="#F54900"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 12V8"
                  stroke="#F54900"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg lg:text-[20px] ">
                Board of Directors
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-[#19191999]">
                4 Active Members • Strategy & Governance
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <RoleCard
              name="Muhammad Monir Hossain"
              subtitle="Board of Directors"
              image="/directors/monir.png"
            />
            <RoleCard
              name="Stacey Michelon"
              subtitle="Board of Directors"
              image="/directors/new/stacey.svg"
            />
            <RoleCard
              name="Christopher French"
              subtitle="Board of Directors"
              image="/directors/christopher.png"
            />
            <RoleCard
              name="Abdulgani Macatoman"
              subtitle="Board of Directors"
              image="/directors/macatoman.jpeg"
            />
             {/* <RoleCard
              name="Jeffrey Arcamo Bernaldez"
              subtitle="Director, Philippines Relations"
              image="/directors/jeffrey.jpeg"
            /> */}
          </div>
        </div>

       
      </Container>
    </section>
  );
}

/* ================= COMPONENT ================= */

function RoleCard({
  badge,
  name,
  subtitle,
  image,
  large = false,
}: {
  badge?: string;
  name: string;
  subtitle?: string;
  image: string;
  large?: boolean;
}) {
  const isSecond = badge === "Second in Command";

  return (
    <div
      className={`relative bg-white rounded-2xl border border-[#F5490099] shadow-sm
      ${large ? "px-10 py-10" : "px-8 py-8"}
      w-full max-w-md transition hover:shadow-lg`}
    >
      {/* Badge */}
      {badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFE4D8] text-[#F54900] text-xs md:text-sm text-center md:text-start font-medium px-4 py-1 rounded-full">
          {badge}
        </span>
      )}

      {/* Content */}
      <div
        className={`
          ${isSecond ? "flex items-center gap-4 text-left" : "text-center"}
        `}
      >
        {/* Image */}
        <div
          className={`
            rounded-full overflow-hidden shrink-0 border-3 border-[#F5490099]
            ${large ? "w-28 h-28 " : "w-20 h-20"}
            ${!isSecond && "mx-auto"}
          `}
        >
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="object-cover object-top w-full h-full"
          />
        </div>

        {/* Text */}
        <div className={`${isSecond ? "" : "mt-5"}`}>
          <h4
            className={` ${large ? "text-2xl lg:text-[36px] " : "text-lg lg:text-2xl"} font-bold text-[#191919] `}
          >
            {name}
          </h4>

          {subtitle && <p className="text-sm text-[#19191999]">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
