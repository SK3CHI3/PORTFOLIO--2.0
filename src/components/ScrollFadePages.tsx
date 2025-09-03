import React, { useState, useEffect, useRef } from 'react';

interface ScrollFadePagesProps {
  children: React.ReactNode[];
  className?: string;
}

const ScrollFadePages: React.FC<ScrollFadePagesProps> = ({ children, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(Date.now());
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;
      
      // Throttle scroll events to prevent rapid switching
      if (timeSinceLastScroll < 800 || isTransitioning) return;
      
      const isScrollingDown = e.deltaY > 0;
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = setTimeout(() => {
        if (isScrollingDown && currentIndex < children.length - 1) {
          setIsTransitioning(true);
          setCurrentIndex(prev => prev + 1);
          lastScrollTime.current = now;
        } else if (!isScrollingDown && currentIndex > 0) {
          setIsTransitioning(true);
          setCurrentIndex(prev => prev - 1);
          lastScrollTime.current = now;
        }
        
        // Reset transition state
        setTimeout(() => setIsTransitioning(false), 600);
      }, 50);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentIndex < children.length - 1) {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
        setTimeout(() => setIsTransitioning(false), 600);
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
        setTimeout(() => setIsTransitioning(false), 600);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [currentIndex, children.length, isTransitioning]);

  return (
    <>
      <style>{`
        @keyframes fadeInFromBack {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
            z-index: 1;
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            z-index: 2;
          }
        }
        
        @keyframes fadeOutToBack {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
            z-index: 2;
          }
          100% {
            opacity: 0;
            transform: translateY(-30px) scale(0.95);
            z-index: 1;
          }
        }
        
        .fade-in-from-back {
          animation: fadeInFromBack 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .fade-out-to-back {
          animation: fadeOutToBack 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .scroll-fade-container::-webkit-scrollbar {
          display: none;
        }
        
        .scroll-fade-container {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
      
      <div 
        ref={containerRef}
        className={`relative w-full h-full overflow-hidden scroll-fade-container ${className}`}
        tabIndex={0}
      >
        {children.map((child, index) => {
          const isCurrent = index === currentIndex;
          const isPrevious = index === currentIndex - 1;
          const isNext = index === currentIndex + 1;
          
          let animationClass = '';
          let visibility = 'hidden';
          let zIndex = 0;
          
          if (isCurrent) {
            animationClass = isTransitioning ? 'fade-in-from-back' : '';
            visibility = 'visible';
            zIndex = 2;
          } else if (isPrevious || isNext) {
            animationClass = isTransitioning ? 'fade-out-to-back' : '';
            visibility = isTransitioning ? 'visible' : 'hidden';
            zIndex = 1;
          }
          
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-600 ${animationClass}`}
              style={{
                visibility: visibility as 'visible' | 'hidden',
                zIndex,
                pointerEvents: isCurrent ? 'auto' : 'none',
              }}
            >
              {child}
            </div>
          );
        })}
        
        {/* Page indicator dots */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (index !== currentIndex && !isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollFadePages;