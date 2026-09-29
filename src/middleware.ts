import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'fr', 'pt'];
const defaultLocale = 'en';

// Simple function to get the preferred locale from Accept-Language header
function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLocale;

  // Parse the accept-language header
  // Example: "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7"
  const parsedLocales = acceptLanguage
    .split(',')
    .map(lang => {
      const parts = lang.split(';');
      return {
        code: parts[0].trim().split('-')[0].toLowerCase(), // e.g. "fr-FR" -> "fr"
        q: parts[1] && parts[1].startsWith('q=') ? parseFloat(parts[1].split('=')[1]) : 1.0
      };
    })
    .sort((a, b) => b.q - a.q); // sort by highest preference

  for (const parsed of parsedLocales) {
    if (locales.includes(parsed.code)) {
      return parsed.code;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already starts with a supported locale
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If they are already on a locale path (like /fr/about), let them through
  if (pathnameHasLocale) return;

  // Get preferred locale based on their browser settings
  const preferredLocale = getPreferredLocale(request);

  // Redirect them to the correct locale (e.g. /fr instead of showing a 404 on /)
  request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Do not run middleware on static files, images, or API routes
  matcher: ['/((?!_next/static|_next/image|favicon|api|.*\\..*).*)'],
};
