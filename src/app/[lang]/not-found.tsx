'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const translations: Record<string, any> = {
  en: {
    title: "This page seems to be off the network.",
    description: "The link you followed may be broken or the page may have been moved.",
    goBackTo: "Go back to",
    home: "home",
    andRejoin: "and stay connected with AfricaConnect4.",
  },
  fr: {
    title: "Cette page semble être hors réseau.",
    description: "Le lien que vous avez suivi est peut-être cassé ou la page a été déplacée.",
    goBackTo: "Retournez à",
    home: "l'accueil",
    andRejoin: "et restez connecté avec AfricaConnect4.",
  },
  pt: {
    title: "Esta página parece estar fora da rede.",
    description: "O link que seguiu pode estar partido ou a página pode ter sido movida.",
    goBackTo: "Volte para a",
    home: "página inicial",
    andRejoin: "e mantenha-se ligado ao AfricaConnect4.",
  },
};

export default function NotFound() {
  const pathname = usePathname();
  const langMatch = pathname.match(/^\/(en|fr|pt)(\/|$)/);
  const detectedLang = langMatch ? langMatch[1] : 'en';
  const nf = translations[detectedLang] || translations.en;

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#082668',
      color: '#ffffff',
      fontFamily: 'var(--font-outfit), system-ui, sans-serif',
      textAlign: 'center',
      padding: '2rem',
      borderRadius: '1.5rem',
      margin: '2rem',
    }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: '800px', height: '400px', margin: '0 auto 2rem' }}>
        <svg viewBox="0 0 800 400" width="100%" height="100%">
          <defs>
            <clipPath id="text-clip-404">
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central"
                    fontSize="380" fontWeight="900"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    letterSpacing="-15">
                404
              </text>
            </clipPath>
          </defs>

          <g clipPath="url(#text-clip-404)">
            {Array.from({ length: 50 }).map((_, i) => (
              <circle
                key={i}
                cx="400"
                cy="200"
                r={(i + 1) * 9}
                fill="none"
                stroke="#ffffff"
                strokeWidth={4 + (i % 3 === 0 ? 2 : 0)}
                strokeDasharray={`${8 + i * 2.5} ${6 + i * 2}`}
                opacity={1 - i * 0.015}
                strokeLinecap="round"
              />
            ))}
          </g>
        </svg>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1rem',
          color: '#ffffff',
        }}>
          {nf.title}
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '2rem',
          lineHeight: '1.6',
        }}>
          {nf.description}<br />
          {nf.goBackTo}{' '}
          <Link href={`/${detectedLang}`} style={{ color: '#fa9a0d', textDecoration: 'underline', fontWeight: '500' }}>
            {nf.home}
          </Link>{' '}
          {nf.andRejoin}
        </p>
      </div>
    </div>
  );
}
