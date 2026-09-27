'use client';

import { useTranslation } from 'react-i18next';
import AnimatedElement from './AnimatedElement';
import ProjectCard from './ProjectCard';

const PROJECT_LINKS = [
  'https://github.com/danielmoyamdz/Portfolio',
  'https://github.com/danielmoyamdz/password_generation',
  'https://github.com/danielmoyamdz/film_searcher',
  'https://github.com/danielmoyamdz/tic-tac-toe',
];

type ProjectItem = { title: string; description: string };

export default function Projects() {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true }) as ProjectItem[];

  return (
    <div className="container mx-auto px-4">
      <AnimatedElement animation="slideUp" delay={0.1} duration={0.6}>
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-heading-light dark:text-heading-dark">
          {t('projects.title')}
        </h2>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {items.map((item, index) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            description={item.description}
            link={PROJECT_LINKS[index]}
            linkText={t('projects.viewProject')}
          />
        ))}
      </div>
    </div>
  );
}
