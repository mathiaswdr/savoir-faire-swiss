import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Phone, Mail, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

// Types pour les services
interface ServiceDetail {
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  features: string[];
  process: string[];
  mainColor: string;
  crossColor: string;
  duration: string;
  price: string;
}

// Configuration des services
const servicesData: Record<string, ServiceDetail> = {
  "peinture": {
    title: "Peinture",
    description: "Redonnez du caractère à vos espaces avec notre service de peinture",
    longDescription: "Redonnez du caractère à vos espaces avec notre service de peinture intérieure et extérieure. Nous préparons soigneusement les supports (ponçage, rebouchage, impression), protégeons votre chantier et appliquons des peintures durables à faibles émissions. Murs, plafonds, boiseries, métal ou façades : finitions mates, velours ou satin, nuanciers RAL/NCS à la demande.",
    images: [
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
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
      "Diagnostic et devis gratuit",
      "Protection du chantier",
      "Préparation des surfaces",
      "Application des sous-couches",
      "Peinture et finitions",
      "Nettoyage et contrôle qualité"
    ],
    mainColor: "#7D9395",
    crossColor: "#EDF4DB",
    duration: "1-4 semaines",
    price: "À partir de 20€/m²"
  },
  "platrerie": {
    title: "Plâtrerie",
    description: "Travaux de plâtrerie professionnels pour tous vos projets",
    longDescription: "Nos équipes réalisent vos travaux de plâtrerie : cloisons et doublages en plaques de plâtre, faux-plafonds, enduits et lissage, bandes et joints. Solutions thermiques et phoniques, plaques hydrofuges et coupe-feu selon les besoins. Chantier protégé, finitions nettes, délais respectés.",
    images: [
      "https://images.unsplash.com/photo-1631545806609-2dd94bb2779d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562113865-23af7805e8bb?w=800&h=600&fit=crop"
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
    duration: "2-6 semaines",
    price: "À partir de 35€/m²"
  },
  "isolation": {
    title: "Isolation",
    description: "Améliorez le confort thermique et acoustique de vos bâtiments",
    longDescription: "Améliorez le confort thermique et acoustique de vos bâtiments. Isolation des combles, murs, planchers et toitures (ITI/ITE), traitement des ponts thermiques, pose de pare-vapeur et membranes d'étanchéité à l'air. Matériaux adaptés (laine minérale, fibre de bois, PIR, ouate). Chantier protégé, finitions soignées, économies d'énergie durables.",
    images: [
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1625047509168-a7026f3c3d01?w=800&h=600&fit=crop"
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
    duration: "1-3 semaines",
    price: "À partir de 40€/m²"
  },
  "recyclage": {
    title: "Recyclage",
    description: "Tri et évacuation responsables des déchets de chantier",
    longDescription: "Tri et évacuation responsables des déchets de chantier : inertes, bois, ferrailles, cartons/plastiques, plâtre, D3E et déchets spécifiques. Bennes dédiées, acheminement vers filières agréées et site laissé propre avec justificatifs de prise en charge.",
    images: [
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&h=600&fit=crop"
    ],
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
    mainColor: "#EDF4DB",
    crossColor: "#7D9395",
    duration: "Selon chantier",
    price: "Sur devis"
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

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
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

              {/* Gallery */}
              <div>
                <h3 className="text-2xl font-switzer font-semibold mb-6">
                  Galerie
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <div className="flex items-center">
                      <span className="text-xl mr-3">💰</span>
                      <div>
                        <span className="font-medium block">Tarif</span>
                        <span className="text-sm">{service.price}</span>
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
                    Contactez-nous pour obtenir un devis personnalisé et gratuit.
                  </p>
                  <div className="space-y-3">
                    <Link 
                      href="/contact"
                      className="flex items-center justify-center w-full py-3 px-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Demander un devis
                    </Link>
                    <a 
                      href="tel:+41123456789"
                      className="flex items-center justify-center w-full py-3 px-4 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Appeler maintenant
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}