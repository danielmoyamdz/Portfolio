'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function PersistentMessage() {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      className="fixed bottom-3 right-4 z-40 opacity-60 hover:opacity-90 transition-opacity duration-300 text-xs md:text-sm pointer-events-none select-none"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 0.6, y: 0 }}
      transition={{ 
        duration: 0.8,
        delay: 1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <span className="text-gradient font-medium bg-transparent shadow-none">
        {t('portfolio.developedBy', 'Portfolio 100% desarrollado por Daniel Moya')}
      </span>
    </motion.div>
  );
} 