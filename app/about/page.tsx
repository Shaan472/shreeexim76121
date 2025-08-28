"use client";

import React from 'react';
import { FaLeaf, FaGlobe, FaAward, FaUsers, FaShieldAlt, FaTruck, FaHandshake, FaChartLine } from 'react-icons/fa';
import { MdVerified, MdStar } from 'react-icons/md';

export default function AboutPage() {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: FaAward },
    { number: '25+', label: 'Countries Served', icon: FaGlobe },
    { number: '1000+', label: 'Happy Clients', icon: FaUsers },
    { number: '50K+', label: 'Tons Exported', icon: FaTruck }
  ];

  const values = [
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards of quality in all our products and services.',
      icon: FaShieldAlt
    },
    {
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and supporting sustainable agriculture.',
      icon: FaLeaf
    },
    {
      title: 'Customer Focus',
      description: 'Building long-term relationships based on trust, reliability, and mutual success.',
      icon: FaHandshake
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our processes and embracing new technologies.',
      icon: FaChartLine
    }
  ];

  const team = [
    {
      name: 'Ahmed Hassan',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      description: '15+ years of experience in international trade and export operations.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Director',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91CPAIY4U7NMUKNRYuaCHRhffrTa6H2jUKg&s',
      description: 'Expert in logistics and supply chain management with global experience.'
    },
    {
      name: 'Maria Rodriguez',
      position: 'Quality Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      description: 'Certified quality professional ensuring our products meet international standards.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Leading the way in premium quality export solutions for vegetables, spices, and fruits worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, VegiExport began with a simple mission: to connect local farmers with global markets 
                while maintaining the highest standards of quality and sustainability.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small family business has grown into a leading export company, serving clients 
                in over 25 countries across the globe. Our commitment to quality, reliability, and customer 
                satisfaction has been the cornerstone of our success.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to expand our network, improve our processes, and support sustainable 
                farming practices while delivering exceptional products to our international clients.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600" 
                alt="Our Story"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and growth over the years.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-4xl text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <FaGlobe className="text-3xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To be the leading export partner for premium quality agricultural products, 
                connecting farmers to global markets while promoting sustainable practices 
                and ensuring customer satisfaction through reliable, efficient, and 
                transparent business operations.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaAward className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To become the most trusted and preferred export partner globally, 
                recognized for our commitment to quality, sustainability, and innovation. 
                We aim to expand our reach to 50+ countries while maintaining our 
                core values and supporting the growth of local farming communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our business decisions and relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-3xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive our success and innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is backed by international certifications and industry standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-3xl text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ISO 22000</h3>
              <p className="text-gray-600 text-sm">Food Safety Management System</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">HACCP</h3>
              <p className="text-gray-600 text-sm">Hazard Analysis Critical Control Point</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-3xl text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global GAP</h3>
              <p className="text-gray-600 text-sm">Good Agricultural Practice</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MdVerified className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Organic Certified</h3>
              <p className="text-gray-600 text-sm">100% Organic Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust us for their export needs. 
            Let's discuss how we can help you expand your business globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact-us" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
            <a 
              href="/vegetables" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition"
            >
              View Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
