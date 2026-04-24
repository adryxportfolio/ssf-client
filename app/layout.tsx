import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Providers } from '@/components/Providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Safehands Security & Facility Solutions',
  description: 'Premium corporate website for Safehands Security & Facility Solutions Pvt. Ltd.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans text-slate-900 bg-white dark:bg-slate-950 dark:text-slate-100 flex flex-col min-h-screen transition-colors duration-300" suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main className="flex-grow pt-[80px]">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
