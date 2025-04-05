import React from 'react'
import './contact.css'
import ContactForm from '../../components/form/ContactForm'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='contact-page-container'>
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