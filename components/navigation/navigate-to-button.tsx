"use client";

import { ArrowDown } from "lucide-react";
import { scrollToSection } from "@/utils/tools";
import { usePathname, useRouter } from "next/navigation";

interface ScrollToButtonProps {
  targetSection: string;
  offsetY?: number;
  children: React.ReactNode;
  className?: string;
  secondary?: boolean;
}

export default function NavigateToButton({ 
  targetSection, 
  offsetY = 0, 
  children, 
  className,
  secondary = false
}: ScrollToButtonProps) {


    const pathname = usePathname();
    const router = useRouter();
  
    const handleClick = () => {
        scrollToSection(targetSection, offsetY);
    };

    // Fonction pour gérer le scroll intelligent
    const handleNavigationClick = (sectionId: string) => {

        console.log("Navigating to:", sectionId); // Debug log
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


    if (secondary) {
        return (
        <button
            onClick={() => handleNavigationClick(targetSection)}
            className={`w-10/12  lg:w-58 inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors group ${className}`}
        >
            {children}
            {/* <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" /> */}
        </button>
        );
    }

    return (
        <button
        onClick={() => handleNavigationClick(targetSection)}
        className={`flex items-center justify-center w-58 py-4 px-8 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors ${className}`}
        >
        {children}
        {/* <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-tr2ansform" /> */}
        </button>
    );
}
