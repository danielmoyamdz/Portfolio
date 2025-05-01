'use client';

import { useTranslation } from 'react-i18next';
import AnimatedElement from './AnimatedElement';
import { FaCode, FaDatabase, FaTools, FaGlobe, FaBrain, FaChartBar } from 'react-icons/fa';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <AnimatedElement 
        animation="slideUp" 
        delay={0.2} 
        duration={0.8}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-heading-light dark:text-heading-dark">
          {t('skills.title')}
        </h2>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatedElement 
          animation="slideIn" 
          direction="left"
          delay={0.3} 
          duration={0.8}
        >
          <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl h-full">
            <div className="flex items-center mb-6">
              <FaCode className="text-2xl text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-heading-light dark:text-heading-dark">
                {t('skills.backend')}
              </h3>
            </div>
            <ul className="space-y-4">
              {(t('skills.languages', { returnObjects: true }) as string[]).map((lang: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span className="text-text-light dark:text-text-dark">{lang}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedElement>

        <AnimatedElement 
          animation="slideIn" 
          direction="up"
          delay={0.4} 
          duration={0.8}
        >
          <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl h-full">
            <div className="flex items-center mb-6">
              <FaDatabase className="text-2xl text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-heading-light dark:text-heading-dark">
                {t('skills.databases')}
              </h3>
            </div>
            <p className="text-text-light dark:text-text-dark">
              {t('skills.technologies.databases')}
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement 
          animation="slideIn" 
          direction="right"
          delay={0.5} 
          duration={0.8}
        >
          <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl h-full">
            <div className="flex items-center mb-6">
              <FaTools className="text-2xl text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-heading-light dark:text-heading-dark">
                {t('skills.tools')}
              </h3>
            </div>
            <p className="text-text-light dark:text-text-dark">
              {t('skills.technologies.devops')}
            </p>
          </div>
        </AnimatedElement>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatedElement 
          animation="slideIn" 
          direction="left"
          delay={0.6} 
          duration={0.8}
        >
          <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl h-full">
            <div className="flex items-center mb-6">
              <FaGlobe className="text-2xl text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-heading-light dark:text-heading-dark">
                Web Development
              </h3>
            </div>
            <p className="text-text-light dark:text-text-dark">
              {t('skills.technologies.web')}
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement 
          animation="slideIn" 
          direction="up"
          delay={0.7} 
          duration={0.8}
        >
          <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl h-full">
            <div className="flex items-center mb-6">
              <FaBrain className="text-2xl text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-heading-light dark:text-heading-dark">
                Architecture & AI
              </h3>
            </div>
            <p className="text-text-light dark:text-text-dark">
              {t('skills.technologies.architecture')}
            </p>
            <p className="text-text-light dark:text-text-dark mt-4">
              {t('skills.technologies.ai')}
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement 
          animation="slideIn" 
          direction="right"
          delay={0.8} 
          duration={0.8}
        >
          <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl h-full">
            <div className="flex items-center mb-6">
              <FaChartBar className="text-2xl text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-heading-light dark:text-heading-dark">
                Data Analysis
              </h3>
            </div>
            <p className="text-text-light dark:text-text-dark">
              {t('skills.technologies.bi')}
            </p>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
} 