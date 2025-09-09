"use client"

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import MobileDropdown from "../ui/mobile-dropdown";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const subMenuItems = [
    { name: "Service 1", href: "/services/service1" },
    { name: "Service 2", href: "/services/service2" },
    { name: "Service 3", href: "/services/service3" },
    { name: "Consulting", href: "/services/consulting" }
  ];

  return (
    <nav className="w-full h-20 flex items-center justify-between px-8 border-b">
      <div className="flex items-center justify-between gap-x-8 w-full">
        <h1 className="text-2xl font-bold">Logo</h1>
        <div className="md:flex hidden items-center gap-x-6">
          <a href="/" className="text-lg hover:text-gray-600 globalHover">Accueil</a>
          <a href="/about" className="text-lg hover:text-gray-600 globalHover">À propos</a>
          
          {/* Menu déroulant Services - Desktop */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={toggleDropdown}
              className="flex items-center text-lg hover:text-gray-600 globalHover gap-x-1"
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
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                >
                  {subMenuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 globalHover"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <a href="/contact" className="text-lg hover:text-gray-600 globalHover">Contact</a>
        </div>
      </div>

      <button 
        onClick={toggleMenu}
        className="flex md:hidden flex-col gap-y-1 p-2 hover:bg-gray-100 rounded-lg globalHover relative w-10 h-10 justify-center items-center cursor-pointer"
      >
        <motion.span 
          animate={isOpen ? {rotate: 45, y: 6} : {rotate: 0, y: 0}}
          className="w-6 h-0.5 bg-black "
        />
        <motion.span 
          animate={isOpen ? {opacity: 0} : {opacity: 1}}
          className="w-6 h-0.5 bg-black "
        />
        <motion.span 
          animate={isOpen ? {rotate: -45, y: -6} : {rotate: 0, y: 0}}
          className="w-6 h-0.5 bg-black "
        />
      </button>

      <motion.div 
        initial={{x: "-100%"}}
        animate={isOpen ? {x: 0} : {x: "-100%"}}
        transition={{type: "spring", stiffness: 300, damping: 30}}
        className="flex md:hidden fixed top-20 left-0 w-full px-8 h-screen bg-white flex-col items-start gap-y-6 pt-12"
      >
        <a href="/" className="text-xl hover:text-gray-600 globalHover">Accueil</a>
        <a href="/about" className="text-xl hover:text-gray-600 globalHover">À propos</a>
        
        {/* Menu déroulant Services - Mobile */}
        <MobileDropdown
          buttonText="Services"
          menuItems={subMenuItems}
          isOpen={dropdownOpen}
          onToggle={toggleDropdown}
        />
        
        <a href="/contact" className="text-xl hover:text-gray-600 globalHover">Contact</a>

        <button className="w-full h-14 mt-12 bg-gradient-to-tr from-t from-slate-950 to-slate-800 text-white text-xl font-bold rounded-lg">
          Contact
        </button>
      </motion.div>
    </nav>
  );
}