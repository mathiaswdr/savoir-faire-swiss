import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Clock, DollarSign } from 'lucide-react';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects-data';
import ScrollToButton from '@/components/ui/scroll-to-button';
import { ArrowDown } from 'lucide-react';
import NavigateToButton from '@/components/navigation/navigate-to-button';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <section className="relative h-[620px] sm:h-[700px] lg:h-[80dvh] w-full">
        <Image
          src={project.afterImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-switzer font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl opacity-90 mb-6">
              {project.location} • {project.year}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {project.works.map((work, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                >
                  {work}
                </span>
              ))}
            </div>
            
            {/* CTA Button */}


            <div className="flex flex-col lg:flex-row gap-5 justify-center items-center mt-10">
                {/* CTA Button */}
                <ScrollToButton targetSection="infos" offsetY={-100}>
                  En savoir plus
                  <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />

                </ScrollToButton>

                <ScrollToButton className='' targetSection="transformation-section" offsetY={-100} secondary>
                  Avant / Après
                </ScrollToButton>
            </div>
          </div>
        </div>

        {/* Back Button */}
        {/* <Link
          href="/#nos-realisations"
          className="absolute top-6 left-6 z-10 inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-300"
        >
          <ArrowLeft size={20} />
          Retour aux projets
        </Link> */}
      </section>

      {/* Project Details */}
      <section id="infos" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Project Info Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-[#EDF4DB] p-6 rounded-lg text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-[#7D9395]" />
              <h3 className="font-semibold mb-2">Lieu</h3>
              <p>{project.location}</p>
            </div>
            <div className="bg-[#EDF4DB] p-6 rounded-lg text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-[#7D9395]" />
              <h3 className="font-semibold mb-2">Année</h3>
              <p>{project.year}</p>
            </div>
            <div className="bg-[#EDF4DB] p-6 rounded-lg text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-[#7D9395]" />
              <h3 className="font-semibold mb-2">Durée</h3>
              <p>{project.duration}</p>
            </div>
            <div className="bg-[#EDF4DB] p-6 rounded-lg text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-3 text-[#7D9395]" />
              <h3 className="font-semibold mb-2">Budget</h3>
              <p>{project.budget}</p>
            </div>
          </div>

          {/* Before/After Section */}
          <div id="transformation-section" className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-switzer font-bold text-center mb-12">
              Transformation
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.beforeImage}
                    alt="Avant travaux"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold uppercase">Avant</h3>
              </div>
              <div className="text-center">
                <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.afterImage}
                    alt="Après travaux"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold uppercase">Après</h3>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-switzer font-bold mb-8">
              À propos de ce projet
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-switzer font-bold mb-6 text-[#2f2912]">
                Défis rencontrés
              </h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7D9395] rounded-full mt-3 flex-shrink-0" />
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-switzer font-bold mb-6 text-[#2f2912]">
                Solutions apportées
              </h3>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B8D8D8] rounded-full mt-3 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-switzer font-bold text-center mb-12">
              Galerie de photos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="group">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {image.caption && (
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {image.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="bg-[#EDF4DB] p-8 lg:p-12 rounded-lg text-center">
              <blockquote className="text-xl lg:text-2xl italic text-[#2f2912] mb-6">
                "{project.testimonial.text}"
              </blockquote>
              <div>
                <p className="font-semibold text-[#2f2912]">
                  {project.testimonial.author}
                </p>
                <p className="text-[#7D9395]">{project.testimonial.role}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-clearBlue text-darkGray py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex justify-center items-center flex-col">
          <h2 className="text-3xl lg:text-4xl font-switzer font-bold mb-6">
            Un projet similaire en tête ?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <NavigateToButton
            targetSection="contact"
            className='!w-64 gap-x-3'
            // className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8D8D8] text-black font-semibold rounded-lg hover:bg-[#7D9395] hover:text-white transition-all duration-300 text-lg"
          >
            Nous contacter
            <ArrowLeft className="rotate-180" size={20} />
          </NavigateToButton>
        </div>
      </section>
    </main>
  );
}