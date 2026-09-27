'use client';

import { useTranslation } from 'react-i18next';
import AnimatedElement from './AnimatedElement';

type Job = {
  company: string;
  period: string;
  role: string;
  description: string;
};

export default function About() {
  const { t } = useTranslation();
  const jobs = t('about.experience.jobs', { returnObjects: true }) as Job[];

  return (
    <div className="container mx-auto px-4">
      <AnimatedElement animation="slideUp" delay={0.1} duration={0.6}>
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-center text-heading-light dark:text-heading-dark">
          {t('about.title')}
        </h2>
      </AnimatedElement>

      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-text-light dark:text-text-dark mb-8 text-center">
          {t('about.description')}
        </p>

        <div className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 relative overflow-hidden transition-transform duration-300 hover:scale-[1.025]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-6 text-heading-light dark:text-heading-dark">
              {t('about.experience.title')}
            </h3>
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={`${job.company}-${job.period}`}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h4 className="text-xl font-medium text-primary">{job.company}</h4>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">{job.period}</p>
                  </div>
                  <p className="text-lg text-text-light dark:text-text-dark">{job.role}</p>
                  <p className="text-subtext-light dark:text-subtext-dark mt-1">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-4 sm:p-6 rounded-xl relative overflow-hidden transition-transform duration-300 hover:scale-[1.025]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">
              {t('about.education.title')}
            </h3>
            <h4 className="text-xl font-medium text-primary">{t('about.education.university')}</h4>
            <p className="text-lg text-text-light dark:text-text-dark">{t('about.education.degree')}</p>
            <div className="mt-4">
              <h5 className="text-lg font-medium mb-2 text-heading-light dark:text-heading-dark">
                {t('about.education.skillsTitle')}
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-3">
                {(t('about.education.skills', { returnObjects: true }) as string[]).map((skill) => (
                  <div key={skill} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="text-text-light dark:text-text-dark">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
