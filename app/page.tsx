"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaLeaf, FaGlobe, FaAward, FaUsers, FaShieldAlt, FaTruck } from 'react-icons/fa';
import { MdVerified, MdStar } from 'react-icons/md';
import Link from 'next/link';

export default function HomePage() {
  const heroSlides = [
    {
      image: 'https://as1.ftcdn.net/v2/jpg/01/63/13/30/1000_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg',
      title: 'Premium Quality Export Products',
      subtitle: 'Fresh vegetables, aromatic spices, and delicious fruits from the finest farms',
      cta: 'Explore Our Products'
    },
    {
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
      title: 'Global Export Solutions',
      subtitle: 'Connecting farmers to international markets with quality assurance',
      cta: 'Learn More'
    },
    {
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200',
      title: 'Sustainable Agriculture',
      subtitle: 'Supporting eco-friendly farming practices for a better future',
      cta: 'Our Commitment'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Fresh Foods Inc.',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
      text: 'The quality of vegetables we receive is consistently excellent. Their export process is smooth and reliable.',
      rating: 5
    },
    {
      name: 'Ahmed Hassan',
      company: 'Spice Traders Ltd.',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      text: 'Best spices supplier we have worked with. The aroma and quality are unmatched in the market.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Fruit Paradise',
      country: 'Spain',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      text: 'Their fruits are always fresh and arrive in perfect condition. Highly recommended for importers.',
      rating: 5
    }
  ];

  const certifications = [
    {
      name: 'ISO 22000',
      description: 'Food Safety Management System',
      icon: FaShieldAlt
    },
    {
      name: 'HACCP',
      description: 'Hazard Analysis Critical Control Point',
      icon: FaAward
    },
    {
      name: 'Global GAP',
      description: 'Good Agricultural Practice',
      icon: FaLeaf
    },
    {
      name: 'Organic Certified',
      description: '100% Organic Products',
      icon: MdVerified
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="h-full"
        >
          {heroSlides?.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-[#00000033] bg-opacity-50"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center text-white max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                      {slide.subtitle}
                    </p>
                    <Link href="/vegetables" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 inline-block">
                      {slide.cta}
                </Link>
              </div>
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading export company specializing in premium quality vegetables, spices, and fruits. 
              With over 15 years of experience, we connect local farmers with global markets.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">We maintain the highest standards of quality in all our products.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Exporting to over 25 countries worldwide with reliable logistics.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Farmer Support</h3>
              <p className="text-gray-600">Supporting local farmers with fair prices and sustainable practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive export services ensure your products reach global markets efficiently and safely.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FaTruck className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Logistics</h3>
              <p className="text-gray-600">Efficient transportation and cold chain management.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <FaAward className="text-2xl text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Control</h3>
              <p className="text-gray-600">Rigorous testing and certification processes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FaGlobe className="text-2xl text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Market Access</h3>
              <p className="text-gray-600">Access to international markets and buyers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FaShieldAlt className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Documentation</h3>
              <p className="text-gray-600">Complete export documentation and compliance.</p>
          </div>
          </div>
        </div>
      </section>

      {/* What We Export Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Export</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium quality products sourced directly from certified farms and suppliers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400" 
                alt="Vegetables"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Vegetables</h3>
                <p className="text-gray-600 mb-4">Fresh, organic vegetables including tomatoes, peppers, carrots, and more.</p>
                <Link href="/vegetables" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                  View Products
                </Link>
              </div>
          </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Spices"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Spices</h3>
                <p className="text-gray-600 mb-4">Aromatic spices like black pepper, cinnamon, turmeric, and cardamom.</p>
                <Link href="/spices" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                  View Products
                </Link>
              </div>
          </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400" 
                alt="Fruits"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Fruits</h3>
                <p className="text-gray-600 mb-4">Fresh fruits including apples, bananas, oranges, and grapes.</p>
                <Link href="/fruits" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                  View Products
                </Link>
              </div>
          </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out in the export industry with our commitment to quality, reliability, and customer satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-4xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">15+ Years Experience</h3>
              <p className="text-gray-600">Decades of expertise in international trade and export operations.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Certified</h3>
              <p className="text-gray-600">ISO, HACCP, and Global GAP certified for quality assurance.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTruck className="text-4xl text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Efficient logistics ensuring timely delivery worldwide.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-4xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your needs.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGlobe className="text-4xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Network</h3>
              <p className="text-gray-600">Established network in 25+ countries worldwide.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLeaf className="text-4xl text-indigo-600" />
          </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable</h3>
              <p className="text-gray-600">Eco-friendly practices and sustainable sourcing.</p>
          </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Love from Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our valued clients have to say about our services and products.
            </p>
            </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}, {testimonial.country}</p>
            </div>
            </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <MdStar key={i} className="text-yellow-400 text-xl" />
                  ))}
          </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
          </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership & Certification Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Membership & Certification</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is backed by international certifications and industry memberships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="text-3xl text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact-us" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
              View All Certifications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
