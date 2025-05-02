'use client';

import { useTranslation } from 'react-i18next';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import TechRadar from './TechRadar';
import TechLogos from './TechLogos';
import TechTimeline from './TechTimeline';
import Certifications from './Certifications';

export default function Skills() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-heading-light dark:text-heading-dark">
        {t('skills.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 rounded-xl">
          <div className="flex items-center mb-6">
            <FaCode className="text-2xl text-primary mr-3" />
            <h3 className="text-2xl font-semibold text-heading-light dark:text-heading-dark">
              {t('skills.backend')}
            </h3>
          </div>
          <p className="text-text-light dark:text-text-dark mb-4">
            {t('skills.techDetails.drupal')}
          </p>
          <p className="text-text-light dark:text-text-dark">
            {t('skills.techDetails.architecture')}
          </p>
        </div>

        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 rounded-xl">
          <div className="flex items-center mb-6">
            <FaDatabase className="text-2xl text-primary mr-3" />
            <h3 className="text-2xl font-semibold text-heading-light dark:text-heading-dark">
              {t('skills.databases')}
            </h3>
          </div>
          <p className="text-text-light dark:text-text-dark">
            {t('skills.techDetails.databases')}
          </p>
        </div>

        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 rounded-xl">
          <div className="flex items-center mb-6">
            <FaTools className="text-2xl text-primary mr-3" />
            <h3 className="text-2xl font-semibold text-heading-light dark:text-heading-dark">
              {t('skills.tools')}
            </h3>
          </div>
          <p className="text-text-light dark:text-text-dark">
            {t('skills.techDetails.devops')}
          </p>
        </div>
      </div>

      {/* Tech Radar Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-8 text-center text-heading-light dark:text-heading-dark">
          {t('skills.proficiencyChart')}
        </h3>
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark rounded-xl p-6">
          <TechRadar />
        </div>
      </div>

      {/* Tech Logos Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-8 text-center text-heading-light dark:text-heading-dark">
          {t('skills.techStack')}
        </h3>
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark rounded-xl p-6">
          <TechLogos />
        </div>
      </div>

      {/* Tech Timeline Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-8 text-center text-heading-light dark:text-heading-dark">
          {t('skills.timeline')}
        </h3>
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark rounded-xl p-6">
          <TechTimeline key={i18n.language} />
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h3 className="text-3xl font-semibold mb-8 text-center text-heading-light dark:text-heading-dark">
          {t('skills.certifications')}
        </h3>
        <Certifications />
      </div>
    </div>
  );
} 