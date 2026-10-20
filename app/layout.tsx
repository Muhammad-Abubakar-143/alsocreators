import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { Shell } from '@/components/providers/shell';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AlsoCreators — Digital Marketing & Content Creation Agency',
  description:
    'A premium creative agency at the intersection of design, motion, and technology. We craft cinematic brands, content, and digital experiences.',
  keywords: ['digital marketing', 'content creation', 'web development', 'creative agency', 'graphic design'],
  openGraph: {
    title: 'AlsoCreators — Digital Marketing & Content Creation Agency',
    description: 'A premium creative agency at the intersection of design, motion, and technology.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
      <body className="font-body bg-ink text-offwhite antialiased">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
