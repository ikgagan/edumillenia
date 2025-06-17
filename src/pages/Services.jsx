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
    title: 'University Applications',
    description: 'We handle your complete university application process including:',
    details: [
      'Profile evaluation and university shortlisting',
      'Application form filling and submission',
      'Essay and SOP review and editing',
      'Recommendation letter guidance',
      'Interview preparation',
      'Scholarship application assistance'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Visa Assistance',
    description: 'Our visa experts ensure a smooth application process with:',
    details: [
      'Document preparation and verification',
      'Visa application form completion',
      'Financial documentation guidance',
      'Mock visa interview sessions',
      'Visa fee payment assistance',
      'Follow-up with embassy/consulate'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'SOP & Documentation Help',
    description: 'We assist in creating compelling application documents:',
    details: [
      'Statement of Purpose (SOP) drafting and review',
      'Personal statement guidance',
      'CV/Resume preparation',
      'Academic document authentication',
      'Portfolio development (for arts/design programs)',
      'Document translation services'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Country/College Selection',
    description: 'We help you find the perfect educational fit through:',
    details: [
      'Career counseling and goal assessment',
      'Country selection based on your preferences',
      'University/college shortlisting',
      'Program selection guidance',
      'Cost-benefit analysis of options',
      'Campus culture and lifestyle information'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Financial & Scholarship Guidance',
    description: 'We provide comprehensive financial planning assistance:',
    details: [
      'Scholarship and grant research',
      'Education loan guidance',
      'Financial documentation preparation',
      'Budget planning for studying abroad',
      'Part-time work opportunity information',
      'Cost-saving strategies'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// Process steps
const processSteps = [
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'Free consultation to understand your goals, preferences, and academic background.',
  },
  {
    id: 2,
    title: 'Profile Evaluation',
    description: 'Assessment of your academic credentials, work experience, and extracurricular activities.',
  },
  {
    id: 3,
    title: 'Country & University Selection',
    description: 'Personalized recommendations based on your profile, budget, and career aspirations.',
  },
  {
    id: 4,
    title: 'Application Preparation',
    description: 'Assistance with application forms, SOPs, essays, and other required documents.',
  },
  {
    id: 5,
    title: 'Application Submission',
    description: 'Timely submission of applications to selected universities.',
  },
  {
    id: 6,
    title: 'Offer Acceptance',
    description: 'Guidance on evaluating offers and selecting the best option.',
  },
  {
    id: 7,
    title: 'Visa Processing',
    description: 'Complete assistance with visa application and interview preparation.',
  },
  {
    id: 8,
    title: 'Pre-Departure Guidance',
    description: 'Information on accommodation, travel, insurance, and what to expect abroad.',
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
              Comprehensive guidance and support for every step of your overseas education journey.
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