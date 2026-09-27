'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Conference() {
  const { t } = useTranslation();

  const conferences = [
    {
      event: t('conference.event1'),
      description: t('conference.description1'),
      linkedin: t('conference.linkedin1'),
      imageAlt: t('conference.imageAlt1'),
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7318596469345665024/',
      image: '/images/conference-drupaldd2025.jpg',
    },
    {
      event: t('conference.event2'),
      description: t('conference.description2'),
      linkedin: t('conference.linkedin2'),
      imageAlt: t('conference.imageAlt2'),
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7354980082274250752/',
      image: '/images/conference-indoc2025.jpeg',
    },
  ];

  return (
    <div className="px-4 md:px-12 lg:px-32 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-700 dark:text-blue-400">
        {t('conference.title')}
      </h2>

      <div className="w-full max-w-6xl space-y-8">
        {conferences.map((conference) => (
          <div
            key={conference.link}
            className="group w-full flex flex-col md:flex-row items-center gap-8 bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 md:p-10 border border-gray-200 dark:border-gray-700 relative overflow-hidden transition-transform duration-300 hover:scale-[1.025]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
            <div className="flex-1 flex flex-col gap-4 relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{conference.event}</h3>
              <p className="text-gray-700 dark:text-gray-300">{conference.description}</p>
              <a
                href={conference.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium w-fit"
              >
                {conference.linkedin}
              </a>
            </div>
            <div className="flex-1 flex justify-center items-center min-h-[200px] relative z-10">
              <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 w-[220px] h-[300px] md:w-[350px] md:h-[450px] relative">
                <Image
                  src={conference.image}
                  alt={conference.imageAlt}
                  fill
                  sizes="(max-width: 768px) 220px, 350px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
