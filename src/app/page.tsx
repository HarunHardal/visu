import ScrollingText from "../components/slidingText/SlidingText";
import StickyScroll from '../components/sticky/Sticky'
import Kure from "../components/shapes/Chart";
import ContactForm from '../components/form/ContactForm'
import { italiana, montserrat, prata } from "../lib/font";
import { Suspense } from "react";
import  brandName  from '../../public/visu isim.svg'
import Image from "next/image";

export const metadata = {
  title: "Ana Sayfa | Visugenius",
  description: "Visugenius, web tasarım, SEO ve sosyal medya yönetimi alanında yenilikçi dijital çözümler sunar. Markanı dijitalde büyüt!",
};

export default function Home() {
  return (
    <div className="landing-page" >

      <div className="section1-container">
        <div className="section1-con-top">

          <div className="section1-container-l">
            <p className="text-color">Vizyonunuzu</p>
            <p className="text-color">Yaratıcılıkla</p>
            <p className="text-color">Buluşturuyoruz.</p>
          </div>

          <div className="section1-container-r"></div>

        </div>
        <div className="brandname-container">
          <Image
          src={brandName}
          alt="brand name"
          style={{width:"90%%",margin:'auto'}}
          className="brandname"
          />
          {/* <h1 className={`${italiana.className} brandname`}>{brandName}</h1> */}
        </div>
      </div>
      <div className="section2-container">
        <div className="section2-wrap">
          <div style={{gap:'30px'}}>
            <h2 className={`${montserrat.className} text-color`} style={{ width: '100%', fontWeight:'300' }}>
              Neden Visugenius?
            </h2>
            <h3 className={`${italiana.className} text-color`} style={{fontWeight:'100', width: '100%' }}>
              Yaratıcı çözümlerle işinizi büyütüyoruz.
            </h3>
            <p className={`${montserrat.className} text-color text-shadow`} style={{fontWeight:'300'}}>
              Visugenius, markaların dijital dünyada öne çıkmasını sağlayan yaratıcı çözümler sunar. Tasarım, teknoloji ve stratejiyi bir araya getirerek, işletmelere güçlü bir dijital kimlik kazandırıyoruz. Hedefimiz, yalnızca estetik değil, aynı zamanda etkili ve dönüşüm odaklı projeler üretmektir.
            </p>
          </div>
          <div className="planet">
            <div className="ring"></div>
            <div id="planet">
            </div>
            <div className="ring ring-front"></div>
          </div>
        </div>
      </div>
      <div className="section-vision">
        <div className="section-vision-grid">
          <div>
            <Suspense>
              <div className="planet">
                <Kure />
              </div>
            </Suspense>

            <div className="outer-circle">
              <div className="dot outer-dot"></div>
            </div>
            <div className="inner-circle">
              <div className="dot inner-dot"></div>
            </div>
          </div>

          <div style={{gap:'30px'}}>
            <h4 className={`${montserrat.className} text-color`} style={{ width: '100%', fontWeight:'300' }}>
              İşletmenizi Geleceğe Taşıyan Akıllı Çözümler
            </h4>
            <h2 className={`${italiana.className} text-color`} style={{fontWeight:'100', width: '100%' }}>
              Yeni Nesil Dijital Dönüşüm
            </h2>
            <p className={`${prata.className} text-color text-shadow`} style={{fontWeight:'300'}}>
              Her işletmenin kendine özgü bir dijital dönüşüm yolculuğu vardır. Hazır kalıplar yerine, ihtiyaçlarınıza özel çözümler geliştiriyor ve süreci sizinle birlikte şekillendiriyoruz. İlk adımda işletmenizin gereksinimlerini analiz ederek, en uygun dijital stratejiyi belirliyoruz. Çift yönlü etkileşimle ilerleyen bu süreçte, teknolojiyi işletmenize entegre ederken, sürdürülebilir bir dijital altyapı oluşturuyoruz. Böylece, işletmenizin geleceğe uyum sağlamasını ve rekabet avantajı kazanmasını sağlıyoruz.
            </p>
          </div>
        </div>
      </div>
      <div className="section3-container">
        <Suspense>
          <ScrollingText />
        </Suspense>
      </div>

      <StickyScroll />

      <div className="section4-container">
        <div className="section4-container-wrapper">

          <h2 className="text-color text-bodoni text-center text-shadow">Dijital Başarıya Giden Yolda Birlikte Yürüyelim</h2>
          <div className="section4-col">
            <div className="">
              <p className={`${montserrat.className} text-color text-center text-shadow`}> Kapsamlı Dijital Dönüşüm Çözümleri</p>
              <p className={`${montserrat.className} text-color text-center text-shadow`}>Marka Stratejisi ve Konumlandırma</p>
              <p className={`${montserrat.className} text-color text-center text-shadow`}>Son Teknoloji ile Güçlendirilmiş Çözümler</p>
            </div>
            <div className="">
              <p className={`${montserrat.className} text-color text-center text-shadow`}>Veri Odaklı Pazarlama & SEO Optimizasyonu</p>
              <p className={`${montserrat.className} text-color text-center text-shadow`}>Etkili Sosyal Medya Yönetimi</p>
              <p className={`${montserrat.className} text-color text-center text-shadow`}>Yenilikçi ve Dönüşüm Odaklı Web & Mobil Çözümler</p>
            </div>
          </div>
          <h4 style={{ fontWeight: '400' }} className={`${montserrat.className} text-color text-center text-shadow`}>İster yeni bir girişim olun ister köklü bir marka, işinizi büyütmek için doğru stratejiyi birlikte belirleyelim. Visugenius ile markanızı dijital dünyada zirveye taşıyın.</h4>
        </div>
      </div>

      <div className="section5-container">
        <ContactForm />
      </div>
    </div>
  );
}
