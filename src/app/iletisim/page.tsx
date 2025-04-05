import React from 'react'
import './contact.css'
import ContactForm from '../../components/form/ContactForm'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='contact-page-container'>
      <div className='contact-page-text'>
        <h2 className='text-color text-bodoni'>Markanı bir üst seviyeye taşıyalım. Biz buradayız, ya sen?</h2>
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