import React from "react";

interface HeadingOneProps {
  title: string;
  highlight?: string;
  center?: boolean;
  className?: string;
}

const HeadingOne: React.FC<HeadingOneProps> = ({
  title,
  highlight,
  center = true,
  className = ""
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className={`text-[28px] md:text-[32px] lg:text-[52px] font-bold text-[#45556C] mb-4 lg:mb-6 ${className}`}>
        {title}{" "}
        {highlight && (
          <span className="text-[#FF9500]">{highlight}</span>
        )}
      </h2>

      <div
        className={`w-20 h-1 bg-[#FF9500] mb-6 lg:mb-16 ${
          center ? "mx-auto" : ""
        }`}
      ></div>
    </div>
  );
};

export default HeadingOne;
