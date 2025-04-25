"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./textreveal.css"; // Stilleri burada tanımlıyoruz

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: React.ReactNode;
}

const TextReveal: React.FC<TextRevealProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 }, // Başlangıç: Opaklık 0, 50px aşağıda
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Ekranın %80'ine gelince çalışır
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="text-fade" ref={containerRef}>
      {children}
    </div>
  );
};

export default TextReveal;