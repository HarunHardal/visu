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

  return (
    <div className="section-container">
      {sectionsData.map((e) => (
        <div className="section-grid">
          <div className="section-title">
            <h1 className="text-color text-italiana text-shadow">{e.title}</h1>
          </div>
          <div className="">
            <h3 className="text-color text-bodoni text-shadow">{e.subTitle}</h3>
          </div>
          <div className="">
            <p className="text-color text-montserrat text-shadow">{e.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
