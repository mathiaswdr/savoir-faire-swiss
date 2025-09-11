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
    slug: "renovation-cuisine-moderne-geneve",
    title: "Rénovation Cuisine Moderne",
    location: "Genève",
    year: 2023,
    category: "Rénovation",
    duration: "3 mois",
    budget: "25 000 - 35 000 CHF",
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop",
    afterImage: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    description: "Transformation complète d'une cuisine datant des années 80 en un espace moderne et fonctionnel. Ce projet a impliqué une refonte totale de l'agencement pour optimiser l'espace et créer un lieu de vie convivial.",
    challenges: [
      "Espace restreint nécessitant une optimisation maximale",
      "Plomberie et électricité à rénover entièrement",
      "Conservation de certains éléments structurels",
      "Respect des normes modernes tout en gardant le charme de l'appartement"
    ],
    solutions: [
      "Création d'un îlot central multifonctionnel",
      "Installation d'un éclairage LED intégré",
      "Choix de matériaux durables et faciles d'entretien",
      "Optimisation du rangement avec des solutions sur-mesure"
    ],
    works: ["Rénovation", "Peinture", "Plomberie", "Électricité"],
    gallery: [
      {
        url: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg",
        alt: "Vue d'ensemble de la nouvelle cuisine",
        caption: "Vue d'ensemble de la nouvelle cuisine avec l'îlot central"
      },
      {
        url: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
        alt: "Détail des finitions",
        caption: "Détail des finitions et de l'éclairage intégré"
      },

    ],
    testimonial: {
      text: "Nous sommes ravis du résultat ! L'équipe de Savoir Faire Swiss a su transformer notre ancienne cuisine en un espace moderne et fonctionnel. Le travail est impeccable et les délais ont été respectés.",
      author: "Marie Dubois",
      role: "Propriétaire"
    }
  },
  {
    id: "2",
    slug: "renovation-salle-bain-lausanne",
    title: "Rénovation Salle de Bain",
    location: "Lausanne",
    year: 2023,
    category: "Rénovation",
    duration: "2 mois",
    budget: "15 000 - 25 000 CHF",
    beforeImage: "https://images.pexels.com/photos/804392/pexels-photo-804392.jpeg",
    afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1920&h=1080&fit=crop",
    description: "Modernisation complète d'une salle de bain avec création d'un espace spa privé. Focus sur les matériaux nobles et les finitions de qualité pour créer une atmosphère relaxante.",
    challenges: [
      "Évacuation et ventilation complexes",
      "Étanchéité parfaite requise",
      "Intégration de technologies modernes",
      "Optimisation de l'éclairage naturel"
    ],
    solutions: [
      "Installation d'une douche à l'italienne",
      "Carrelage grand format pour agrandir l'espace",
      "Éclairage intelligent avec variateur",
      "Ventilation mécanique contrôlée"
    ],
    works: ["Rénovation", "Carrelage", "Plomberie", "Électricité"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop",
        alt: "Nouvelle salle de bain moderne",
        caption: "Vue d'ensemble de la salle de bain rénovée"
      },
      {
        url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop",
        alt: "Douche à l'italienne",
        caption: "Douche à l'italienne avec carrelage grand format"
      },
      {
        url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop",
        alt: "Éclairage moderne",
        caption: "Éclairage LED intégré au miroir"
      }
    ],
    testimonial: {
      text: "Un travail remarquable ! Notre salle de bain est maintenant un véritable petit spa. L'attention aux détails et la qualité des finitions sont exceptionnelles.",
      author: "Pierre Martin",
      role: "Propriétaire"
    }
  },
  {
    id: "3",
    slug: "extension-maison-montreux",
    title: "Extension de Maison",
    location: "Montreux",
    year: 2022,
    category: "Extension",
    duration: "6 mois",
    budget: "80 000 - 120 000 CHF",
    beforeImage: "https://images.pexels.com/photos/11427524/pexels-photo-11427524.jpeg",
    afterImage: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg",
    description: "Agrandissement d'une maison familiale avec création d'un espace de vie ouvert donnant sur le jardin. Intégration harmonieuse avec l'architecture existante.",
    challenges: [
      "Respect de l'architecture existante",
      "Fondations sur terrain en pente",
      "Grandes ouvertures vitrées",
      "Isolation thermique optimale"
    ],
    solutions: [
      "Extension avec ossature bois moderne",
      "Baies vitrées coulissantes panoramiques",
      "Toiture végétalisée pour l'isolation",
      "Terrasse en continuité avec le salon"
    ],
    works: ["Extension", "Gros œuvre", "Charpente", "Isolation"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        alt: "Extension moderne",
        caption: "Vue extérieure de l'extension avec grandes baies vitrées"
      },
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        alt: "Espace de vie ouvert",
        caption: "Nouvel espace de vie ouvert sur le jardin"
      },
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        alt: "Terrasse intégrée",
        caption: "Terrasse en continuité avec le salon"
      },
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        alt: "Charpente moderne",
        caption: "Charpente bois apparente dans le nouveau salon"
      }
    ],
    testimonial: {
      text: "L'extension s'intègre parfaitement à notre maison existante. L'équipe a su respecter notre budget et nos délais tout en nous proposant des solutions innovantes.",
      author: "Sophie Leroy",
      role: "Propriétaire"
    }
  },
  {
    id: "4",
    slug: "renovation-appartement-vevey",
    title: "Rénovation d'Appartement",
    location: "Vevey",
    year: 2023,
    category: "Rénovation complète",
    duration: "4 mois",
    budget: "45 000 - 60 000 CHF",
    beforeImage: "https://images.pexels.com/photos/3562689/pexels-photo-3562689.jpeg",
    afterImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop",
    description: "Rénovation complète d'un appartement 3.5 pièces avec redistribution des espaces pour créer un loft moderne et lumineux au cœur de Vevey.",
    challenges: [
      "Redistribution des espaces sans toucher aux murs porteurs",
      "Amélioration de la luminosité naturelle",
      "Modernisation des installations",
      "Conservation du parquet d'origine"
    ],
    solutions: [
      "Ouverture entre cuisine et salon",
      "Verrière d'intérieur pour séparer sans cloisonner",
      "Rénovation et vitrification du parquet ancien",
      "Installation domotique moderne"
    ],
    works: ["Rénovation", "Peinture", "Finitions", "Électricité"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        alt: "Salon rénové",
        caption: "Salon ouvert avec parquet d'origine restauré"
      },
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        alt: "Cuisine ouverte",
        caption: "Cuisine ouverte sur le salon"
      },
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        alt: "Verrière intérieure",
        caption: "Verrière séparant la chambre du salon"
      }
    ],
    testimonial: {
      text: "Notre ancien appartement sombre est devenu un loft lumineux et moderne. Nous recommandons vivement Savoir Faire Swiss pour leur professionnalisme et leur créativité.",
      author: "Thomas Weber",
      role: "Propriétaire"
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}