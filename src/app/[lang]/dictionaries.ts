import { notFound } from 'next/navigation';
import { lang } from 'next/root-params';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
  fr: () => import('@/dictionaries/fr.json').then((m) => m.default),
  pt: () => import('@/dictionaries/pt.json').then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ['en', 'fr', 'pt'];

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

/**
 * Load the dictionary for the current locale.
 * Uses next/root-params to avoid prop-drilling.
 */
export const getDictionary = async () => {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
