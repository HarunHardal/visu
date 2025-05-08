"use client"

import React, { useState } from 'react';
import './contactform.css'
import { montserrat, prata } from '../../lib/font';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: '',
  })

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Gönderiliyor');

    const url = typeof window !== 'undefined'
      ? `${window.location.origin}/api/contact`
      : '/api/contact'; // fallback, SSR için

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Mesaj Başarıyla Gönderildi.');
        setFormData({ name: '', phone: '', email: '', city: '', message: '' });
      } else {
        setStatus('Hata oluştu, lütfen tekrar deneyiniz');
      }
    } catch (error) {
      console.error('Fetch hatası:', error);
      setStatus('Hata oluştu, lütfen tekrar deneyiniz');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h3 className={`${prata.className}  text-color`}> Bizimle İletişime Geçin</h3>
      <div className='form-wrapper'>

        <div className='form-row'>
          <div className='form-col'>
            <input type='text' name='name' placeholder='Adınız Soyadınız(Ya da İşletme)' className={`${montserrat.className} form-input`} value={formData.name} onChange={handleChange} required />
            <input type='text' name='phone' placeholder='Telefon Numarası' className={`${montserrat.className} form-input`} value={formData.phone} onChange={handleChange} required />
          </div>
          <div className='form-col'>
            <input type='email' name='email' placeholder='E-posta' className={`${montserrat.className} form-input`} value={formData.email} onChange={handleChange} required />
            <input type='text' name='city' placeholder='Şehir' className={`${montserrat.className} form-input`} value={formData.city} onChange={handleChange} required />
          </div>
        </div>
        <div className='form-input-message-wrapper'>
          <textarea name="message" placeholder='Mesajınız' className='form-input-message' value={formData.message} onChange={handleChange} required />
        </div>
        <div>
          <button type='submit' className='submit-button'>Gönder</button>
        </div>

      </div>
      {status && <p className={`${montserrat.className} text-color`}>{status}</p>}
    </form>
  )

}