'use client';

import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ScrollMenu from '../components/ScrollMenu';
import Testimonials from '../components/Testimonials';
import Conference from '../components/Conference';
import CV from '../components/CV';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  return (
    <div className="min-h-screen text-text-light dark:text-text-dark overflow-visible relative z-0">
      <ScrollMenu />

      <section id="hero" className="relative z-0">
        <Hero />
      </section>

      <section id="about" className="py-10 md:py-20 scroll-mt-20 relative z-0">
        <AnimatedSection animation="slideUp" duration={0.6}>
          <About />
        </AnimatedSection>
      </section>

      <section id="cv" className="py-10 md:py-20 scroll-mt-20 relative z-0">
        <AnimatedSection animation="fadeIn" duration={0.6}>
          <CV />
        </AnimatedSection>
      </section>

      <section id="testimonials" className="py-10 md:py-20 scroll-mt-20 relative z-0">
        <AnimatedSection animation="fadeIn" duration={0.6}>
          <Testimonials />
        </AnimatedSection>
      </section>

      <section id="conference" className="py-10 md:py-20 scroll-mt-20 relative z-0">
        <AnimatedSection animation="fadeIn" duration={0.6}>
          <Conference />
        </AnimatedSection>
      </section>

      <section id="skills" className="py-10 md:py-20 scroll-mt-20 relative z-0">
        <div className="container mx-auto">
          <Skills />
        </div>
      </section>

      <section id="projects" className="py-10 md:py-20 scroll-mt-20 relative z-0">
        <AnimatedSection animation="slideIn" direction="right" duration={0.6}>
          <Projects />
        </AnimatedSection>
      </section>

      <section id="contact" className="py-10 md:py-20 scroll-mt-20 relative z-0">
        <AnimatedSection animation="scale" duration={0.6}>
          <Contact />
        </AnimatedSection>
      </section>
    </div>
  );
}
