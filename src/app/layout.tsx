import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Providers } from './providers';
import ClientLayout from './ClientLayout';
import PersistentMessage from '../components/PersistentMessage';
import BackgroundFX from '../components/BackgroundFX';
import { publicUrl } from '@/lib/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://danielmoyamdz.github.io/Portfolio'),
  title: 'Daniel Moya Méndez | Software Developer',
  description:
    'Portfolio of Daniel Moya Méndez, software developer at CITRI&CO. ERP, SQL, Power Automate, Drupal and backend development.',
  icons: {
    icon: publicUrl('/favicon/favicon.ico'),
    apple: publicUrl('/images/dm-logo.png'),
  },
  openGraph: {
    title: 'Daniel Moya Méndez | Software Developer',
    description:
      'Software developer at CITRI&CO. Previously backend developer at Factorial GmbH.',
    images: [publicUrl('/images/dm-logo.png')],
    type: 'website',
    url: 'https://danielmoyamdz.github.io/Portfolio/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
          <BackgroundFX />
          <ClientLayout>{children}</ClientLayout>
          <PersistentMessage />
        </Providers>
      </body>
    </html>
  );
}
