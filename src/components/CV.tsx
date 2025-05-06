import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { FaDownload, FaGlobe, FaLanguage } from 'react-icons/fa';

const CV: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [error, setError] = useState<string | null>(null);

  const cvFiles = {
    en: '/Portfolio/cv/cv_en.pdf',
    es: '/Portfolio/cv/cv_es.pdf',
  };

  const currentLanguage = i18n.language;
  const currentCV = cvFiles[currentLanguage as keyof typeof cvFiles] || cvFiles.en;

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = currentCV;
    link.download = `CV_${currentLanguage.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Detectar si es móvil
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-transparent relative z-10"
      style={{ minHeight: '60vh' }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-heading-light dark:text-heading-dark tracking-tight">
          {t('cv.title', 'Curriculum Vitae')}
        </h2>
        <motion.div
          className="group max-w-3xl mx-auto bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-8 rounded-xl relative overflow-hidden transition-transform duration-300 hover:scale-[1.025]"
          whileHover={{ scale: 1.025 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex space-x-2">
                <button
                  onClick={() => i18n.changeLanguage('en')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all border-2 focus:outline-none focus:ring-2 focus:ring-blue-400/60 ${
                    currentLanguage === 'en'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                      : 'bg-white/20 text-blue-200 border-blue-400 hover:bg-blue-500/20'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => i18n.changeLanguage('es')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all border-2 focus:outline-none focus:ring-2 focus:ring-blue-400/60 ${
                    currentLanguage === 'es'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                      : 'bg-white/20 text-blue-200 border-blue-400 hover:bg-blue-500/20'
                  }`}
                >
                  Español
                </button>
              </div>
              <button
                onClick={downloadCV}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
              >
                <FaDownload /> {t('cv.download', 'Download PDF')}
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border-2 border-blue-400/40 bg-white/30 dark:bg-gray-800/40 shadow-xl flex flex-col items-center min-h-[420px]">
              {error ? (
                <div className="text-red-500 text-center py-10">{error}</div>
              ) : (
                isMobile ? (
                  <a
                    href={currentCV}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
                  >
                    {t('cv.open', 'Open PDF')}
                  </a>
                ) : (
                  <iframe
                    src={currentCV}
                    title="CV Preview"
                    className="w-full min-h-[500px] rounded-xl border-none bg-white dark:bg-gray-900"
                    onError={() => setError(t('cv.error', 'Could not load the PDF. Please try again later.'))}
                  />
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CV; 