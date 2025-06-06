"use client"

import "./services.css";
import TextReveal from "../../components/textReveal/TextReveal";
import { montserrat, prata, sourceSerif } from "../../lib/font";

export default function ScrollPanels() {

  return (
    <div className="section-container">

      <div className="section-wrapper">
        <div className="section-left">
          <TextReveal>
            <div className="section-grid">
              <div className="section-title">
                <h1 className={`${prata.className} text-color text-shadow`} >Web Tasarım & Geliştirme</h1>
              </div>
              <div className="">
                <h3 style={{ fontWeight: '300' }} className={`${sourceSerif.className} text-color text-shadow`}>Estetik, Hız ve Kullanıcı Deneyimi Bir Arada!</h3>
              </div>
              <div className="">
                <p className={`${montserrat.className} text-color text-shadow`}>Markanızı en iyi şekilde yansıtan, modern ve yüksek performanslı web siteleri tasarlıyoruz. Kullanıcı dostu arayüzler, mobil uyumluluk ve en güncel teknolojilerle öne çıkan web çözümleri sunuyoruz. İster kurumsal bir site, ister e-ticaret platformu olsun, hızlı, güvenli ve SEO uyumlu siteler inşa ediyoruz.</p>
              </div>
            </div>
          </TextReveal>
          <div className="section-icon-wrapper">
          </div>
        </div>
      </div>

      <div className="section-wrapper">
        <div className="section-right">
          <div className="section-icon-wrapper">
          </div>
          <TextReveal>
            <div className="section-grid">
              <div className="section-title">
                <h1 className={`${prata.className} text-color text-shadow`}>SEO Hizmetleri</h1>
              </div>
              <div className="">
                <h3 style={{ fontWeight: '300' }} className={`${sourceSerif.className} text-color text-shadow`}>Google’da Üst Sıralara Çıkın, Daha Fazla Görünün!</h3>
              </div>
              <div className="">
                <p className={`${montserrat.className} text-color text-shadow`}>SEO, yalnızca bir web sitesine sahip olmakla yetinmeyen markalar için en kritik stratejilerden biridir. Anahtar kelime optimizasyonu, teknik SEO ve içerik stratejileri ile Google ve diğer arama motorlarında görünürlüğünüzü artırıyoruz. Doğru kitleye ulaşmanız için organik trafik ve dönüşüm odaklı çözümler sunuyoruz.</p>
              </div>
            </div>
          </TextReveal>
        </div>
      </div>

      <div className="section-wrapper">
        <div className="section-left">
          <TextReveal>
            <div className="section-grid">
              <div className="section-title">
                <h1 className={`${prata.className} text-color text-shadow`}>Marka Kimliği & Grafik Tasarım</h1>
              </div>
              <div className="">
                <h3 style={{ fontWeight: '300' }} className={`${sourceSerif.className} text-color text-shadow`}>Stratejik Reklamlarla Müşterilerinize Ulaşın!</h3>
              </div>
              <div className="">
                <p className={`${montserrat.className} text-color text-shadow`}>Markanızı en iyi şekilde yansıtan, modern ve yüksek performanslı web siteleri tasarlıyoruz. Kullanıcı dostu arayüzler, mobil uyumluluk ve en güncel teknolojilerle öne çıkan web çözümleri sunuyoruz. İster kurumsal bir site, ister e-ticaret platformu olsun, hızlı, güvenli ve SEO uyumlu siteler inşa ediyoruz.</p>
              </div>
            </div>
          </TextReveal>
          <div className="section-icon-wrapper">
          </div>
        </div>
      </div>

      <div className="section-wrapper">
        <div className="section-right">
          <div className="section-icon-wrapper">
          </div>
            <TextReveal>
            <div className="section-grid">
              <div className="section-title">
                <h1 className={`${prata.className} text-color text-shadow`}>Sosyal Medya Yönetimi</h1>
              </div>
              <div className="">
                <h3 style={{ fontWeight: '300' }} className={`${sourceSerif.className} text-color text-shadow`}>Markanızı Sosyal Medyada Güçlendirin!</h3>
              </div>
              <div className="">
                <p className={`${montserrat.className} text-color text-shadow`}>Sosyal medya, dijital dünyada en güçlü iletişim kanallarından biri. Instagram, Facebook, LinkedIn ve diğer platformlarda etkili içerik stratejileri oluşturuyor, etkileşimi artıran paylaşımlar yapıyoruz. Topluluk yönetimi, reklam kampanyaları ve kreatif içeriklerle sosyal medyada aktif bir marka kimliği oluşturuyoruz.</p>
              </div>
              </div>
            </TextReveal>
        </div>
      </div>

      <div className="section-wrapper">
        <div className="section-left">
            <TextReveal>
            <div className="section-grid">
              <div className="section-title">
                <h1 className={`${prata.className} text-color text-shadow`}>Marka Kimliği & Grafik Tasarım</h1>
              </div>
              <div className="">
                <h3 style={{ fontWeight: '300' }} className={`${sourceSerif.className} text-color text-shadow`}>Güçlü Bir Kimlik, Unutulmaz Bir Marka!</h3>
              </div>
              <div className="">
                <p className={`${montserrat.className} text-color text-shadow`}>Markanızın ruhunu yansıtan, akılda kalıcı bir görsel kimlik oluşturuyoruz. Logo tasarımı, kurumsal kimlik, afiş ve dijital tasarımlar ile markanızı daha profesyonel ve dikkat çekici hale getiriyoruz. Tasarımın gücüyle markanızı rakiplerinizden ayırın!</p>
              </div>
              </div>
            </TextReveal>
          <div className="section-icon-wrapper">
          </div>
        </div>
      </div>
    </div>
  );
}
