"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import "./sticky.css"; 


const LayzOctahedron = dynamic(() => import("../shapes/Octahedron.jsx"), { ssr: false });
const LazyTetrahedron = dynamic(() => import("../shapes/Tetrahedron.jsx"), { ssr: false });
const LayzCylinder = dynamic(() => import("../shapes/Cylinder.jsx"), { ssr: false });
const LayzSphere = dynamic(() => import("../shapes/Sphere.jsx"), { ssr: false });
const LayzTorus = dynamic(() => import("../shapes/Torus.jsx"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const StickyScroll2 = () => {
  const panelsRef = useRef([]);

  useEffect(() => {
    if (panelsRef.current.length === 0) return;

    panelsRef.current.forEach((panel, index) => {
      const isLast = index === panelsRef.current.length - 1;

      gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top center",
          end: "bottom center",
          scrub: 0.5, // Daha yumuşak animasyon
          markers: false, // Debugging için true yapabilirsiniz
        },
      }).to(panel, {
        ease: "power1.out",
        scale: 1,
        opacity: isLast ? 1 : 0.5, // Brightness yerine opacity ile daha verimli
        filter: "none", // Filter kaldırıldı, performans için daha hızlı
      });
    });
  }, []);

  return (
    <div className="sticky-wrapper">
      <section className="section-container" ref={(el) => { if (el) panelsRef.current[0] = el; }}>
        <div className="sticky-grid">
          <div className="sticky-3d">
            <LayzOctahedron />
          </div>
          <div className="sticky-text-wrapper">
            <h2 className="text-italiana">Web Tasarım & Geliştirme</h2>
            <h3 className="text-montserrat">Estetik, Hız ve Kullanıcı Deneyimi Bir Arada!</h3>
            <p className="text-montserrat">
              Markanızı en iyi şekilde yansıtan, modern ve yüksek performanslı web siteleri tasarlıyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container" ref={(el) => { if (el) panelsRef.current[1] = el; }}>
        <div className="sticky-grid">
          <div className="sticky-3d">
            <LayzCylinder />
          </div>
          <div className="sticky-text-wrapper">
            <h2 className="text-italiana">SEO Hizmetleri</h2>
            <h3 className="text-montserrat">Google’da Üst Sıralara Çıkın, Daha Fazla Görünün!</h3>
            <p className="text-montserrat">
              SEO, yalnızca bir web sitesine sahip olmakla yetinmeyen markalar için en kritik stratejilerden biridir.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container" ref={(el) => { if (el) panelsRef.current[2] = el; }}>
        <div className="sticky-grid">
          <div className="sticky-3d">
            <LayzTorus />
          </div>
          <div className="sticky-text-wrapper">
            <h2 className="text-italiana">Dijital Pazarlama</h2>
            <h3 className="text-montserrat">Stratejik Reklamlarla Müşterilerinize Ulaşın!</h3>
            <p className="text-montserrat">
              Dijital dünyada başarılı olmak için doğru strateji şart! Google Ads, sosyal medya reklamları ve içerik pazarlaması ile markanızı hedef kitlenizle buluşturuyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container" ref={(el) => { if (el) panelsRef.current[3] = el; }}>
        <div className="sticky-grid">
          <div className="sticky-3d">
            <LazyTetrahedron />
          </div>
          <div className="sticky-text-wrapper">
            <h2 className="text-italiana">Sosyal Medya Yönetimi</h2>
            <h3 className="text-montserrat">Markanızı Sosyal Medyada Güçlendirin!</h3>
            <p className="text-montserrat">
              Sosyal medya, dijital dünyada en güçlü iletişim kanallarından biridir. Instagram, Facebook, LinkedIn ve diğer platformlarda etkili içerik stratejileri oluşturuyor, etkileşimi artıran paylaşımlar yapıyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container" ref={(el) => { if (el) panelsRef.current[4] = el; }}>
        <div className="sticky-grid">
          <div className="sticky-3d">
            <LayzSphere />
          </div>
          <div className="sticky-text-wrapper">
            <h2 className="text-italiana">Marka Kimliği & Grafik Tasarım</h2>
            <h3 className="text-montserrat">Güçlü Bir Kimlik, Unutulmaz Bir Marka!</h3>
            <p className="text-montserrat">
              Markanızın ruhunu yansıtan, akılda kalıcı bir görsel kimlik oluşturuyoruz. Logo tasarımı, kurumsal kimlik, afiş ve dijital tasarımlar ile markanızı daha profesyonel ve dikkat çekici hale getiriyoruz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StickyScroll2;
