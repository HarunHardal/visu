'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './stickyslider.css'

gsap.registerPlugin(ScrollTrigger);

const StickyScroll: React.FC = () => {
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (panelsRef.current.length === 0) return;

    panelsRef.current.forEach((panel, index) => {
      const isLast = index === panelsRef.current.length - 1;

      gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top top',
          end: '+=100%',
          scrub: true
        }
      })
        .to(panel, {
          ease: 'none',
          startAt: { filter: 'brightness(100%)' },
          filter: isLast ? 'none' : 'brightness(50%)',
          scale: 0.95,
          borderRadius: 40
        }, 0);
    });
  }, []);

  return (
    <div className="sticky-scroll-container">
      <h3 style={{color:'#f5f5f5', position:'absolute', top:'50px'}} className='text-italiana'>Hizmetlerimiz</h3>
      <div ref={(el) => { if (el) panelsRef.current[0] = el; }} className="sticky-01_panel">
          <div className="sticky-01_image">Image 1</div>
          <div className="sticky-01_text"><p style={{ color: 'white', fontSize: '50px' }}> content 1</p></div>
      </div>
      <div ref={(el) => { if (el) panelsRef.current[1] = el; }} className="sticky-01_panel">
        <div className="sticky-01_image">Image 2</div>
        <div className="sticky-01_text"><p style={{ color: 'white', fontSize: '50px' }}> content 2</p></div>
      </div>
      <div ref={(el) => { if (el) panelsRef.current[2] = el; }} className="sticky-01_panel">
        <div className="sticky-01_image">Image 3</div>
        <div className="sticky-01_text"><p style={{ color: 'white', fontSize: '50px' }}> content 3</p></div>
      </div>
      <div ref={(el) => { if (el) panelsRef.current[3] = el; }} className="sticky-01_panel">
        <div className="sticky-01_image">Image 4</div>
        <div className="sticky-01_text"><p style={{ color: 'white', fontSize: '50px' }}> content 4</p></div>
      </div>
      <div ref={(el) => { if (el) panelsRef.current[4] = el; }} className="sticky-01_panel">
        <div className="sticky-01_image">Image 5</div>
        <div className="sticky-01_text"><p style={{ color: 'white', fontSize: '50px' }}> content 5</p></div>
      </div>
    </div>
  );
};

export default StickyScroll;