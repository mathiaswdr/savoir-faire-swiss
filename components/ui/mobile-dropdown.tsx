"use client"

import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MenuItem {
  name: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
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
    <div className="flex flex-col items-start w-full">
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
            className="overflow-hidden mt-4 flex flex-col items-start gap-y-3 w-full"
          >
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ color: "#111827" }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-3 text-gray-600 pl-4 ${itemClassName}`}
                >
                  {IconComponent && <IconComponent className="w-5 h-5 text-gray-500" />}
                  <div className="flex flex-col">
                    <span className="text-lg font-medium">{item.name}</span>
                    {item.description && (
                      <span className="text-sm text-gray-500">{item.description}</span>
                    )}
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export type { MenuItem, MobileDropdownProps };
