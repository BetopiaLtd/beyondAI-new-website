"use client";
import { X, Menu, MapPin, Mail, PhoneIncoming, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; 
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "AI Education", path: "/ai-education" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/product" },
  { name: "Board of Directors", path: "/board-of-directors" },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  // Disable scroll when sidebar is open
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return () => {
    document.body.style.overflow = "unset"; // <-- wrapped in {}
  };
}, [isOpen]);

 

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="w-full bg-[#0A0819] backdrop-blur-2xl py-6 fixed top-0 z-50">
        <div className="max-w-[1660px] w-11/12 mx-auto flex items-center justify-between">
          <Link href="/">
          {/* <video src="/logo_video_3.mov" className="w-[176px] h-[68px]" autoPlay muted loop></video> */}
            <Image src="/logo2.png" alt="logo" width={196} height={98} />
            {/* <Image src="/up_logo.png" alt="logo" width={176} height={68} /> */}
          </Link>

          <ul className="hidden lg:flex items-center gap-14">
           {navLinks.map((link) => {
    const isActive = pathname === link.path;
    return (
      <li key={link.name}>
        <Link
          href={link.path}
          onClick={() => setIsOpen(false)} // Close sidebar when clicking a link
          className={`text-base font-medium font-ubuntu transition-all block
          ${isActive ? "text-[#ff531f] translate-x-2" : "text-[#F3F6F9] hover:text-[#ff531f]"}
          `}
        >
          {link.name}  
        </Link>
      </li>
    );
  })}
          </ul>

      

          {/* Menu Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* <Link
  href="/contact"
  className="
    group hidden lg:inline-flex items-center gap-3 
    px-8 py-3 
    bg-[#ff4d00] hover:bg-[#ff6600] 
    text-white font-medium 
    rounded-full      
    transition-colors duration-300 
    text-lg 
    shadow-lg shadow-orange-900/40 
    overflow-hidden
    relative
  "
> 
  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[-10px]">
    Get In Touch
  </span>
 
  <div 
    className="
      relative 
      flex items-center justify-center 
      h-7 w-7 rounded-full 
      bg-black/90 
      transition-all duration-400 
      group-hover:translate-x-[20px]   
      group-hover:scale-90
    "
  > 
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 23 23" 
      fill="none"
      className="transition-opacity duration-300 group-hover:opacity-0"
    >
      <path 
        d="M7.48767 14.0255L14.9274 8.38967" 
        stroke="#F3F6F9" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M8.38965 7.4877L14.9274 8.38966L14.0254 14.9274" 
        stroke="#F3F6F9" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg> 
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none"
      className="
        absolute 
        opacity-0 translate-x-8 
        transition-all duration-400 
        group-hover:opacity-100 
        group-hover:translate-x-0
      "
    >
      <path 
        d="M5 12H19M19 12L12 5M19 12L12 19" 
        stroke="#F3F6F9" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </div>
</Link> */}

          <div
          onClick={() => setIsOpen(!isOpen)}
            className="h-11 w-11 bg-[#110D2A] flex items-center justify-center border border-[#9e9e9e] hover:border-[#ff531f] text-gray-200 hover:text-white font-medium rounded-4xl transition-colors duration-300 text-lg"
          >
            <svg className='hover:animate-spin' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#E34400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#E34400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#E34400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#E34400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#E34400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
        </div>
        </div>
      </div>

      {/* ================= SIDEBAR OVERLAY ================= */}
      {mounted && (
        <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar / Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] xl:w-[440px] bg-[#0F0B24] text-white flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with Logo & Close */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Link href="/">
            {/* <Image src="/up_logo.png" alt="logo" width={176} height={68} /> */}
            <Image src="/logo2.png" alt="logo" width={196} height={98} />
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg bg-orange-600/20 hover:bg-orange-600/40 transition-colors"
          >
            <X size={24} className="text-orange-400" />
          </button>
        </div>

<ul className="flex flex-col gap-6 mt-4 p-5">
  {navLinks.map((link) => {
    const isActive = pathname === link.path;
    return (
      <li key={link.name}>
        <Link
          href={link.path}
          onClick={() => setIsOpen(false)} // Close sidebar when clicking a link
          className={`text-xl font-medium font-ubuntu transition-all block
          ${isActive ? "text-[#ff531f] translate-x-2" : "text-[#F3F6F9] hover:text-[#ff531f]"}
          `}
        >
          {link.name}  
        </Link>
      </li>
    );
  })}
</ul>

        {/* Main Content */}
        <div className="flex-1 px-6 py-8 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">Contact US</h2>

          <div className="space-y-6 mb-10">
            <p className="text-gray-300 leading-relaxed">
              Beyond AI is the trusted technology partner for global enterprises seeking intelligent automation, advanced security, and scalable cloud innovation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We empower organizations to accelerate cloud growth and achieve real digital transformation.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <MapPin size={22} className="text-orange-500 mt-1 shrink-0" />
              <div>
                <p className="text-gray-200 font-medium">New York, Austin TX, Manila, Dhaka, Switzerland </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail size={22} className="text-orange-500" />
              <a
                href="mailto:Info@beyondai.ph"
                className="text-gray-200 hover:text-orange-400 transition-colors"
              >
                Info@beyondai.ph
              </a>
            </div> 

            <div className="flex items-center gap-4">
              <PhoneIncoming size={22} className="text-orange-500" />
              <div className="text-gray-200">
                (512) 827-2606 
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="px-6 pb-8">
          <h3 className="text-xl font-semibold mb-4">Get Updated</h3>

          <div className="relative">
            <input
              type="email"
              placeholder="Enter mail"
              className="w-full bg-white/5 border border-orange-600/30 rounded-full py-3.5 px-6 pr-16 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white p-2.5 rounded-full transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div> */}

        {/* Social Icons */}
        <div className="px-6 pb-10 flex items-center gap-5 border-t border-white/10 pt-6">
            <div className="flex items-center gap-6 mt-10 text-white">
                <Link href="https://www.facebook.com/share/1DHSg7tWwR/">
             <Facebook/>
                </Link>
                <Link href="https://www.linkedin.com/company/beyond_ai.manila/">
             <Linkedin/>
                </Link>
            </div>
        </div>
      </div>
    </div>
      )}
    </>
  );
}

// 'use client'
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();
//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setOpen(false);
//   }, [pathname]);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <header
//       className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 font-manrope
//     transition-all duration-300
//     w-[100%]  lg:px-4 xl:px-4  
    
//     ${scrolled ? "bg-[#212529] md:mt-0" : "bg-[#212529] "}
//   `}
//     >
//       <div className="max-w-[1700px] px-4 sm:px-6 lg:px-0 mx-auto">
//         <div className="flex items-center justify-between py-[22px] ">
//           <Link href="/">
//             <Image
//               src="/logo2.png"
//               alt="Beyond AI_hite_logo"
//               width={230}
//               height={40}
//               className="w-[230px]"
//             />
//           </Link>

//           <div>
//             <Link
             
//               href="#"
//               className="flex border border-[#E34400] text-white text-sm md:text-base 2xl:text-xl 
//             font-medium px-2 xl:px-[20.8px] cursor-pointer  py-3 xl:py-[10.4px] rounded-[10px] transition gap-[5.2px] items-center"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
