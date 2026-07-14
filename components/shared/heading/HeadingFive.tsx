import React from "react";

interface HeadingFiveProps {
  title: string;
  center?: boolean;
  className?: string;
}

const HeadingFive: React.FC<HeadingFiveProps> = ({
  title,
  center = true,
  className = ""
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className={`text-[28px] md:text-4xl lg:text-[52px] font-bold text-white lg:mb-8 ${className}`}>
        {title}
      </h2>
    </div>
  );
};

export default HeadingFive;
