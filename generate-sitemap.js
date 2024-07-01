import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the routes you want to include in the sitemap
const links = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/product', changefreq: 'monthly', priority: 0.8 },
  { url: '/bloom', changefreq: 'monthly', priority: 0.8 },
  { url: '/math', changefreq: 'monthly', priority: 0.8 },
  { url: '/pricing', changefreq: 'monthly', priority: 0.8 },
  { url: '/gullak', changefreq: 'monthly', priority: 0.8 },
  { url: '/support', changefreq: 'monthly', priority: 0.8 },
  { url: '/xts-api', changefreq: 'monthly', priority: 0.8 },
  { url: '/list-of-charges', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

// Create a stream to write to
const sitemap = new SitemapStream({ hostname: 'https://www.acagarwal.com/' });

// Pipe your stream to a file
streamToPromise(sitemap)
  .then((data) => createWriteStream(path.join(__dirname, 'public', 'sitemap.xml')).write(data))
  .catch((error) => console.error(error));

// Write each link to the sitemap
links.forEach((link) => sitemap.write(link));

// End the sitemap stream
sitemap.end();
