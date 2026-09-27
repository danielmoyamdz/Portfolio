'use client';

import Image from 'next/image';
import { FaDrupal, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import AnimatedElement from './AnimatedElement';
import TypedTitle from './TypedTitle';
import { SITE, publicUrl } from '@/lib/site';

export default function Hero() {
  const { t } = useTranslation();

  const social = [
    { href: t('contact.drupal'), label: 'Drupal', icon: FaDrupal },
    { href: SITE.linkedin, label: 'LinkedIn', icon: FaLinkedin },
    { href: SITE.github, label: 'GitHub', icon: FaGithub },
    { href: `mailto:${SITE.email}`, label: 'Email', icon: FaEnvelope },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center relative px-4">
      <AnimatedElement animation="scale" delay={0.1} duration={0.6} className="mb-12 relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-8 mx-auto bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-1.5 relative z-10">
          <Image
            src={publicUrl('/images/profile.jpg')}
            alt="Daniel Moya"
            width={320}
            height={320}
            className="rounded-full object-cover w-full h-full"
            priority
          />
        </div>
      </AnimatedElement>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-2 text-heading-light dark:text-heading-dark">
          <TypedTitle text={t('hero.name')} />
        </h1>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-relaxed py-2">
          {t('hero.title')}
        </h2>
        <p className="text-xl text-text-light dark:text-text-dark mb-4">{t('hero.subtitle')}</p>
        <p className="text-lg text-subtext-light dark:text-subtext-dark mb-8 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        <div className="flex gap-4 justify-center">
          {social.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-3 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-110"
            >
              <Icon className="text-2xl text-text-light dark:text-text-dark" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
