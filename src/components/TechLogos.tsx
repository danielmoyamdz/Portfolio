'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'PHP', logo: 'tech/php.svg' },
  { name: 'Drupal', logo: 'tech/drupal.svg' },
  { name: 'Java', logo: 'tech/java.svg' },
  { name: 'Spring', logo: 'tech/spring.svg' },
  { name: 'Python', logo: 'tech/python.svg' },
  { name: 'React', logo: 'tech/react.svg' },
  { name: 'Node.js', logo: 'tech/nodedotjs.svg' },
  { name: 'Next.js', logo: 'tech/nextdotjs.svg' },
  { name: 'MySQL', logo: 'tech/mysql.svg' },
  { name: 'PostgreSQL', logo: 'tech/postgresql.svg' },
  { name: 'MongoDB', logo: 'tech/mongodb.svg' },
  { name: 'Docker', logo: 'tech/docker.svg' },
];

export default function TechLogos() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 p-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 relative flex items-center justify-center bg-card-light dark:bg-card-dark rounded-xl p-3 shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-full h-full dark:invert-[.25]"
              loading="lazy"
            />
          </motion.div>
          <span className="mt-2 text-sm text-text-light dark:text-text-dark">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
} 