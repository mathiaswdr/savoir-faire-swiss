"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/tools";

const carouselImages = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=1080&fit=crop",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="relative w-screen h-[75dvh] -ml-[calc((100vw-100%)/2)]">
      {/* Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            className="text-white text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-switzer sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="block">
                Vos travaux,
              </span>
              <span className="block mt-2">
                notre <span className="font-switzer italic text-clearBlue">savoir-faire</span>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 opacity-90">
              Votre partenaire de confiance pour tous vos projets de construction
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={() => scrollToSection('a-propos', -125)}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#B8D8D8] text-black font-semibold rounded-lg transition-all duration-300 text-lg group"
                whileHover={{ scale: 1.05, backgroundColor: "#7D9395", color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
              >
                À propos
                <ArrowRight className="ml-2 w-5 h-5 globalHover group-hover:translate-x-2" />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('nos-services', -125)}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 text-lg group"
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                whileTap={{ scale: 0.95 }}
              >
                Nos services
                <ArrowRight className="ml-2 w-5 h-5 globalHover group-hover:translate-x-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Controls */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button> */}

      {/* Slide Indicators */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        {carouselImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white w-8 sm:w-10 md:w-12" 
                : "bg-white/50 hover:bg-white/70 w-2 sm:w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 2 + (index * 0.1) }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </section>
  );
}