import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Providers from '@/state/providers';

const inter = Open_Sans({ subsets: ['cyrillic', 'latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Рецепти провірені',
  description: 'Найкращі рецепти які варто повторити',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" suppressHydrationWarning>
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
