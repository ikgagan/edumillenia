import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="bg-primary2 text-primary3 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0 }}>
            <h3 className="text-xl font-bold text-primary1 mb-4">Edumillenia</h3>
            <p className="mb-4 text-sm">Your trusted partner in overseas education. Helping students achieve dreams through expert guidance and global opportunities.</p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-primary3 hover:text-primary1 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-primary3 hover:text-primary1 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="text-lg font-semibold text-primary1 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary1 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary1 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary1 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary1 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="text-lg font-semibold text-primary1 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-primary1 transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary1 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="text-lg font-semibold text-primary1 mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                MG Road, Bangalore, India
              </p>
              <p className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@edumillenia.com
              </p>
              <p className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91-9876543210
              </p>
            </address>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary3/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Edumillenia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 