
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[50dvh] py-16 md:py-20 lg:py-24 w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-screen-2xl flex flex-col lg:flex-row gap-8 lg:gap-12 lg:justify-between lg:items-center">
            <div className="flex flex-col gap-y-4 lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-switzer">
                    Bienvenue chez <br  /> 
                    Savoir Faire Swiss
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-black font-medium">
                    Spécialistes en construction et rénovation, nous mettons notre expérience et notre polyvalence au service de vos projets.
                    Que ce soit pour moderniser un appartement, rénover une maison
                    ou aménager des locaux professionnels, nous vous accompagnons
                    de A à Z avec un interlocuteur unique.<br/><br/>

                    Notre mission : vous offrir des travaux de qualité, réalisés dans les règles de l'art, avec le souci du détail et le respect des délais.<br/><br/>

                    Avec Savoir Faire Swiss, vous bénéficiez d'une équipe de confiance, alliant expertise, fiabilité et sens du service.
                </p>
            </div>

            <div className="flex flex-col gap-y-4 items-stretch sm:items-center lg:items-end">
                <Link
                    href="/avant-apres"
                    className="w-full sm:w-64 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-clearBlue text-black font-semibold rounded-full hover:bg-[#7D9395] hover:text-white transition-all duration-300 text-base sm:text-lg"
                >
                    Avant / après
                    <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                    href="/nos-services"
                    className="w-full sm:w-64 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-mainRed text-black font-semibold rounded-full hover:bg-[#7D9395] hover:text-white transition-all duration-300 text-base sm:text-lg"
                >
                    Nos services
                    <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                    href="/contact"
                    className="w-full sm:w-64 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-mainYellow text-black font-semibold rounded-full hover:bg-[#7D9395] hover:text-white transition-all duration-300 text-base sm:text-lg"
                >
                    Devis gratuit
                    <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
            </div>

        </div>

        <div className="w-full max-w-screen-2xl  mt-12 lg:mt-16 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div className="relative h-64 sm:h-80 md:h-96  overflow-hidden shadow-lg">
                    <Image 
                        src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&h=600&fit=crop"
                        alt="Notre équipe de professionnels sur chantier"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <div className="relative h-64 sm:h-80 md:h-96  overflow-hidden shadow-lg">
                    <Image 
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                        alt="Travaux de rénovation de qualité"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
            
        
        </div>
    </section>
  );
}