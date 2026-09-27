'use client';

import Image from 'next/image';

const technologies = [
  { name: 'PHP', file: 'php.svg' },
  { name: 'Drupal', file: 'drupal.svg' },
  { name: 'Java', file: 'java.svg' },
  { name: 'Power BI', file: 'powerbi.svg' },
  { name: 'Python', file: 'python.svg' },
  { name: 'React', file: 'react.svg' },
  { name: 'Node.js', file: 'nodedotjs.svg' },
  { name: 'Next.js', file: 'nextdotjs.svg' },
  { name: 'MySQL', file: 'mysql.svg' },
  { name: 'PostgreSQL', file: 'postgresql.svg' },
  { name: 'MongoDB', file: 'mongodb.svg' },
  { name: 'Docker', file: 'docker.svg' },
];

export default function TechLogos() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 p-4">
      {technologies.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 relative flex items-center justify-center bg-card-light dark:bg-card-dark rounded-xl p-3 shadow-lg hover:scale-105 transition-transform">
            <Image
              src={`/tech/${tech.file}`}
              alt={tech.name}
              width={64}
              height={64}
              className="w-full h-full invert-0 dark:invert"
            />
          </div>
          <span className="mt-2 text-sm text-text-light dark:text-text-dark">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}
