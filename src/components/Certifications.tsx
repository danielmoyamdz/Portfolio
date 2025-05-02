'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const certifications = [
  {
    name: 'Power BI Data Analyst Associate',
    issuer: 'Datahack',
    date: '2025',
    image: '/Portfolio/certs/Certificado_Power_BI.svg',
    link: null
  },
  {
    name: 'Artificial Intelligence Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    image: '/Portfolio/certs/Artificial_Intelligence_Fundamentals.jpeg',
    link: 'https://www.credly.com/badges/d5caed9e-17dd-413e-b371-a7a6a1389077'
  },
  {
    name: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    image: '/Portfolio/certs/Azure_AI_Fundamentals.png',
    link: 'https://www.credly.com/badges/03206005-9717-4f6d-85f8-aac8d0be9b0b'
  },
  {
    name: 'Security, Compliance, and Identity Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    image: '/Portfolio/certs/Security_compliance_and_identity_fundamentals.png',
    link: 'https://www.credly.com/badges/0f7e24ca-a665-4fe8-930e-1d863c53490b'
  }
];

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.name}
          className="group h-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true }}
        >
          <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            <div className="relative w-full h-32 mb-4 flex-shrink-0">
              <Image
                src={cert.image}
                alt={cert.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-contain"
                priority={index < 2}
                unoptimized
              />
            </div>
            
            <h3 className="text-lg font-semibold mb-2 text-heading-light dark:text-heading-dark group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {cert.name}
            </h3>
            
            <div className="flex justify-between items-center text-sm text-text-light dark:text-text-dark mt-auto">
              <span>{cert.issuer}</span>
              <span>{cert.date}</span>
            </div>
            
            {cert.link && (
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 block"
              >
                {t('skills.viewCertificate')} →
              </motion.a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
} 