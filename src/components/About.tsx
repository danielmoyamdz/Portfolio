'use client';

import { useTranslation } from 'react-i18next';
import AnimatedElement from './AnimatedElement';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <AnimatedElement 
        animation="slideUp" 
        delay={0.2} 
        duration={0.8}
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-heading-light dark:text-heading-dark">
          {t('about.title')}
        </h2>
      </AnimatedElement>

      <div className="max-w-3xl mx-auto">
        <AnimatedElement 
          animation="fadeIn" 
          delay={0.4} 
          duration={0.8}
        >
          <p className="text-lg text-text-light dark:text-text-dark mb-8 text-center">
            {t('about.description')}
          </p>
        </AnimatedElement>

        <AnimatedElement 
          animation="slideIn" 
          direction="left"
          delay={0.6} 
          duration={0.8}
        >
          <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">
              {t('about.experience.title')}
            </h3>
            <div className="mb-4">
              <h4 className="text-xl font-medium text-primary">
                {t('about.experience.current.company')}
              </h4>
              <p className="text-lg text-text-light dark:text-text-dark">
                {t('about.experience.current.role')}
              </p>
              <p className="text-subtext-light dark:text-subtext-dark">
                {t('about.experience.current.description')}
              </p>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement 
          animation="slideIn" 
          direction="right"
          delay={0.8} 
          duration={0.8}
        >
          <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">
              Education
            </h3>
            <p className="text-lg text-text-light dark:text-text-dark">
              {t('about.education')}
            </p>
            <p className="text-subtext-light dark:text-subtext-dark">
              {t('about.university')}
            </p>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
} 