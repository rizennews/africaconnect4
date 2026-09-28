import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DeveloperFootprint } from "@/components/DeveloperFootprint";
import "./globals.css";

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
      "en": "/",
      "fr": "/fr",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    alternateLocale: ["fr_FR"],
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
      "inLanguage": ["en", "fr"]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <DeveloperFootprint />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
