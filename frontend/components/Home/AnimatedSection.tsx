import React, { useRef, useEffect, useState, ReactNode } from 'react';

type AnimationVariant = 
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out';

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  threshold?: number;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = '',
  id
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, no need to observe anymore
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';

    switch (variant) {
      case 'fade-up':
        return 'animate-fade-up';
      case 'fade-down':
        return 'animate-fade-down';
      case 'fade-left':
        return 'animate-fade-left';
      case 'fade-right':
        return 'animate-fade-right';
      case 'zoom-in':
        return 'animate-zoom-in';
      case 'zoom-out':
        return 'animate-zoom-out';
      default:
        return 'animate-fade-up';
    }
  };

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`transition-all duration-700 ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;