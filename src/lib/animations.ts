
import { useEffect, useState, RefObject } from 'react';

// Custom hook to detect when element enters viewport
export function useInView(ref: RefObject<HTMLElement>, options = {}) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(ref.current);
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
}

// Animation utility for staggered animations
export function getStaggeredDelay(index: number, baseDelay = 100) {
  return `${index * baseDelay}ms`;
}

// Custom hook for a typing effect
export function useTypewriter(text: string, speed = 50) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setCompleted(true);
    }
  }, [index, speed, text]);

  return { displayText, completed, reset: () => { setDisplayText(''); setIndex(0); setCompleted(false); } };
}

// Custom hook for sequential animations
export function useSequentialAnimation(totalItems: number, delay = 100) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    for (let i = 0; i < totalItems; i++) {
      const timeout = setTimeout(() => {
        setVisibleItems(prev => [...prev, i]);
      }, i * delay);
      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [totalItems, delay]);

  return visibleItems;
}

// Animation classes for different entrance effects
export const animationClasses = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  scaleIn: 'animate-scale-in',
  blurIn: 'animate-blur-in',
  slideFromLeft: 'animate-slide-from-left',
  slideFromRight: 'animate-slide-from-right',
};
