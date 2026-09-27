'use client';

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language?.startsWith('en');

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
      aria-label={isEnglish ? 'Cambiar a español' : 'Switch to English'}
      title={isEnglish ? 'Cambiar a español' : 'Switch to English'}
    >
      {isEnglish ? 'ES' : 'EN'}
    </button>
  );
}
