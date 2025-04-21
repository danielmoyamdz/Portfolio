'use client';

import React from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-text">
      <LanguageSwitcher />
      {children}
    </main>
  );
} 