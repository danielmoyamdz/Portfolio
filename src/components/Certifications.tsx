'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const certifications = [
  {
    name: 'Drupal 10 Developer',
    issuer: 'Acquia',
    date: '2024',
    image: '/certs/drupal.png',
    link: 'https://certification.acquia.com/user/daniel-moya'
  },
  {
    name: 'Java Spring Professional',
    issuer: 'VMware',
    date: '2023',
    image: '/certs/spring.png',
    link: 'https://www.credly.com/badges/spring-professional'
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    image: '/certs/aws.png',
    link: 'https://www.credly.com/badges/aws-certified-cloud-practitioner'
  },
  {
    name: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    date: '2023',
    image: '/certs/psm.png',
    link: 'https://www.scrum.org/certificates/psm-i'
  }
];

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {certifications.map((cert, index) => (
        <motion.a
          key={cert.name}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true }}
        >
          <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-32 mb-4">
              <Image
                src={cert.image}
                alt={cert.name}
                fill
                className="object-contain"
              />
            </div>
            
            <h3 className="text-lg font-semibold mb-2 text-heading-light dark:text-heading-dark group-hover:text-primary transition-colors duration-300">
              {cert.name}
            </h3>
            
            <div className="flex justify-between items-center text-sm text-text-light dark:text-text-dark">
              <span>{cert.issuer}</span>
              <span>{cert.date}</span>
            </div>
            
            <div className="mt-4 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {t('skills.viewCertificate')} →
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
} 