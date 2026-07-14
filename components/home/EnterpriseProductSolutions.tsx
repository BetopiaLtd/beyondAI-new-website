"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeadingTwo from "@/components/shared/heading/HeadingTwo";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";


interface ProductSlideCardProps {
  badge?: string;
  details?: string;
  title: string;
  highlight: string;
  description: string;
  features: string[];
  image: string;
  link: string;
}

const ReadMoreText = ({
  text,
  wordLimit = 20,
}: {
  text: string;
  wordLimit?: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  const words = text.split(" ");
  const isLong = words.length > wordLimit;

  const displayedText = expanded
    ? text
    : words.slice(0, wordLimit).join(" ");

  return (
    <div className="text-lg md:text-xl text-[#6e6e6e] max-w-[1660px]  mx-auto mb-3 whitespace-pre-line ">
      {displayedText}
      {isLong && !expanded && " "}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#FF9500] font-semibold ml-1 hover:underline cursor-pointer"
        >
          {expanded ? "Read less" : "..."}
        </button>
      )}
    </div>
  );
};


function ProductSlideCard({
  title,
  highlight,
  description,
  image,
  link,
}: ProductSlideCardProps) {
  return (
    <div className="bg-white">
      <div className=" pb-7 grid grid-cols-1 lg:grid-cols-2 items-start gap-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28">
        {/* Right */}
        <Image
          src={image}
          alt="product"
          className="w-full h-auto object-cover  mt-[1%] rounded-xl"
          width={711}
          height={462}
        />
        {/* Left */}
        <div className="flex flex-col  h-full">
          {/* {badge && (
            <h6 className="w-fit text-xs sm:text-sm md:text-base text-white mb-4  px-4 py-2 rounded-3xl bg-[#FF9500]">
              {badge}
            </h6>
          )} */}
          <div>
            <h1 className=" font-semibold text-black text-2xl md:text-[36px] mb-6">
              {title} <span className="text-[#FF9500]">{highlight}</span>
            </h1>

            {/* Small to 1599px → Read More */}
            <div className="text-base xl:text-2xl text-[#45556C] max-w-full md:max-w-[900px]  xl:hidden">
              <ReadMoreText text={description} wordLimit={22} />
            </div>

            {/* Small to 1599px → Read More */}
            <div className="text-base xl:text-2xl text-[#45556C] max-w-full md:max-w-[900px] hidden xl:block min-[1660px]:hidden 2xl:hidden">
              <ReadMoreText text={description} wordLimit={37} />
            </div>

            {/* 1660px and up → Full Text */}
            <p className="text-base xl:text-[22px] text-[#45556C] max-w-full md:max-w-[900px] hidden min-[1530px]:block mb-2 whitespace-pre-line">
              {description}
            </p>
              {/* <p className="text-base xl:text-[22px] text-[#45556C] max-w-full md:max-w-[900px] hidden min-[1660px]:block">
              {details}
            </p> */}
          </div>

          {/* <Link href={link}>
            <button className="  hover:text-orange-400 cursor-pointer  text-black flex items-center gap-2 text-base md:text-lg cursor-pointer">
              Explore More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13 5H19V11"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 5L5 19"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default function EnterpriseProductSolutions() {
  const products = [
    {
      badge: "Most Popular",
      title: "Beyond AI",
      highlight: "HRM Software",
      description: 
  "Beyond AI HRM is a modern, enterprise-grade Human Resource Management platform designed to simplify and secure workforce operations at scale. It centralizes employee records, roles, attendance, leave, payroll readiness, performance, and analytics into one intuitive system, supported by role-based access control and a responsive user experience.\nBy automating routine HR tasks and delivering real-time insights, Beyond AI HRM helps organizations improve productivity, strengthen governance, and make smarter workforce decisions. With scalable architecture built for multi-branch teams, it transforms HR into a strategic business function for growing enterprises across industries and regions.",
      features: [],
      image: "/product/Betopia_hrm2.jpg",
      link: "/product/hrm-product",
    },
    {
      badge: "Most Popular",
      title: "Beyond AI",
      highlight: "ERP",
      description:
        "Beyond AI ERP is an enterprise-grade, modular platform built for multi-branch and multi-location organizations that need full operational control and real-time visibility. It unifies HRMS, finance, sales, CRM, purchasing, inventory, KPI management, collaboration tools, email marketing, and analytics into one secure, integrated system.\nDesigned for scalability, Beyond AI ERP supports both cloud and on-premise deployment and adapts to unique organizational workflows. With interactive dashboards and actionable insights, it helps enterprises streamline operations, strengthen governance, improve decision-making, and grow confidently without system limitations.",
      features: [],
      image: "/product/Betopia_erp2.jpg",
      link: "/product/erp-product",
    },
    {
      badge: "Most Popular",
      title: "Beyond AI",
      highlight: "Count Trust",
      description:
        "CountTrust is Beyond AI’s enterprise-grade online voting platform built for organizations that need secure, transparent, and verifiable digital elections. Designed for clubs, schools, enterprises, trusts, and institutions, it supports configurable workflows, bulk voter management, and multiple election formats with ease.\nUnlike generic tools, CountTrust enables controlled voting through Windows and macOS terminals, building trust in high-stakes environments. With cloud or on-prem deployment, audit-ready reporting, and seamless scalability, it ensures every vote is validated, protected, and counted with confidence.",
      features: [],
      image: "/product/Betopia_count_trust2.jpg",
      link: "/product/voting-count-trust",
    },
    {
      badge: "Most Popular",
      title: "Beyond AI",
      highlight: "Talkora AI",
 description:
        "Talkora AI is an intelligent voice and call automation platform designed to transform business communications. It enables smart outbound and inbound calls with real-time voice understanding, call handling, analytics, and smooth customer interactions.\nBuilt for businesses of all sizes, Talkora AI automates responses, routes conversations intelligently, and turns calls into actionable outcomes. With fast setup, high reliability, and enterprise-grade performance, it helps organizations improve customer experience, boost efficiency, and scale communication effortlessly for teams, departments, and rapidly growing organizations worldwide today.",
      features: [],
      image: "/product/Betopia_talkora.jpg",
      link: "https://talkoraai.com/",
    },
    {
      badge: "Most Popular",
      title: "Beyond AI",
      highlight: "Agentic AI",
      description:
        "Beyond AI Agentic AI delivers autonomous AI solutions designed to execute real business tasks — not just answer queries. These AI agents power chatbots, voice assistants, scheduling, workflow automation, and decision support to streamline customer interactions and internal operations.\nBuilt for industries such as healthcare, education, and hospitality, they understand intent, act in real time, and learn continuously while operating 24/7. With strong security, fast response, and high scalability, Beyond AI Agentic AI helps organizations reduce effort, optimize resources, and deliver consistent customer experiences with reliability that grows as needs expand.",
      features: [],
      image: "/product/Betopia_agentic.jpg",
      link: "https://agenticai.Beyond AIlimited.com/",
    },
  ];

  return (
    <div id="products" className=" pb-10">

      {/* Header */}
      <div className="flex flex-col items-center justify-center w-11/12 mx-auto px-3">
        <HeadingTwo title="Products" />

          <PageSubtitle
            text=" Enterprise-grade digital products combining software, AI, and security to drive business transformation."
            className="text-center mb-0 lg:mb-9 text-[#6e6e6e]"
          />
      </div>

      <div className="relative mt-7 lg:pt-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            640: { slidesPerView: 1 }, // mobile
            768: { slidesPerView: 1 }, // tablet
            1024: { slidesPerView: 1.1 }, // laptop
            1280: { slidesPerView: 1.1 }, // xl
          }}
          speed={1000}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductSlideCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}

// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { useRef } from "react";
// import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
// import Image from "next/image";
// import Link from "next/link";


// interface ProductSlideCardProps {
//   badge?: string;
//   details?: string;
//   title: string;
//   highlight: string;
//   description: string;
//   features: string[];
//   image: string;
//   link: string;
// }

// const ReadMoreText = ({
//   text,
//   wordLimit = 20,
// }: {
//   text: string;
//   wordLimit?: number;
// }) => {
//   const [expanded, setExpanded] = useState(false);

//   const words = text.split(" ");
//   const isLong = words.length > wordLimit;

//   const displayedText = expanded
//     ? text
//     : words.slice(0, wordLimit).join(" ");

//   return (
//     <div className="text-lg md:text-xl text-[#6e6e6e] max-w-[1660px] mx-auto mb-3 whitespace-pre-line ">
//       {displayedText}
//       {isLong && !expanded && " "}
//       {isLong && (
//         <button
//           onClick={() => setExpanded(!expanded)}
//           className="text-[#FF9500] font-semibold ml-1 hover:underline cursor-pointer"
//         >
//           {expanded ? "Read less" : "..."}
//         </button>
//       )}
//     </div>
//   );
// };


// function ProductSlideCard({
//   badge,
//   title,
//   highlight,
//   description,
//   features,
//   details,
//   image,
//   link,
// }: ProductSlideCardProps) {
//   return (
//     <div className="bg-white">
//       <div className=" pb-7 grid grid-cols-1 lg:grid-cols-2 items-start gap-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28">
//         {/* Right */}
//         <Image
//           src={image}
//           alt="product"
//           className="w-full h-auto object-cover  mt-[1%] rounded-xl"
//           width={711}
//           height={462}
//         />
//         {/* Left */}
//         <div className="flex flex-col  h-full">
//           {/* {badge && (
//             <h6 className="w-fit text-xs sm:text-sm md:text-base text-white mb-4  px-4 py-2 rounded-3xl bg-[#FF9500]">
//               {badge}
//             </h6>
//           )} */}
//           <div>
//             <h1 className=" font-semibold text-black text-2xl md:text-[36px] mb-6">
//               {title} <span className="text-[#FF9500]">{highlight}</span>
//             </h1>

//             {/* Small to 1599px → Read More */}
//             <div className="text-base xl:text-2xl text-[#45556C] max-w-full md:max-w-[900px] block min-[1660px]:hidden">
//               <ReadMoreText text={description} wordLimit={37} />
//             </div>

//             {/* 1660px and up → Full Text */}
//             <p className="text-base xl:text-[22px] text-[#45556C] max-w-full md:max-w-[900px] hidden min-[1660px]:block mb-2 whitespace-pre-line">
//               {description}
//             </p>
//               {/* <p className="text-base xl:text-[22px] text-[#45556C] max-w-full md:max-w-[900px] hidden min-[1660px]:block">
//               {details}
//             </p> */}
//           </div>

//           <Link href={link}>
//             <button className="  hover:text-orange-400 cursor-pointer  text-black flex items-center gap-2 text-base md:text-lg cursor-pointer">
//               Explore More
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M13 5H19V11"
//                   stroke="#000000"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M19 5L5 19"
//                   stroke="#000000"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function EnterpriseProductSolutions() {
//   const products = [
//     {
//       badge: "Most Popular",
//       title: "Beyond AI",
//       highlight: "HRM Software",
//       description: 
//   "Beyond AI HRM is a modern, enterprise-grade Human Resource Management platform designed to simplify and secure workforce operations at scale. It centralizes employee records, roles, attendance, leave, payroll readiness, performance, and analytics into one intuitive system, supported by role-based access control and a responsive user experience.\nBy automating routine HR tasks and delivering real-time insights, Beyond AI HRM helps organizations improve productivity, strengthen governance, and make smarter workforce decisions. With scalable architecture built for multi-branch teams, it transforms HR into a strategic business function for growing enterprises across industries and regions.",
//       features: [],
//       image: "/product/Beyond AI_hrm2.jpg",
//       link: "/product/hrm-product",
//     },
//     {
//       badge: "Most Popular",
//       title: "Beyond AI",
//       highlight: "ERP",
//       description:
//         "Beyond AI ERP is an enterprise-grade, modular platform built for multi-branch and multi-location organizations that need full operational control and real-time visibility. It unifies HRMS, finance, sales, CRM, purchasing, inventory, KPI management, collaboration tools, email marketing, and analytics into one secure, integrated system.\nDesigned for scalability, Beyond AI ERP supports both cloud and on-premise deployment and adapts to unique organizational workflows. With interactive dashboards and actionable insights, it helps enterprises streamline operations, strengthen governance, improve decision-making, and grow confidently without system limitations.",
//       features: [],
//       image: "/product/Beyond AI_erp2.jpg",
//       link: "/product/erp-product",
//     },
//     {
//       badge: "Most Popular",
//       title: "Beyond AI",
//       highlight: "Count Trust",
//       description:
//         "CountTrust is Beyond AI’s enterprise-grade online voting platform built for organizations that need secure, transparent, and verifiable digital elections. Designed for clubs, schools, enterprises, trusts, and institutions, it supports configurable workflows, bulk voter management, and multiple election formats with ease.\nUnlike generic tools, CountTrust enables controlled voting through Windows and macOS terminals, building trust in high-stakes environments. With cloud or on-prem deployment, audit-ready reporting, and seamless scalability, it ensures every vote is validated, protected, and counted with confidence.",
//       features: [],
//       image: "/product/Beyond AI_count_trust2.jpg",
//       link: "/product/voting-count-trust",
//     },
//     {
//       badge: "Most Popular",
//       title: "Beyond AI",
//       highlight: "Talkora AI",
//  description:
//         "Talkora AI is an intelligent voice and call automation platform designed to transform business communications. It enables smart outbound and inbound calls with real-time voice understanding, call handling, analytics, and smooth customer interactions.\nBuilt for businesses of all sizes, Talkora AI automates responses, routes conversations intelligently, and turns calls into actionable outcomes. With fast setup, high reliability, and enterprise-grade performance, it helps organizations improve customer experience, boost efficiency, and scale communication effortlessly for teams, departments, and rapidly growing organizations worldwide today.",
//       features: [],
//       image: "/product/Beyond AI_talkora.jpg",
//       link: "https://talkoraai.com/",
//     },
//     {
//       badge: "Most Popular",
//       title: "Beyond AI",
//       highlight: "Agentic AI",
//       description:
//         "Beyond AI Agentic AI delivers autonomous AI solutions designed to execute real business tasks — not just answer queries. These AI agents power chatbots, voice assistants, scheduling, workflow automation, and decision support to streamline customer interactions and internal operations.\nBuilt for industries such as healthcare, education, and hospitality, they understand intent, act in real time, and learn continuously while operating 24/7. With strong security, fast response, and high scalability, Beyond AI Agentic AI helps organizations reduce effort, optimize resources, and deliver consistent customer experiences with reliability that grows as needs expand.",
//       features: [],
//       image: "/product/Beyond AI_agentic.jpg",
//       link: "https://agenticai.Beyond AIlimited.com/",
//     },
//   ];
//   const swiperRef = useRef<SwiperType | null>(null);
//   return (
//     <div className=" pb-10">
//       {/* <h2 className="text-3xl md:text-4xl xl:text-[52px] text-center font-bold text-[#45556C] mb-4">
//         What We Offer
//       </h2>
//       <div className="w-16 sm:w-20 h-1 bg-[#FF9500] mx-auto mb-4"></div>

//       <div className=" gap-6 max-w-[1660px] mx-auto mt-5 px-3 md:px-8">
//         <div className="lg:hidden">
//           <ReadMoreText
//             text=" Batopia Limited simplifies complexity and strengthens security, helping organizations scale confidently in a digital world. Our platforms unify operations, automate workflows, and provide data-driven insights for leaders, IT teams, and employees alike. By delivering secure, AI-enabled, and cloud-ready solutions, we empower businesses to innovate, collaborate, and operate efficiently while preparing for the future. Count"
//             wordLimit={20}
//           />
//         </div> 

//         <p className="hidden lg:flex text-lg md:text-2xl text-[#6e6e6e] text-justify  mb-6 text-center  ">
//           Batopia Limited simplifies complexity and strengthens security,
//           helping organizations scale confidently in a digital world. Our
//           platforms unify operations, automate workflows, and provide
//           data-driven insights for leaders, IT teams, and employees alike. By
//           delivering secure, AI-enabled, and cloud-ready solutions, we empower
//           businesses to innovate, collaborate, and operate efficiently while
//           preparing for the future. Count
//         </p>
//       </div> */}
//       {/* Header */}
//       <div className="flex flex-col items-center justify-center">
//         <h2 className="text-3xl md:text-4xl xl:text-[52px] text-center font-bold text-[#45556C] mb-4">
//           Products
//         </h2>
//         <div className="w-20 h-1 bg-[#FF9500] mx-auto mb-3"></div>
//         <p className="text-lg md:text-2xl text-[#6e6e6e] max-w-3xl mx-auto text-center">
//           {/* Let's Discover our Products */}
//           Enterprise-grade digital products combining software, AI, and security to drive business transformation.
//         </p>
//       </div>
//       {/* <div className="mb-6 relative">
//         <div className="flex justify-between w-11/12 mx-auto xl:px-8 absolute md:static top-28 left-[4%] z-10">
//           <button
//             onClick={() => swiperRef.current?.slidePrev()}
//             className="group custom-prev border bg-white/70 border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
//           >
//             <FaArrowLeft className="text-gray-600 group-hover:text-white transition-colors" />
//           </button>
//           <button
//             onClick={() => swiperRef.current?.slideNext()}
//             className="group custom-next border bg-white/70 border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
//           >
//             <FaArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
//           </button>
//         </div>
//       </div> */}
//       <div className="relative mt-7 lg:pt-0">
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           slidesPerView={1}
//           spaceBetween={20}
//           loop
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           navigation={{
//             prevEl: ".custom-prev",
//             nextEl: ".custom-next",
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1 }, // mobile
//             768: { slidesPerView: 1 }, // tablet
//             1024: { slidesPerView: 1.1 }, // laptop
//             1280: { slidesPerView: 1.1 }, // xl
//           }}
//           speed={1000}
//         >
//           {products.map((item, index) => (
//             <SwiperSlide key={index}>
//               <ProductSlideCard {...item} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation */}
//         {/* <div className=" flex justify-between gap-2 sm:gap-4">
//           <button
//             className="group absolute z-10 left-4 sm:left-28 -top-1 lg:-top-10 custom-prev border border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
//           >
//             <FaArrowLeft className="text-gray-600 group-hover:text-white transition-colors" />
//           </button>
//           <button 
//           className="absolute z-10 right-4 sm:right-40 -top-1 lg:-top-10 group border custom-next border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
//                     >
//                       <FaArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// }



// // "use client";

// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Navigation } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import { useRef } from "react";
// // import { useState } from "react";
// // import type { Swiper as SwiperType } from "swiper";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // interface ProductSlideCardProps {
// //   badge?: string;
// //   details?: string;
// //   title: string;
// //   highlight: string;
// //   description: string;
// //   features: string[];
// //   image: string;
// //   link: string;
// // }

// // const ReadMoreText = ({
// //   text,
// //   wordLimit = 20,
// // }: {
// //   text: string;
// //   wordLimit?: number;
// // }) => {
// //   const [expanded, setExpanded] = useState(false);

// //   const words = text.split(" ");
// //   const isLong = words.length > wordLimit;

// //   const displayedText = expanded ? text : words.slice(0, wordLimit).join(" ");

// //   return (
// //     <p className="text-lg md:text-xl text-[#6e6e6e] max-w-[1660px] mx-auto mb-6">
// //       {displayedText}
// //       {isLong && !expanded && " "}
// //       {isLong && (
// //         <button
// //           onClick={() => setExpanded(!expanded)}
// //           className="text-[#FF9500] font-semibold ml-1 hover:underline cursor-pointer"
// //         >
// //           {expanded ? "Read less" : "..."}
// //         </button>
// //       )}
// //     </p>
// //   );
// // };

// // function ProductSlideCard({
// //   badge,
// //   title,
// //   highlight,
// //   description,
// //   features,
// //   details,
// //   image,
// //   link,
// // }: ProductSlideCardProps) {
// //   return (
// //     <div className="bg-white">
// //       <div className=" pb-7 grid grid-cols-1 lg:grid-cols-2 items-start gap-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28">
// //         {/* Right */}
// //         <Image
// //           src={image}
// //           alt="product"
// //           className="w-full h-auto object-cover  mt-[1%] rounded-xl"
// //           width={711}
// //           height={462}
// //         />
// //         {/* Left */}
// //         <div className="flex flex-col  h-full">
// //           {/* {badge && (
// //             <h6 className="w-fit text-xs sm:text-sm md:text-base text-white mb-4  px-4 py-2 rounded-3xl bg-[#FF9500]">
// //               {badge}
// //             </h6>
// //           )} */}
// //           <div>
// //             <h1 className=" font-semibold text-black text-2xl md:text-[36px] mb-6">
// //               {title} <span className="text-[#FF9500]">{highlight}</span>
// //             </h1>

// //             {/* Small to 1599px → Read More */}
// //             <p className="text-base xl:text-2xl text-[#45556C] max-w-full md:max-w-[900px] block min-[1660px]:hidden">
// //               <ReadMoreText text={description} wordLimit={43} />
// //             </p>

// //             {/* 1660px and up → Full Text */}
// //             <p className="text-base xl:text-[22px] text-[#45556C] max-w-full md:max-w-[900px] hidden min-[1660px]:block mb-2">
// //               {description}
// //             </p>
// //               <p className="text-base xl:text-[22px] text-[#45556C] max-w-full md:max-w-[900px] hidden min-[1660px]:block">
// //               {details}
// //             </p>
// //           </div>

// //           <Link href={link}>
// //             <button className="mt-2 hover:text-orange-400 cursor-pointer  text-black flex items-center gap-2 text-base md:text-lg cursor-pointer">
// //               Explore More
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="24"
// //                 height="24"
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //               >
// //                 <path
// //                   d="M13 5H19V11"
// //                   stroke="#000000"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 />
// //                 <path
// //                   d="M19 5L5 19"
// //                   stroke="#000000"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 />
// //               </svg>
// //             </button>
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function EnterpriseProductSolutions() {
// //   const products = [
// //     {
// //       badge: "Most Popular",
// //       title: "Beyond AI",
// //       highlight: "HRM Software",
// //       description:
// //         "Beyond AI HRM is a modern, enterprise-grade Human Resource Management platform designed to simplify and secure workforce operations at scale. It centralizes employee records, roles, attendance, leave, payroll readiness, performance, and analytics into one intuitive system, supported by role-based access control and a responsive user experience.",
// //         details:"By automating routine HR tasks and delivering real-time insights, Beyond AI HRM helps organizations improve productivity, strengthen governance, and make smarter workforce decisions. With scalable architecture built for multi-branch teams, it transforms HR into a strategic business function for growing enterprises across industries and regions.",
// //       features: [],
// //       image: "/product/Beyond AI_hrm2.jpg",
// //       link: "/product/hrm-product",
// //     },
// //     {
// //       badge: "Most Popular",
// //       title: "Beyond AI",
// //       highlight: "ERP",
// //       description:
// //         "Beyond AI ERP is an enterprise-grade, modular platform built for multi-branch and multi-location organizations that need full operational control and real-time visibility. It unifies HRMS, finance, sales, CRM, purchasing, inventory, KPI management, collaboration tools, email marketing, and analytics into one secure, integrated system.",
// //         details:"Designed for scalability, Beyond AI ERP supports both cloud and on-premise deployment and adapts to unique organizational workflows. With interactive dashboards and actionable insights, it helps enterprises streamline operations, strengthen governance, improve decision-making, and grow confidently without system limitations.",
// //       features: [],
// //       image: "/product/Beyond AI_erp2.jpg",
// //       link: "/product/erp-product",
// //     },
// //     {
// //       badge: "Most Popular",
// //       title: "Beyond AI",
// //       highlight: "Count Trust",
// //       description:
// //         "CountTrust is Beyond AI’s enterprise-grade online voting platform built for organizations that need secure, transparent, and verifiable digital elections. Designed for clubs, schools, enterprises, trusts, and institutions, it supports configurable workflows, bulk voter management, and multiple election formats with ease.",
// //         details:"Unlike generic tools, CountTrust enables controlled voting through Windows and macOS terminals, building trust in high-stakes environments. With cloud or on-prem deployment, audit-ready reporting, and seamless scalability, it ensures every vote is validated, protected, and counted with confidence.",
// //       features: [],
// //       image: "/product/Beyond AI_count_trust2.jpg",
// //       link: "/product/voting-count-trust",
// //     },
// //     {
// //       badge: "Most Popular",
// //       title: "Beyond AI",
// //       highlight: "Talkora AI",
// //  description:
// //         "Talkora AI is an intelligent voice and call automation platform designed to transform business communications. It enables smart outbound and inbound calls with real-time voice understanding, call handling, analytics, and smooth customer interactions.",
// //         details:"Built for businesses of all sizes, Talkora AI automates responses, routes conversations intelligently, and turns calls into actionable outcomes. With fast setup, high reliability, and enterprise-grade performance, it helps organizations improve customer experience, boost efficiency, and scale communication effortlessly for teams, departments, and rapidly growing organizations worldwide today.",
// //       features: [],
// //       image: "/product/Beyond AI_talkora.jpg",
// //       link: "https://talkoraai.com/",
// //     },
// //     {
// //       badge: "Most Popular",
// //       title: "Beyond AI",
// //       highlight: "Agentic AI",
// //       description:
// //         "Beyond AI Agentic AI delivers autonomous AI solutions designed to execute real business tasks — not just answer queries. These AI agents power chatbots, voice assistants, scheduling, workflow automation, and decision support to streamline customer interactions and internal operations.",
// //         details:"Built for industries such as healthcare, education, and hospitality, they understand intent, act in real time, and learn continuously while operating 24/7. With strong security, fast response, and high scalability, Beyond AI Agentic AI helps organizations reduce effort, optimize resources, and deliver consistent customer experiences with reliability that grows as needs expand.",
// //       features: [],
// //       image: "/product/Beyond AI_agentic.jpg",
// //       link: "https://agenticai.Beyond AIlimited.com/",
// //     },
// //   ];
// //   const swiperRef = useRef<SwiperType | null>(null);
// //   return (
// //     <div className=" pb-10">
// //       {/* <h2 className="text-3xl md:text-4xl xl:text-[52px] text-center font-bold text-[#45556C] mb-4">
// //         What We Offer
// //       </h2>
// //       <div className="w-16 sm:w-20 h-1 bg-[#FF9500] mx-auto mb-4"></div>

// //       <div className=" gap-6 max-w-[1660px] mx-auto mt-5 px-3 md:px-8">
// //         <div className="lg:hidden">
// //           <ReadMoreText
// //             text=" Batopia Limited simplifies complexity and strengthens security, helping organizations scale confidently in a digital world. Our platforms unify operations, automate workflows, and provide data-driven insights for leaders, IT teams, and employees alike. By delivering secure, AI-enabled, and cloud-ready solutions, we empower businesses to innovate, collaborate, and operate efficiently while preparing for the future. Count"
// //             wordLimit={20}
// //           />
// //         </div> 

// //         <p className="hidden lg:flex text-lg md:text-2xl text-[#6e6e6e] text-justify  mb-6 text-center  ">
// //           Batopia Limited simplifies complexity and strengthens security,
// //           helping organizations scale confidently in a digital world. Our
// //           platforms unify operations, automate workflows, and provide
// //           data-driven insights for leaders, IT teams, and employees alike. By
// //           delivering secure, AI-enabled, and cloud-ready solutions, we empower
// //           businesses to innovate, collaborate, and operate efficiently while
// //           preparing for the future. Count
// //         </p>
// //       </div> */}
// //       {/* Header */}
// //       <div className="flex flex-col items-center justify-center">
// //         <h2 className="text-3xl md:text-4xl xl:text-[52px] text-center font-bold text-[#45556C] mb-4">
// //           Products
// //         </h2>
// //         <div className="w-20 h-1 bg-[#FF9500] mx-auto mb-3"></div>
// //         <p className="text-lg md:text-2xl text-[#6e6e6e] max-w-3xl mx-auto text-center">
// //           {/* Let's Discover our Products */}
// //           Enterprise-grade digital products combining software, AI, and security to drive business transformation.
// //         </p>
// //       </div>
// //       {/* <div className="mb-6 relative">
// //         <div className="flex justify-between w-11/12 mx-auto xl:px-8 absolute md:static top-28 left-[4%] z-10">
// //           <button
// //             onClick={() => swiperRef.current?.slidePrev()}
// //             className="group custom-prev border bg-white/70 border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
// //           >
// //             <FaArrowLeft className="text-gray-600 group-hover:text-white transition-colors" />
// //           </button>
// //           <button
// //             onClick={() => swiperRef.current?.slideNext()}
// //             className="group custom-next border bg-white/70 border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
// //           >
// //             <FaArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
// //           </button>
// //         </div>
// //       </div> */}
// //       <div className="relative mt-7 lg:pt-0">
// //         <Swiper
// //           modules={[Navigation, Autoplay]}
// //           slidesPerView={1}
// //           spaceBetween={20}
// //           loop
// //           autoplay={{ delay: 3000, disableOnInteraction: false }}
// //           navigation={{
// //             prevEl: ".custom-prev",
// //             nextEl: ".custom-next",
// //           }}
// //           breakpoints={{
// //             640: { slidesPerView: 1 }, // mobile
// //             768: { slidesPerView: 1 }, // tablet
// //             1024: { slidesPerView: 1.1 }, // laptop
// //             1280: { slidesPerView: 1.1 }, // xl
// //           }}
// //           speed={1000}
// //         >
// //           {products.map((item, index) => (
// //             <SwiperSlide key={index}>
// //               <ProductSlideCard {...item} />
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>

// //         {/* Custom Navigation */}
// //         {/* <div className=" flex justify-between gap-2 sm:gap-4">
// //           <button
// //             className="group absolute z-10 left-4 sm:left-28 -top-1 lg:-top-10 custom-prev border border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
// //           >
// //             <FaArrowLeft className="text-gray-600 group-hover:text-white transition-colors" />
// //           </button>
// //           <button 
// //           className="absolute z-10 right-4 sm:right-40 -top-1 lg:-top-10 group border custom-next border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
// //                     >
// //                       <FaArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
// //           </button>
// //         </div> */}
// //       </div>
// //     </div>
// //   );
// // }





















































