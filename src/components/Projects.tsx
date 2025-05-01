'use client';

import { useTranslation } from 'react-i18next';
import AnimatedElement from './AnimatedElement';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <AnimatedElement 
        animation="slideUp" 
        delay={0.2} 
        duration={0.8}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-heading-light dark:text-heading-dark">
          {t('projects.title')}
        </h2>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedElement 
          animation="slideIn" 
          direction="left"
          delay={0.4} 
          duration={0.8}
        >
          <ProjectCard 
            title="Portfolio"
            description="A modern, responsive portfolio website with a clean, Apple visionOS-inspired design. Features smooth animations, dark/light mode, and full internationalization support."
            link="https://github.com/danielmoyamdz/Portfolio"
            linkText={t('projects.viewProject')}
          />
        </AnimatedElement>

        <AnimatedElement 
          animation="slideIn" 
          direction="right"
          delay={0.6} 
          duration={0.8}
        >
          <ProjectCard 
            title="Password Generator"
            description="A JavaScript application for generating secure passwords with customizable options."
            link="https://github.com/danielmoyamdz/password_generation"
            linkText={t('projects.viewProject')}
          />
        </AnimatedElement>

        <AnimatedElement 
          animation="slideIn" 
          direction="left"
          delay={0.8} 
          duration={0.8}
        >
          <ProjectCard 
            title="Film Searcher"
            description="A web application that allows users to search for movies using the OMDb API."
            link="https://github.com/danielmoyamdz/film_searcher"
            linkText={t('projects.viewProject')}
          />
        </AnimatedElement>

        <AnimatedElement 
          animation="slideIn" 
          direction="right"
          delay={1.0} 
          duration={0.8}
        >
          <ProjectCard 
            title="Tic Tac Toe"
            description="A Python implementation of the classic Tic Tac Toe game with an unbeatable AI opponent."
            link="https://github.com/danielmoyamdz/tic-tac-toe"
            linkText={t('projects.viewProject')}
          />
        </AnimatedElement>
      </div>
    </div>
  );
} 