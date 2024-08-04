// pages/sitemap.xml.js
import { NextResponse } from 'next/server';

const baseUrl = 'https://www.towerscem.com'; 

export async function GET() {
  const pages = [
    { url: '/', lastModified: new Date() },
    { url: '/historia', lastModified: new Date() },
    { url: '/products', lastModified: new Date() },
    { url: '/team', lastModified: new Date() },
    { url: '/contacto', lastModified: new Date() },
    { url: '/noticias', lastModified: new Date() },
    { url: '/crowdfunding', lastModified: new Date() },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(({ url, lastModified }) => {
        return `
          <url>
            <loc>${baseUrl}${url}</loc>
            <lastmod>${lastModified.toISOString()}</lastmod>
          </url>
        `;
      })
      .join('')}
  </urlset>`;

  return NextResponse.json(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
