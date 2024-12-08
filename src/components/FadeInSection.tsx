import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-all duration-1000',
        'opacity-0 translate-y-10',
        isVisible && 'opacity-100 translate-y-0'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}