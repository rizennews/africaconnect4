import { MetadataRoute } from 'next';
import { ARTICLES } from '@/data/articles';
import { MOCK_OPPORTUNITIES } from '@/data/procurement';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africaconnect4.net';
  const now = new Date();
  const locales = ['en', 'fr', 'pt'];

  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/activities', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/news', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/connectivity-expansion', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/open-science', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/climate-data-infrastructure', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/cybersecurity-threat-intelligence', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/capacity-building', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/women-in-stem', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/procurement', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/publications', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
  ];

  // Generate one entry per locale per static route with hreflang alternates
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${siteUrl}/${l}${route.path}`])
        ),
      },
    }))
  );

  // Generate one entry per locale per article with hreflang alternates
  const articleEntries: MetadataRoute.Sitemap = ARTICLES.flatMap((article) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}/news/${article.slug}`,
      lastModified: new Date(article.timestamp),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${siteUrl}/${l}/news/${article.slug}`])
        ),
      },
    }))
  );

  // Generate one entry per locale per procurement opportunity
  const procurementEntries: MetadataRoute.Sitemap = MOCK_OPPORTUNITIES.flatMap((opp) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}/procurement/${opp.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${siteUrl}/${l}/procurement/${opp.id}`])
        ),
      },
    }))
  );

  return [...staticEntries, ...articleEntries, ...procurementEntries];
}
