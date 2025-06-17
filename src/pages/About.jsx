import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

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
                At Edumillenia, we specialize in helping students fulfill their academic dreams overseas. Based in Bangalore, our dedicated team offers personalized counseling, documentation help, and visa guidance.
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
                  "To empower every Indian student to explore global academic opportunities."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary2 dark:text-primary1 mb-3">Mission</h3>
                <p className="text-gray-700 dark:text-primary3/90 italic">
                  "Deliver trusted and transparent guidance through every step of the study abroad journey."
                </p>
              </div>
            </motion.div>
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

      {/* Meet the Team */}
      <section className="section bg-primary3/10 dark:bg-primary2/40">
        <div className="container-custom">
          <SectionTitle
            title="Meet the Team"
            subtitle="The experts behind our success"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-primary2/80 rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-48 bg-primary1/30 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary1/50 flex items-center justify-center text-4xl font-bold text-white">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary2 dark:text-primary1">{member.name}</h3>
                  <p className="text-primary1 mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-primary3/80 mb-4">{member.bio}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 dark:text-primary3/70">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{member.email}</span>
                    </div>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary1 hover:text-primary2 dark:hover:text-primary3 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </a>
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
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
            <a href="/services" className="btn btn-secondary">
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About; 