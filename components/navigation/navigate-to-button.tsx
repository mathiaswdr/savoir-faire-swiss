"use client";

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

    const handleNavigationClick = (sectionId: string) => {
        if (sectionId === '/') {
            router.push('/');
            return;
        }

        if (pathname === '/') {
            scrollToSection(sectionId, offsetY);
        } else {
            router.push('/');
            setTimeout(() => {
                scrollToSection(sectionId, offsetY);
            }, 1000);
        }
    };

    if (secondary) {
        return (
            <button
                onClick={() => handleNavigationClick(targetSection)}
                className={`w-10/12 lg:w-58 inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors group ${className}`}
            >
                {children}
            </button>
        );
    }

    return (
        <button
            onClick={() => handleNavigationClick(targetSection)}
            className={`flex items-center justify-center w-58 py-4 px-8 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors ${className}`}
        >
            {children}
        </button>
    );
}
