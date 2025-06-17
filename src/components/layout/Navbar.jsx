import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import useScrollPosition from '../../hooks/useScrollPosition';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollPosition();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'navbar-scrolled bg-white/90 dark:bg-primary2/90 shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary2 dark:text-primary1"
          >
            Edumillenia
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `font-medium transition-colors duration-300 hover:text-primary1 ${
                  isActive ? 'text-primary1' : 'text-primary2 dark:text-primary3'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="ml-4 text-primary2 dark:text-primary3 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-primary2 shadow-lg"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) => 
                    `font-medium p-2 transition-colors duration-300 hover:text-primary1 ${
                      isActive ? 'text-primary1' : 'text-primary2 dark:text-primary3'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 