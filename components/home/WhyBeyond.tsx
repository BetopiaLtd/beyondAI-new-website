import HeadingTwo from "@/components/shared/heading/HeadingTwo";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";
import Container from "../shared/Container";

const whyBeyondData = [
  {
    id: 1,
    title: "Enterprise-Grade Talent & Proprietary IP",
    description:
      " Top-tier professionals with proven track records in delivering complex enterprise solutions",
    bgColor: "#AD46FF",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          d="M20.8505 17.3652L22.8915 28.8513C22.9144 28.9865 22.8954 29.1255 22.8371 29.2497C22.7788 29.3739 22.684 29.4773 22.5654 29.5462C22.4468 29.615 22.3099 29.646 22.1732 29.6349C22.0365 29.6239 21.9064 29.5714 21.8003 29.4845L16.9774 25.8646C16.7446 25.6906 16.4617 25.5967 16.1711 25.5967C15.8805 25.5967 15.5977 25.6906 15.3648 25.8646L10.5338 29.4831C10.4278 29.5699 10.2979 29.6223 10.1613 29.6334C10.0248 29.6444 9.88811 29.6135 9.76954 29.5449C9.65098 29.4762 9.55616 29.3731 9.49775 29.2491C9.43935 29.1252 9.42012 28.9864 9.44263 28.8513L11.4823 17.3652"
          stroke="white"
          strokeWidth="2.69441"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.1662 18.8595C20.6304 18.8595 24.2493 15.2406 24.2493 10.7764C24.2493 6.31227 20.6304 2.69336 16.1662 2.69336C11.702 2.69336 8.08313 6.31227 8.08313 10.7764C8.08313 15.2406 11.702 18.8595 16.1662 18.8595Z"
          stroke="white"
          strokeWidth="2.69441"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "High-Compliance & Certified Delivery",
    description:
      "ISO 27001, SOC 2, CMMI certified ensuring the highest security and quality standards",
    bgColor: "#00C950",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          d="M25.5969 14.8184H6.73635C5.2483 14.8184 4.04199 16.0247 4.04199 17.5127V26.943C4.04199 28.431 5.2483 29.6373 6.73635 29.6373H25.5969C27.0849 29.6373 28.2912 28.431 28.2912 26.943V17.5127C28.2912 16.0247 27.0849 14.8184 25.5969 14.8184Z"
          stroke="white"
          strokeWidth="2.69441"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.43066 14.818V9.42925C9.43066 7.64278 10.1403 5.92948 11.4036 4.66626C12.6668 3.40303 14.3801 2.69336 16.1666 2.69336C17.953 2.69336 19.6663 3.40303 20.9296 4.66626C22.1928 5.92948 22.9025 7.64278 22.9025 9.42925V14.818"
          stroke="white"
          strokeWidth="2.69441"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Agile Global Delivery",
    description:
      "Strategic delivery centers in Dhaka, Manila, and Eastern Europe for 24/7 support",
    bgColor: "#2B7FFF",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          d="M16.1661 29.5627C23.6064 29.5627 29.6379 23.5312 29.6379 16.0909C29.6379 8.65066 23.6064 2.61914 16.1661 2.61914C8.72586 2.61914 2.69434 8.65066 2.69434 16.0909C2.69434 23.5312 8.72586 29.5627 16.1661 29.5627Z"
          stroke="white"
          strokeWidth="2.69441"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.1661 2.61914C12.7068 6.25134 10.7773 11.075 10.7773 16.0909C10.7773 21.1068 12.7068 25.9305 16.1661 29.5627C19.6253 25.9305 21.5548 21.1068 21.5548 16.0909C21.5548 11.075 19.6253 6.25134 16.1661 2.61914Z"
          stroke="white"
          strokeWidth="2.69441"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.69458 16.0918H29.6382"
          stroke="white"
          strokeWidth="2.69441"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Internal Funding & Strategic Control",
    description:
      "Self-funded operations ensure speed, flexibility, and alignment with client success",
    bgColor: "#FF9500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
      >
        <path
          d="M29.6379 9.35742L18.1869 20.8084L11.451 14.0725L2.69434 22.8292"
          stroke="white"
          strokeWidth="2.69441"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.5557 9.35742H29.6388V17.4405"
          stroke="white"
          strokeWidth="2.69441"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
export default function WhyBeyond() {
  return (
    <Container>
  <section className="py-10 lg:py-20 overflow-hidden">
    {/* ── HEADER ── */}
          <div className={`mb-0 `}>
            <div className="wwa-tag-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] inline-block" />
              With us
            </div>

            <div className="wwa-accent-bar h-0.5 w-12 bg-[#facc15] mb-6 rounded-full" />

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="font-display text-[clamp(44px,6vw,60px)] leading-[0.9] uppercase text-[#0f1e4a] mb-4">
                  Why 
  {' '}
                  <span className="wwa-shimmer-blue"> Beyond AI </span><br /> {" "}  
                </h2>

                {/* ── original subtitle text ── */}
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg font-light">
                Industry-leading capabilities that set us apart from the competition
                </p>
              </div> 
            </div>
          </div>

    {/* MAIN GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 2xl:gap-20 items-stretch mt-12">
      
      {/* IMAGE COLUMN */}
      <div className="hidden lg:block h-full xl:col-span-2">
        <Image
          src="/home_square_why_betopia.jpg"
          alt="why_img"
          width={818}
          height={457}
          className="w-full h-full object-cover rounded-[20px]"
        />
      </div>

      {/* CONTENT COLUMN */}
      <section className="h-full flex xl:col-span-3">
        <div className="space-y-7 w-full flex flex-col justify-between ">
          {whyBeyondData.map((item) => (
            <div
              key={item.id}
              className="xl:flex items-start gap-6 bg-gray-50 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center mb-4 xl:mb-0"
                style={{ backgroundColor: item.bgColor }}
              >
                {item.icon}
              </div>

              <div>
               <h3 className="text-2xl xl:text-[30px] font-bold text-gray-900 mb-2">
                    {item.title}
               </h3>
                <PageSubtitle
                  text={item.description}
                  className="text-gray-600"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  </section>
</Container>

  );
}


