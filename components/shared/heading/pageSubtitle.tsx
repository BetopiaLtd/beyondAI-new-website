
type PageSubtitleProps = {
  text: string;
  className?: string;
};

const PageSubtitle = ({ text, className = "" }: PageSubtitleProps) => {
  return (
    <p
      className={`text-base  ${className}`}
    >
      {text}
    </p>
  );
};


export default PageSubtitle;