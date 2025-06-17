import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import homePageVideo from '../assets/homePage.mp4';

// Sample country data
const countries = [
  { id: 1, name: 'USA', flag: '🇺🇸' },
  { id: 2, name: 'UK', flag: '🇬🇧' },
  { id: 3, name: 'Canada', flag: '🇨🇦' },
  { id: 4, name: 'Australia', flag: '🇦🇺' },
  { id: 5, name: 'Germany', flag: '🇩🇪' },
  { id: 6, name: 'Ireland', flag: '🇮🇪' },
  { id: 7, name: 'New Zealand', flag: '🇳🇿' },
  { id: 8, name: 'France', flag: '🇫🇷' },
  { id: 9, name: 'Netherlands', flag: '🇳🇱' },
];

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    country: 'USA',
    text: 'Edumillenia made my dream of studying at a top US university a reality. Their guidance throughout the application process was invaluable.',
  },
  {
    id: 2,
    name: 'Rahul Patel',
    country: 'Canada',
    text: 'From visa application to university selection, the team at Edumillenia provided expert advice at every step. Highly recommended!',
  },
  {
    id: 3,
    name: 'Aisha Khan',
    country: 'UK',
    text: 'The personalized counseling I received helped me secure a scholarship at a prestigious UK university. Thank you, Edumillenia!',
  },
];

// Services data
const services = [
  {
    id: 1,
    title: 'University Applications',
    description: 'Expert guidance on selecting and applying to universities that match your academic profile and career goals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Visa Assistance',
    description: 'Comprehensive support for student visa applications with high success rates across multiple countries.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'SOP & Documentation Help',
    description: 'Professional assistance in crafting compelling statements of purpose and preparing necessary documentation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Country/College Selection',
    description: 'Personalized recommendations for countries and institutions based on your academic background and career aspirations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Financial & Scholarship Guidance',
    description: 'Expert advice on financial planning, scholarship opportunities, and education loans for studying abroad.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// Why choose us data
const whyChooseUs = [
  {
    id: 1,
    title: 'End-to-End Guidance',
    description: 'Comprehensive support from university selection to post-arrival assistance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Expert Counselors',
    description: 'Experienced advisors with in-depth knowledge of international education systems.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: '98% Visa Success Rate',
    description: 'Proven track record of successful visa applications across various countries.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Personalized Support',
    description: 'Tailored guidance based on individual academic profiles and career goals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextSlide = (currentSlide + 1) % countries.length;
        setCurrentSlide(nextSlide);
        
        // Calculate scroll position
        const slideWidth = carouselRef.current.scrollWidth / countries.length;
        carouselRef.current.scrollTo({
          left: nextSlide * slideWidth,
          behavior: 'smooth'
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src={homePageVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Your trusted partner in overseas education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-primary3 mb-8 max-w-3xl mx-auto"
          >
            Helping students achieve dreams through expert guidance and global opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/services" className="btn btn-primary text-lg">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-primary3/20 dark:bg-primary2/40">
        <div className="container-custom">
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive solutions for your overseas education journey"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-primary1 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary2 dark:text-primary1">{service.title}</h3>
                <p className="text-gray-600 dark:text-primary3/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Carousel */}
      <section className="section bg-white dark:bg-primary2">
        <div className="container-custom">
          <SectionTitle
            title="Study Destinations"
            subtitle="Explore top educational destinations around the world"
            centered
          />

          <div className="mt-12 relative">
            <div 
              ref={carouselRef}
              className="carousel-inner flex overflow-x-auto pb-8 scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {countries.map((country) => (
                <motion.div
                  key={country.id}
                  className="min-w-[250px] scroll-snap-align-start p-4 flex-shrink-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-primary3/30 dark:bg-primary2/60 p-6 rounded-lg shadow-md flex flex-col items-center justify-center h-40 hover:shadow-lg transition-all">
                    <span className="text-5xl mb-4">{country.flag}</span>
                    <h3 className="text-xl font-medium text-primary2 dark:text-primary1">{country.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {countries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    if (carouselRef.current) {
                      const slideWidth = carouselRef.current.scrollWidth / countries.length;
                      carouselRef.current.scrollTo({
                        left: index * slideWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-primary1 w-6' : 'bg-primary1/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-primary3/10 dark:bg-primary2/60">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Us"
            subtitle="What sets Edumillenia apart from the rest"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-white dark:bg-primary2/80 shadow-md hover:shadow-lg transition-all"
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary1/20 text-primary1 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary2 dark:text-primary1">{item.title}</h3>
                <p className="text-gray-600 dark:text-primary3/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white dark:bg-primary2">
        <div className="container-custom">
          <SectionTitle
            title="Student Testimonials"
            subtitle="Hear from our successful students"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary3/20 dark:bg-primary2/60 p-6 rounded-lg shadow-md relative"
              >
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-4xl text-primary1/30">"</div>
                
                <p className="text-gray-700 dark:text-primary3/90 mb-6 italic relative z-10">
                  {testimonial.text}
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary1/30 rounded-full flex items-center justify-center text-primary1 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-primary2 dark:text-primary1">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-primary3/70">Student in {testimonial.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary1/20 dark:bg-primary2/80">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary2 dark:text-primary1 mb-6"
          >
            Ready to Begin Your Global Education Journey?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-primary3/90 mb-8 max-w-3xl mx-auto"
          >
            Contact us today for a free consultation with our education experts.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/contact" className="btn btn-primary text-lg">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home; 