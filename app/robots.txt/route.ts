import { MetadataRoute } from 'next'
 
export function GET(): Response {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /node_modules/

# Allow important SEO files
Allow: /robots.txt
Allow: /sitemap.xml
Allow: /sitemap-*.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Sitemap location
Sitemap: https://savoirfaireswiss.com/sitemap.xml

# Specific rules for search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Block unwanted bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}