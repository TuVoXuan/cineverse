import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import PageLayout from '@/components/Layout/PageLayout';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Toaster } from 'react-hot-toast';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AntdRegistry>
          <PageLayout>{children}</PageLayout>
        </AntdRegistry>
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      </body>
    </html>
  );
}
