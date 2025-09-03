import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedCardCarouselProps {
  cards: React.ReactNode[];
  autoPlayInterval?: number;
}

const AnimatedCardCarousel: React.FC<AnimatedCardCarouselProps> = ({ 
  cards, 
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
      setIsAnimating(false);
    }, 150);
  };

  const prevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
      setIsAnimating(false);
    }, 150);
  };

  const goToCard = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 150);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, isAnimating]);

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Card Display Area */}
      <div className="relative flex-1 overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-500 ease-in-out",
              index === currentIndex
                ? "opacity-100 scale-100 translate-x-0"
                : index < currentIndex
                ? "opacity-0 scale-95 -translate-x-8"
                : "opacity-0 scale-95 translate-x-8"
            )}
          >
            {card}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6 px-4">
        {/* Previous Button */}
        <button
          onClick={prevCard}
          disabled={isAnimating}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5 text-primary" />
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              disabled={isAnimating}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 hover:scale-125",
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-primary/30 hover:bg-primary/50"
              )}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextCard}
          disabled={isAnimating}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5 text-primary" />
        </button>
      </div>

      {/* Card Title/Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} of {cards.length}
        </span>
      </div>

      {/* Enhanced Animation Styles */}
      <style>{`
        @keyframes smoothFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes smoothFadeOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-20px) scale(0.98);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedCardCarousel;