import ScrollingText from "../components/slidingText/SlidingText";
import StickyScroll from "../components/sticky/StickySlider";
import TextEffectComponent from "../components/textEffect/TextEffect";

export default function Home() {
  return (
    <div className="landing-page" >

      <div className="section1-container">
        <div className="section1-con-top">

          <div className="section1-container-l">
            <p className="text-color">We bring your</p>
            <p className="text-color">vision together</p>
            <p className="text-color">with creativity.</p>
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
              <h2 className="text-color text-italiana" style={{width:'100%'}}>
                Neden Visugenius?
              </h2>
              <h3 className="no-hyphen text-color text-montserrat text-italiana" style={{width:'100%'}}>
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
      <div className="section3-container">

        <ScrollingText/>
      </div>
      <div className="section4-container">

        <StickyScroll/>
      </div>
      
    </div>
  );
}
