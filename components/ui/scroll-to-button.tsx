"use client";

import { ArrowDown } from "lucide-react";
import { scrollToSection } from "@/utils/tools";

interface ScrollToButtonProps {
  targetSection: string;
  offsetY?: number;
  children: React.ReactNode;
  className?: string;
  secondary?: boolean;
}

export default function ScrollToButton({ 
  targetSection, 
  offsetY = 0, 
  children, 
  className,
  secondary = false
}: ScrollToButtonProps) {
  
  const handleClick = () => {
    scrollToSection(targetSection, offsetY);
  };

  

  if (secondary) {
    return (
      <button
        onClick={handleClick}
        className={`w-10/12 lg:w-58 inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors group ${className}`}
      >
        {children}
        {/* <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" /> */}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`w-10/12 lg:w-58 inline-flex justify-center items-center px-8 py-4 bg-clearBlue border-2 border-clearBlue text-black font-semibold rounded-lg hover:bg-clearBlue/90 transition-colors group ${className}`}
    >
      {children}
      {/* <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-tr2ansform" /> */}
    </button>
  );
}