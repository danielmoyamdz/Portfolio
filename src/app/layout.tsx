import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../i18n/client';
import { Providers } from './providers';
import ClientLayout from './ClientLayout';
import PersistentMessage from '../components/PersistentMessage';
import ParticlesBackground from '../components/ParticlesBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daniel Moya Portfolio',
  description: 'Professional portfolio showcasing backend development expertise',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/dm-logo.png" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Daniel Moya Portfolio" />
        <meta property="og:description" content="Professional portfolio showcasing backend development expertise" />
        <meta property="og:image" content="/images/dm-logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://danielmoyamdz.github.io/Portfolio/" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Daniel Moya Portfolio" />
        <meta name="twitter:description" content="Professional portfolio showcasing backend development expertise" />
        <meta name="twitter:image" content="/images/dm-logo.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} transition-colors duration-300`}>
        <div className="fixed inset-0 bg-background-light/50 dark:bg-[#181C24]/95 transition-colors duration-300 -z-20 min-h-screen" />
        <Providers>
          <ParticlesBackground />
          <ClientLayout>
            {children}
          </ClientLayout>
          <PersistentMessage />
        </Providers>
      </body>
    </html>
  );
} 