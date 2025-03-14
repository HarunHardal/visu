import ScrollingText from "../components/slidingText/SlidingText";
import StickyScroll from "../components/sticky/StickySlider";
import TextEffectComponent from "../components/textEffect/TextEffect";

export default function Home() {
  return (
    <div className="landing-page" >
      <div className="landing-page-container" style={{ zIndex: '9999' }}>
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
            <h3 className="text-color text-montserrat text-italiana">
              Yaratıcı çözümlerle işinizi büyütüyoruz.
            </h3>
            <p className="text-montserrat text-color">
              Visugenius, markaların dijital dünyada öne çıkmasını sağlayan yaratıcı çözümler sunar. Tasarım, teknoloji ve stratejiyi bir araya getirerek, işletmelere güçlü bir dijital kimlik kazandırıyoruz. Hedefimiz, yalnızca estetik değil, aynı zamanda etkili ve dönüşüm odaklı projeler üretmektir.
            </p>
          </TextEffectComponent>
        </div>
      </div>
      <div className="landing-page-container">
        <ScrollingText />
      </div>
      <div className="landing-page-container" style={{ border: '1px solid red' }}>
        <StickyScroll />
      </div>
      <div className="landing-page-container" style={{ border: '1px solid red' }}>
        <div className="landing-page-container-inner-70 text-center">
          <TextEffectComponent>
            <h3 className="text-color text-italiana text-center" style={{ width: '100%', textAlign: 'center' }}>Dijitalleşme Hikayenizi Birlikte Yazalım.</h3>
            <p className="text-color text-montserrat text-center">Dijitalleşme yolculuğunuza birlikte çıkalım. Stratejiden uygulamaya kadar vizyonunuzu gerçeğe dönüştüreceğiz, süreçleri kolaylaştırmak, verimliliği artırmak ve yeni fırsatların kilidini açmak için en son teknolojilerden yararlanacağız. Birlikte dijital çağda benzersiz bir inovasyon, büyüme ve başarı hikayesi yazacağız
            </p>
            <h4 className="text-color text-italiana text-center" style={{ width: '100%', textAlign: 'center' }}>Kolaylaştırın, Geliştirin, Başarılı Olun</h4>
          </TextEffectComponent>
        </div>
      </div>
      <div className="">
        <div className="landing-page-container-inner-80 text-center">
        </div>
      </div>
    </div>
  );
}
