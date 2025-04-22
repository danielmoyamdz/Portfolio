'use client';

import { FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import AnimatedElement from './AnimatedElement';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <AnimatedElement 
        animation="slideUp" 
        delay={0.2} 
        duration={0.8}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-heading-light dark:text-heading-dark">
          {t('contact.title')}
        </h2>
      </AnimatedElement>

      <div className="max-w-2xl mx-auto">
        <AnimatedElement 
          animation="scale" 
          delay={0.4} 
          duration={0.8}
        >
          <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedElement 
                animation="slideIn" 
                direction="left"
                delay={0.6} 
                duration={0.8}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">
                    Contact Information
                  </h3>
                  <p className="text-text-light dark:text-text-dark mb-2">
                    <FaEnvelope className="inline-block mr-2" />
                    {t('contact.email')}
                  </p>
                  <p className="text-text-light dark:text-text-dark mb-2">
                    📞 {t('contact.phone')}
                  </p>
                  <p className="text-text-light dark:text-text-dark">
                    📍 {t('contact.address')}
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement 
                animation="slideIn" 
                direction="right"
                delay={0.8} 
                duration={0.8}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">
                    {t('languages.title')}
                  </h3>
                  <p className="text-text-light dark:text-text-dark mb-2">
                    {t('languages.spanish')}
                  </p>
                  <p className="text-text-light dark:text-text-dark mb-2">
                    {t('languages.english')}
                  </p>
                  <p className="text-text-light dark:text-text-dark">
                    {t('languages.italian')}
                  </p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
} 