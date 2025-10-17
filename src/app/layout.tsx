import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pathway Builder for Schools | Empower Every Student',
  description: 'A comprehensive platform that helps students discover their passions, build meaningful projects, and craft compelling college applications.',
  keywords: ['education', 'college readiness', 'student guidance', 'school platform'],
  openGraph: {
    title: 'Pathway Builder for Schools',
    description: 'Empower every student\'s college journey',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
