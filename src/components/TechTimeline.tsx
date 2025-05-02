'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  technologies: string[];
}

const TechTimeline = () => {
  const { t } = useTranslation();

  const timelineData: TimelineItem[] = [
    {
      year: '2020-2021',
      title: t('skills.timelineData.year1.title'),
      description: t('skills.timelineData.year1.description'),
      technologies: t('skills.timelineData.year1.technologies', { returnObjects: true }) as string[]
    },
    {
      year: '2021-2022',
      title: t('skills.timelineData.year2.title'),
      description: t('skills.timelineData.year2.description'),
      technologies: t('skills.timelineData.year2.technologies', { returnObjects: true }) as string[]
    },
    {
      year: '2022-2023',
      title: t('skills.timelineData.year3.title'),
      description: t('skills.timelineData.year3.description'),
      technologies: t('skills.timelineData.year3.technologies', { returnObjects: true }) as string[]
    },
    {
      year: '2023-2024',
      title: t('skills.timelineData.year4.title'),
      description: t('skills.timelineData.year4.description'),
      technologies: t('skills.timelineData.year4.technologies', { returnObjects: true }) as string[]
    },
    {
      year: '2024-2025',
      title: t('skills.timelineData.year5.title'),
      description: t('skills.timelineData.year5.description'),
      technologies: t('skills.timelineData.year5.technologies', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-12 border-l-2 border-blue-500 last:border-l-0"
          >
            <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-blue-500" />
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{item.year}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechTimeline; 