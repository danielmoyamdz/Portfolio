'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export default function ProjectCard({ title, description, link, linkText }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-6 rounded-xl h-full"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <div className="relative overflow-hidden group">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        
        <h3 className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark relative z-10">
          {title}
        </h3>
        
        <p className="text-text-light dark:text-text-dark mb-6 relative z-10">
          {description}
        </p>
        
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 relative z-10"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaGithub className="text-xl" />
          <span>{linkText}</span>
        </motion.a>
      </div>
    </motion.div>
  );
} 