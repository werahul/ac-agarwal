const fs = require('fs');

const pages = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/blog',
  // add all your routes here
];

const baseUrl = 'https://acagarwal.com';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => {
    return `
    <url>
      <loc>${baseUrl}${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
    `;
  }).join('')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap);

console.log('Sitemap generated successfully.');
