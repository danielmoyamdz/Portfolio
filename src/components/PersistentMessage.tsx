'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function PersistentMessage() {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        delay: 1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="glass-effect px-6 py-3 rounded-full text-sm md:text-base flex items-center gap-2 hover:scale-105 transition-transform duration-300">
        <span className="text-gradient font-medium">
          Portfolio 100% desarrollado por Daniel Moya
        </span>
      </div>
    </motion.div>
  );
} 