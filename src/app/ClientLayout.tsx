'use client';

import React from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import ThemeToggle from '../components/ThemeToggle';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors">
      <div className="fixed top-4 right-4 flex gap-4">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
      {children}
    </main>
  );
} 