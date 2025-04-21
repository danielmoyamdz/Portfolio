'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Asegurarse de que el idioma por defecto esté establecido
    if (!i18n.language) {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  const toggleLanguage = async () => {
    try {
      const newLang = i18n.language === 'en' ? 'es' : 'en';
      await i18n.changeLanguage(newLang);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 glass-effect px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
      aria-label={`Switch to ${i18n.language === 'en' ? 'Spanish' : 'English'}`}
      title={`Switch to ${i18n.language === 'en' ? 'Spanish' : 'English'}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={i18n.language}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          {i18n.language === 'en' ? 'ES' : 'EN'}
        </motion.span>
      </AnimatePresence>
      
      {isHovered && (
        <motion.span
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-1 rounded"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
        >
          {i18n.language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
        </motion.span>
      )}
    </motion.button>
  );
} 