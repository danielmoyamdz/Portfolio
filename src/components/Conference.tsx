import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Conference = () => {
  const { t } = useTranslation();
  const [imgError, setImgError] = React.useState(false);

  return (
    <section id="conference" className="py-16 px-4 md:px-12 lg:px-32 flex flex-col items-center">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-700 dark:text-blue-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('conference.title')}
      </motion.h2>
      <motion.div 
        className="group w-full max-w-4xl flex flex-col md:flex-row items-center gap-8 bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 md:p-10 border border-gray-200 dark:border-gray-700 relative overflow-hidden transition-transform duration-300 hover:scale-[1.025]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
        <div className="flex-1 flex flex-col gap-4 relative z-10">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{t('conference.event')}</h3>
          <p className="text-gray-700 dark:text-gray-300">{t('conference.description')}</p>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7318596469345665024/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {t('conference.linkedin')}
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center min-h-[200px] relative z-10">
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 flex items-center justify-center w-[220px] h-[300px] md:w-[350px] md:h-[450px]">
            {!imgError ? (
              <Image
                src={require('../../public/images/conference-drupaldd2025.jpg').default ?? '/images/conference-drupaldd2025.jpg'}
                alt={t('conference.imageAlt')}
                width={350}
                height={450}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                onError={() => setImgError(true)}
                priority
              />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400 dark:text-gray-300 mb-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 7.292m0 0a4 4 0 100-7.292m0 0V3m0 8.646V21m0 0H6m6 0h6" /></svg>
                <span className="text-gray-400 dark:text-gray-300 text-center px-4 text-sm">{t('conference.imageAlt')}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Conference; 