'use client';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

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
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 glass-effect px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
      aria-label={`Switch to ${i18n.language === 'en' ? 'Spanish' : 'English'}`}
      title={`Switch to ${i18n.language === 'en' ? 'Spanish' : 'English'}`}
    >
      {i18n.language === 'en' ? 'ES' : 'EN'}
    </button>
  );
} 