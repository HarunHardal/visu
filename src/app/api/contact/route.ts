import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("📩 Gelen Form Verisi:", body); // Debug için ekle
        const { name, email, message } = body;
        console.log("✅ Form verisi doğrulandı.");

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Eksik form verisi" }, { status: 400 });
    }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        console.log("📧 SMTP Bağlantısı Başlatıldı.");
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'harun-hardal@hotmail.com',
            subject: "Yeni İletişim Formu Mesajı",
            text: `Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("📨 E-posta gönderildi:", info);

        return NextResponse.json({ message: 'E-posta başarılya gönderildi!' }, { status: 200 });
    } catch (error) {
        console.error("❌ Hata:", error);
        return NextResponse.json({ error: `${error}` }, { status: 500 })
    }
}