import type { Metadata } from "next";

const siteUrl = "https://www.lesavoirfaireswiss.ch";

export const siteMetadata: Metadata = {
  title: {
    default: "Savoir Faire Swiss - Entreprise de Construction & Rénovation en Suisse Romande",
    template: "%s | Savoir Faire Swiss"
  },
  description: "Entreprise de construction et rénovation en Suisse Romande. Spécialistes en peinture intérieure et extérieure, isolation thermique et acoustique, plâtrerie et recyclage de déchets de chantier à Genève, Lausanne, Fribourg, Vevey et environs.",
  keywords: [
    // Services principaux
    "entreprise construction suisse romande",
    "rénovation maison genève lausanne",
    "peinture intérieure extérieure suisse",
    "isolation thermique acoustique",
    "plâtrerie cloisons faux-plafonds",
    "recyclage déchets chantier",
    
    // Localisation géographique
    "construction genève",
    "rénovation lausanne",
    "peintre fribourg",
    "isolation vevey",
    "entreprise bâtiment montreux",
    "travaux construction suisse romande",
    
    // Services spécifiques
    "peinture façade suisse",
    "isolation ITI ITE",
    "enduits lissage plâtre",
    "évacuation déchets construction",
    "artisan peintre certifié",
    
    // Mots-clés longue traîne
    "entreprise construction écologique suisse",
    "rénovation appartement genève",
    "isolation combles perdus suisse romande",
    "peinture intérieure sans COV",
    "plâtrerie sèche traditionnelle"
  ],
  authors: [{ name: "Savoir Faire Swiss" }],
  creator: "Savoir Faire Swiss",
  publisher: "Savoir Faire Swiss",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: siteUrl,
    siteName: "Savoir Faire Swiss",
    title: "Savoir Faire Swiss - Entreprise de Construction & Rénovation en Suisse Romande",
    description: "Votre partenaire de confiance pour tous vos projets de construction et rénovation en Suisse Romande. Peinture, isolation, plâtrerie et recyclage.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1201,
        height: 601,
        alt: "Savoir Faire Swiss - Entreprise de Construction en Suisse Romande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savoir Faire Swiss - Construction & Rénovation Suisse Romande",
    description: "Entreprise de construction spécialisée en peinture, isolation et plâtrerie en Suisse Romande.",
    images: [
      {
        url: "/twitter-image.jpg",
        width: 1201,
        height: 631,
        alt: "Savoir Faire Swiss - Construction & Rénovation Suisse Romande",
      },
    ],
    creator: "@savoirfaireswiss",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "fr-CH": siteUrl,
    },
  },
  verification: {
    google: "votre-code-google-search-console",
    // Ajoutez d'autres vérifications si nécessaire
  },
  category: "Construction & Rénovation",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(siteUrl),
  other: {
    // Schema.org pour le référencement local
    "geo.region": "CH-VD",
    "geo.placename": "Suisse Romande",
    "geo.position": "46.5197;6.6323", // Coordonnées de Lausanne
    "ICBM": "46.5197, 6.6323",
    
    // Informations business
    "business.contact.street-address": "Moulin-au-Rey 8",
    "business.contact.locality": "Lully-Fribourg",
    "business.contact.postal-code": "1470",
    "business.contact.country-name": "Switzerland",
    "business.contact.phone": "+41 76 709 60 11",
    "business.contact.email": "lesavoirfaireswiss@gmail.com",
    
    // Secteur d'activité
    "business.category": "Construction Company",
    "business.hours": "Monday-Friday 08:00-18:00",
  },
};
