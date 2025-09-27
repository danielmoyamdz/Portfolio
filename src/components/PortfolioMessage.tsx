'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const PortfolioMessage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-4 right-4 backdrop-blur-md bg-black/20 dark:bg-black/20 border border-white/20 dark:border-white/20 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-sm font-medium">
      {t('portfolio.developedBy', 'Portfolio 100% desarrollado por Daniel Moya')}
    </div>
  );
};

export default PortfolioMessage; 