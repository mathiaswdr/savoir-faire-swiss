import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Savoir Faire Swiss - Entreprise de Construction & Rénovation',
    short_name: 'Savoir Faire Swiss',
    description: 'Entreprise de construction et rénovation en Suisse Romande. Spécialisée en peinture, isolation, plâtrerie et recyclage de déchets de chantier.',
    start_url: '/',
    display: 'standalone',
    background_color: '#EDF4DB',
    theme_color: '#7D9395',
    orientation: 'portrait-primary',
    categories: ['business', 'construction', 'renovation'],
    lang: 'fr-CH',
    dir: 'ltr',
    scope: '/',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable any'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable any'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
  }
}