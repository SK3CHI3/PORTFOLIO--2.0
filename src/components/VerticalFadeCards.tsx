
import React, { useRef, useLayoutEffect, useState } from "react";

interface VerticalFadeCardsProps {
  children: React.ReactNode[];
  className?: string;
}

const CARD_HEIGHT = 520; // px; adjust if your card is bigger/smaller

const VerticalFadeCards: React.FC<VerticalFadeCardsProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = containerRef.current.scrollTop;
      // Find which card should be active
      const index = Math.round(scrollY / CARD_HEIGHT);
      setActiveIndex(index);
    };
    const ref = containerRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      return () => ref.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[${CARD_HEIGHT}px] overflow-y-scroll snap-y snap-mandatory ${className || ""}`}
      style={{ scrollSnapType: "y mandatory", maxHeight: CARD_HEIGHT }}
    >
      {React.Children.map(children, (child, idx) => (
        <div
          className={`
            absolute top-0 left-0 w-full transition-opacity duration-500
            ${idx === activeIndex ? "opacity-100 pointer-events-auto relative z-10" : "opacity-0 pointer-events-none"}
            snap-center
          `}
          style={{ minHeight: CARD_HEIGHT, height: CARD_HEIGHT }}
        >
          {child}
        </div>
      ))}
      {/* Invisible spacers to allow scrolling */}
      {children.map((_, idx) => (
        <div
          key={idx}
          style={{
            height: CARD_HEIGHT,
            width: "100%",
            // hide:
            position: "relative",
            opacity: 0,
            zIndex: 0,
            pointerEvents: "none"
          }}
        />
      ))}
    </div>
  );
};

export default VerticalFadeCards;
