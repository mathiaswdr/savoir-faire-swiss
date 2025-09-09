import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-[#2f2912] text-white">
      {/* Main Footer Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="w-48">
              <Logo />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction et rénovation en Suisse.
            </p>
            <div className="flex space-x-4">
              {/* Social Links - Optional */}
              <div className="w-8 h-8 bg-clearBlue rounded-full flex items-center justify-center hover:bg-darkBlue transition-colors duration-300 cursor-pointer">
                <span className="text-[#2f2912] font-bold text-sm">F</span>
              </div>
              <div className="w-8 h-8 bg-clearBlue rounded-full flex items-center justify-center hover:bg-darkBlue transition-colors duration-300 cursor-pointer">
                <span className="text-[#2f2912] font-bold text-sm">L</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-switzer font-semibold">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/peinture" className="text-gray-300 hover:text-clearBlue transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Peinture
                </Link>
              </li>
              <li>
                <Link href="/services/platrerie" className="text-gray-300 hover:text-clearBlue transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Plâtrerie
                </Link>
              </li>
              <li>
                <Link href="/services/isolation" className="text-gray-300 hover:text-clearBlue transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Isolation
                </Link>
              </li>
              <li>
                <Link href="/services/recyclage" className="text-gray-300 hover:text-clearBlue transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Recyclage
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-xl font-switzer font-semibold">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-clearBlue transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-clearBlue transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/nos-services" className="text-gray-300 hover:text-clearBlue transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-gray-300 hover:text-clearBlue transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-clearBlue transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-switzer font-semibold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-clearBlue flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>Moulin-au-Rey 8</p>
                  <p>1470 Lully-Fribourg</p>
                  <p>Fribourg</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-clearBlue flex-shrink-0" />
                <a 
                  href="tel:+41767096011" 
                  className="text-gray-300 hover:text-clearBlue transition-colors duration-300"
                >
                  +41 76 709 60 11
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-clearBlue flex-shrink-0" />
                <a 
                  href="mailto:info@savoirfaireswiss.com" 
                  className="text-gray-300 hover:text-clearBlue transition-colors duration-300"
                >
                  info@savoirfaireswiss.com
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-clearBlue text-[#2f2912] font-semibold rounded-full hover:bg-darkBlue hover:text-white transition-all duration-300 group"
            >
              Devis gratuit
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Savoir Faire Swiss SA. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/mentions-legales" 
                className="text-gray-400 hover:text-clearBlue transition-colors duration-300"
              >
                Mentions légales
              </Link>
              <Link 
                href="/politique-confidentialite" 
                className="text-gray-400 hover:text-clearBlue transition-colors duration-300"
              >
                Politique de confidentialité
              </Link>
              <Link 
                href="/conditions-generales" 
                className="text-gray-400 hover:text-clearBlue transition-colors duration-300"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}