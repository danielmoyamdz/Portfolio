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
      className="glass-effect p-6 rounded-xl hover-scale"
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
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-primary hover:underline inline-flex items-center"
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