'use client';

import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaDrupal } from 'react-icons/fa';
import Image from 'next/image';
import '../i18n/client';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedElement from '../components/AnimatedElement';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <AnimatedSection className="min-h-screen flex flex-col justify-center items-center text-center">
        <div className="mb-12 relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-8 mx-auto bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-1.5">
            <Image
              src="/Portfolio/images/profile.jpg"
              alt="Daniel Moya"
              width={320}
              height={320}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
        <AnimatedElement delay={0.2}>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
        </AnimatedElement>
        <AnimatedElement delay={0.4}>
          <p className="text-xl text-text-light dark:text-text-dark mb-4">{t('hero.subtitle')}</p>
        </AnimatedElement>
        <AnimatedElement delay={0.6}>
          <p className="text-lg text-subtext-light dark:text-subtext-dark mb-8 max-w-2xl">{t('hero.description')}</p>
        </AnimatedElement>
        <AnimatedElement delay={0.8}>
          <div className="flex gap-4">
            <a 
              href={t('contact.drupal')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-3 rounded-full hover:shadow-lg transition-all duration-200"
            >
              <FaDrupal className="text-2xl text-text-light dark:text-text-dark" />
            </a>
            <a 
              href={t('contact.linkedin')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-3 rounded-full hover:shadow-lg transition-all duration-200"
            >
              <FaLinkedin className="text-2xl text-text-light dark:text-text-dark" />
            </a>
            <a 
              href="https://github.com/danielmoyamdz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-3 rounded-full hover:shadow-lg transition-all duration-200"
            >
              <FaGithub className="text-2xl text-text-light dark:text-text-dark" />
            </a>
            <a 
              href={`mailto:${t('contact.email')}`} 
              className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-3 rounded-full hover:shadow-lg transition-all duration-200"
            >
              <FaEnvelope className="text-2xl text-text-light dark:text-text-dark" />
            </a>
          </div>
        </AnimatedElement>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection className="py-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-heading-light dark:text-heading-dark">{t('about.title')}</h2>
        <div className="max-w-3xl mx-auto">
          <AnimatedElement delay={0.2}>
            <p className="text-lg text-text-light dark:text-text-dark mb-8 text-center">
              {t('about.description')}
            </p>
          </AnimatedElement>
          <AnimatedElement delay={0.4}>
            <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">{t('about.experience.title')}</h3>
              <div className="mb-4">
                <h4 className="text-xl font-medium text-primary">{t('about.experience.current.company')}</h4>
                <p className="text-lg text-text-light dark:text-text-dark">{t('about.experience.current.role')}</p>
                <p className="text-subtext-light dark:text-subtext-dark">{t('about.experience.current.description')}</p>
              </div>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.6}>
            <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">Education</h3>
              <p className="text-lg text-text-light dark:text-text-dark">{t('about.education')}</p>
              <p className="text-subtext-light dark:text-subtext-dark">{t('about.university')}</p>
            </div>
          </AnimatedElement>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection className="py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-heading-light dark:text-heading-dark">{t('skills.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedElement delay={0.2}>
            <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">{t('skills.backend')}</h3>
              <ul className="space-y-2 text-text-light dark:text-text-dark">
                {(t('skills.languages', { returnObjects: true }) as string[]).map((lang: string) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.4}>
            <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">{t('skills.databases')}</h3>
              <p className="text-text-light dark:text-text-dark">{t('skills.technologies.databases')}</p>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.6}>
            <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">{t('skills.tools')}</h3>
              <p className="text-text-light dark:text-text-dark">{t('skills.technologies.devops')}</p>
            </div>
          </AnimatedElement>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedElement delay={0.2}>
            <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">Web Development</h3>
              <p className="text-text-light dark:text-text-dark">{t('skills.technologies.web')}</p>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.4}>
            <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">Architecture & AI</h3>
              <p className="text-text-light dark:text-text-dark">{t('skills.technologies.architecture')}</p>
              <p className="text-text-light dark:text-text-dark mt-2">{t('skills.technologies.ai')}</p>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.6}>
            <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">Data Analysis</h3>
              <p className="text-text-light dark:text-text-dark">{t('skills.technologies.bi')}</p>
              <p className="text-text-light dark:text-text-dark mt-2">Data visualization and reporting</p>
            </div>
          </AnimatedElement>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection className="py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-heading-light dark:text-heading-dark">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            title="Password Generator"
            description="A JavaScript application for generating secure passwords with customizable options."
            link="https://github.com/danielmoyamdz/password_generation"
            linkText={t('projects.viewProject')}
            delay={0.2}
          />
          <ProjectCard 
            title="Film Searcher"
            description="A web application that allows users to search for movies using the OMDb API."
            link="https://github.com/danielmoyamdz/film_searcher"
            linkText={t('projects.viewProject')}
            delay={0.4}
          />
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-heading-light dark:text-heading-dark">{t('contact.title')}</h2>
        <div className="max-w-2xl mx-auto">
          <AnimatedElement delay={0.2}>
            <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">Contact Information</h3>
                  <p className="text-text-light dark:text-text-dark mb-2">
                    <FaEnvelope className="inline-block mr-2" />
                    {t('contact.email')}
                  </p>
                  <p className="text-text-light dark:text-text-dark mb-2">
                    📞 {t('contact.phone')}
                  </p>
                  <p className="text-text-light dark:text-text-dark">
                    📍 {t('contact.address')}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">{t('languages.title')}</h3>
                  <p className="text-text-light dark:text-text-dark mb-2">{t('languages.spanish')}</p>
                  <p className="text-text-light dark:text-text-dark mb-2">{t('languages.english')}</p>
                  <p className="text-text-light dark:text-text-dark">{t('languages.italian')}</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </AnimatedSection>
    </div>
  );
} 