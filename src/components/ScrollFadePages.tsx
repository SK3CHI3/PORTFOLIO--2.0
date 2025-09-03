import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ScrollFadePagesProps {
  children: React.ReactNode[];
  className?: string;
}

const ScrollFadePages: React.FC<ScrollFadePagesProps> = ({ children, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout>();

  const goToPage = useCallback((index: number) => {
    if (index === currentIndex || isTransitioning || index < 0 || index >= children.length) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  }, [currentIndex, isTransitioning, children.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling || isTransitioning) return;
      
      isScrolling = true;
      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = currentIndex + direction;
      
      if (newIndex >= 0 && newIndex < children.length) {
        goToPage(newIndex);
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      
      switch (e.key) {
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          goToPage(currentIndex + 1);
          break;
        case 'ArrowUp':
          e.preventDefault();
          goToPage(currentIndex - 1);
          break;
        case 'Home':
          e.preventDefault();
          goToPage(0);
          break;
        case 'End':
          e.preventDefault();
          goToPage(children.length - 1);
          break;
      }
    };

    // Touch handling for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;
      
      touchEndY = e.changedTouches[0].screenY;
      const diff = touchStartY - touchEndY;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          goToPage(currentIndex + 1); // Swipe up
        } else {
          goToPage(currentIndex - 1); // Swipe down
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(scrollTimeout);
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [currentIndex, isTransitioning, goToPage, children.length]);

  return (
    <>
      <style>{`
        @keyframes slideInFromBelow {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideOutToAbove {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.9);
          }
        }
        
        @keyframes slideInFromAbove {
          0% {
            opacity: 0;
            transform: translateY(-100px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideOutToBelow {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
        }
        
        .slide-in-from-below {
          animation: slideInFromBelow 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .slide-out-to-above {
          animation: slideOutToAbove 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .slide-in-from-above {
          animation: slideInFromAbove 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .slide-out-to-below {
          animation: slideOutToBelow 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .scroll-fade-container {
          overflow: hidden;
          position: relative;
        }
        
        .page-indicator {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .page-indicator:hover {
          transform: scale(1.2);
        }
        
        .page-indicator.active {
          transform: scale(1.3);
          box-shadow: 0 0 0 2px hsl(var(--primary) / 0.3);
        }
      `}</style>
      
      <div 
        ref={containerRef}
        className={`scroll-fade-container w-full h-full ${className}`}
        tabIndex={0}
        style={{ outline: 'none' }}
      >
        {children.map((child, index) => {
          const isCurrent = index === currentIndex;
          const isPrevious = index < currentIndex;
          const isNext = index > currentIndex;
          
          let animationClass = '';
          let shouldRender = false;
          
          if (isCurrent) {
            shouldRender = true;
            animationClass = isTransitioning ? 
              (index > 0 && children[index - 1] ? 'slide-in-from-below' : 'slide-in-from-above') : '';
          } else if (isTransitioning && (isPrevious || isNext)) {
            shouldRender = true;
            if (isPrevious) {
              animationClass = 'slide-out-to-above';
            } else {
              animationClass = 'slide-out-to-below';
            }
          }
          
          if (!shouldRender && !isCurrent) return null;
          
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full ${animationClass}`}
              style={{
                zIndex: isCurrent ? 10 : 5,
                opacity: isCurrent ? 1 : 0,
                pointerEvents: isCurrent ? 'auto' : 'none',
              }}
            >
              {child}
            </div>
          );
        })}
        
        {/* Enhanced page indicators */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center space-x-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-lg">
            {children.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                disabled={isTransitioning}
                className={`page-indicator w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary active'
                    : 'bg-muted-foreground/40 hover:bg-muted-foreground/70'
                } ${isTransitioning ? 'pointer-events-none' : ''}`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
            
            {/* Page counter */}
            <div className="ml-3 text-xs text-muted-foreground font-medium">
              {currentIndex + 1} / {children.length}
            </div>
          </div>
        </div>
        
        {/* Navigation hints */}
        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40 opacity-60">
          <div className="flex flex-col items-center space-y-2 text-xs text-muted-foreground">
            <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center">
              ↑
            </div>
            <div className="text-center">Scroll</div>
            <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center">
              ↓
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollFadePages;