
import { MetadataRoute } from 'next';
import { SITE_CONFIG } from 'shared';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;
  
  const routes = [
    '',
    '/about',
    '/services',
    '/shop',
    '/portfolio',
    '/career',
    '/vision',
    '/contact',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
