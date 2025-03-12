'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './stickyslider.css'
import Octahedron from '../spheries/Octahedron';
import Cylinder from '../spheries/Cylinder';
import Torus from '../spheries/Torus';
import Tetrahedron from '../spheries/Tetrahedron';
import Sphere from '../spheries/Sphere';

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

      <div ref={(el) => { if (el) panelsRef.current[0] = el; }} className="sticky-01_panel">
        <div className="sticky-01_image">
          <Octahedron />
        </div>
        <div className="sticky-01_text">
          <h2 className='text-italiana'>Web Tasarım & Geliştirme</h2>
          <h3 className='text-montserrat'>Estetik, Hız ve Kullanıcı Deneyimi Bir Arada!</h3>
          <p className='text-montserrat'>
            Markanızı en iyi şekilde yansıtan, modern ve yüksek performanslı web siteleri tasarlıyoruz. Kullanıcı dostu arayüzler, mobil uyumluluk ve en güncel teknolojilerle öne çıkan web çözümleri sunuyoruz. İster kurumsal bir site, ister e-ticaret platformu olsun, hızlı, güvenli ve SEO uyumlu siteler inşa ediyoruz.
          </p>
        </div>
      </div>
      <div ref={(el) => { if (el) panelsRef.current[1] = el; }} className="sticky-01_panel">
        <div className="sticky-01_image">
          <Cylinder />
        </div>
        <div className="sticky-01_text">
          <h2 className='text-italiana'>SEO Hizmetleri</h2>
          <h3 className='text-montserrat'>Google’da Üst Sıralara Çıkın, Daha Fazla Görünün!</h3>
          <p className='text-montserrat'>
            SEO, yalnızca bir web sitesine sahip olmakla yetinmeyen markalar için en kritik stratejilerden biridir. Anahtar kelime optimizasyonu, teknik SEO ve içerik stratejileri ile Google ve diğer arama motorlarında görünürlüğünüzü artırıyoruz. Doğru kitleye ulaşmanız için organik trafik ve dönüşüm odaklı çözümler sunuyoruz.
          </p>
        </div>
      </div>
      <div ref={(el) => { if (el) panelsRef.current[2] = el; }} className="sticky-01_panel">
        <div className="sticky-01_image">
          <Torus />
        </div>
        <div className="sticky-01_text">
          <h2 className='text-italiana'>Dijital Pazarlama</h2>
          <h3 className='text-montserrat'>Stratejik Reklamlarla Müşterilerinize Ulaşın!</h3>
          <p className='text-montserrat'>
            Dijital dünyada başarılı olmak için doğru strateji şart! Google Ads, sosyal medya reklamları ve içerik pazarlaması ile markanızı hedef kitlenizle buluşturuyoruz. Dönüşüm odaklı reklam kampanyaları ile satışlarınızı artırıyor, marka bilinirliğinizi güçlendiriyoruz.
          </p>
        </div>
      </div>
      <div ref={(el) => { if (el) panelsRef.current[3] = el; }} className="sticky-01_panel">
        <div className="sticky-01_image">
          <Tetrahedron/>
        </div>
        <div className="sticky-01_text">
          <h2 className='text-italiana'>Sosyal Medya Yönetimi</h2>
          <h3 className='text-montserrat'>Markanızı Sosyal Medyada Güçlendirin!</h3>
          <p className='text-montserrat'>
            Sosyal medya, dijital dünyada en güçlü iletişim kanallarından biri. Instagram, Facebook, LinkedIn ve diğer platformlarda etkili içerik stratejileri oluşturuyor, etkileşimi artıran paylaşımlar yapıyoruz. Topluluk yönetimi, reklam kampanyaları ve kreatif içeriklerle sosyal medyada aktif bir marka kimliği oluşturuyoruz.
          </p>
        </div>
      </div>
      <div ref={(el) => { if (el) panelsRef.current[4] = el; }} className="sticky-01_panel">
        <div className="sticky-01_image">
          <Sphere />
        </div>
        <div className="sticky-01_text">
          <h2 className='text-italianal'>Marka Kimliği & Grafik Tasarım
          </h2>
          <h3 className='text-montserrat'>Güçlü Bir Kimlik, Unutulmaz Bir Marka!</h3>
          <p className='text-montserrat'> Markanızın ruhunu yansıtan, akılda kalıcı bir görsel kimlik oluşturuyoruz. Logo tasarımı, kurumsal kimlik, afiş ve dijital tasarımlar ile markanızı daha profesyonel ve dikkat çekici hale getiriyoruz. Tasarımın gücüyle markanızı rakiplerinizden ayırın!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;