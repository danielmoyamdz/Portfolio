'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const certifications = [
  {
    name: 'Microsoft Office 365 & Power Platform Master',
    issuer: 'Microsoft',
    date: '2025',
    image: '/Portfolio/certs/Certificado_Power_BI.svg',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/J2GUKHOIGMVS',
    isMaster: true
  },
  {
    name: 'SQL for Data Science',
    issuer: 'University of California, Davis',
    date: '2025',
    image: '/Portfolio/certs/Certificado_Power_BI.svg',
    link: 'https://www.coursera.org/account/accomplishments/verify/V97Z5Z53O0M5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course'
  },
  {
    name: 'Cisco Certified Support Technician Cybersecurity',
    issuer: 'Cisco',
    date: '2025',
    image: '/Portfolio/certs/Security_compliance_and_identity_fundamentals.png',
    link: 'https://www.credly.com/badges/e8bc2ad3-c6c0-4085-a9b3-0f72dbb39348/linked_in_profile'
  },
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
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
          <div className={`border p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col ${
            cert.isMaster 
              ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-300 dark:border-yellow-600 ring-2 ring-yellow-300/50' 
              : 'bg-card-light dark:bg-card-dark border-border-light dark:border-border-dark'
          }`}>
            {cert.isMaster && (
              <div className="flex items-center justify-center mb-2">
                <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full shadow-sm">
                  🎓 MASTER CERTIFICATION
                </span>
              </div>
            )}
            
            <div className="relative w-full h-32 mb-4 flex-shrink-0">
              <Image
                src={cert.image}
                alt={cert.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                priority={index < 3}
                unoptimized
              />
            </div>
            
            <h3 className={`text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 ${
              cert.isMaster 
                ? 'text-yellow-800 dark:text-yellow-200' 
                : 'text-heading-light dark:text-heading-dark'
            }`}>
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
                className={`mt-4 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 block ${
                  cert.isMaster ? 'text-yellow-600 dark:text-yellow-400' : 'text-primary'
                }`}
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