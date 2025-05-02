'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const timelineData = [
  {
    year: '2020',
    title: 'Beginning of the Journey',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
    description: 'Started learning programming fundamentals and web development basics'
  },
  {
    year: '2021',
    title: 'Full Stack Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    description: 'Expanded into full stack development and modern web technologies'
  },
  {
    year: '2022',
    title: 'Advanced Backend & DevOps',
    technologies: ['Java', 'Spring Boot', 'Docker', 'CI/CD'],
    description: 'Focused on enterprise development and DevOps practices'
  },
  {
    year: '2023',
    title: 'Specialization',
    technologies: ['Drupal', 'PHP', 'MySQL', 'PostgreSQL'],
    description: 'Specialized in Drupal development and database management'
  },
  {
    year: '2024',
    title: 'Modern Development',
    technologies: ['Next.js', 'TypeScript', 'AI Integration', 'Cloud Services'],
    description: 'Embracing modern frameworks and AI technologies'
  }
];

export default function TechTimeline() {
  const { t } = useTranslation();

  return (
    <div className="relative py-8">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
      
      {timelineData.map((item, index) => (
        <motion.div
          key={item.year}
          className={`relative flex items-center mb-12 ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true }}
        >
          <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
            <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-primary">{item.year}</span>
                <div className="w-2 h-2 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-heading-light dark:text-heading-dark">
                {item.title}
              </h3>
              
              <p className="text-sm text-text-light dark:text-text-dark mb-4">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 