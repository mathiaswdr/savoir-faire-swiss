export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  year: number;
  category: string;
  duration: string;
  budget: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  challenges: string[];
  solutions: string[];
  works: string[];
  gallery: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "renovation-sol-murs-geneve",
    title: "Rénovation de sol et murs",
    location: "Genève",
    year: 2023,
    category: "Rénovation intérieure",
    duration: "3 mois",
    budget: "25 000 - 35 000 CHF",
    beforeImage: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775568176/renovation-1_tzpnzr.jpg",
    afterImage: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775549950/20250201_151725_je9amj.jpg",
    description: "Rénovation intérieure avec reprise complète des sols et des murs pour redonner un aspect propre, durable et soigné à l'espace.",
    challenges: [
      "Préparation des supports avant les finitions",
      "Reprise des surfaces abîmées",
      "Coordination des travaux de sol et de murs",
      "Obtention d'un rendu homogène sur l'ensemble de la pièce"
    ],
    solutions: [
      "Préparation et correction des supports",
      "Rénovation du revêtement de sol",
      "Remise en état des murs",
      "Finitions propres et adaptées à l'usage quotidien"
    ],
    works: ["Rénovation", "Sol", "Murs", "Finitions"],
    gallery: [],
  },
  {
    id: "2",
    slug: "renovation-murs-faux-plafond-led-lausanne",
    title: "Rénovation murs et faux plafond LED",
    location: "Lausanne",
    year: 2023,
    category: "Rénovation intérieure",
    duration: "2 mois",
    budget: "15 000 - 25 000 CHF",
    beforeImage: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550049/IMG-20250813-WA0039_gagstk.jpg",
    afterImage: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550046/IMG-20250822-WA0036_ceunur.jpg",
    description: "Rénovation des murs et du plafond avec création d'un faux plafond en plaques de plâtre, gorge lumineuse LED et éclairage indirect pour un rendu moderne et soigné.",
    challenges: [
      "Préparation des murs et du plafond avant les finitions",
      "Création d'un faux plafond avec renfoncement",
      "Intégration discrète des bandes LED",
      "Obtention d'un éclairage indirect régulier"
    ],
    solutions: [
      "Réalisation d'un faux plafond en plaques de plâtre",
      "Création d'une gorge lumineuse LED",
      "Reprise et finition des murs",
      "Mise en valeur de la pièce par un éclairage indirect"
    ],
    works: ["Rénovation", "Murs", "Faux plafond", "Gorge LED"],
    gallery: [],
  },
  {
    id: "3",
    slug: "renovation-plafond-appartement-montreux",
    title: "Rénovation plafond et appartement",
    location: "Montreux",
    year: 2022,
    category: "Rénovation d'appartement",
    duration: "6 mois",
    budget: "80 000 - 120 000 CHF",
    beforeImage: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550282/IMG-20260307-WA0026_c4kqpg.jpg",
    afterImage: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550277/IMG-20250930-WA0068_hlhytv.jpg",
    description: "Rénovation d'appartement avec reprise du plafond, des surfaces et des finitions pour transformer l'espace et obtenir un rendu propre, moderne et harmonieux.",
    challenges: [
      "Préparation du plafond et des surfaces existantes",
      "Reprise des zones abîmées",
      "Coordination des travaux dans l'appartement",
      "Obtention d'un rendu homogène dans l'ensemble de la pièce"
    ],
    solutions: [
      "Remise en état des supports",
      "Rénovation du plafond",
      "Application de finitions adaptées",
      "Travail soigné des angles et raccords"
    ],
    works: ["Rénovation", "Appartement", "Plafond", "Finitions"],
    gallery: [
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550317/IMG-20250930-WA0071_nodpql.jpg",
        alt: "Détail de la rénovation intérieure",
        caption: "Détail des finitions"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550314/IMG-20250930-WA0067_pnlhoe.jpg",
        alt: "Rendu final de la rénovation intérieure",
        caption: "Rendu final"
      }
    ],
  },
  {
    id: "4",
    slug: "renovation-complete-plafond-led-vevey",
    title: "Rénovation complète et plafond LED",
    location: "Vevey",
    year: 2023,
    category: "Rénovation complète",
    duration: "4 mois",
    budget: "45 000 - 60 000 CHF",
    beforeImage: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775570028/IMG-20260307-WA0032_1_a7jjfy.jpg",
    afterImage: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550421/IMG-20260307-WA0048_mpqln2.jpg",
    description: "Rénovation complète avec reprise des surfaces, finitions intérieures et création d'un plafond avec gorge lumineuse LED pour un rendu moderne et lumineux.",
    challenges: [
      "Préparation complète de l'espace avant les finitions",
      "Reprise des murs et du plafond",
      "Création d'un plafond avec renfoncement",
      "Intégration propre de l'éclairage LED indirect"
    ],
    solutions: [
      "Rénovation complète des supports",
      "Réalisation d'un plafond en plaques de plâtre",
      "Création d'une gorge lumineuse LED",
      "Finitions nettes et harmonisées dans toute la pièce"
    ],
    works: ["Rénovation complète", "Plafond", "Gorge LED", "Finitions"],
    gallery: [],
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}
