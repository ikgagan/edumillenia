import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { darkMode } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for at least 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`loader ${darkMode ? 'dark' : ''} ${isLoading ? '' : 'loader-hidden'}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {/* Animated book/globe loader */}
        <motion.div
          animate={{ 
            rotateY: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-4"
        >
          <div className="w-24 h-24 relative">
            {/* Globe design */}
            <div className="absolute inset-0 rounded-full border-4 border-primary1 border-opacity-50"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary1 animate-spin" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-l-accent animate-spin" style={{ animationDuration: '2s' }}></div>
            <div className="absolute inset-2 flex items-center justify-center">
              <span className="text-3xl text-primary1">E</span>
            </div>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-primary2 dark:text-primary3 font-medium"
        >
          Edumillenia
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader; 