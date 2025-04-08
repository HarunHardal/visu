"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./services.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = [
  { id: "section1", title: "Giriş" },
  { id: "section2", title: "Özellikler" },
  { id: "section3", title: "Kullanım Alanları" },
  { id: "section4", title: "İletişim" },
];

export default function StickyScrollPage() {
  const sidebarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((el, index) => {
      if (!el) return;

      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => activate(index),
        onEnterBack: () => activate(index),
      });

      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    });

    function activate(index: number) {
      sidebarRefs.current.forEach((ref, i) => {
        if (ref) {
          if (i === index) {
            gsap.to(ref, {
              scale: 1.1,
              color: "#000",
              borderLeftColor: "#3b82f6",
              duration: 0.3,
            });
          } else {
            gsap.to(ref, {
              scale: 1,
              color: "#888",
              borderLeftColor: "transparent",
              duration: 0.3,
            });
          }
        }
      });
    }
  }, []);

  const handleClick = (index: number) => {
    const target = sectionRefs.current[index];
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 50 },
        duration: 1,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="services-page-container">
      <div className="services-sidebar">
        <div className="services-menu-list">
          {sections.map((section, i) => (
            <div
              key={section.id}
              ref={(el) => {
                sidebarRefs.current[i] = el;
              }}
              onClick={() => handleClick(i)}
              className="services-menu-item"
            >
              {section.title}
            </div>
          ))}
        </div>
      </div>

      <div className="services-content">
        {sections.map((section, i) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => {
                sectionRefs.current[i] = el;
              }}
            className="services-section"
          >
            <h2 className="services-section-title">{section.title}</h2>
            <p className="services-section-text">
              {section.title} içeriği burada olacak. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}