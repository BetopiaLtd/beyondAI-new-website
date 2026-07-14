import React from "react";

interface HeadingTwoProps {
  title: string;
  highlight?: string;
  center?: boolean;
  className?: string;
}

const HeadingTwo: React.FC<HeadingTwoProps> = ({
  title,
  center = true,
  className = ""
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className={`text-[28px] md:text-[32px] lg:text-[52px] font-bold text-[#45556C] mb-4 ${className}`}>
        {title}
      </h2>

      <div
        className={`w-20 h-1 bg-[#FF9500]  mb-6 ${
          center ? "mx-auto" : ""
        }`}
      ></div>
    </div>
  );
};

export default HeadingTwo;
