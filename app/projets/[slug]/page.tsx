import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Calendar, MapPin, Clock, DollarSign } from 'lucide-react';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects-data';
import ScrollToButton from '@/components/ui/scroll-to-button';
import { ArrowDown } from 'lucide-react';
import NavigateToButton from '@/components/navigation/navigate-to-button';
import ProjectGalleryModal from '@/components/project-gallery-modal';

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

  const hasGallery = project.gallery.length > 0;
  const testimonial = project.testimonial;
  const hasTestimonial = testimonial !== undefined;

  return (
    <main className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <section className="relative h-[620px] sm:h-[700px] lg:h-[80dvh] w-full">
        <Image
          src={project.afterImage}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
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
                    sizes="(min-width: 1024px) 50vw, 100vw"
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
                    sizes="(min-width: 1024px) 50vw, 100vw"
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
          {hasGallery ? (
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-switzer font-bold text-center mb-12">
                Galerie de photos
              </h2>
              <ProjectGalleryModal images={project.gallery} />
            </div>
          ) : null}

          {/* Testimonial */}
          {hasTestimonial ? (
            <div className="bg-[#EDF4DB] p-8 lg:p-12 rounded-lg text-center">
              <blockquote className="text-xl lg:text-2xl italic text-[#2f2912] mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-[#2f2912]">
                  {testimonial.author}
                </p>
                <p className="text-[#7D9395]">{testimonial.role}</p>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-clearBlue text-darkGray py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex justify-center items-center flex-col">
          <h2 className="text-3xl lg:text-4xl font-switzer font-bold mb-6">
            Un projet similaire en tête ?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contactez-nous pour discuter de votre projet et de vos besoins.
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
