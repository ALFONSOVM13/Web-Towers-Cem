// pages/sitemap.xml.js
import { NextResponse } from "next/server";

const baseUrl = "https://www.towerscem.com";

export async function GET() {
  const pages = [
    { url: "/", lastModified: new Date(), changefreq: "daily", priority: 1.0 },
    { url: "/historia", lastModified: new Date(), changefreq: "monthly", priority: 0.8 },
    { url: "/productos/uso-general", lastModified: new Date(), changefreq: "weekly", priority: 0.9 },
    { url: "/productos/uso-estructural", lastModified: new Date(), changefreq: "weekly", priority: 0.9 },
    { url: "/equipo-towers-cem", lastModified: new Date(), changefreq: "monthly", priority: 0.7 },
    { url: "/contacto", lastModified: new Date(), changefreq: "monthly", priority: 0.8 },
    { url: "/noticias", lastModified: new Date(), changefreq: "daily", priority: 0.6 },
    { url: "/crowdfunding", lastModified: new Date(), changefreq: "monthly", priority: 0.5 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(({ url, lastModified, changefreq, priority }) => {
        return `
          <url>
            <loc>${baseUrl}${url}</loc>
            <lastmod>${lastModified.toISOString()}</lastmod>
            <changefreq>${changefreq}</changefreq>
            <priority>${priority}</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  return NextResponse.json(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
