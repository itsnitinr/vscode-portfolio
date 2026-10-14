import type { Metadata } from 'next';

import Layout from '@/components/Layout';
import { profile } from '@/portfolio.config';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Portfolio`,
    template: `${profile.name} | %s`,
  },
  description: profile.metaDescription,
  keywords: profile.keywords,
  openGraph: {
    title: `${profile.name}'s Portfolio`,
    description: profile.ogDescription,
    images: [profile.ogImage],
    url: profile.siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
