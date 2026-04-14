"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/tools";

const carouselImages = [
  "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550277/IMG-20250930-WA0068_hlhytv.jpg",
  "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550439/IMG-20260307-WA0050_vk2owl.jpg",
  "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775571013/IMG-20260307-WA0321_ezgm9o.jpg",
  "https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550314/IMG-20250930-WA0067_pnlhoe.jpg",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, backgroundColor: "#e0efb9", color: "#2f2912" },
    tap: { scale: 0.95 },
  };

  const secondaryButtonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, backgroundColor: "#ffffff", color: "#2f2912"  },
    tap: { scale: 0.95 },
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 8 },
  };

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
    <section className="relative w-screen h-[620px] sm:h-[700px] lg:h-[80dvh] -ml-[calc((100vw-100%)/2)]">
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
      <div className="absolute inset-0 bg-black/35 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto w-full">
          <motion.div 
            className="text-white text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-switzer sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="block uppercase">
                Vos travaux,
              </span>
              <span className="block mt-0 uppercase">
                notre <span className="font-switzer text-[#e0efb9] italic uppercase">savoir-faire</span>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 opacity-90 ">
              Votre partenaire de confiance pour tous vos projets de construction et rénovation
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start">
              <motion.button
                onClick={() => scrollToSection('a-propos', -125)}
                className="inline-flex items-center justify-center px-8 w-60 py-3 bg-mainYellow border-2 border-mainYellow text-darkGray font-semibold rounded-full text-lg group"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"   
                whileTap="tap"
              >
                À propos
                <motion.div
                  variants={arrowVariants}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="ml-2 w-5 h-5 " />
                </motion.div>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('nos-services', -125)}
                className="inline-flex items-center justify-center px-8 w-60 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full text-lg group"
                // whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                variants={secondaryButtonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Nos services
                <motion.div
                  variants={arrowVariants}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="ml-2 w-5 h-5 " />
                </motion.div>
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
      <div className="w-full absolute bottom-0 left-0 h-12 flex justify-center items-center ">
        <motion.div 
          className=" z-30 flex gap-2"
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
      </div>

    </section>
  );
}
