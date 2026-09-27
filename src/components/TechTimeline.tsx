'use client';

import { useTranslation } from 'react-i18next';

const YEAR_KEYS = ['year1', 'year2', 'year3', 'year4', 'year5', 'year6'] as const;

export default function TechTimeline() {
  const { t } = useTranslation();

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        {YEAR_KEYS.map((key) => {
          const period = t(`skills.timelineData.${key}.period`);
          const technologies = t(`skills.timelineData.${key}.technologies`, {
            returnObjects: true,
          }) as string[];

          return (
            <div
              key={key}
              className="relative pl-8 pb-12 border-l-2 border-blue-500 last:pb-0"
            >
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-blue-500" />
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{period}</h3>
                <p className="mt-1 font-semibold text-heading-light dark:text-heading-dark">
                  {t(`skills.timelineData.${key}.title`)}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t(`skills.timelineData.${key}.description`)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
