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
      title: 'Premium Quality Export Product',
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
          
        logo: '/images/spice-board-certificate.webp',
        },
    {
     
      logo: '/images/msme-certificate.webp',
   
    },
    {
     
      logo: '/images/halal-certificate.webp',
    },
    {
      
      logo: '/images/gsc-certificate.webp',
    },
    {
      
      logo: '/images/gmp-quality-certificate.webp',
    },
    {
      
      logo: '/images/fda-certificate.webp',
    },
    {
     
      logo: '/images/apeda-certificate.webp',
    },
   
  ];

  return (
    <div className="min-h-screen">
      <style jsx global>{`
        
        /* Certification swiper styles */
        .certification-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
        .certification-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #e5e7eb;
          border: 1px solid #d1d5db;
          opacity: 1;
          margin: 0 4px;
        }
        .certification-swiper .swiper-pagination-bullet-active {
          background: #374151;
          border-color: #374151;
        }
        .swiper-button-prev-cert:after,
        .swiper-button-next-cert:after {
          display: none;
        }
        
        /* Center slide styling */
        .certification-swiper .swiper-slide {
          transition: all 0.3s ease;
        }
        .certification-swiper .swiper-slide-active .certification-slide {
          transform: scale(1.1);
          // box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .certification-swiper .swiper-slide-active .certification-slide .w-20 {
          width: 5rem;
          height: 5rem;
        }
        .certification-swiper .swiper-slide-active .certification-slide h3 {
          font-size: 1.25rem;
          font-weight: 700;
        }
        .certification-swiper .swiper-slide-active .certification-slide p {
          font-size: 0.875rem;
        }
        
        /* Side slides styling */
        .certification-swiper .swiper-slide:not(.swiper-slide-active) .certification-slide {
          opacity: 0.7;
          transform: scale(0.9);
        }
      `}</style>
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
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
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
             Welcome to SHREE EXIM Thank you for your interest in our Company.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
SHREE EXIM able to create its own goodwill and a name for itself. We are primarily exporters of Fruits ,Vegetables and spices The products are of elegance, style and superior quality. We have a well-established global clientele.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
The company understands the importance of Quality and Timely Delivery of merchandise in this competitive and challenging International Business scenario.
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
      <section className="py-20  bg-[url('/images/export.jpg')] bg-cover bg-center what-we-do-sec bg-[#00000024] bg-blend-overlay bg-fixed " >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our comprehensive export services ensure your products reach global markets efficiently and safely.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-2xl">
              {/* <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-green-100/60 blur-2xl"></div> */}
              <div className="relative z-10 grid gap-6 sm:grid-cols-[auto,1fr] items-center ">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 shadow-sm sm:mx-0">
                  <FaTruck className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-gray-900">Export</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    We are exporting best quality products around the world. If you need the best products on time, you are at the right place.
                  </p>
                </div>
              </div>
              <div className="relative z-10 mt-6 flex items-center gap-3">
                <span className="inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-sm text-gray-500">Reliable, on-time, and globally connected</span>
              </div>
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
                src="/images/vegetable.jpg" 
                alt="Vegetables"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Vegetables</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">Vegetables are the edible parts of herbaceous plants, such as leaves, stems, roots, flowers, and bulbs, which are consumed for their nutritional value, including vitamins, minerals, fiber, and antioxidants.</p>
                <Link href="/vegetables" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                  View Products
                </Link>
              </div>
          </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/images/spices.jpg" 
                alt="Spices"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Spices</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">Spices are dried plant parts like roots, seeds, bark, and fruits used to add flavor, aroma, and color to food, and historically, they served medicinal, religious, and preservative purposes</p>
                <Link href="/spices" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                  View Products
                </Link>
              </div>
          </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/images/fruits.jpg" 
                alt="Fruits"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Fruits</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">Fruits are the edible, often sweet and fleshy, parts of a flowering plant that contain seeds and are a crucial source of vitamins, fiber, and minerals for human health</p>
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
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Why You Choose Us</h2>
    </div>

    {/* Grid for cards */}
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
      
      {/* Card 1 */}
      <div className="flex">
        <div className="bg-gradient-to-b from-[#ffffff] to-[#adbeef] p-3 rounded-[20px] border border-[#adbeef] w-full flex flex-col">
          <div className="p-3 bg-[linear-gradient(180deg,#FFFFFF_60%,rgba(168,189,250,0.75)_100%)] rounded-[20px] border border-[#777676] shadow-lg flex flex-col flex-1">
            <div className="p-6 text-center flex flex-col justify-between flex-1">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
               <i className="fa-solid fa-users-rays text-6xl text-green-600 "/>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-auto">We Build Relations</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex">
        <div className="bg-gradient-to-b from-[#ffffff] to-[#adbeef] p-3 rounded-[20px] border border-[#adbeef] w-full flex flex-col">
          <div className="p-3 bg-[linear-gradient(180deg,#FFFFFF_60%,rgba(168,189,250,0.75)_100%)] rounded-[20px] border border-[#777676] shadow-lg flex flex-col flex-1">
            <div className="p-6 text-center flex flex-col justify-between flex-1">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <i className="fa-solid fa-users text-6xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-auto">Experience & Professional</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex">
        <div className="bg-gradient-to-b from-[#ffffff] to-[#adbeef] p-3 rounded-[20px] border border-[#adbeef] w-full flex flex-col">
          <div className="p-3 bg-[linear-gradient(180deg,#FFFFFF_60%,rgba(168,189,250,0.75)_100%)] rounded-[20px] border border-[#777676] shadow-lg flex flex-col flex-1">
            <div className="p-6 text-center flex flex-col justify-between flex-1">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <i className="fa-solid fa-certificate text-6xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-auto">High Quality Products</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex">
        <div className="bg-gradient-to-b from-[#ffffff] to-[#adbeef] p-3 rounded-[20px] border border-[#adbeef] w-full flex flex-col">
          <div className="p-3 bg-[linear-gradient(180deg,#FFFFFF_60%,rgba(168,189,250,0.75)_100%)] rounded-[20px] border border-[#777676] shadow-lg flex flex-col flex-1">
            <div className="p-6 text-center flex flex-col justify-between flex-1">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <i className="fa-solid fa-hourglass-start text-6xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-auto">We Deliver On Time</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="flex">
        <div className="bg-gradient-to-b from-[#ffffff] to-[#adbeef] p-3 rounded-[20px] border border-[#adbeef] w-full flex flex-col">
          <div className="p-3 bg-[linear-gradient(180deg,#FFFFFF_60%,rgba(168,189,250,0.75)_100%)] rounded-[20px] border border-[#777676] shadow-lg flex flex-col flex-1">
            <div className="p-6 text-center flex flex-col justify-between flex-1">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <i className="fa-solid fa-hand-holding-dollar text-6xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-auto">Price Benefits</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="flex">
        <div className="bg-gradient-to-b from-[#ffffff] to-[#adbeef] p-3 rounded-[20px] border border-[#adbeef] w-full flex flex-col">
          <div className="p-3 bg-[linear-gradient(180deg,#FFFFFF_60%,rgba(168,189,250,0.75)_100%)] rounded-[20px] border border-[#777676] shadow-lg flex flex-col flex-1">
            <div className="p-6 text-center flex flex-col justify-between flex-1">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <i className="fa-solid fa-award text-6xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-auto">Complete Client Satisfaction</h3>
            </div>
          </div>
        </div>
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
          
          {/* Certification Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active'
              }}
              navigation={{
                nextEl: '.swiper-button-next-cert',
                prevEl: '.swiper-button-prev-cert',
              }}
              loop={true}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="certification-swiper"
            >
              {certifications.map((cert, index) => (
                                  <SwiperSlide key={index}>
                    <div className="certification-slide p-6 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                      <div className="flex-1">
                        <div className="w-50 h-50 mx-auto mb-4  overflow-hidden ">
                          <img 
                            src={cert.logo} 
                            alt={cert.logo}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>
                       
                        
                      </div>
                    </div>
                  </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-cert absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer transition-colors duration-300 shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-cert absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer transition-colors duration-300 shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          {/* <div className="text-center mt-12">
            <Link href="/contact-us" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
              View All Certifications
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}
