import React from "react";

interface HeadingFourProps {
  title: string;
  highlight: string;
  center?: boolean;
  className?: string;
}

const HeadingFour: React.FC<HeadingFourProps> = ({
  title,
  highlight,
  className = "",
  center = true,
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className={`text-xl xl:text-[36px] font-bold ${className}`}>
        {title} <span className="text-[#FF9500]">{highlight}</span>
      </h2>
    </div>
  );
};

export default HeadingFour;
