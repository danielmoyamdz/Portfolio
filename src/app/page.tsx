'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDrupal } from 'react-icons/fa';
import Image from 'next/image';
import '../i18n/client';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedElement from '../components/AnimatedElement';
import ProjectCard from '../components/ProjectCard';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ScrollMenu from '../components/ScrollMenu';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  // Simular una carga inicial para evitar el parpadeo
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen text-text-light dark:text-text-dark overflow-visible relative z-0">
      <ScrollMenu />
      
      <section id="hero" className="relative z-0">
        <AnimatedSection animation="fadeIn" duration={1}>
          <Hero />
        </AnimatedSection>
      </section>

      <section id="about" className="py-10 md:py-20 scroll-mt-20 relative z-0">
        <AnimatedSection 
          animation="slideUp" 
          delay={0.2} 
          duration={0.8}
        >
          <About />
        </AnimatedSection>
      </section>

      <section id="testimonials" className="py-10 md:py-20 scroll-mt-20 relative z-0">
        <AnimatedSection 
          animation="fadeIn" 
          delay={0.3} 
          duration={0.8}
        >
          <Testimonials />
        </AnimatedSection>
      </section>

      <section id="skills" className="py-10 md:py-20 scroll-mt-20 relative z-0">
        <div className="container mx-auto">
          <Skills />
        </div>
      </section>

      <section id="projects" className="py-10 md:py-20 scroll-mt-20 relative z-0">
        <AnimatedSection 
          animation="slideIn" 
          direction="right"
          delay={0.4} 
          duration={0.8}
        >
          <Projects />
        </AnimatedSection>
      </section>

      <section id="contact" className="py-10 md:py-20 scroll-mt-20 relative z-0">
        <AnimatedSection 
          animation="scale" 
          delay={0.5} 
          duration={0.8}
        >
          <Contact />
        </AnimatedSection>
      </section>
    </main>
  );
} 