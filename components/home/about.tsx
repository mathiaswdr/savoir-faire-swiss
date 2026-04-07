
"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/tools";

const buttonHoverVariants = {
  hover: { scale: 1.05, backgroundColor: "#7D9395", color: "#ffffff" },
  tap: { scale: 0.95 },
};

const arrowHoverVariants = {
  initial: { x: 0 },
  hover: { x: 8 },
};

export default function About() {
  return (
    <section id="a-propos" className="flex flex-col items-center justify-center min-h-[50dvh] py-16 md:py-20 lg:py-4 w-full px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="w-full max-w-screen-2xl flex flex-col lg:flex-row gap-8 lg:gap-12 lg:justify-between lg:items-center"
            // initial={{ opacity: 0, y: 50 }}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div 
                className="flex flex-col gap-y-4 lg:w-2/3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.h2 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-switzer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Bienvenue chez <br  /> 
                    Savoir Faire Swiss
                </motion.h2>
                <motion.p 
                    className="text-sm sm:text-base lg:text-lg leading-relaxed text-black font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    Spécialistes en construction et rénovation, nous mettons notre expérience et notre polyvalence au service de vos projets.
                    Que ce soit pour moderniser un appartement, rénover une maison
                    ou aménager des locaux professionnels, nous vous accompagnons
                    de A à Z avec un interlocuteur unique.<br/><br/>

                    Notre mission : vous offrir des travaux de qualité, réalisés dans les règles de l'art, avec le souci du détail et le respect des délais.<br/><br/>

                    Avec Savoir Faire Swiss, vous bénéficiez d'une équipe de confiance, alliant expertise, fiabilité et sens du service.
                </motion.p>
            </motion.div>

            <motion.div 
                className="flex flex-col gap-y-4 items-stretch sm:items-center lg:items-center lg:w-1/3"
                // initial={{ opacity: 0, x: 50 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 0.8, delay: 0.4 }}
            >
                <motion.button
                    variants={buttonHoverVariants}
                    onClick={() => scrollToSection('nos-realisations', -150)}
                    className="w-full sm:w-64 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-clearBlue text-black font-semibold rounded-full  text-base sm:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring" }}
                    whileHover="hover"
                    whileTap="tap"
                >
                    Avant / après
                    <motion.div
                        variants={arrowHoverVariants}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                </motion.button>
                <motion.button
                    variants={buttonHoverVariants}
                    onClick={() => scrollToSection('nos-services', -150)}
                    className="w-full sm:w-64 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-mainRed text-black font-semibold rounded-full  text-base sm:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring" }}
                    whileHover="hover"
                    whileTap="tap"
                >
                    Nos services
                    <motion.div
                        variants={arrowHoverVariants}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                </motion.button>
                <motion.button
                    variants={buttonHoverVariants}
                    onClick={() => scrollToSection('contact', -150)}
                    className="w-full sm:w-64 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-mainYellow text-black font-semibold rounded-full  text-base sm:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover="hover"
                    whileTap="tap"
                >
                    Nous contacter
                    <motion.div
                        variants={arrowHoverVariants}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                </motion.button>
            </motion.div>

        </motion.div>

        <motion.div 
            className="w-full max-w-screen-2xl  mt-12 lg:mt-16 pt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <motion.div 
                    className="relative h-64 sm:h-80 md:h-96  overflow-hidden shadow-lg rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Image 
                        src="https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550439/IMG-20260307-WA0050_vk2owl.jpg"
                        alt="Notre équipe de professionnels sur chantier"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>
                <motion.div 
                    className="relative h-64 sm:h-80 md:h-96  overflow-hidden shadow-lg rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Image 
                        src="https://res.cloudinary.com/dgznmx5v2/image/upload/v1775550277/IMG-20250930-WA0068_hlhytv.jpg"
                        alt="Travaux de rénovation de qualité"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>
            </div>
            
        
        </motion.div>
    </section>
  );
}
