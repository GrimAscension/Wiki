
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delayIndex?: number;
  glowAccent?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className,
  delayIndex = 0,
  glowAccent = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay based on index to create staggered animations
          setTimeout(() => {
            setIsVisible(true);
          }, delayIndex * 100);
          
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delayIndex]);
  
  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card rounded-lg overflow-hidden transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        glowAccent && isVisible ? "shadow-[0_0_15px_rgba(255,255,255,0.1)]" : "",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
