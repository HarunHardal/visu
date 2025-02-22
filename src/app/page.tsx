import StickyScroll from "../components/sticky/StickySlider";
import TextEffectComponent from "../components/textEffect/TextEffect";

export default function Home() {
  return (
    <div className="landing-page">
      <div className="landing-page-container" style={{ zIndex: '1' }}>
        <div className="landing-page-container-row">

          <div className="landing-page-container-column">
            <div className="landing-page-container-column-container">
              <p className="text-color">We bring your</p>
              <p className="text-color">vision together</p>
              <p className="text-color">with creativity.</p>
            </div>
            <div>

            </div>
          </div>

          <div className="landing-page-container-brand-name-container">
            <div className="landing-page-brand-name text-color">
              Visugenius
            </div>
          </div>

        </div>
      </div>
      <div className="landing-page-container">
        <div className="landing-page-container-inner">
          <TextEffectComponent>
            <h2 className="text-color text-italiana">
              Neden Visugenius?
            </h2>
            <h3 className="text-color text-italiana">
              Yaratıcı çözümlerle işinizi büyütüyoruz.
            </h3>
            <p className="text-color">
              Visugenius, markaların dijital dünyada öne çıkmasını sağlayan yaratıcı çözümler sunar. Tasarım, teknoloji ve stratejiyi bir araya getirerek, işletmelere güçlü bir dijital kimlik kazandırıyoruz. Hedefimiz, yalnızca estetik değil, aynı zamanda etkili ve dönüşüm odaklı projeler üretmektir.
            </p>
          </TextEffectComponent>
        </div>
      </div>
      <div className="landing-page-container">
        
        <StickyScroll />
      </div>
    </div>
  );
}
