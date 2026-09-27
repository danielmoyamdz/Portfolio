'use client';

import { FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-heading-light dark:text-heading-dark">
        {t('contact.title')}
      </h2>

      <div className="max-w-2xl mx-auto">
        <div className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-8 rounded-xl relative overflow-hidden transition-transform duration-300 hover:scale-[1.025]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">
                {t('contact.infoTitle')}
              </h3>
              <p className="text-text-light dark:text-text-dark mb-2">
                <FaEnvelope className="inline-block mr-2" />
                <a href={`mailto:${t('contact.email')}`} className="hover:text-primary">
                  {t('contact.email')}
                </a>
              </p>
              <p className="text-text-light dark:text-text-dark mb-2">
                <a href={`tel:${t('contact.phone').replace(/\s/g, '')}`}>{t('contact.phone')}</a>
              </p>
              <p className="text-text-light dark:text-text-dark">{t('contact.address')}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">
                {t('languages.title')}
              </h3>
              <p className="text-text-light dark:text-text-dark mb-2">{t('languages.spanish')}</p>
              <p className="text-text-light dark:text-text-dark mb-2">{t('languages.english')}</p>
              <p className="text-text-light dark:text-text-dark">{t('languages.italian')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
