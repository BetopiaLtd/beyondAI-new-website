import React from "react";

interface HeadingThreeProps {
  title: string;
  center?: boolean;
  className?: string;
}

const HeadingThree: React.FC<HeadingThreeProps> = ({
  title,
className = "",
  center = true,
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className={`text-xl xl:text-2xl font-bold ${className}`}>
        {title}
      </h2>
    </div>
  );
};

export default HeadingThree;
