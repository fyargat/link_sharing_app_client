import cn from 'classnames';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import { App } from '@/src/app';

const openSans = Open_Sans({
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
      <body className={cn(openSans.className, 'scroll-content')}>
        <App>{children}</App>
      </body>
    </html>
  );
}
