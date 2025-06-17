import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = false, className = '' }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-primary2 dark:text-primary1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="mt-4 text-lg text-gray-600 dark:text-primary3/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className="w-20 h-1 bg-primary1 mt-4"
        initial={{ width: 0 }}
        whileInView={{ width: centered ? '5rem' : '5rem' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ marginLeft: centered ? 'auto' : '0', marginRight: centered ? 'auto' : '0' }}
      />
    </div>
  );
};

export default SectionTitle; 