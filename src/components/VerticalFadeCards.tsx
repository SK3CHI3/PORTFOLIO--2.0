import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

interface VerticalFadeCardsProps {
  children: React.ReactNode[];
  className?: string;
}

// Height of a single card (in px)
const CARD_HEIGHT = 520;

const VerticalFadeCards: React.FC<VerticalFadeCardsProps> = ({
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const numCards = children.length;

  // Hide scrollbars with global style
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .fadecards-no-scrollbar::-webkit-scrollbar { display: none !important; }
      .fadecards-no-scrollbar { scrollbar-width: none !important; -ms-overflow-style: none !important;}
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Snap to correct card after scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let lastScrollY = 0;
    let lastSnapTimeout: NodeJS.Timeout | null = null;

    const onScroll = () => {
      if (!el) return;
      const scrollY = el.scrollTop;
      const index = Math.round(scrollY / CARD_HEIGHT);

      if (index !== activeIndex && !isFading) {
        setIsFading(true);
        setLastIndex(activeIndex);
        // Wait for fade-out then setActiveIndex
        setTimeout(() => {
          setActiveIndex(index);
          setIsFading(false);
        }, 250); // Duration matches fade
      }

      // Snap to nearest card after scroll stops
      if (lastSnapTimeout) clearTimeout(lastSnapTimeout);
      lastSnapTimeout = setTimeout(() => {
        el.scrollTo({
          top: index * CARD_HEIGHT,
          behavior: "smooth",
        });
      }, 80);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (lastSnapTimeout) clearTimeout(lastSnapTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, isFading]);

  return (
    <div
      ref={containerRef}
      className={`
        relative w-full h-[${CARD_HEIGHT}px] max-h-[${CARD_HEIGHT}px]
        overflow-y-scroll fadecards-no-scrollbar
        scroll-smooth
        ${className}
      `}
      style={{
        scrollSnapType: "y mandatory",
        maxHeight: CARD_HEIGHT,
        height: CARD_HEIGHT,
        WebkitOverflowScrolling: "touch",
      }}
      tabIndex={0}
    >
      {React.Children.map(children, (child, idx) => {
        const isCurrent = idx === activeIndex && !isFading;
        const isPrev = idx === lastIndex && isFading;

        // Use custom animate-fade-pure-in/out (opacity only)
        return (
          <div
            className={`
              w-full snap-start transition-opacity duration-300
              ${isCurrent
                ? "opacity-100 pointer-events-auto relative z-10 animate-fade-pure-in"
                : isPrev
                  ? "opacity-0 pointer-events-none relative z-0 animate-fade-pure-out"
                  : "opacity-0 pointer-events-none"}
            `}
            style={{
              height: CARD_HEIGHT,
              minHeight: CARD_HEIGHT,
              willChange: "opacity",
              touchAction: "manipulation",
            }}
            key={idx}
          >
            {child}
          </div>
        );
      })}
      {/* Invisible spacers to allow for scroll */}
      {Array(numCards - 1)
        .fill(0)
        .map((_, idx) => (
          <div
            key={`spacer-${idx}`}
            style={{
              height: CARD_HEIGHT,
              width: "100%",
              pointerEvents: "none",
              opacity: 0,
              position: "relative",
              zIndex: 0,
            }}
            aria-hidden="true"
          />
        ))}
      {/* Add fade keyframes for pure fade-in/fade-out animation */}
      <style>{`
        @keyframes fade-pure-in {
          from { opacity: 0;}
          to { opacity: 1;}
        }
        @keyframes fade-pure-out {
          from { opacity: 1;}
          to { opacity: 0;}
        }
        .animate-fade-pure-in {
          animation: fade-pure-in 0.3s ease-out;
        }
        .animate-fade-pure-out {
          animation: fade-pure-out 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default VerticalFadeCards;
