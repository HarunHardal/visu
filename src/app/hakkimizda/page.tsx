import React from 'react'
import './aboutus.css'
import TextReveal from '../../components/textReveal/TextReveal'
import { MdOutlineCircle } from "react-icons/md";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Visugenius",
  description: "Web sitesi tasarımı, sosyal medya yönetimi, grafik tasarım ve dijital pazarlama çözümleriyle Visugenius, markanızı dijitalde büyütür.",
};

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div className='about-container'>
      <div className='about-grid'>
        <div className='about-text-con'>
          <TextReveal>
            <h2 className='text-bodoni text-color about-text-elements text-shadow'>Hakkımızda</h2>
            <p className='text-montserrat text-color about-text-elements text-shadow'>
              Biz, dijital dünyada fark yaratmak isteyen markaların yanında olan yaratıcı bir ekibiz. “İyi fikirler, güçlü sonuçlar doğurur.” felsefesiyle yola çıktık ve her projeye tutkuyla yaklaşıyoruz.
            </p>
            <p className='text-montserrat text-color about-text-elements text-shadow'>
              Markaların dijital kimliğini oluşturuyor, onları en doğru şekilde ifade eden tasarımlar yapıyor ve hedef kitleleriyle güçlü bağlar kurmalarını sağlıyoruz. Web tasarım, sosyal medya yönetimi, SEO, içerik üretimi ve daha fazlası… Bizim işimiz sadece çözüm sunmak değil, aynı zamanda sizi dijitalde daha görünür, daha etkileyici ve daha güçlü kılmak.
            </p>
            <p className='text-montserrat text-color about-text-elements text-shadow'>
              Her marka bir hikâye anlatır. Biz de bu hikâyenin en yaratıcı anlatıcısı olmak için buradayız.
            </p>
          </TextReveal>

          <TextReveal>
            <h2 className='text-bodoni text-color about-text-elements text-shadow'>
              Neden Biz?
            </h2>

            <div className='about-list'>
              <div className='about-list-item text-montserrat text-shadow'>
                <MdOutlineCircle className='list-icon'/> Yaratıcı fikirler, ölçülebilir sonuçlarla buluşuyor.
              </div>

              <div className='about-list-item text-montserrat text-shadow'>
                <MdOutlineCircle className='list-icon'/>Sizi değil, sizinle birlikte çalışıyoruz.
              </div>

              <div className='about-list-item text-montserrat text-shadow'>
                <MdOutlineCircle className='list-icon'/> Trendleri takip etmiyoruz, onları birlikte oluşturuyoruz.
              </div>
            </div>
            <p className='text-montserrat text-color about-text-elements text-shadow'>
              Seninle tanışmak ve markanı dijital dünyada bir adım öne taşımak için sabırsızlanıyoruz.
            </p>
          </TextReveal>
        </div>
        <div></div>
      </div>
    </div >
  )
}

export default AboutUs