'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        404
      </h1>
      <p className="text-xl text-text-light dark:text-text-dark mb-8">{t('notFound.message')}</p>
      <Link href="/" className="glass-effect px-6 py-3 rounded-full hover-scale inline-block">
        {t('notFound.back')}
      </Link>
    </div>
  );
}
