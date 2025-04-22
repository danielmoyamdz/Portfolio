import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../i18n/client';
import { Providers } from './providers';
import ClientLayout from './ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daniel Moya Portfolio',
  description: 'Professional portfolio showcasing backend development expertise',
  icons: {
    icon: [
      {
        url: '/favicon/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon/logo.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/favicon/logo.png',
        type: 'image/png',
        sizes: '16x16',
      }
    ],
    apple: [
      {
        url: '/favicon/logo.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon/logo.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon/logo.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Providers>
          <ClientLayout>
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
} 