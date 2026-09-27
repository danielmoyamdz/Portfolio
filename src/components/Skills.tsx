'use client';

import { FaCode, FaDatabase, FaTools, FaChartBar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import TechLogos from './TechLogos';
import TechTimeline from './TechTimeline';
import Certifications from './Certifications';

export default function Skills() {
  const { t } = useTranslation();

  const blocks = [
    { icon: FaCode, title: t('skills.backend'), content: t('skills.techDetails.backend') },
    { icon: FaCode, title: t('skills.frontend'), content: t('skills.techDetails.frontend') },
    { icon: FaDatabase, title: t('skills.databases'), content: t('skills.techDetails.databases') },
    { icon: FaTools, title: t('skills.tools'), content: t('skills.techDetails.devops') },
    { icon: FaCode, title: t('skills.ai'), content: t('skills.techDetails.ai') },
    { icon: FaChartBar, title: t('skills.bi'), content: t('skills.techDetails.bi') },
    { icon: FaCode, title: t('skills.data'), content: t('skills.techDetails.data') },
    { icon: FaCode, title: t('skills.architecture'), content: t('skills.techDetails.architecture') },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-heading-light dark:text-heading-dark">
        {t('skills.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {blocks.map((block) => (
          <div
            key={block.title}
            className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 rounded-xl relative overflow-hidden shadow-card-light dark:shadow-card-dark group hover:scale-[1.025] transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <block.icon className="text-2xl text-primary mr-3" />
                <h3 className="text-xl font-semibold text-heading-light dark:text-heading-dark">
                  {block.title}
                </h3>
              </div>
              <p className="text-text-light dark:text-text-dark">{block.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-16" id="technologies-tools">
        <h3 className="text-3xl font-semibold mb-8 text-center text-heading-light dark:text-heading-dark">
          {t('skills.techStack')}
        </h3>
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark rounded-xl p-6">
          <TechLogos />
        </div>
      </div>

      <div className="mb-16" id="technology-journey">
        <h3 className="text-3xl font-semibold mb-8 text-center text-heading-light dark:text-heading-dark">
          {t('skills.timeline')}
        </h3>
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark rounded-xl p-6">
          <TechTimeline />
        </div>
      </div>

      <div id="certifications">
        <h3 className="text-3xl font-semibold mb-8 text-center text-heading-light dark:text-heading-dark">
          {t('skills.certifications')}
        </h3>
        <Certifications />
      </div>
    </div>
  );
}
