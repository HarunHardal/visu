"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./services.css";

gsap.registerPlugin(ScrollTrigger);

const sectionsData = [
  {
    title: "Web Tasarım & Geliştirme",
    subTitle: "Estetik, Hız ve Kullanıcı Deneyimi Bir Arada!",
    content: "Markanızı en iyi şekilde yansıtan, modern ve yüksek performanslı web siteleri tasarlıyoruz. Kullanıcı dostu arayüzler, mobil uyumluluk ve en güncel teknolojilerle öne çıkan web çözümleri sunuyoruz. İster kurumsal bir site, ister e-ticaret platformu olsun, hızlı, güvenli ve SEO uyumlu siteler inşa ediyoruz."
  },
  {
    title: "SEO Hizmetleri",
    subTitle: "Google’da Üst Sıralara Çıkın, Daha Fazla Görünün!",
    content: " SEO, yalnızca bir web sitesine sahip olmakla yetinmeyen markalar için en kritik stratejilerden biridir. Anahtar kelime optimizasyonu, teknik SEO ve içerik stratejileri ile Google ve diğer arama motorlarında görünürlüğünüzü artırıyoruz. Doğru kitleye ulaşmanız için organik trafik ve dönüşüm odaklı çözümler sunuyoruz."
  },
  {
    title: "Dijital Pazarlama",
    subTitle: "Stratejik Reklamlarla Müşterilerinize Ulaşın!",
    content: "Dijital dünyada başarılı olmak için doğru strateji şart! Google Ads, sosyal medya reklamları ve içerik pazarlaması ile markanızı hedef kitlenizle buluşturuyoruz. Dönüşüm odaklı reklam kampanyaları ile satışlarınızı artırıyor, marka bilinirliğinizi güçlendiriyoruz."
  },
  {
    title: "Sosyal Medya Yönetimi",
    subTitle: "Markanızı Sosyal Medyada Güçlendirin!",
    content: "Sosyal medya, dijital dünyada en güçlü iletişim kanallarından biri. Instagram, Facebook, LinkedIn ve diğer platformlarda etkili içerik stratejileri oluşturuyor, etkileşimi artıran paylaşımlar yapıyoruz. Topluluk yönetimi, reklam kampanyaları ve kreatif içeriklerle sosyal medyada aktif bir marka kimliği oluşturuyoruz."
  },
  {
    title: "Marka Kimliği & Grafik Tasarım",
    subTitle: "Güçlü Bir Kimlik, Unutulmaz Bir Marka!",
    content: "Markanızın ruhunu yansıtan, akılda kalıcı bir görsel kimlik oluşturuyoruz. Logo tasarımı, kurumsal kimlik, afiş ve dijital tasarımlar ile markanızı daha profesyonel ve dikkat çekici hale getiriyoruz. Tasarımın gücüyle markanızı rakiplerinizden ayırın!"
  },
];

export default function ScrollPanels() {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const currentSection = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sections = sectionsRef.current;
    if (sections.length === 0) return;

    currentSection.current = sections[0];

    gsap.defaults({ overwrite: "auto", duration: 1 });
    gsap.set("body", { height: `${sections.length * 100}%` });

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        start: () => (i - 0.5) * window.innerHeight,
        end: () => (i + 0.5) * window.innerHeight,
        scrub: true,
        markers: true,
        toggleActions: "play reset play reset",
        onToggle: (self) => {
          if (self.isActive) setSection(section);
        },
      });
    });

    function setSection(newSection: HTMLElement) {
      if (newSection !== currentSection.current) {
        const tlOut = gsap.timeline();
        tlOut.to("h2", { y: -30, autoAlpha: 0, duration: 0.3 });
        tlOut.to(currentSection.current, { autoAlpha: 0, duration: 0.5 });

        const tlIn = gsap.timeline();
        tlIn.to(newSection, { autoAlpha: 1, duration: 0.5 });
        tlIn.to("h2", { y: -30, autoAlpha: 1, duration: 0.3 });

        currentSection.current = newSection;
      }
    }
  }, []);

  return (
    <div className="section-container">
      {sectionsData.map((section, index) => (
        <section
          key={index}
          ref={(el) => {
            if (el) sectionsRef.current[index] = el;
          }}
          className={`panel ${index === 0 ? "first visible" : ""}`}
        >
          <div className="services-content-wrapper">
            <span className="services-line" />
            <h1 className="text-italiana text-color">{section.title}</h1>
            <h3 className="text-italiana text-color">{section.subTitle}</h3>
            <p className="text-montserrat text-color">{section.content}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
