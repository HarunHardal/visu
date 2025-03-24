"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import "./slidingText.css";

const ScrollingText = () => {
  const lenis = useLenis();
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  let lastScroll = 0;

  useEffect(() => {
    if (!lenis) return;

    // GSAP animasyonu oluştur, başta durdur
    tweenRef.current = gsap.to(".sliding-text-inner", {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "none",
      paused: true,
    });

    gsap.set(".sliding-text-inner", {
      xPercent: -50,
      width: "200%",
      display: "flex",
    });

    // Scroll eventini dinle
    const onScroll = () => {
      const currentScroll = lenis.scroll;
      const scrollDiff = currentScroll - lastScroll;
      const isScrollingDown = scrollDiff > 0;

      // Scroll yönüne göre animasyon hızını değiştir
      if (tweenRef.current) {
        const speed = Math.min(Math.abs(scrollDiff) * 0.1, 3); // Hızı sınırlamak için
        tweenRef.current.timeScale(isScrollingDown ? speed : -speed);
        if (!tweenRef.current.isActive()) tweenRef.current.play();
      }

      lastScroll = currentScroll;
    };

    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return (
    <div className="sliding-text">
      <div className="sliding-text-inner">
        {Array(6).fill("YENİLİK İNOVASYON DÜŞÜNCE SANAT KREATİF").map((text, index) => (
          <div className="sliding-text-part" key={index}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;