"use client"

import { motion, AnimatePresence } from "motion/react";

interface MenuItem {
  name: string;
  href: string;
}

interface MobileDropdownProps {
  /** Le texte du bouton principal */
  buttonText: string;
  /** Les éléments du sous-menu */
  menuItems: MenuItem[];
  /** État d'ouverture/fermeture du dropdown */
  isOpen: boolean;
  /** Fonction pour basculer l'état du dropdown */
  onToggle: () => void;
  /** Classes CSS supplémentaires pour le bouton */
  buttonClassName?: string;
  /** Classes CSS supplémentaires pour les éléments du menu */
  itemClassName?: string;
}

export default function MobileDropdown({
  buttonText,
  menuItems,
  isOpen,
  onToggle,
  buttonClassName = "",
  itemClassName = ""
}: MobileDropdownProps) {
  return (
    <div className="flex flex-col items-center">
      <button 
        onClick={onToggle}
        className={`flex items-center text-xl hover:text-gray-600 globalHover gap-x-2 ${buttonClassName}`}
      >
        {buttonText}
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden mt-4 flex flex-col items-center gap-y-3"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={` text-gray-600  pl-4 ${itemClassName}`}
              >
                <span className="text-lg hover:text-gray-900 globalHover">
                    {item.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export type { MenuItem, MobileDropdownProps };
