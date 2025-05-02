'use client';

import { useTranslation } from 'react-i18next';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import TechLogos from './TechLogos';
import TechTimeline from './TechTimeline';
import Certifications from './Certifications';
import AnimatedElement from './AnimatedElement';

export default function Skills() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-heading-light dark:text-heading-dark">
        {t('skills.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <FaCode className="text-2xl text-primary mr-3" />, title: t('skills.backend'),
            content: [t('skills.techDetails.backend')]
          },
          {
            icon: <FaCode className="text-2xl text-primary mr-3" />, title: t('skills.frontend'),
            content: [t('skills.techDetails.frontend')]
          },
          {
            icon: <FaDatabase className="text-2xl text-primary mr-3" />, title: t('skills.databases'),
            content: [t('skills.techDetails.databases')]
          },
          {
            icon: <FaTools className="text-2xl text-primary mr-3" />, title: t('skills.tools'),
            content: [t('skills.techDetails.devops')]
          },
          {
            icon: <FaCode className="text-2xl text-primary mr-3" />, title: t('skills.ai'),
            content: [t('skills.techDetails.ai')]
          },
          {
            icon: <FaCode className="text-2xl text-primary mr-3" />, title: t('skills.data'),
            content: [t('skills.techDetails.data')]
          },
          {
            icon: <FaCode className="text-2xl text-primary mr-3" />, title: t('skills.architecture'),
            content: [t('skills.techDetails.architecture')]
          },
        ].map((block, idx) => (
          <div key={block.title} className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 rounded-xl relative overflow-hidden shadow-card-light dark:shadow-card-dark group hover:scale-[1.025] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
            <div className="relative z-10">
              <div className="flex items-center mb-6">{block.icon}
                <h3 className="text-2xl font-semibold text-heading-light dark:text-heading-dark">{block.title}</h3>
              </div>
              <ul className="space-y-2">
                {block.content.map((txt, i) => <li key={i} className="text-text-light dark:text-text-dark flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary inline-block" />{txt}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Logos Section */}
      <div className="mb-16" id="technologies-tools">
        <h3 className="text-3xl font-semibold mb-8 text-center text-heading-light dark:text-heading-dark">
          {t('skills.techStack')}
        </h3>
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark rounded-xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
          <div className="relative z-10">
            <TechLogos />
          </div>
        </div>
      </div>

      {/* Tech Timeline Section */}
      <div className="mb-16" id="technology-journey">
        <h3 className="text-3xl font-semibold mb-8 text-center text-heading-light dark:text-heading-dark">
          {t('skills.timeline')}
        </h3>
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark rounded-xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
          <div className="relative z-10">
            <TechTimeline key={i18n.language} />
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div id="certifications">
        <AnimatedElement animation="slideUp" delay={0.2} duration={0.8}>
          <h3 className="text-3xl font-semibold mb-8 text-center text-heading-light dark:text-heading-dark">
            {t('skills.certifications')}
          </h3>
        </AnimatedElement>
        <AnimatedElement animation="fadeIn" delay={0.4} duration={0.8}>
          <Certifications />
        </AnimatedElement>
      </div>
    </div>
  );
} 