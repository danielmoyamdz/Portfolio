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
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-center text-heading-light dark:text-heading-dark">
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
          <div className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 relative overflow-hidden transition-transform duration-300 hover:scale-[1.025]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
            <div className="relative z-10">
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
          </div>
        </AnimatedElement>

        <AnimatedElement 
          animation="slideIn" 
          direction="right"
          delay={0.8} 
          duration={0.8}
        >
          <div className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-4 sm:p-6 rounded-xl relative overflow-hidden transition-transform duration-300 hover:scale-[1.025]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">
                {t('about.education.title')}
              </h3>
              <div className="mb-4">
                <h4 className="text-xl font-medium text-primary">
                  {t('about.education.university')}
                </h4>
                <p className="text-lg text-text-light dark:text-text-dark">
                  {t('about.education.degree')}
                </p>
                <div className="mt-4">
                  <h5 className="text-lg font-medium mb-2 text-heading-light dark:text-heading-dark">
                    {t('about.education.skillsTitle')}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-3">
                    {(t('about.education.skills', { returnObjects: true }) as string[]).map((skill, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span className="text-text-light dark:text-text-dark">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
} 