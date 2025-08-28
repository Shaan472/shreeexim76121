import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const TARGET_EMAIL = 'uniqshaan472@gmail.com';
const MAIL_FROM = process.env.MAIL_FROM || process.env.SMTP_USER || 'no-reply@vegiexport.local';

async function createTransport() {
  const host = process.env.SMTP_HOST  ||"smtp.gmail.com";
  const port = process.env.SMTP_PORT || 587;
  const user = process.env.SMTP_USER ||"shaan.techup@gmail.com";
  const pass = process.env.SMTP_PASS ||"Shaan@payval1234"; 

  if (host && port && user && pass) {
    return nodemailer.createTransport({
      host,
      port:587,
      secure: false,
      auth: { user, pass },
    });
  }

  // Dev fallback: Ethereal
  const testAccount = await nodemailer.createTestAccount();
  // return nodemailer.createTransport({
  //   host: 'smtp.ethereal.email',
  //   port: 587,
  //   secure: false,
  //   auth: { user: testAccount.user, pass: testAccount.pass },
  // });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, countryCode, phone, company, subject, message } = body || {};

    if (!name || !email || !countryCode || !phone || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Basic server-side validation
    if (!/^\+\d{1,3}$/.test(countryCode)) {
      return NextResponse.json({ error: 'Invalid country code.' }, { status: 400 });
    }
    if (!/^\d{6,15}$/.test(phone)) {
      return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 });
    }

    const transporter = await createTransport();

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    `;

    const info = await transporter.sendMail({
      from: `Vegie Export Contact <${MAIL_FROM}>`,
      to: TARGET_EMAIL,
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      html,
    });

    const previewUrl = nodemailer.getTestMessageUrl(info);

    return NextResponse.json({ success: true, previewUrl });
  } catch (error) {
    console.error('Contact email error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
