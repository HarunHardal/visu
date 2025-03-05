"use client";

import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import "./slidingText.css";

const ScrollingText = () => {
  const lenis = useLenis(); // Lenis hook'unu kullan
  const [previousScroll, setPreviousScroll] = useState(0);

  useEffect(() => {
    if (!lenis) return;

    let scrollTimeout: NodeJS.Timeout | null = null;

    const tween = gsap.to(".sliding-text-inner", {
      xPercent: -100,
      repeat: -1,
      duration: 5,
      ease: "linear",
      paused: true,
    });

    gsap.set(".sliding-text-inner", {
      xPercent: -50,
      width: "200%",
      display: "flex",
    });

    const onScroll = () => {
      const currentScroll = lenis.scroll;
      const isScrollingDown = currentScroll > previousScroll;

      // Scroll yönüne göre animasyon yönü değiştir
      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
        duration: 0.7, // Yumuşak geçiş
        ease: "power2.out",
      });

      tween.play();

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        gsap.to(tween, {
          timeScale: 0, // Hızı sıfıra indirerek smooth duruş sağla
          duration: 1.2, // Yavaş duruş süresi
          ease: "power2.out",
        });
      }, 200); // 200ms içinde yeni scroll gelmezse dur

      setPreviousScroll(currentScroll);
    };

    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lenis, previousScroll]);

  return (
    <section className="sliding-text">
      <div className="sliding-text-inner">
        {Array(12).fill("HİZMETLERİMİZ").map((text, index) => (
          <div className="sliding-text-part" key={index}>
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollingText;
