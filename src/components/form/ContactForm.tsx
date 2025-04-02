"use client"

import React, { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Gönderiliyor');

        const response = await fetch("api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if(response.ok){
            setStatus('Mesaj Başarıyla Gönderildi.');
            setFormData({name:'', email:'', message:''});
        }else{
            setStatus('Hata oluştu, lütfen tekrar deneyiniz');
        }
    };

    return(
        <form onSubmit={handleSubmit} className='form'>
            <input type='text' name='name' placeholder='Adınız' value={formData.name} onChange={handleChange} required/>
            <input type='email' name='email' placeholder='E-posta' value={formData.email} onChange={handleChange} required/>
            <textarea name="message" placeholder='Mesajınız' value={formData.message} onChange={handleChange} required/>
            <button type='submit'>Gönder</button>
            {status&&<p>{status}</p>}
        </form>
    )

}