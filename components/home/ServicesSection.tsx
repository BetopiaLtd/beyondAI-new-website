"use client";

import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import HeadingTwo from "@/components/shared/heading/HeadingTwo";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import HeadingThree from "@/components/shared/heading/HeadingThree";
import Container from "../shared/Container";

export default function ServicesSection() {
  const services = [
    {
      title: "Cloud Modernization",
      video: "/update-service/5.jpg",
      link: "/services/cloud-modernization",
      details:
        "Upgrade your IT infrastructure with scalable and efficient cloud solutions.",
    },
    {
      title: "AI & Analytics",
      video: "/update-service/4.jpg",
      link: "/services/ai-analytics",
      details:
        "Leverage AI-driven insights to make smarter, data-backed decisions.",
    },
    {
      title: "Cybersecurity & Compliance",
      video: "/update-service/6.jpg",
      link: "/services/cybersecurity",
      details:
        "Protect your business with robust security measures and compliance management.",
    },

    {
      title: "Software Development",
      video: "/update-service/3.jpg",
      link: "/services/software-development",
      details:
        "Delivering scalable, high performance software built for your business.",
    },
    {
      title: "Managed Services",
      video: "/update-service/2.jpg",
      link: "/services/managed",
      details:
        "Ensure seamless IT operations with proactive monitoring and continuous support.",
    },
    {
      title: "Resource Augmentation",
      video: "/update-service/1.jpg",
      link: "/services/resource-augmentation",
      details:
        "Scale your team with skilled experts to accelerate project delivery.",
    },
  ];

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Container>
      <section id="services" className=" pt-9  -mt-10  overflow-hidden  bg-white">
           {/* ── HEADER ── */}
          <div className={`mb-4 `}>
            <div className="wwa-tag-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] inline-block" />
              Services
            </div>

            <div className="wwa-accent-bar h-0.5 w-12 bg-[#facc15] mb-6 rounded-full" />

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="font-display text-[clamp(44px,6vw,60px)] leading-[0.9] uppercase text-[#0f1e4a] mb-4">
                  Enterprise 

  {' '}
                  <span className="wwa-shimmer-blue">Services </span><br /> {" "} 
                  <span className="text-[#9ca3af]"> That Drive Innovation.  </span>
                </h2>

                {/* ── original subtitle text ── */}
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg font-light">
                 Transform your business with cutting edge AI, scalable cloud infrastructure, and comprehensive cybersecurity services from industry experts with 15+ years of proven enterprise delivery.
                </p>
              </div> 
            </div>
          </div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          speed={1500}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2.5, spaceBetween: 25 },
            1280: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-12"
        >
          {services.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="group relative  h-77.5 lg:h-127.5 xl:h-130 w-full rounded-md overflow-hidden bg-gray-900">
                {/* Video Background */}
                <Image
                  src={item.video}
                  width={400}
                  height={600}
                  alt=""
                  className="absolute inset-0 h-87.5 lg:h-137.5 xl:h-150 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t via-black/50 hover:via-black/60 from-black/90 hover:from-black to-transparent" />

                {/* Text Content */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-8 right-4 sm:right-6 lg:right-20">
                  <HeadingThree
                    title={item.title}
                    center={false}
                    className="pt-40 lg:pt-60 text-white mb-3 "
                  />
                  <PageSubtitle
                    text={item.details}
                    className=" mb-5 text-gray-300"
                  />

                  {/* <Link href={item.link}>
                    <button className="mt-2 hover:text-orange-400  sm:mt-4 md:mt-6 text-white flex items-center gap-2 text-base md:text-lg cursor-pointer">
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
      </section>
    </Container>
  );
}
// "use client";

// import Link from "next/link";
// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import { MdArrowOutward } from "react-icons/md";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import type { Swiper as SwiperType } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import Image from "next/image";

// export default function ServicesSection() {
//   const services =[
//   {
//     title: "Cloud Modernization",
//     video: "/service/cloud_.jpg",
//     link: "/services/cloud-modernization",
//     details: "Upgrade your IT infrastructure with scalable and efficient cloud solutions."
//   },
//   {
//     title: "Cybersecurity & Compliance",
//     video: "/service/cyber333.jpg",
//     link: "/services/cybersecurity",
//     details: "Protect your business with robust security measures and compliance management."
//   },
//   {
//     title: "AI & Analytics",
//     video: "/service/ai_.jpg",
//     link: "/services/ai-analytics",
//     details: "Leverage AI-driven insights to make smarter, data-backed decisions."
//   },
//   {
//     title: "Resource Augmentation",
//     video: "/service/resource_augmentation.jpg",
//     link: "/services/resource-augmentation",
//     details: "Scale your team with skilled experts to accelerate project delivery."
//   },
// ]

//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//    <section className="w-full pt-2 pb-8 md:py-16 px-4 sm:px-6 md:px-10 -mt-10  overflow-hidden max-w-[1660px] mx-auto bg-white">
//       {/* Header Section */}
//             <div className="flex flex-col items-center justify-center">
//      <h2 className="text-3xl md:text-4xl xl:text-[52px] text-center font-bold text-[#45556C] mb-4">
//         Services
//       </h2>
//       <div className="w-20 h-1 bg-[#FF9500] mx-auto mb-3"></div>
//       <p className="text-lg md:text-2xl text-[#6e6e6e] max-w-3xl mx-auto text-center">
//     Enterprise IT Services in Cloud, AI, Cybersecurity & Software Engineering
//       </p>
// </div>
//       <div className="mb-6 relative">
//         {/* <div className="text-left">
//           <h2 className="text-2xl md:text-[36px] font-bold text-[#2D3A4B] mb-2">Services</h2>
//           <div className="w-16 sm:w-20 h-1.5 bg-[#FF9500] mb-2"></div>
//         </div> */}

//         {/* Navigation Buttons */}
//         {/* <div className="flex   w-12/12 mx-auto justify-between xl:px-8 absolute md:static top-48 left-[0%] z-10">
//           <button
//             onClick={() => swiperRef.current?.slidePrev()}
//             className="group border border-gray-300 bg-white/50 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
//           >
//             <FaArrowLeft className="text-gray-600 group-hover:text-white transition-colors" />
//           </button>
//           <button
//             onClick={() => swiperRef.current?.slideNext()}
//             className="group border border-gray-300 bg-white/50 hover:border-[#FF9500] hover:bg-[#FF9500] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
//           >
//             <FaArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
//           </button>
//         </div> */}
//       </div>

//       <Swiper
//         modules={[Pagination, Navigation, Autoplay]}
//         slidesPerView={1}
//         spaceBetween={20}
//         loop
//         speed={1500}
//          autoplay={{ delay: 4000, disableOnInteraction: false }}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         breakpoints={{
//           640: { slidesPerView: 1, spaceBetween: 15 },
//           768: { slidesPerView: 2, spaceBetween: 20 },
//           1024: { slidesPerView: 2.5, spaceBetween: 25 },
//           1280: { slidesPerView: 3, spaceBetween: 30 },
//         }}
//         className="pb-12"
//       >
//         {services.map((item, i) => (
//           <SwiperSlide key={i}>
//             <div className="group relative  h-[400px] lg:h-[550px] xl:h-[600px] w-full rounded-md overflow-hidden bg-gray-900">
//               {/* Video Background */}
//               <Image
//                 src={item.video}
//                 width={400}
//                 height={600}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               {/* Overlay Gradient */}
//               <div className="absolute inset-0 bg-linear-to-t via-black/50 hover:via-black/60 from-black/90 hover:from-black to-transparent" />

//               {/* Text Content */}
//               <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-20">
//                 <h3 className="text-white text-2xl xl:text-[36px] font-bold  drop-shadow-md mb-2 sm:mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-lg xl:text-2xl font-normal text-gray-300 mb-3 sm:mb-5">
//                   {item.details}
//                 </p>
//                 <Link href={item.link}>
//                   <button className="mt-2 hover:text-orange-400 cursor-pointer sm:mt-4 md:mt-6 text-white flex items-center gap-2 text-base md:text-lg cursor-pointer">
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
//     </section>
//   );
// }
