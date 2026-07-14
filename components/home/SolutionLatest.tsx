"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import HeadingTwo from "@/components/shared/heading/HeadingTwo";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import HeadingThree from "@/components/shared/heading/HeadingThree";
import Container from "../shared/Container";

interface BlogPost {
  id: number;
  image: string;
  link: string;
  tags: string[];
  date: string;
  readTime: string;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/solution/33.png",
    link: "/solution",
    tags: [
      "End-to-end encryption & role-based access",
      "Real-time results and audit-ready reporting",
      "Scalable for enterprise, government, and private use",
    ],
    date: "March 20, 2024",
    readTime: "9 min read",
    title: "Microsoft",
    description:
      "Transform your operations with Microsoft’s trusted cloud platform and enterprise tools.",
  },
  {
    id: 2,
    image: "/solution/22.png",
    link: "/solution",
    tags: [
      "Employee lifecycle management",
      "Payroll, attendance & performance tracking",
      "Compliance-ready and data-driven insights",
    ],
    date: "March 20, 2024",
    readTime: "9 min read",
    title: "Google Cloud",
    description:
      "Power your business with Google’s scalable, secure, and intelligent cloud solutions.",
  },
  {
    id: 3,
    image: "/solution/11.png",
    link: "/solution",
    tags: [
      "Modular, scalable architecture",
      "Cloud & on-prem deployment options",
      "Designed for growing and large enterprises",
    ],
    date: "March 20, 2024",
    readTime: "9 min read",
    title: "AWS",
    description:
      "Leverage AWS for reliable, flexible, and globally available cloud services.",
  },
  {
    id: 1,
    image: "/solution/33.png",
    link: "/solution",
    tags: [
      "End-to-end encryption & role-based access",
      "Real-time results and audit-ready reporting",
      "Scalable for enterprise, government, and private use",
    ],
    date: "March 20, 2024",
    readTime: "9 min read",
    title: "Microsoft",
    description:
      "Transform your operations with Microsoft’s trusted cloud platform and enterprise tools.",
  },
  {
    id: 2,
    image: "/solution/22.png",
    link: "/solution",
    tags: [
      "Employee lifecycle management",
      "Payroll, attendance & performance tracking",
      "Compliance-ready and data-driven insights",
    ],
    date: "March 20, 2024",
    readTime: "9 min read",
    title: "Google Cloud",
    description:
      "Power your business with Google’s scalable, secure, and intelligent cloud solutions.",
  },
  {
    id: 3,
    image: "/solution/11.png",
    link: "/solution",
    tags: [
      "Modular, scalable architecture",
      "Cloud & on-prem deployment options",
      "Designed for growing and large enterprises",
    ],
    date: "March 20, 2024",
    readTime: "9 min read",
    title: "AWS",
    description:
      "Leverage AWS for reliable, flexible, and globally available cloud services.",
  },
];

export default function SolutionLetest() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Container>
      {/* Header */}
      <div id="solutions"  className="flex flex-col items-center justify-center">
        <HeadingTwo title=" Solutions" />

        <PageSubtitle
          text="Vendor-Neutral, Multi-Cloud Solutions Powered by Microsoft, AWS &
          Google Cloud"
          className="text-center mb-6 lg:mb-9 text-[#6e6e6e]"
        />
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        speed={800}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1.2, spaceBetween: 12 },
          640: { slidesPerView: 1.5, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 18 },
          1024: { slidesPerView: 2.5, spaceBetween: 20 },
          1280: { slidesPerView: 3, spaceBetween: 25 },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="pb-10"
      >
        {blogPosts.map((post, idx) => (
       <SwiperSlide key={idx}>
            <div className="bg-[#464646] flex flex-col h-full overflow-hidden rounded-lg hover:scale-102 transition-transform duration-700">
              {/* Image */}
              <div className="relative h-[250px] sm:h-[300px] md:h-[320px] lg:h-[355px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col min-h-[200px] md:min-h-[210px] xl:min-h-[270px] 2xl:min-h-[255px]">
                <h3 className="text-2xl xl:text-[36px] font-bold text-white mb-2 sm:mb-3">
                  {post.title}
                </h3>

                <p className="text-lg xl:text-2xl text-[#999999] leading-relaxed flex-1 mb-3">
                  {post.description}
                </p>

                {/* <Link href="/solution" className=" ">
                  <button className="text-white hover:text-orange-400 cursor-pointer flex items-center gap-2 text-sm sm:text-base md:text-lg">
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
                        stroke="#FFFDFD"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 5L5 19"
                        stroke="#FFFDFD"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </Link> */}
              </div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </Container>
  );
}
// "use client";
// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Image from "next/image";
// import Container from "@/components/layout/Container";
// import { MdArrowOutward } from "react-icons/md";
// import Link from "next/link";

// interface BlogPost {
//   id: number;
//   image: string;
//   link: string;
//   tags: string[];
//   date: string;
//   readTime: string;
//   title: string;
//   description: string;
// }

// const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     image: "/solution/msft-microsoft-logo-2-3.webp",
//     link: "/solution",
//     tags: [
//       "End-to-end encryption & role-based access",
//       "Real-time results and audit-ready reporting",
//       "Scalable for enterprise, government, and private use",
//     ],
//     date: "March 20, 2024",
//     readTime: "9 min read",
//     title: "Microsoft",
//     description:
//       "Transform your operations with Microsoft’s trusted cloud platform and enterprise tools.",
//   },
//   {
//     id: 2,
//     image: "/solution/cloud.webp",
//     link: "/solution",
//     tags: [
//       "Employee lifecycle management",
//       "Payroll, attendance & performance tracking",
//       "Compliance-ready and data-driven insights",
//     ],
//     date: "March 20, 2024",
//     readTime: "9 min read",
//     title: "Google Cloud",
//     description:
//       "Power your business with Google’s scalable, secure, and intelligent cloud solutions.",
//   },
//   {
//     id: 3,
//     image: "/solution/aws-cloud-hosting-service.webp",
//     link: "/solution",
//     tags: [
//       "Modular, scalable architecture",
//       "Cloud & on-prem deployment options",
//       "Designed for growing and large enterprises",
//     ],
//     date: "March 20, 2024",
//     readTime: "9 min read",
//     title: "AWS",
//     description:
//       "Leverage AWS for reliable, flexible, and globally available cloud services.",
//   },
//   {
//     id: 1,
//     image: "/solution/msft-microsoft-logo-2-3.webp",
//     link: "/solution",
//     tags: [
//       "End-to-end encryption & role-based access",
//       "Real-time results and audit-ready reporting",
//       "Scalable for enterprise, government, and private use",
//     ],
//     date: "March 20, 2024",
//     readTime: "9 min read",
//     title: "Microsoft",
//     description:
//       "Transform your operations with Microsoft’s trusted cloud platform and enterprise tools.",
//   },
//   {
//     id: 2,
//     image: "/solution/cloud.webp",
//     link: "/solution",
//     tags: [
//       "Employee lifecycle management",
//       "Payroll, attendance & performance tracking",
//       "Compliance-ready and data-driven insights",
//     ],
//     date: "March 20, 2024",
//     readTime: "9 min read",
//     title: "Google Cloud",
//     description:
//       "Power your business with Google’s scalable, secure, and intelligent cloud solutions.",
//   },
//   {
//     id: 3,
//     image: "/solution/aws-cloud-hosting-service.webp",
//     link: "/solution",
//     tags: [
//       "Modular, scalable architecture",
//       "Cloud & on-prem deployment options",
//       "Designed for growing and large enterprises",
//     ],
//     date: "March 20, 2024",
//     readTime: "9 min read",
//     title: "AWS",
//     description:
//       "Leverage AWS for reliable, flexible, and globally available cloud services.",
//   },
// ];

// export default function SolutionLetest() {
//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//     <div className="max-w-[1660px] mx-auto px-4 sm:px-6 lg:px-10">
//       {/* Header */}
//       <div className="flex flex-col items-center justify-center">
//         <h2 className="text-3xl md:text-4xl xl:text-[52px] text-center font-bold text-[#45556C] mb-4">
//           Solutions
//         </h2>
//         <div className="w-20 h-1 bg-[#FF9500] mx-auto mb-3"></div>
//         <p className="text-lg md:text-2xl text-[#6e6e6e] max-w-3xl mx-auto text-center">
//           Vendor-Neutral, Multi-Cloud Solutions Powered by Microsoft, AWS &
//           Google Cloud
//         </p>
//       </div>
//       <div className="relative mb-6">
//         {/* <div>
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#45556C] mb-2 sm:mb-4">
//             Solution
//           </h2>
//           <div className="w-16 sm:w-20 h-1 bg-[#FF9500]"></div>
//         </div> */}

//         {/* <div className="flex w-12/12 mx-auto justify-between xl:px-8 absolute md:static top-56 left-[0%] z-10">
//           <button
//             onClick={() => swiperRef.current?.slidePrev()}
//             aria-label="Previous slide"
//             className="group border bg-white/50 border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
//           >
//             <FaArrowLeft className="text-gray-600 group-hover:text-white transition-colors" />
//           </button>
//           <button
//             onClick={() => swiperRef.current?.slideNext()}
//             aria-label="Next slide"
//             className="group border bg-white/50 border-gray-300 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
//           >
//             <FaArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
//           </button>
//         </div> */}
//       </div>

//       {/* Carousel */}
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         loop={true}
//         speed={800}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         breakpoints={{
//           0: { slidesPerView: 1, spaceBetween: 10 },
//           480: { slidesPerView: 1.2, spaceBetween: 12 },
//           640: { slidesPerView: 1.5, spaceBetween: 15 },
//           768: { slidesPerView: 2, spaceBetween: 18 },
//           1024: { slidesPerView: 2.5, spaceBetween: 20 },
//           1280: { slidesPerView: 3, spaceBetween: 25 },
//         }}
//         onBeforeInit={(swiper) => {
//           swiperRef.current = swiper;
//         }}
//         className="pb-12"
//       >
//         {blogPosts.map((post, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="bg-[#464646] flex flex-col h-full overflow-hidden rounded-lg hover:scale-102 transition-transform duration-700">
//               {/* Image */}
//               <div className="relative h-[250px] sm:h-[300px] md:h-[320px] lg:h-[355px] overflow-hidden">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-4 sm:p-5 flex-1 flex flex-col min-h-[200px] md:min-h-[210px] xl:min-h-[270px] 2xl:min-h-[255px]">
//                 <h3 className="text-2xl xl:text-[36px] font-bold text-white mb-2 sm:mb-3">
//                   {post.title}
//                 </h3>

//                 <p className="text-lg xl:text-2xl text-[#999999] leading-relaxed flex-1 mb-3">
//                   {post.description}
//                 </p>

//                 <Link href="/solution" className=" ">
//                   <button className="text-white hover:text-orange-400 cursor-pointer flex items-center gap-2 text-sm sm:text-base md:text-lg">
//                     Explore More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                     >
//                       <path
//                         d="M13 5H19V11"
//                         stroke="#FFFDFD"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M19 5L5 19"
//                         stroke="#FFFDFD"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
