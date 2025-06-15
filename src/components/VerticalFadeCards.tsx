
import React from "react";

interface VerticalFadeCardsProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const VerticalFadeCards: React.FC<VerticalFadeCardsProps> = ({
  children,
  className = "",
  style = {},
}) => {
  // This is now just a fixed-size card wrapper
  return (
    <div
      className={`w-full max-w-2xl h-[520px] max-h-[520px] flex items-center justify-center transition-all ${className}`}
      style={{
        height: 520,
        maxHeight: 520,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default VerticalFadeCards;
