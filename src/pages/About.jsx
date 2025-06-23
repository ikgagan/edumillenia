import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { Link } from 'react-router-dom';

// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    role: 'Founder & CEO',
    bio: 'With over 15 years of experience in international education consulting, Dr. Kumar has helped thousands of students achieve their academic dreams abroad.',
    email: 'rajesh@edumillenia.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Director of Operations',
    bio: 'Priya brings 10+ years of experience in operations management and has streamlined our processes to ensure seamless service delivery.',
    email: 'priya@edumillenia.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Head of Counseling',
    bio: 'A certified education counselor with expertise in university admissions across USA, UK, Canada, and Australia.',
    email: 'amit@edumillenia.com',
    linkedin: 'https://linkedin.com',
  },
];

// Achievement stats
const achievements = [
  { id: 1, number: '5,000+', label: 'Students Placed' },
  { id: 2, number: '100+', label: 'University Partnerships' },
  { id: 3, number: '10+', label: 'Years of Experience' },
  { id: 4, number: '98%', label: 'Visa Success Rate' },
];

// Values
const values = [
  {
    id: 1,
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our dealings, providing honest and transparent guidance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Excellence',
    description: 'We strive for excellence in all our services, continuously improving to deliver the best results for our students.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Student-Centered',
    description: 'Our approach focuses on the unique needs and aspirations of each student, providing personalized guidance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Innovation',
    description: 'We embrace innovative approaches and technologies to enhance our services and stay ahead in the industry.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <>
      {/* About Hero */}
      <section className="bg-primary3/30 dark:bg-primary2/60 py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary2 dark:text-primary1 mb-6">About Us</h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-primary3/90 max-w-3xl mx-auto">
              Learn about our journey, mission, and the team behind Edumillenia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section bg-white dark:bg-primary2">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-primary2 dark:text-primary1 mb-6">Company Overview</h2>
              <p className="text-gray-700 dark:text-primary3/90 mb-4">
                We started Haridhi Education Consultancy with one simple belief: students deserve better guidance.<br/>
                With Edumillenia, we've built a space where students and parents feel heard, supported, and empowered—where every piece of advice is honest, every plan is tailored, and every effort is made with your future in mind.<br/>
                Whether you're just beginning to explore your options or preparing to take a big leap—we're right beside you.
              </p>
              <p className="text-gray-700 dark:text-primary3/90">
                Since our founding in 2013, we have assisted over 5,000 students in securing admissions to prestigious universities worldwide. Our comprehensive approach covers every aspect of the study abroad journey, from university selection to post-arrival support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary3/20 dark:bg-primary2/60 p-8 rounded-lg shadow-md"
            >
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary2 dark:text-primary1 mb-3">Vision</h3>
                <p className="text-gray-700 dark:text-primary3/90 italic">
                  To be the most trusted name in global education consulting by making complex decisions<br />
                  easier, clearer, and more personal.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary2 dark:text-primary1 mb-3">Mission</h3>
                <ul className="text-gray-700 dark:text-primary3/90 italic list-disc pl-6 space-y-2">
                  <li>To remove stress and guesswork from the study-abroad journey.</li>
                  <li>To give students access to genuine, tech-smart, and transparent guidance.</li>
                  <li>To use AI thoughtfully—to match students with the right programs based on who they really are.</li>
                  <li>To walk with every student from confusion to clarity, and from ambition to opportunity.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Edumillenia Section */}
      <section className="section bg-gradient-to-br from-primary3/10 via-white to-primary1/10 dark:from-primary2/60 dark:via-primary2/80 dark:to-primary3/20 py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary2 dark:text-primary1 mb-8 text-center flex items-center justify-center gap-2">
            <svg className="w-8 h-8 text-primary1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m4 0h-1v-4h-1" /></svg>
            Why Choose Edumillenia?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-sky-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4m0 0V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h4" /></svg>
              <span className="font-semibold text-primary2 dark:text-primary1">AI Meets Understanding</span>
            </div>
            <div className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-green-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10-5v4a1 1 0 001 1h3M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="font-semibold text-primary2 dark:text-primary1">Global Reach, Local Roots</span>
            </div>
            <div className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-yellow-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="font-semibold text-primary2 dark:text-primary1">End-to-End Support</span>
            </div>
            <div className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-primary1 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8m-8-4h8M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
              <span className="font-semibold text-primary2 dark:text-primary1">Built for Today's Students</span>
            </div>
            <div className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-pink-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="font-semibold text-primary2 dark:text-primary1">Mentors Who've Been There</span>
            </div>
            <div className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-gray-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span className="font-semibold text-primary2 dark:text-primary1">Transparent & Honest</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect Section */}
      <section className="section bg-primary1/10 dark:bg-primary2/60 py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary2 dark:text-primary1 mb-8 text-center flex items-center justify-center gap-2">
            <svg className="w-8 h-8 text-primary1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            What You Can Expect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-primary1 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="font-semibold text-primary2 dark:text-primary1">Students Come First</span>
            </div>
            <div className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-green-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span className="font-semibold text-primary2 dark:text-primary1">Clarity Over Confusion</span>
            </div>
            <div className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-sky-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4m0 0V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h4" /></svg>
              <span className="font-semibold text-primary2 dark:text-primary1">Tech + Heart</span>
            </div>
            <div className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-yellow-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="font-semibold text-primary2 dark:text-primary1">Support at Every Step</span>
            </div>
            <div className="bg-white dark:bg-primary2/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-pink-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="font-semibold text-primary2 dark:text-primary1">Built With Purpose</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-primary3/10 dark:bg-primary2/40">
        <div className="container-custom">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide our work and define our culture"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-primary2/80 p-6 rounded-lg shadow-md text-center"
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary1/20 text-primary1 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary2 dark:text-primary1 mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-primary3/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're the Best */}
      <section className="section bg-white dark:bg-primary2">
        <div className="container-custom">
          <SectionTitle
            title="Why We're the Best"
            subtitle="Our achievements speak for themselves"
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary3/20 dark:bg-primary2/60 p-6 rounded-lg shadow-md text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-primary1 mb-2">{achievement.number}</h3>
                  <p className="text-gray-700 dark:text-primary3/90">{achievement.label}</p>
                </motion.div>
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
            Ready to Start Your Global Education Journey?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-primary3/90 mb-8 max-w-3xl mx-auto"
          >
            Our team of experts is ready to guide you through every step of the process.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About; 