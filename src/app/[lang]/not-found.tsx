import Link from 'next/link';
import { lang } from 'next/root-params';

const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
  fr: () => import('@/dictionaries/fr.json').then((m) => m.default),
  pt: () => import('@/dictionaries/pt.json').then((m) => m.default),
};

export default async function NotFound() {
  let detectedLang = 'en';
  try {
    const paramLang = await lang();
    if (paramLang && ['en', 'fr', 'pt'].includes(paramLang)) {
      detectedLang = paramLang;
    }
  } catch {
    // fallback to 'en'
  }

  const dict = await dictionaries[detectedLang]();
  const nf = dict.notFound;

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#082668',
      color: '#ffffff',
      fontFamily: 'var(--font-outfit), system-ui, sans-serif',
      textAlign: 'center' as const,
      padding: '2rem',
      borderRadius: '1.5rem',
      margin: '2rem',
    }}>
      <div style={{ position: 'relative' as const, width: '100%', maxWidth: '800px', height: '400px', margin: '0 auto 2rem' }}>
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
