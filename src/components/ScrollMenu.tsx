'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaCogs, FaTools, FaRoute, FaCertificate, FaQuoteLeft } from 'react-icons/fa';

export default function ScrollMenu() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'hero', label: t('hero.name'), icon: FaHome },
    { id: 'about', label: t('about.title'), icon: FaUser },
    { id: 'testimonials', label: t('testimonials.title', 'Recomendaciones'), icon: FaQuoteLeft },
    { id: 'skills', label: t('skills.title'), icon: FaCode },
    { id: 'technologies-tools', label: t('skills.techStack'), icon: FaTools },
    { id: 'technology-journey', label: t('skills.timeline'), icon: FaRoute },
    { id: 'certifications', label: t('skills.certifications'), icon: FaCertificate },
    { id: 'projects', label: t('projects.title'), icon: FaProjectDiagram },
    { id: 'contact', label: t('contact.title'), icon: FaEnvelope }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setIsOpen(false), 400);
    }
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-card-light dark:bg-card-dark border border-primary/40 dark:border-primary/40 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/60 ${isOpen ? 'ring-2 ring-primary/80 shadow-[0_0_16px_2px_#3B82F6]' : ''}`}
        style={{ boxShadow: isOpen ? '0 0 24px 4px #3B82F6aa' : undefined }}
      >
        {isOpen ? (
          <FaTimes className="text-xl text-primary drop-shadow-[0_0_6px_#3B82F6]" />
        ) : (
          <FaBars className="text-xl text-primary" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: -16 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.92, x: -16 }}
            transition={{ duration: 0.28, type: 'spring', stiffness: 180, damping: 18 }}
            className="absolute top-16 left-0 w-64 
              bg-gradient-to-br from-white/90 via-gray-100/90 to-gray-200/90 
              dark:from-[#232b3aee] dark:via-[#181C24ee] dark:to-[#232b3aee] 
              border border-primary/20 dark:border-primary/30 
              rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl
              max-h-[80vh] overflow-y-auto"
            style={{ boxShadow: '0 8px 32px 0 #3B82F655, 0 1.5px 8px 0 #0008' }}
          >
            <div className="py-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full px-5 py-3 text-left hover:bg-primary/10 transition-all duration-200 text-text-light dark:text-text-dark flex items-center gap-4 group font-semibold tracking-wide text-base md:text-lg"
                  >
                    <span className="flex items-center justify-center w-8 h-8">
                      <Icon className="text-xl text-primary group-hover:drop-shadow-[0_0_8px_#3B82F6] group-hover:text-[#60A5FA] transition-all duration-200" />
                    </span>
                    <span className="group-hover:text-primary transition-colors duration-200">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 