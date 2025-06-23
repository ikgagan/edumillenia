import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

// Sample country data with flags
const countries = [
  { id: 1, name: 'USA', flag: '🇺🇸', info: 'Home to many top-ranked universities with diverse programs and research opportunities.' },
  { id: 2, name: 'UK', flag: '🇬🇧', info: 'Known for prestigious institutions and shorter undergraduate programs (3 years).' },
  { id: 3, name: 'Canada', flag: '🇨🇦', info: 'Offers quality education with more affordable tuition and post-study work opportunities.' },
  { id: 4, name: 'Australia', flag: '🇦🇺', info: 'Features world-class universities with a focus on research and innovation.' },
  { id: 5, name: 'Germany', flag: '🇩🇪', info: 'Many programs taught in English with low or no tuition fees at public universities.' },
  { id: 6, name: 'Ireland', flag: '🇮🇪', info: 'English-speaking country with growing opportunities in technology and research.' },
  { id: 7, name: 'New Zealand', flag: '🇳🇿', info: 'Quality education system with a focus on practical skills and research.' },
  { id: 8, name: 'France', flag: '🇫🇷', info: 'Renowned for its arts, sciences, and business programs with affordable tuition.' },
  { id: 9, name: 'Netherlands', flag: '🇳🇱', info: 'Many English-taught programs with a focus on innovation and practical experience.' },
];

// Services data
const services = [
  {
    id: 1,
    title: 'Personalized Counselling',
    description: 'One-on-one sessions to understand your goals, strengths, and aspirations, ensuring tailored guidance for your study abroad journey.',
    details: [
      'In-depth profile assessment',
      'Goal and interest mapping',
      'Expert advice on academic and career planning',
      'Continuous support throughout your journey',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0 6a9 9 0 110-18 9 9 0 010 18z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'College & Country Shortlisting',
    description: 'Get matched with the best-fit colleges and countries based on your profile, preferences, and career ambitions.',
    details: [
      'Personalized college and country recommendations',
      'Analysis of academic, financial, and lifestyle fit',
      'Guidance on application requirements and deadlines',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h4m0 0V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'SOP, LOR & Resume Support',
    description: 'Expert help in crafting compelling Statements of Purpose, Letters of Recommendation, and professional resumes.',
    details: [
      'SOP brainstorming, drafting, and editing',
      'LOR content guidance and structure',
      'Resume/CV review and optimization',
      'Personalized feedback for every document',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-8-4h8M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Application Filing & Admission Help',
    description: 'Step-by-step assistance with application forms, document uploads, and communication with universities.',
    details: [
      'Application form filling and review',
      'Document checklist and uploads',
      'Tracking application status',
      'Support for admission queries and follow-ups',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Visa Filing & Interview Prep',
    description: 'Comprehensive support for your visa application and interview preparation to maximize approval chances.',
    details: [
      'Visa document preparation and verification',
      'Mock interview sessions',
      'Guidance on financial and legal requirements',
      'Updates on latest visa rules and policies',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Info Sessions & Walk-in Workshops',
    description: 'Interactive sessions and workshops to keep you informed and prepared for every step of your journey.',
    details: [
      'Regular info sessions on trending topics',
      'Walk-in workshops for hands-on guidance',
      'Q&A with experts and alumni',
      'Networking opportunities with peers',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

// Process steps
const processSteps = [
  {
    id: 1,
    title: 'Discover',
    description: 'Explore global education opportunities and get inspired for your study abroad journey.',
  },
  {
    id: 2,
    title: 'Profile & Planning',
    description: 'We assess your academic background, interests, and goals to create a personalized roadmap.',
  },
  {
    id: 3,
    title: 'One-on-One Counselling',
    description: 'Receive expert, individualized guidance to help you make informed decisions at every step.',
  },
  {
    id: 4,
    title: 'Application Support',
    description: 'Get comprehensive help with applications, documents, and deadlines for your chosen programs.',
  },
  {
    id: 5,
    title: 'Visa & Offer Guidance',
    description: 'Navigate the visa process and university offers with confidence, backed by our expert support.',
  },
  {
    id: 6,
    title: 'Pre-Departure & Settling In',
    description: 'Prepare for your move abroad and get support for a smooth transition and successful start.',
  },
];

const Services = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      {/* Services Hero */}
      <section className="bg-primary3/30 dark:bg-primary2/60 py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary2 dark:text-primary1 mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-primary3/90 max-w-3xl mx-auto">
              We offer in-person services because we believe real conversations spark real clarity. You're
              welcome to walk into our office, sit down with an expert, and start mapping out your future
              —on your terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="section bg-white dark:bg-primary2">
        <div className="container-custom">
          <SectionTitle
            title="Comprehensive Services"
            subtitle="Everything you need for a successful study abroad experience"
          />

          <div className="mt-12 space-y-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary3/10 dark:bg-primary2/60 rounded-lg overflow-hidden shadow-md"
              >
                <div 
                  className="p-6 flex items-start justify-between cursor-pointer"
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-start">
                    <div className="text-primary1 mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary2 dark:text-primary1">{service.title}</h3>
                      <p className="text-gray-600 dark:text-primary3/80 mt-1">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-primary1">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-6 w-6 transition-transform ${expandedService === service.id ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <ul className="list-disc pl-12 space-y-2 text-gray-700 dark:text-primary3/90">
                      {service.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Services Section - Creative Version */}
      <section className="section bg-gradient-to-br from-primary3/10 via-white to-primary1/10 dark:from-primary2/60 dark:via-primary2/80 dark:to-primary3/20 py-20">
        <div className="container-custom">
          <div className="flex flex-col items-center mb-10">
            <span className="inline-block bg-yellow-400 text-primary2 text-xs font-bold px-3 py-1 rounded-full mb-3 animate-bounce shadow">Coming Soon</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary2 dark:text-primary1 mb-2 tracking-tight flex items-center gap-2">
              <svg className="inline w-8 h-8 text-primary1 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m4 0h-1v-4h-1" /></svg>
              The AI-Powered Edge
            </h2>
            <p className="text-lg text-primary2 dark:text-primary3/80 max-w-xl text-center mt-2">Unlock the future of study-abroad guidance with our upcoming AI-driven features. Experience the next level of personalized support!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <svg className="w-12 h-12 text-primary1 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m4 0h-1v-4h-1" /></svg>
              <h3 className="text-xl font-semibold mb-2 text-primary2 dark:text-primary1">Personalized College Suggestions</h3>
              <p className="text-gray-600 dark:text-primary3/80">AI matches you with the best-fit colleges based on your unique profile and aspirations.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="text-xl font-semibold mb-2 text-primary2 dark:text-primary1">Scholarship & Visa Success Predictions</h3>
              <p className="text-gray-600 dark:text-primary3/80">Get data-driven predictions for scholarships and visa approvals to plan with confidence.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <svg className="w-12 h-12 text-sky-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4m0 0V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h4" /></svg>
              <h3 className="text-xl font-semibold mb-2 text-primary2 dark:text-primary1">AI Chatbot (24/7)</h3>
              <p className="text-gray-600 dark:text-primary3/80">Instant answers to your questions, anytime, with our intelligent AI-powered chatbot.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1 }} className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10-5v4a1 1 0 001 1h3M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <h3 className="text-xl font-semibold mb-2 text-primary2 dark:text-primary1">Application Dashboard</h3>
              <p className="text-gray-600 dark:text-primary3/80">Track your applications, deadlines, and progress in one smart, easy-to-use dashboard.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="section bg-primary3/20 dark:bg-primary2/40">
        <div className="container-custom">
          <SectionTitle
            title="Study Destinations"
            subtitle="Explore top educational destinations around the world"
            centered
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {countries.map((country) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                className={`p-4 rounded-lg shadow-md cursor-pointer text-center ${
                  selectedCountry?.id === country.id 
                    ? 'bg-primary1/20 border-2 border-primary1' 
                    : 'bg-white dark:bg-primary2/60'
                }`}
                onClick={() => handleCountryClick(country)}
              >
                <div className="text-5xl mb-2">{country.flag}</div>
                <h3 className="font-medium text-primary2 dark:text-primary1">{country.name}</h3>
              </motion.div>
            ))}
          </div>

          {/* Selected Country Info */}
          {selectedCountry && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-8 p-6 bg-white dark:bg-primary2/80 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{selectedCountry.flag}</span>
                <h3 className="text-2xl font-semibold text-primary2 dark:text-primary1">{selectedCountry.name}</h3>
              </div>
              <p className="text-gray-700 dark:text-primary3/90">{selectedCountry.info}</p>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary3/20 dark:bg-primary2/60 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary2 dark:text-primary1 mb-2">Visa Requirements</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-primary3/80">
                    <li>Valid passport</li>
                    <li>Acceptance letter from institution</li>
                    <li>Proof of financial support</li>
                    <li>Health insurance</li>
                    <li>Language proficiency test results</li>
                  </ul>
                </div>
                <div className="bg-primary3/20 dark:bg-primary2/60 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary2 dark:text-primary1 mb-2">Key Benefits</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-primary3/80">
                    <li>Quality education system</li>
                    <li>Post-study work opportunities</li>
                    <li>Cultural exposure</li>
                    <li>International networking</li>
                    <li>Career advancement</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="section bg-white dark:bg-primary2">
        <div className="container-custom">
          <SectionTitle
            title="Our Process"
            subtitle="A structured approach to your overseas education journey"
            centered
          />

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary1/30"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary1 border-4 border-white dark:border-primary2 z-10"></div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-primary3/20 dark:bg-primary2/60 p-6 rounded-lg shadow-md">
                        <div className="flex items-center md:hidden mb-4">
                          <div className="w-8 h-8 rounded-full bg-primary1 flex items-center justify-center text-white font-bold mr-3">
                            {step.id}
                          </div>
                          <h3 className="text-xl font-semibold text-primary2 dark:text-primary1">{step.title}</h3>
                        </div>
                        <h3 className="hidden md:block text-xl font-semibold text-primary2 dark:text-primary1 mb-3">{step.title}</h3>
                        <p className="text-gray-600 dark:text-primary3/80">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services; 