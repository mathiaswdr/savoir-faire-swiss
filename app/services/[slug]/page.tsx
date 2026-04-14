import Image from "next/image";
import { Phone, Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import ScrollToButton from "@/components/ui/scroll-to-button";
import { ArrowDown } from "lucide-react";
import NavigateToButton from "@/components/navigation/navigate-to-button";
import ProjectGalleryModal from "@/components/project-gallery-modal";

// Types pour les services
interface ServiceGalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface ServiceDetail {
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  gallery?: ServiceGalleryImage[];
  hideGallery?: boolean;
  features: string[];
  process: string[];
  mainColor: string;
  crossColor: string;
  duration: string;
}

// Configuration des services
const servicesData: Record<string, ServiceDetail> = {
  "peinture": {
    title: "Peinture",
    description: "Redonnez du caractère à vos espaces avec notre service de peinture",
    longDescription: "Redonnez du caractère à vos espaces avec notre service de peinture intérieure et extérieure. Nous préparons soigneusement les supports (ponçage, rebouchage, impression), protégeons votre chantier et appliquons des peintures durables à faibles émissions. Murs, plafonds, boiseries, métal ou façades : finitions mates, velours ou satin, nuanciers RAL/NCS à la demande.",
    images: [
      "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550046/IMG-20250822-WA0036_ceunur.jpg",
      "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
      "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg",
      "https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg"
    ],
    gallery: [
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550046/IMG-20250822-WA0036_ceunur.jpg",
        alt: "Travaux de peinture intérieure terminés"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550421/IMG-20260307-WA0048_mpqln2.jpg",
        alt: "Finitions de peinture et rénovation intérieure"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550314/IMG-20250930-WA0067_pnlhoe.jpg",
        alt: "Détail des finitions de peinture"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550049/IMG-20250813-WA0039_gagstk.jpg",
        alt: "Travaux de peinture avant finitions"
      }
    ],
    features: [
      "Peinture intérieure et extérieure",
      "Préparation des supports",
      "Ponçage et rebouchage",
      "Application de sous-couches",
      "Finitions mates, velours ou satin",
      "Nuanciers RAL/NCS personnalisés"
    ],
    process: [
      "Diagnostic et étude du projet",
      "Protection du chantier",
      "Préparation des surfaces",
      "Application des sous-couches",
      "Peinture et finitions",
      "Nettoyage et contrôle qualité"
    ],
    mainColor: "#7D9395",
    crossColor: "#EDF4DB",
    duration: "1-4 semaines"
  },
  "platrerie": {
    title: "Plâtrerie",
    description: "Travaux de plâtrerie professionnels pour tous vos projets",
    longDescription: "Nos équipes réalisent vos travaux de plâtrerie : cloisons et doublages en plaques de plâtre, faux-plafonds, enduits et lissage, bandes et joints. Solutions thermiques et phoniques, plaques hydrofuges et coupe-feu selon les besoins. Chantier protégé, finitions nettes, délais respectés.",
    images: [
      "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775571013/IMG-20260307-WA0321_ezgm9o.jpg",
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/209266/pexels-photo-209266.jpeg",
      "https://images.pexels.com/photos/7931/pexels-photo-7931.jpg",
    ],
    gallery: [
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550046/IMG-20250822-WA0036_ceunur.jpg",
        alt: "Travaux de plâtrerie et finitions intérieures terminés"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550421/IMG-20260307-WA0048_mpqln2.jpg",
        alt: "Finitions de plâtrerie et rénovation intérieure"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550314/IMG-20250930-WA0067_pnlhoe.jpg",
        alt: "Détail des finitions de plâtrerie"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775572029/IMG-20260307-WA0328_z3ajrr.jpg",
        alt: "Détail des travaux de plâtrerie"
      }
    ],
    features: [
      "Cloisons et doublages",
      "Faux-plafonds",
      "Enduits et lissage",
      "Bandes et joints",
      "Plaques hydrofuges",
      "Solutions coupe-feu"
    ],
    process: [
      "Étude du projet",
      "Préparation du chantier",
      "Pose des structures",
      "Application des enduits",
      "Ponçage et lissage",
      "Finitions et nettoyage"
    ],
    mainColor: "#B8D8D8",
    crossColor: "#EC6B60",
    duration: "2-6 semaines"
  },
  "isolation": {
    title: "Isolation",
    description: "Améliorez le confort thermique et acoustique de vos bâtiments",
    longDescription: "Améliorez le confort thermique et acoustique de vos bâtiments. Isolation des combles, murs, planchers et toitures (ITI/ITE), traitement des ponts thermiques, pose de pare-vapeur et membranes d'étanchéité à l'air. Matériaux adaptés (laine minérale, fibre de bois, PIR, ouate). Chantier protégé, finitions soignées, économies d'énergie durables.",
    images: [
      "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775571080/IMG-20260307-WA0028_zpdrhb.jpg",
      "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1625047509168-a7026f3c3d01?w=800&h=600&fit=crop"
    ],
    gallery: [
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775568176/renovation-1_tzpnzr.jpg",
        alt: "Travaux d'isolation avant rénovation"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775572087/IMG-20260307-WA0165_ea2oy7.jpg",
        alt: "Travaux d'isolation en cours"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775571080/IMG-20260307-WA0028_zpdrhb.jpg",
        alt: "Finitions d'isolation intérieure"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775549950/20250201_151725_je9amj.jpg",
        alt: "Rendu final des travaux d'isolation"
      }
    ],
    features: [
      "Isolation des combles",
      "Isolation des murs (ITI/ITE)",
      "Isolation des planchers",
      "Traitement des ponts thermiques",
      "Pose de pare-vapeur",
      "Membranes d'étanchéité à l'air"
    ],
    process: [
      "Diagnostic thermique",
      "Choix des matériaux",
      "Préparation des supports",
      "Pose de l'isolation",
      "Étanchéité à l'air",
      "Contrôle et certification"
    ],
    mainColor: "#EC6B60",
    crossColor: "#B8D8D8",
    duration: "1-3 semaines"
  },
  "recyclage": {
    title: "Recyclage",
    description: "Tri et évacuation responsables des déchets de chantier",
    longDescription: "Tri et évacuation responsables des déchets de chantier : inertes, bois, ferrailles, cartons/plastiques, plâtre, D3E et déchets spécifiques. Bennes dédiées, acheminement vers filières agréées et site laissé propre avec justificatifs de prise en charge.",
    images: [
      "https://images.pexels.com/photos/33842119/pexels-photo-33842119.jpeg",
      "https://images.pexels.com/photos/6990568/pexels-photo-6990568.jpeg",
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&h=600&fit=crop"
    ],
    hideGallery: true,
    features: [
      "Tri sélectif des déchets",
      "Évacuation des inertes",
      "Recyclage bois et ferrailles",
      "Gestion des déchets spécifiques",
      "Bennes dédiées",
      "Justificatifs de prise en charge"
    ],
    process: [
      "Audit des déchets",
      "Mise en place du tri",
      "Installation des bennes",
      "Évacuation régulière",
      "Acheminement filières agréées",
      "Remise des certificats"
    ],
    mainColor: "#4F6367",
    crossColor: "#EDF4DB",
    duration: "Selon chantier"
  },
  "carrelage-et-parquets": {
    title: "Carrelage et Parquets",
    description: "Pose soignée de carrelage, faïence et parquets pour rénover durablement vos sols",
    longDescription: "Nous réalisons la pose de carrelage, faïence et parquets avec une approche complète : préparation des supports, ragréage si nécessaire, calepinage, pose collée ou flottante, finitions périphériques et conseils sur l'entretien. Nous intervenons en rénovation comme en neuf pour les pièces de vie, cuisines, salles de bain et espaces professionnels, avec un rendu propre, durable et aligné à vos usages.",
    images: [
      "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775549950/20250201_151725_je9amj.jpg",
      "https://res.cloudinary.com/dgznmx5v2/image/upload/v1776161682/IMG-20250913-WA0014_s4upcn.jpg",
      "https://res.cloudinary.com/dgznmx5v2/image/upload/v1776161758/20251106_084026_iviaq7.jpg",
      "https://res.cloudinary.com/dgznmx5v2/image/upload/v1776161792/20250314_164027_ohqcay.jpg"
    ],
    gallery: [
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775549950/20250201_151725_je9amj.jpg",
        alt: "Carrelage et parquets - vue d'ensemble du chantier terminé"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1776161682/IMG-20250913-WA0014_s4upcn.jpg",
        alt: "Pose de carrelage et finitions intérieures"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1776161758/20251106_084026_iviaq7.jpg",
        alt: "Détail des finitions de parquet"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1776161792/20250314_164027_ohqcay.jpg",
        alt: "Rendu final carrelage et parquets"
      }
    ],
    features: [
      "Pose de carrelage sol et mur",
      "Faïence pour cuisines et salles de bain",
      "Pose de parquets massifs, contrecollés et stratifiés",
      "Préparation des supports et ragréage",
      "Joints, plinthes et finitions périphériques",
      "Conseils sur les matériaux et l'entretien"
    ],
    process: [
      "Visite technique et prise de mesures",
      "Préparation et mise à niveau des supports",
      "Calepinage et validation des finitions",
      "Pose du carrelage ou du parquet",
      "Jointoiement, plinthes et ajustements",
      "Nettoyage final et réception du chantier"
    ],
    mainColor: "#7D9395",
    crossColor: "#EDF4DB",
    duration: "3 jours à 2 semaines"
  },
  "fenetres-et-stores-electriques": {
    title: "Fenêtres et stores électriques",
    description: "Installation et remplacement de fenêtres, stores et motorisations pour plus de confort au quotidien",
    longDescription: "Nous prenons en charge la pose ou le remplacement de fenêtres ainsi que l'installation de stores électriques et de leurs motorisations. Dépose de l'existant, réglages, finitions, raccordements et mise en service : chaque intervention est pensée pour améliorer l'isolation, la sécurité et le confort d'usage. Nous adaptons les solutions aux contraintes du bâtiment et assurons une finition propre en intérieur comme en extérieur.",
    images: [
      "https://res.cloudinary.com/dgznmx5v2/image/upload/v1776162259/20260317_105835_rpzgii.jpg",
      "https://res.cloudinary.com/dgznmx5v2/image/upload/v1776162262/20260323_084710_kb2pbv.jpg",
      "https://res.cloudinary.com/dgznmx5v2/image/upload/v1776162317/20260317_105924_uqgnc5.jpg"
    ],
    gallery: [
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1776162262/20260323_084710_kb2pbv.jpg",
        alt: "Fenêtres et stores électriques - installation terminée"
      },
      {
        url: "https://res.cloudinary.com/dgznmx5v2/image/upload/v1776162317/20260317_105924_uqgnc5.jpg",
        alt: "Détail de la pose de fenêtres et stores électriques"
      }
    ],
    features: [
      "Pose et remplacement de fenêtres",
      "Réglage des ouvrants et quincailleries",
      "Installation de stores électriques",
      "Motorisation et commandes murales ou télécommandées",
      "Raccordements et mise en service",
      "Finitions soignées et conseils d'utilisation"
    ],
    process: [
      "Analyse du besoin et prise de cotes",
      "Dépose et préparation des supports",
      "Pose des menuiseries ou stores",
      "Raccordements électriques et réglages",
      "Tests de fonctionnement et sécurités",
      "Finitions et remise en main au client"
    ],
    mainColor: "#B8D8D8",
    crossColor: "#EC6B60",
    duration: "2 jours à 2 semaines"
  },
  "maconnerie": {
    title: "Maçonnerie",
    description: "Travaux de gros œuvre : murs porteurs, cloisons, dalles et fondations",
    longDescription: "Nos équipes réalisent tous vos travaux de maçonnerie avec des matériaux de qualité. Construction de murs porteurs, cloisons, dalles, fondations et autres ouvrages en béton. Nous respectons scrupuleusement les normes DTU et garantissons la durabilité de nos réalisations grâce à notre expertise technique.",
    images: [
      "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg",
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg"
    ],
    features: [
      "Construction de murs porteurs",
      "Réalisation de cloisons",
      "Coulage de dalles béton",
      "Fondations et semelles",
      "Travaux de rénovation",
      "Respect des normes DTU"
    ],
    process: [
      "Étude technique du projet",
      "Préparation du terrain",
      "Mise en place des coffrages",
      "Coulage et ferraillage",
      "Séchage et décoffrage",
      "Finitions et contrôle qualité"
    ],
    mainColor: "#B8D8D8",
    crossColor: "#EC6B60",
    duration: "2-8 semaines"
  },
  "carrelage": {
    title: "Carrelage",
    description: "Pose de carrelage, faïence et mosaïque intérieur/extérieur",
    longDescription: "Pose professionnelle de carrelage pour sols et murs, intérieur et extérieur. Nous maîtrisons tous types de revêtements : carrelage grès cérame, faïence, mosaïque, pierre naturelle. Finitions soignées avec étanchéité parfaite des joints pour une durabilité optimale.",
    images: [
      "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/4792077/pexels-photo-4792077.jpeg",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
    ],
    features: [
      "Carrelage sol et mur",
      "Faïence salle de bain",
      "Mosaïque décorative",
      "Pose intérieur/extérieur",
      "Étanchéité des joints",
      "Finitions périphériques"
    ],
    process: [
      "Préparation des supports",
      "Traçage et calepinage",
      "Encollage et pose",
      "Découpes et ajustements",
      "Jointoiement étanche",
      "Nettoyage et protection"
    ],
    mainColor: "#7D9395",
    crossColor: "#EDF4DB",
    duration: "1-3 semaines"
  },
  "electricite": {
    title: "Électricité",
    description: "Installation électrique complète, mise en sécurité et dépannage",
    longDescription: "Installation électrique complète conforme aux normes NF C 15-100. Mise en sécurité des installations existantes, création de nouveaux circuits, dépannage d'urgence. Nos électriciens qualifiés garantissent la sécurité de votre installation avec des matériaux certifiés.",
    images: [
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop"
    ],
    features: [
      "Installation complète",
      "Mise en sécurité",
      "Dépannage d'urgence",
      "Conformité NF C 15-100",
      "Matériaux certifiés",
      "Consuel et attestation"
    ],
    process: [
      "Diagnostic électrique",
      "Conception du schéma",
      "Pose des câblages",
      "Installation des équipements",
      "Tests et vérifications",
      "Remise du Consuel"
    ],
    mainColor: "#EC6B60",
    crossColor: "#B8D8D8",
    duration: "1-2 semaines"
  },
  "demolition": {
    title: "Démolition",
    description: "Déconstruction sélective et désamiantage sécurisé",
    longDescription: "Démolition contrôlée et déconstruction sélective avec respect des protocoles de sécurité. Nous intervenons sur tous types de structures en respectant les normes environnementales. Désamiantage certifié avec évacuation sécurisée vers filières spécialisées.",
    images: [
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop"
    ],
    features: [
      "Démolition contrôlée",
      "Déconstruction sélective",
      "Désamiantage certifié",
      "Évacuation sécurisée",
      "Respect environnemental",
      "Nettoyage du site"
    ],
    process: [
      "Diagnostic amiante/plomb",
      "Demandes administratives",
      "Sécurisation du chantier",
      "Démolition progressive",
      "Tri et évacuation",
      "Remise en état du site"
    ],
    mainColor: "#4F6367",
    crossColor: "#EDF4DB",
    duration: "1-4 semaines"
  },
  "revetements-de-sols": {
    title: "Revêtements - Parquets",
    description: "Pose de parquets, stratifiés et revêtements souples",
    longDescription: "Pose professionnelle de tous types de revêtements de sol : parquets massifs, contrecollés, stratifiés, PVC, linoléum. Préparation minutieuse des supports, pose avec finitions périphériques et plinthes. Conseils personnalisés pour le choix du revêtement adapté à vos besoins.",
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?w=800&h=600&fit=crop"
    ],
    features: [
      "Parquets massifs et contrecollés",
      "Stratifiés haute qualité",
      "Revêtements souples PVC",
      "Préparation des supports",
      "Finitions et plinthes",
      "Conseils personnalisés"
    ],
    process: [
      "Diagnostic du support",
      "Préparation et ragréage",
      "Pose de sous-couche",
      "Installation du revêtement",
      "Découpes et ajustements",
      "Pose des finitions"
    ],
    mainColor: "#EDF4DB",
    crossColor: "#7D9395",
    duration: "3-10 jours"
  },
  "sanitaire-cuisine": {
    title: "Sanitaire - Cuisine",
    description: "Installation complète sanitaires et cuisines",
    longDescription: "Installation complète de sanitaires et cuisines clés en main. Plomberie, raccordements, pose d'équipements sanitaires et électroménager. Mise en service avec vérification de tous les raccordements. Intervention rapide avec matériaux de qualité pour un résultat durable.",
    images: [
      "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
      "https://images.unsplash.com/photo-1556909185-4f72472b5aa4?w=800&h=600&fit=crop"
    ],
    features: [
      "Installation sanitaires",
      "Aménagement cuisines",
      "Plomberie complète",
      "Raccordements gaz/électricité",
      "Pose électroménager",
      "Mise en service"
    ],
    process: [
      "Étude des besoins",
      "Préparation des arrivées",
      "Installation plomberie",
      "Pose des équipements",
      "Raccordements et tests",
      "Mise en service finale"
    ],
    mainColor: "#4F6367",
    crossColor: "#EDF4DB",
    duration: "1-2 semaines"
  },
  "petits-travaux": {
    title: "Petits travaux",
    description: "Bricolage, réparations et aménagements du quotidien",
    longDescription: "Service de petits travaux pour tous vos besoins du quotidien. Réparations, aménagements, bricolage, entretien... Intervention rapide par nos artisans polyvalents, avec un accompagnement clair et adapté à vos projets ponctuels.",
    images: [
      "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg",
      "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?w=800&h=600&fit=crop"
    ],
    features: [
      "Réparations diverses",
      "Montage de meubles",
      "Fixations et accrochages",
      "Entretien courant",
      "Intervention rapide",
      "Accompagnement clair"
    ],
    process: [
      "Diagnostic des besoins",
      "Évaluation rapide",
      "Planification intervention",
      "Réalisation des travaux",
      "Vérification du résultat",
      "Nettoyage et finitions"
    ],
    mainColor: "#7D9395",
    crossColor: "#EDF4DB",
    duration: "1-3 jours"
  },
  "demenagement-nettoyage": {
    title: "Déménagement et nettoyage",
    description: "Service complet de déménagement et nettoyage fin de chantier",
    longDescription: "Service complet de déménagement professionnel et nettoyage fin de chantier. Emballage soigné, transport sécurisé, remise en état des locaux. Équipe expérimentée avec matériel professionnel. Nettoyage approfondi post-travaux avec produits adaptés.",
    images: [
      "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/4099141/pexels-photo-4099141.jpeg",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
    ],
    features: [
      "Déménagement complet",
      "Emballage professionnel",
      "Transport sécurisé",
      "Nettoyage fin de chantier",
      "Remise en état",
      "Évacuation déchets"
    ],
    process: [
      "Évaluation du volume",
      "Emballage et protection",
      "Chargement sécurisé",
      "Transport et déchargement",
      "Nettoyage approfondi",
      "Réception et contrôle"
    ],
    mainColor: "#EC6B60",
    crossColor: "#B8D8D8",
    duration: "1-3 jours"
  }
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const shouldShowGallery = !service.hideGallery;

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="relative h-[620px] sm:h-[700px] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.images[0]}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          {/* <Link 
            href="/"
            className="inline-flex items-center mb-6 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link> */}
          <h1 className="text-5xl md:text-7xl font-switzer font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            {service.description}
          </p>
          
          <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
            {/* CTA Button */}
            <ScrollToButton targetSection="content-section" offsetY={-100}>
              En savoir plus
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />

            </ScrollToButton>

            {shouldShowGallery ? (
              <ScrollToButton targetSection="gallery" offsetY={-100} secondary>
                Gallerie
                {/* <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" /> */}
              </ScrollToButton>
            ) : null}
          </div>

        </div>
      </section>

      {/* Content Section */}
      <section id="content-section" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
            {/* Main Content */}
            <div className="lg:col-span-2 w-full">
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl font-switzer font-semibold mb-6">
                  À propos de ce service
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h3 className="text-2xl font-switzer font-semibold mb-6">
                  Ce qui est inclus
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div 
                        className="w-3 h-3 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: service.mainColor }}
                      />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h3 className="text-2xl font-switzer font-semibold mb-6">
                  Notre processus
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div 
                        className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold mr-4 flex-shrink-0"
                        style={{ backgroundColor: service.crossColor }}
                      >
                        {index + 1}
                      </div>
                      <div className="pt-1">
                        <span className="font-medium text-lg">{step}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Service Info Card */}
                <div 
                  className="p-6 rounded-2xl mb-8 text-black"
                  style={{ backgroundColor: service.mainColor }}
                >
                  <h4 className="text-xl font-switzer font-semibold mb-4">
                    Informations du service
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3" />
                      <div>
                        <span className="font-medium block">Durée</span>
                        <span className="text-sm">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gray-900 text-white p-6 rounded-2xl">
                  <h4 className="text-xl font-switzer font-semibold mb-4">
                    Intéressé par ce service ?
                  </h4>
                  <p className="mb-6 text-gray-300">
                    Contactez-nous pour discuter de votre projet et de vos besoins.
                  </p>
                  <div className="space-y-3">
                    <NavigateToButton 
                        targetSection="contact"
                        offsetY={-100}
                        className="!w-full"
                    >
                      Nous contacter
                    </NavigateToButton>

                    <a 
                      href="tel:+41123456789"
                      className="flex items-center justify-center w-full py-3 px-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Appeler maintenant
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
              {/* Gallery */}
              {shouldShowGallery ? (
                <div id="gallery" className=" w-full">
                  <h3 className="text-2xl font-switzer font-semibold mb-6 ">
                    Galerie
                  </h3>
                  {service.gallery ? (
                    <ProjectGalleryModal images={service.gallery} />
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {service.images.slice(1).map((image, index) => (
                        <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                          <Image
                            src={image}
                            alt={`${service.title} ${index + 2}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}
        </div>
      </section>
    </main>
  );
}
