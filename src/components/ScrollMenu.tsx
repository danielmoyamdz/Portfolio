'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

export default function ScrollMenu() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'hero', label: t('hero.name'), icon: FaHome },
    { id: 'about', label: t('about.title'), icon: FaUser },
    { id: 'skills', label: t('skills.title'), icon: FaCode },
    { id: 'projects', label: t('projects.title'), icon: FaProjectDiagram },
    { id: 'contact', label: t('contact.title'), icon: FaEnvelope }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-3 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
      >
        {isOpen ? (
          <FaTimes className="text-xl text-primary" />
        ) : (
          <FaBars className="text-xl text-primary" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-56 bg-card-light/80 dark:bg-card-dark/80 border border-border-light dark:border-border-dark rounded-2xl shadow-lg overflow-hidden backdrop-blur-lg"
          >
            <div className="py-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full px-4 py-3 text-left hover:bg-primary/10 transition-all duration-200 text-text-light dark:text-text-dark flex items-center gap-3 group"
                  >
                    <Icon className="text-lg text-primary group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium">{item.label}</span>
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