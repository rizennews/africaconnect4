import React from 'react';
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DeveloperFootprint } from '@/components/DeveloperFootprint';
import { getDictionary, hasLocale, locales, type Locale } from './dictionaries';
import "../globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AfricaConnect4 | Research & Education Networking in Africa",
    template: "%s | AfricaConnect4",
  },
  description: "AfricaConnect4 is a WACREN initiative co-funded by the European Union, delivering high-speed internet networks and digital services for research and education across Sub-Saharan Africa.",
  applicationName: "AfricaConnect4",
  keywords: [
    "AfricaConnect4",
    "WACREN",
    "NREN",
    "Research and Education Network",
    "West and Central Africa",
    "Open Science",
    "LIBSENSE",
    "Climate Data Infrastructure",
    "Cybersecurity",
    "High-Speed Connectivity",
    "European Union",
    "Global Gateway"
  ],
  authors: [{ name: "Padmore Aning", url: "https://padmoreaning.com" }],
  creator: "Padmore Aning",
  publisher: "WACREN",
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "fr": "/fr",
      "pt": "/pt",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    alternateLocale: ["fr_FR", "pt_PT"],
    url: siteUrl,
    siteName: "AfricaConnect4",
    title: "AfricaConnect4 | Research & Education Networking in Africa",
    description: "AfricaConnect4 is a WACREN initiative co-funded by the European Union, delivering high-speed internet networks and digital services across Sub-Saharan Africa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AfricaConnect4 - Research & Education Networking in Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AfricaConnect4 | Research & Education Networking in Africa",
    description: "AfricaConnect4 is a WACREN initiative co-funded by the European Union, delivering high-speed internet networks and digital services across Sub-Saharan Africa.",
    images: ["/og-image.jpg"],
    creator: "@WACREN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "AfricaConnect4",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#logo`,
        "url": `${siteUrl}/og-image.jpg`,
        "caption": "AfricaConnect4"
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "WACREN",
        "url": "https://wacren.net"
      },
      "funder": {
        "@type": "Organization",
        "name": "European Union"
      },
      "sameAs": [
        "https://wacren.net",
        "https://twitter.com/WACREN"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "AfricaConnect4",
      "description": "High-Speed Connectivity and Digital Services for Research and Education in West and Central Africa",
      "publisher": {
        "@id": `${siteUrl}/#organization`
      },
      "inLanguage": ["en", "fr", "pt"]
    }
  ]
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary();

  return (
    <html lang={lang} className={outfit.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <DeveloperFootprint />
        <Header dict={dict.header} lang={lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
