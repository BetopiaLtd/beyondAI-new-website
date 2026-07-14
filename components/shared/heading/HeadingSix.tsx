import React from "react";

interface HeadingSixProps {
  title: string;
  center?: boolean;
  className?: string;
}

const HeadingSix: React.FC<HeadingSixProps> = ({
  title,
className = "",
  center = true,
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className={`text-xl xl:text-[28px] font-semibold ${className}`}>
        {title}
      </h2>
    </div>
  );
};

export default HeadingSix;
