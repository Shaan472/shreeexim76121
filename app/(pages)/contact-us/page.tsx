"use client";

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaGlobe, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [previewUrl, setPreviewUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    // Basic validations
    if (!formData.name.trim()) return 'Please enter your full name.';
    if (!formData.email.trim()) return 'Please enter your email address.';
    // Country code like +91, +1, +44 etc.
    if (!/^\+\d{1,3}$/.test(formData.countryCode.trim())) return 'Please enter a valid country code (e.g., +91).';
    // Phone number: digits only, 6-15 length
    if (!/^\d{6,15}$/.test(formData.phone.trim())) return 'Please enter a valid phone number (6-15 digits).';
    if (!formData.subject) return 'Please select a subject.';
    if (!formData.message.trim()) return 'Please enter your message.';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    const err = validate();
    if (err) {
      setErrorMessage(err);
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send your message. Please try again.');
      }

      setIsSubmitting(false);
      setSubmitStatus('success');
      setPreviewUrl(data.previewUrl || '');
      setFormData({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err: any) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  // const contactInfo = [
  //   {
  //     icon: FaPhone,
  //     title: 'Phone',
  //     details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  //     color: 'bg-blue-100 text-blue-600'
  //   },
  //   {
  //     icon: FaEnvelope,
  //     title: 'Email',
  //     details: ['info@vegiexport.com', 'sales@vegiexport.com'],
  //     color: 'bg-green-100 text-green-600'
  //   },
  //   {
  //     icon: FaMapMarkerAlt,
  //     title: 'Address',
  //     details: ['123 Export Street', 'Business District', 'City, State 12345'],
  //     color: 'bg-purple-100 text-purple-600'
  //   },
  //   {
  //     icon: FaClock,
  //     title: 'Business Hours',
  //     details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
  //     color: 'bg-orange-100 text-orange-600'
  //   }
  // ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Get in touch with us for all your export needs. We're here to help you succeed globally.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have questions about our products, 
              need assistance, or want to discuss export opportunities.
            </p>
          </div>
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                ))}
              </div>
            ))}
          </div> */}
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Phone */}
      <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaPhone className="text-2xl" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Phone</h3>
        <p className="mb-1">
          <a href="tel:+15551234567" className="text-gray-600 hover:text-blue-600">
            +1 (555) 123-4567
          </a>
        </p>
        <p className="mb-1">
          <a href="tel:+15559876543" className="text-gray-600 hover:text-blue-600">
            +1 (555) 987-6543
          </a>
        </p>
      </div>

      {/* Email */}
      <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaEnvelope className="text-2xl" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Email</h3>
        <p className="mb-1">
          <a href="mailto:info@vegiexport.com" className="text-gray-600 hover:text-green-600">
            info@vegiexport.com
          </a>
        </p>
        <p className="mb-1">
          <a href="mailto:sales@vegiexport.com" className="text-gray-600 hover:text-green-600">
            sales@vegiexport.com
          </a>
        </p>
      </div>

      {/* Address */}
      <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaMapMarkerAlt className="text-2xl" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Address</h3>
        <p className="mb-1">
          <a
            href="https://www.google.com/maps?q=123+Export+Street+City+State+12345"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600"
          >
            123 Export Street
          </a>
        </p>
        <p className="text-gray-600 mb-1">Business District</p>
        <p className="text-gray-600 mb-1">City, State 12345</p>
      </div>

      {/* WhatsApp */}
      <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaWhatsapp className="text-2xl" />
        </div>
        <h3 className="text-xl font-semibold mb-3">WhatsApp</h3>
        <p className="mb-1">
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-600"
          >
            +1 (555) 123-4567
          </a>
        </p>
      </div>

    </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-1 gap-12">
            {/* <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <div>Thank you! Your message has been sent successfully. We'll get back to you soon.</div>
                  {previewUrl && (
                    <div className="mt-2 text-sm">
                      Dev preview (no SMTP configured): <a className="underline" href={previewUrl} target="_blank" rel="noreferrer">Open email preview</a>
                    </div>
                  )}
                </div>
              )}
              {submitStatus === 'error' && errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Country Code *</label>
                    <input
                      type="text"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      placeholder="e.g., +91"
                      required
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Company Name (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name (optional)"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="vegetables">Vegetables Export</option>
                    <option value="spices">Spices Export</option>
                    <option value="fruits">Fruits Export</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div> */}

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">15+ Years Experience</h4>
                      <p className="text-gray-600">Decades of expertise in international trade</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Global Network</h4>
                      <p className="text-gray-600">Established connections in 25+ countries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Quality Assured</h4>
                      <p className="text-gray-600">ISO and HACCP certified processes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                      <p className="text-gray-600">Round-the-clock customer assistance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="mb-6">For urgent inquiries, reach out to us directly:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-2xl" />
                    <span>WhatsApp: +1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-xl" />
                    <span>Call: +1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-xl" />
                    <span>Email: urgent@vegiexport.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Come visit us at our headquarters to discuss your export requirements in person.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="text-6xl text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-500">123 Export Street, Business District, City, State 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}