import React from 'react'
import './footer.css'
import { FiInstagram } from "react-icons/fi";
import { TfiFacebook } from "react-icons/tfi";
import { SiLinkedin } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-grid'>
        <div className='footer-grid-l'>
          <h2 className='text-color'>
            Dijital dünyada iz bırakmak ister misiniz? Haydi, birlikte büyüyelim!
          </h2>
        </div>
        <div className='footer-grid-m'>
          <div className='footer-grid-m-contact'>
            <h5 className='text-color text-montserrat'> Bize Ulaşın</h5>
            <p className='text-color text-montserrat'>Mail: visugenius@visu.com</p>
          </div>
          <div className='social-wrapper'>
            <h5 className='text-color text-montserrat'>Bizi Takip Edin</h5>
            <div className='social'>
              <a href="https://www.instagram.com/visugenius/" target="_blank" rel="noopener noreferrer">
                 <FiInstagram className='social-icons' />
              </a>
              <TfiFacebook className='social-icons' />
              <SiLinkedin className='social-icons' />
              <SiWhatsapp className='social-icons' />
            </div>
          </div>
        </div>
        <div className='footer-menu-wrapper'>
          <div className='footer-menu'>
            <h5 className='text-color text-montserrat'>Menü</h5>
            <div className='footer-menu-items'>
              <ul>
                <li><a className='text-color text-montserrat' href={'/home'} >Anasayfa</a></li>
                <li><a className='text-color text-montserrat' href={'/hakkımızda'} >Hakkımızda</a></li>
                <li><a className='text-color text-montserrat' href={'/hizmetlerimiz'} >Hizmetlerimiz</a></li>
                <li><a className='text-color text-montserrat' href={'/iletisim'} >İletişim</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>© 2025 Visugenius. Tüm hakları saklıdır.</div>
    </footer>
  )
}


export default Footer

