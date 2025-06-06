'use client';

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/client';
import { ThemeProvider } from '@/context/ThemeContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </I18nextProvider>
  );
} 