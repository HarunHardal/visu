import ScrollingText from "../components/slidingText/SlidingText";
import StickyScroll from "../components/sticky/StickySlider";
import TextEffectComponent from "../components/textEffect/TextEffect";
import StickyScroll2 from '../components/sticky/Sticky'
import Chart from "../components/spheries/Chart";

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
          <h1 className="brandname">Visugenius</h1>
        </div>
      </div>
      <div className="section2-container">
        <div className="section2-wrap">
          <div>
            <TextEffectComponent>
              <h2 className="text-color text-italiana" style={{ width: '100%' }}>
                Neden Visugenius?
              </h2>
              <h3 className="no-hyphen text-color text-montserrat text-italiana" style={{ width: '100%' }}>
                Yaratıcı çözümlerle işinizi büyütüyoruz.
              </h3>
              <p className="no-hyphen  text-montserrat text-color">
                Visugenius, markaların dijital dünyada öne çıkmasını sağlayan yaratıcı çözümler sunar. Tasarım, teknoloji ve stratejiyi bir araya getirerek, işletmelere güçlü bir dijital kimlik kazandırıyoruz. Hedefimiz, yalnızca estetik değil, aynı zamanda etkili ve dönüşüm odaklı projeler üretmektir.
              </p>
            </TextEffectComponent>
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
          <div className="">
            <Chart/>
          </div>
          <div className="">
            <TextEffectComponent>
              <h4 className="no-hyphen text-color text-montserrat text-italiana" style={{ width: '100%' }}>
                İşletmenizi Geleceğe Taşıyan Akıllı Çözümler
              </h4>

              <h2 className="text-color text-italiana" style={{ width: '100%' }}>
                Yeni Nesil Dijital Dönüşüm
              </h2>

              <p className="no-hyphen  text-montserrat text-color">
                Her işletmenin kendine özgü bir dijital dönüşüm yolculuğu vardır. Hazır kalıplar yerine, ihtiyaçlarınıza özel çözümler geliştiriyor ve süreci sizinle birlikte şekillendiriyoruz. İlk adımda işletmenizin gereksinimlerini analiz ederek, en uygun dijital stratejiyi belirliyoruz. Çift yönlü etkileşimle ilerleyen bu süreçte, teknolojiyi işletmenize entegre ederken, sürdürülebilir bir dijital altyapı oluşturuyoruz. Böylece, işletmenizin geleceğe uyum sağlamasını ve rekabet avantajı kazanmasını sağlıyoruz.
              </p>
            </TextEffectComponent>
          </div>
        </div>
      </div>


      <div className="section3-container">
        <ScrollingText />
      </div>


      <StickyScroll2 />

      <div className="section4-container"></div>


    </div>
  );
}
