'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  delay?: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  link, 
  linkText,
  delay = 0
}: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl hover:shadow-lg transition-all duration-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          delay: delay,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark">{title}</h3>
      <p className="text-subtext-light dark:text-subtext-dark mb-4">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-primary hover:text-primary/80 inline-flex items-center font-medium"
      >
        {linkText}
        <motion.span 
          className="ml-1"
          animate={{ x: [0, 5, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop" 
          }}
        >
          →
        </motion.span>
      </a>
    </motion.div>
  );
} 