'use client';

import { useRef, useEffect } from 'react';
import 'splitting/dist/splitting.css';

const TextEffectComponent = ({ children }: { children: React.ReactNode }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadEffects = async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const Splitting = (await import('splitting')).default;

      gsap.registerPlugin(ScrollTrigger);

      if (textRef.current) {
        const results = Splitting({
          target: textRef.current,
          by: 'chars',
        });

        const chars = results[0]?.chars || [];

        gsap.fromTo(
          chars,
          {
            opacity: 0,
            filter: 'blur(10px)',
            y: 20,
          },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top bottom-=10%',
              end: 'bottom center+=10%',
              scrub: 0.3,
            },
          }
        );
      }
    };

    loadEffects();
  }, []);

  return (
    <div
      ref={textRef}
      style={{
        hyphens: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      {children}
    </div>
  );
};

export default TextEffectComponent;
