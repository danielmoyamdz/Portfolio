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
    <main className="min-h-screen text-text-light dark:text-text-dark transition-colors duration-300">
      <div className="fixed top-4 right-4 flex items-center gap-4 z-50">
        <div className="flex items-center gap-2 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-full p-1">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
      {children}
    </main>
  );
} 