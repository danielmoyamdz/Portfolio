'use client';

import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { publicUrl } from '@/lib/site';

export default function CV() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';
  const cvHref = publicUrl(`/cv/cv_${lang}.pdf`);

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-4 text-heading-light dark:text-heading-dark tracking-tight">
        {t('cv.title')}
      </h2>
      <p className="text-center text-subtext-light dark:text-subtext-dark mb-8 max-w-2xl mx-auto">
        {t('cv.subtitle')}
      </p>

      <div className="max-w-3xl mx-auto bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-card-light dark:shadow-card-dark p-8 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={cvHref}
          download={`CV_Daniel_Moya_${lang.toUpperCase()}.pdf`}
          className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all"
        >
          <FaDownload /> {t('cv.download')}
        </a>
        <a
          href={cvHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-all"
        >
          <FaExternalLinkAlt /> {t('cv.open')}
        </a>
      </div>
    </section>
  );
}
