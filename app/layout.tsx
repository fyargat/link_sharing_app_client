import { App } from '@/src/app';
import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Link Sharing App',
  description: 'Link Sharing App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={instrumentSans.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
