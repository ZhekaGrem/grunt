import type { Metadata } from 'next';
import { Open_Sans, Merriweather } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Providers from './providers';

const inter = Open_Sans({ subsets: ['cyrillic', 'latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Рецепти',
  description: 'Хороші рецепти',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-h_bg dark:bg-d_bg`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
