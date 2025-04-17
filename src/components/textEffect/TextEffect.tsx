'use client'

import { useRef, useEffect } from 'react';
import { TextSplitter } from './textSplitter';

const TextEffectComponent = ({ children }) => {
    const textRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      // Dinamik olarak GSAP ve ScrollTrigger'ı yükle
      const loadGSAP = async () => {
        const { default: gsap } = await import('gsap'); // GSAP'i dinamik olarak yükle
        const { ScrollTrigger } = await import('gsap/ScrollTrigger'); // ScrollTrigger'ı dinamik olarak yükle
  
        // GSAP ve ScrollTrigger yüklendikten sonra animasyonu başlat 
        gsap.registerPlugin(ScrollTrigger);
  
        if (textRef.current) {
          // TextSplitter'ı başlat
          const splitter = new TextSplitter(textRef.current, {
            splitTypeTypes: 'words' // Metni harflerine ayır
          });
  
          const chars = splitter.getChars();
          gsap.fromTo(chars, {
            opacity: 0,
            filter: "blur(10px)",  // Başlangıçta bulanık
          }, {
            opacity: 1,
            filter: "blur(0px)",   
            stagger: 0.1,          
            ease: "power2.out",    
            scrollTrigger: {
              trigger: textRef.current,
              start: "top bottom-=10%",  
              end: "bottom center+=10%", 
              scrub: 0.3,                
            },
          });  
        }
      };
  
      loadGSAP();
    }, []);
    
  
    return <div style={{hyphens:'none' ,display:'flex', flexDirection:'column', alignItems:'start', justifyContent:'center', gap:'20px'}} ref={textRef}>{children}</div>;
  };
  
  export default TextEffectComponent;
  