'use client';

import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaDrupal } from 'react-icons/fa';
import Image from 'next/image';
import '../i18n/client';

export default function Home() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center">
        <div className="mb-12 relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-8 mx-auto glass-effect p-1.5">
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
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-gray-300 mb-4">{t('hero.subtitle')}</p>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl">{t('hero.description')}</p>
        <div className="flex gap-4">
          <a 
            href={t('contact.drupal')} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-effect px-6 py-3 rounded-full hover-scale"
          >
            <FaDrupal className="text-2xl" />
          </a>
          <a 
            href={t('contact.linkedin')} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-effect px-6 py-3 rounded-full hover-scale"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a 
            href={`mailto:${t('contact.email')}`} 
            className="glass-effect px-6 py-3 rounded-full hover-scale"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section ref={ref} className="py-20">
        <h2 className="text-4xl font-bold mb-8 text-center">{t('about.title')}</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-8 text-center">
            {t('about.description')}
          </p>
          <div className="glass-effect p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-semibold mb-4">{t('about.experience.title')}</h3>
            <div className="mb-4">
              <h4 className="text-xl font-medium text-primary">{t('about.experience.current.company')}</h4>
              <p className="text-lg text-gray-300">{t('about.experience.current.role')}</p>
              <p className="text-gray-400">{t('about.experience.current.description')}</p>
            </div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <p className="text-lg text-gray-300">{t('about.education')}</p>
            <p className="text-gray-400">{t('about.university')}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">{t('skills.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">{t('skills.backend')}</h3>
            <ul className="space-y-2">
              {(t('skills.languages', { returnObjects: true }) as string[]).map((lang: string) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">{t('skills.databases')}</h3>
            <p className="text-gray-300">{t('skills.technologies.databases')}</p>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">{t('skills.tools')}</h3>
            <p className="text-gray-300">{t('skills.technologies.devops')}</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-300">{t('skills.technologies.web')}</p>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Architecture & AI</h3>
            <p className="text-gray-300">{t('skills.technologies.architecture')}</p>
            <p className="text-gray-300 mt-2">{t('skills.technologies.ai')}</p>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Data Analysis</h3>
            <p className="text-gray-300">{t('skills.technologies.bi')}</p>
            <p className="text-gray-300 mt-2">Data visualization and reporting</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add your project cards here */}
          <div className="glass-effect p-6 rounded-xl hover-scale">
            <h3 className="text-2xl font-semibold mb-4">Project 1</h3>
            <p className="text-gray-300 mb-4">Description of your amazing project</p>
            <a href="#" className="text-primary hover:underline">{t('projects.viewProject')}</a>
          </div>
          <div className="glass-effect p-6 rounded-xl hover-scale">
            <h3 className="text-2xl font-semibold mb-4">Project 2</h3>
            <p className="text-gray-300 mb-4">Description of your amazing project</p>
            <a href="#" className="text-primary hover:underline">{t('projects.viewProject')}</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">{t('contact.title')}</h2>
        <div className="max-w-2xl mx-auto">
          <div className="glass-effect p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="text-gray-300 mb-2">
                  <FaEnvelope className="inline-block mr-2" />
                  {t('contact.email')}
                </p>
                <p className="text-gray-300 mb-2">
                  📞 {t('contact.phone')}
                </p>
                <p className="text-gray-300">
                  📍 {t('contact.address')}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">{t('languages.title')}</h3>
                <p className="text-gray-300 mb-2">{t('languages.spanish')}</p>
                <p className="text-gray-300 mb-2">{t('languages.english')}</p>
                <p className="text-gray-300">{t('languages.italian')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 