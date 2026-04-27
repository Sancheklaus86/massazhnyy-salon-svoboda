import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Массажный салон Свобода — Тольятти',
  description:
    'Профессиональный массаж в Тольятти. Классический, спортивный, расслабляющий массаж. Запишитесь онлайн.',
  keywords: 'массаж, массажный салон, Тольятти, расслабляющий массаж, спортивный массаж',
  openGraph: {
    title: 'Массажный салон Свобода — Тольятти',
    description: 'Профессиональный массаж в Тольятти. Запишитесь онлайн.',
    type: 'website',
    locale: 'ru_RU',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
