
import React, { useRef, useLayoutEffect, useState } from "react";

interface VerticalFadeCardsProps {
  children: React.ReactNode[];
  className?: string;
}

// Height of a single card (in px)
const CARD_HEIGHT = 520; 

const VerticalFadeCards: React.FC<VerticalFadeCardsProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Hide scrollbars (with CSS, and for iOS/Firefox/Chrome)
    el.style.scrollbarWidth = "none"; // Firefox
    el.style.msOverflowStyle = "none"; // IE/Edge
    // For Webkit browsers
    el.style.overflowY = "scroll";

    // Handle scroll
    const handleScroll = () => {
      if (!el) return;
      const scrollY = el.scrollTop;
      const index = Math.round(scrollY / CARD_HEIGHT);
      if (index !== activeIndex && !isFading) {
        setIsFading(true);
        setTimeout(() => {
          setActiveIndex(index);
          setIsFading(false);
          setLastIndex(index);
        }, 200); // Duration matches fade-out
      }
    };
    el.addEventListener("scroll", handleScroll);

    // Clean-up
    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, isFading]);

  return (
    <div
      ref={containerRef}
      className={`
        relative w-full h-[${CARD_HEIGHT}px] max-h-[${CARD_HEIGHT}px]
        overflow-y-scroll
        snap-y snap-mandatory
        no-scrollbar
        ${className || ""}
      `}
      style={{
        scrollSnapType: "y mandatory",
        maxHeight: CARD_HEIGHT,
        // Hide scrollbars visually in Chromium/Safari
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      // This removes scrollbars on mobile
      tabIndex={0}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
          width: 0 !important;
          background: transparent !important;
        }
      `}</style>
      {React.Children.map(children, (child, idx) => {
        const isCurrent = idx === activeIndex && !isFading;
        // Show previous card when fading
        const isPrev = idx === lastIndex && isFading;
        return (
          <div
            className={`
              absolute top-0 left-0 w-full transition-opacity duration-300
              ${isCurrent
                ? "opacity-100 pointer-events-auto relative z-10 animate-fade-in"
                : isPrev
                  ? "opacity-0 pointer-events-none relative z-0 animate-fade-out"
                  : "opacity-0 pointer-events-none"}
              snap-center
            `}
            style={{
              minHeight: CARD_HEIGHT,
              height: CARD_HEIGHT,
              transition: "opacity 0.3s",
              willChange: "opacity, transform",
              // Prevent extra events and overscroll
              touchAction: "manipulation",
            }}
            key={idx}
          >
            {child}
          </div>
        );
      })}
      {/* Invisible spacers to allow scrolling for snap */}
      {children.map((_, idx) => (
        <div
          key={`spacer-${idx}`}
          style={{
            height: CARD_HEIGHT,
            width: "100%",
            opacity: 0,
            zIndex: 0,
            pointerEvents: "none",
            position: "relative"
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default VerticalFadeCards;

