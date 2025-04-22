import React from 'react'
import './contact.css'
import ContactForm from '../../components/form/ContactForm'
import { Metadata } from 'next';
import  {prata} from '../../lib/font'

export const metadata: Metadata = {
  title: "İletişim | Visugenius",
  description: "Visugenius ile şimdi iletişime geçin. Dijital çözümler, web tasarım ve sosyal medya hizmetleri hakkında bilgi almak için bize ulaşın.",
};

const Contact = () => {
  return (
    <div className='contact-page-container'>
      <div className='contact-page-text'>
        <h2 className={ `${prata.className} text-color`}>Markanı bir üst seviyeye taşıyalım. Biz buradayız, ya sen?</h2>
      </div>
      <div className='contact-grid'>
        <div></div>
        <div className='contact-form-wrapper'>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Contact