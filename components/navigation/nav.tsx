"use client"

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { Paintbrush, Hammer, Shield, Recycle } from "lucide-react";
import MobileDropdown from "../ui/mobile-dropdown";
import Logo from "../logo";
import { scrollToSection } from "@/utils/tools";
import { projects } from "@/lib/projects-data";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Fermer le dropdown quand on ferme le menu mobile
    if (isOpen) {
      setDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Fermer le dropdown si on clique à l'extérieur (seulement en desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Vérifier si on est en vue desktop (largeur > 768px)
        if (window.innerWidth >= 768) {
          setDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fonction pour gérer le scroll intelligent
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

  const subMenuItems = [
    { 
      name: "Peinture", 
      href: "/services/peinture",
      icon: Paintbrush,
      description: "Peinture intérieure et extérieure"
    },
    { 
      name: "Plâtrerie", 
      href: "/services/platrerie",
      icon: Hammer,
      description: "Cloisons et enduits"
    },
    { 
      name: "Isolation", 
      href: "/services/isolation",
      icon: Shield,
      description: "Isolation thermique et acoustique"
    },
    { 
      name: "Recyclage", 
      href: "/services/recyclage",
      icon: Recycle,
      description: "Tri et évacuation de déchets"
    }
  ];

  return (
    <nav className="fixed top-0 left-0 w-screen bg-clearBlue h-32 flex items-center justify-center px-8 border-b z-50">
      <div className="flex items-end justify-between gap-x-8 w-full max-w-screen-xl">
         {/* <h1 className="text-2xl font-bold">Logo</h1> */}
        {/* <div className="w-[180px] sm:w-[270px]"> */}
        <Link href={"/"} onClick={() => setIsOpen(false)}>
          <Logo color="#2f2912" style="!w-[220px] sm:!w-[200px] lg:!w-[270px]"/>
        </Link>
        {/* </div> */}
        <div className="md:flex hidden items-center gap-x-6  font-semibold ">
          <button onClick={() => handleNavigationClick('/')} className="text-lg hover:text-gray-600 globalHover uppercase">Accueil</button>
          <button onClick={() => handleNavigationClick('nos-realisations')} className="text-lg hover:text-gray-600 globalHover uppercase">Nos réalisations</button>

          {/* Menu déroulant Services - Desktop */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={toggleDropdown}
              className="flex items-center text-lg hover:text-gray-600 globalHover gap-x-1 uppercase"
            >
              Services
              <motion.svg
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 overflow-hidden"
                >
                  {subMenuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 globalHover border-b border-gray-100 last:border-b-0"
                      >
                        <IconComponent className="w-5 h-5 text-gray-500" />
                        <div className="flex flex-col">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-xs text-gray-500">{item.description}</span>
                        </div>
                      </motion.a>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => handleNavigationClick('a-propos')} className="text-lg hover:text-gray-600 globalHover uppercase">À propos</button>
          <button onClick={() => handleNavigationClick('contact')} className="text-lg hover:text-gray-600 globalHover uppercase">Contact</button>
        </div>
      </div>

      <button 
        onClick={toggleMenu}
        className="flex md:hidden flex-col gap-y-1 p-2 hover:bg-gray-100 rounded-lg globalHover relative w-10 h-10 justify-center items-center cursor-pointer"
      >
        <motion.span 
          animate={isOpen ? {rotate: 45, y: 6} : {rotate: 0, y: 0}}
          className="w-6 h-0.5 bg-darkGray rounded-full "
        />
        <motion.span 
          animate={isOpen ? {opacity: 0} : {opacity: 1}}
          className="w-6 h-0.5 bg-darkGray rounded-full "
        />
        <motion.span 
          animate={isOpen ? {rotate: -45, y: -6} : {rotate: 0, y: 0}}
          className="w-6 h-0.5 bg-darkGray rounded-full "
        />
      </button>

      <motion.div 
        initial={{x: "-100%"}}
        animate={isOpen ? {x: 0} : {x: "-100%"}}
        transition={{type: "spring", stiffness: 300, damping: 30}}
        className="flex md:hidden fixed top-32 left-0 w-full px-8 h-screen bg-white flex-col items-start gap-y-6 pt-6"
      >
        <button onClick={() => { handleNavigationClick('/'); setIsOpen(false); }} className="text-xl hover:text-gray-600 globalHover text-left">Accueil</button>
        <button onClick={() => { handleNavigationClick('nos-realisations'); setIsOpen(false); }} className="text-xl hover:text-gray-600 globalHover text-left">Nos réalisations</button>
        <button onClick={() => { handleNavigationClick('a-propos'); setIsOpen(false); }} className="text-xl hover:text-gray-600 globalHover text-left">À propos</button>
        
        {/* Menu déroulant Services - Mobile */}
        <MobileDropdown
          buttonText="Services"
          menuItems={subMenuItems}
          isOpen={dropdownOpen}
          onToggle={toggleDropdown}
        />
        
        <button onClick={() => { handleNavigationClick('contact'); setIsOpen(false); }} className="text-xl hover:text-gray-600 globalHover text-left">Contact</button>

        {/* Project Cards */}
        <div className="w-full mt-4">
          {/* <h3 className="text-lg font-semibold mb-4 text-gray-800">Nos réalisations</h3> */}
          <div className="grid grid-cols-1 gap-4">
            {projects.slice(0, 2).map((project, index) => (
              <Link
                key={project.id}
                href={`/projets/${project.slug}`}
                onClick={() => setIsOpen(false)}
                className="relative h-40 rounded-lg overflow-hidden group"
              >
                <Image
                  src={project.afterImage}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h4 className="font-semibold text-lg">{project.title}</h4>
                  <p className="text-sm opacity-90">{project.location} • {project.year}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* <div className="flex flex-col gap-y-4 justify-center items-center w-full mt-2">
          <button onClick={() => { handleNavigationClick('contact'); setIsOpen(false); }} className="w-full h-14  bg-darkBlue text-white text-xl font-bold rounded-lg">
            Devis gratuit
          </button>
        </div> */}


      </motion.div>
    </nav>
  );
}