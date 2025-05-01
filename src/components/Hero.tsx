'use client';

import Image from 'next/image';
import { FaDrupal, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import AnimatedElement from './AnimatedElement';
import TypedTitle from './TypedTitle';
import { useState, useEffect } from 'react';

export default function Hero() {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Prevenir el parpadeo durante la carga inicial
  useEffect(() => {
    // Marcar la imagen como cargada después de un breve retraso
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Manejar errores de carga de imagen
  const handleImageError = () => {
    console.error('Error loading profile image');
    setImageError(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center relative">
      <AnimatedElement 
        animation="scale" 
        delay={0.2} 
        duration={0.8}
        className="mb-12 relative"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-8 mx-auto bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-1.5 relative z-10">
          {imageLoaded && !imageError && (
            <Image
              src="/Portfolio/images/profile.jpg"
              alt="Daniel Moya"
              width={320}
              height={320}
              className="rounded-full object-cover"
              priority
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
            />
          )}
          {(imageError || !imageLoaded) && (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-xl">DM</span>
            </div>
          )}
        </div>
      </AnimatedElement>

      <AnimatedElement 
        animation="slideUp" 
        delay={0.4} 
        duration={0.8}
        className="relative z-10"
      >
        <h1 className="text-5xl font-bold mb-2 text-heading-light dark:text-heading-dark">
          <TypedTitle text={t('hero.name')} />
        </h1>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-relaxed py-2">
          {t('hero.title')}
        </h2>
      </AnimatedElement>

      <AnimatedElement 
        animation="fadeIn" 
        delay={0.6} 
        duration={0.8}
        className="relative z-10"
      >
        <p className="text-xl text-text-light dark:text-text-dark mb-4">
          {t('hero.subtitle')}
        </p>
      </AnimatedElement>

      <AnimatedElement 
        animation="slideUp" 
        delay={0.8} 
        duration={0.8}
        className="relative z-10"
      >
        <p className="text-lg text-subtext-light dark:text-subtext-dark mb-8 max-w-2xl">
          {t('hero.description')}
        </p>
      </AnimatedElement>

      <AnimatedElement 
        animation="bounce" 
        delay={1} 
        duration={0.8}
        className="relative z-10"
      >
        <div className="flex gap-4">
          <a 
            href={t('contact.drupal')} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-3 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-110"
          >
            <FaDrupal className="text-2xl text-text-light dark:text-text-dark" />
          </a>
          <a 
            href={t('contact.linkedin')} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-3 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-110"
          >
            <FaLinkedin className="text-2xl text-text-light dark:text-text-dark" />
          </a>
          <a 
            href="https://github.com/danielmoyamdz" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-3 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-110"
          >
            <FaGithub className="text-2xl text-text-light dark:text-text-dark" />
          </a>
          <a 
            href={`mailto:${t('contact.email')}`} 
            className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-3 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-110"
          >
            <FaEnvelope className="text-2xl text-text-light dark:text-text-dark" />
          </a>
        </div>
      </AnimatedElement>
    </div>
  );
} 