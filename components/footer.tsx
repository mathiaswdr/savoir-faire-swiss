"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import { scrollToSection } from "@/utils/tools";
import Logo from "./logo";
import { toast } from "sonner";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigationClick = (sectionId: string) => {
    if (sectionId === '/') {
      // Pour l'accueil, juste naviguer
      router.push('/');
      return;
    }

    if (pathname === '/') {
      // Si on est sur la page d'accueil, scroll directement
      scrollToSection(sectionId, -250);
    } else {
      // Si on est sur une autre page, naviguer vers l'accueil puis scroll
      router.push('/');
      setTimeout(() => {
        scrollToSection(sectionId, -250);
      }, 1000);
    }
  };

  const handleContactClick = () => {
    handleNavigationClick('contact');
  };

  const handleEmailClick = async () => {
    const email = "info@lesavoirfaireswiss.ch";
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copié dans le presse-papier !");
    } catch (err) {
      console.error('Failed to copy email: ', err);
      toast.error("Erreur lors de la copie de l'email");
    }
  };

  return (
    <footer className="bg-lightGray text-white">
      {/* Main Footer Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 lg:gap-16">
          
          {/* Company Info */}
          <div className="space-y-6 w-full lg:w-[350px] text-center lg:text-left">
            <div className="lg:w-48 flex justify-center items-center lg:mx-0">
              <Logo color="#EDF4DB"/>
            </div>
            <p className="text-mainYellow leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction <span className="hidden lg:inline"><br/></span> et rénovation en Suisse.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              {/* Social Links */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mainYellow hover:text-clearBlue transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mainYellow hover:text-clearBlue transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mainYellow hover:text-clearBlue transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right side - Menus */}
          <div className="grid grid-cols-2 grid-rows-2 gap-8 justify-items-center sm:flex sm:flex-row sm:gap-10 lg:gap-16">
            {/* Services */}
            <div className="space-y-4 sm:space-y-6 text-mainYellow text-left w-full sm:w-auto">
              <h3 className="text-lg sm:text-xl font-switzer font-semibold">Nos Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/services/peinture" className="text-mainYellow hover:text-clearBlue transition-colors duration-300 relative group">
                    <ArrowRight className="w-4 h-4 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                    Peinture
                  </Link>
                </li>
                <li>
                  <Link href="/services/platrerie" className="text-mainYellow hover:text-clearBlue transition-colors duration-300 relative group">
                    <ArrowRight className="w-4 h-4 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                    Plâtrerie
                  </Link>
                </li>
                <li>
                  <Link href="/services/isolation" className="text-mainYellow hover:text-clearBlue transition-colors duration-300 relative group">
                    <ArrowRight className="w-4 h-4 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                    Isolation
                  </Link>
                </li>
                <li>
                  <Link href="/services/recyclage" className="text-mainYellow hover:text-clearBlue transition-colors duration-300 relative group">
                    <ArrowRight className="w-4 h-4 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                    Recyclage
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="space-y-4 sm:space-y-6 text-mainYellow text-left w-full sm:w-auto">
              <h3 className="text-lg sm:text-xl font-switzer font-semibold">Navigation</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <button onClick={() => handleNavigationClick('/')} className="text-mainYellow hover:text-clearBlue transition-colors duration-300 relative group text-left">
                    <ArrowRight className="w-4 h-4 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                    Accueil
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigationClick('a-propos')} className="text-mainYellow hover:text-clearBlue transition-colors duration-300 relative group text-left">
                    <ArrowRight className="w-4 h-4 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                    À propos
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigationClick('nos-services')} className="text-mainYellow hover:text-clearBlue transition-colors duration-300 relative group text-left">
                    <ArrowRight className="w-4 h-4 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                    Nos services
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigationClick('nos-realisations')} className="text-mainYellow hover:text-clearBlue transition-colors duration-300 relative group text-left">
                    <ArrowRight className="w-4 h-4 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                    Réalisations
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigationClick('contact')} className="text-mainYellow hover:text-clearBlue transition-colors duration-300 relative group text-left">
                    <ArrowRight className="w-4 h-4 absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6 text-mainYellow text-left w-full sm:w-auto col-span-2 sm:col-span-1">
              <h3 className="text-lg sm:text-xl font-switzer font-semibold">Contact</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 justify-start">
                  <MapPin className="w-5 h-5 text-mainYellow flex-shrink-0 mt-1" />
                  <div className="text-mainYellow">
                    <p>Moulin-au-Rey 8</p>
                    <p>1470 Lully-Fribourg</p>
                    <p>Fribourg</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 justify-start">
                  <Phone className="w-5 h-5 text-mainYellow flex-shrink-0" />
                  <a 
                    href="tel:+41767096011" 
                    className="text-mainYellow hover:text-clearBlue transition-colors duration-300"
                  >
                    +41 76 709 60 11
                  </a>
                </div>
                <div className="flex items-center space-x-3 justify-start">
                  <Mail className="w-5 h-5 text-mainYellow flex-shrink-0" />
                  <button 
                    onClick={handleEmailClick}
                    className="text-mainYellow hover:text-clearBlue transition-colors duration-300 text-left"
                  >
                    info@lesavoirfaireswiss.ch
                  </button>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-start">
                <button
                  onClick={handleContactClick}
                  className="inline-flex items-center px-6 py-3 bg-mainYellow text-[#2f2912] font-semibold rounded-full hover:bg-darkBlue hover:text-white transition-all duration-300 group"
                >
                  Nous contacter
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-mainYellow text-sm">
              © 2026 Savoir Faire Swiss SA. Tous droits réservés.
            </div>
            <div className="text-mainYellow text-sm text-center md:text-right">
              Web design et développement par{" "}
              <a
                href="https://www.meelki.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-clearBlue transition-colors duration-300"
              >
                Meelki Studio
              </a>
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <Link 
                href="/mentions-legales" 
                className="text-mainYellow hover:text-clearBlue transition-colors duration-300"
              >
                Mentions légales
              </Link>
              <Link 
                href="/politique-confidentialite" 
                className="text-mainYellow hover:text-clearBlue transition-colors duration-300"
              >
                Politique de confidentialité
              </Link>
              <Link 
                href="/conditions-generales" 
                className="text-mainYellow hover:text-clearBlue transition-colors duration-300"
              >
                CGV
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
