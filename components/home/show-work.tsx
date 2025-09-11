'use client';
import Cross from "../cross";
import ServiceCard from "./service-card";
import Image from "next/image";
import Work from "./work";
import { projects } from "@/lib/projects-data";
import { motion } from "framer-motion";

export default function ShowWork() {

    return (
        <section id="nos-realisations" className="min-h-[90dvh] w-screen max-w-bigScreen flex flex-col justify-start items-center mt-20 lg:px-10">
            <motion.h1 
                className="font-switzer text-5xl lg:text-6xl "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Nos réalisations
            </motion.h1>
            <motion.div 
                className="w-full max-w-screen-2xl min-h-screen px-mobileScreen lg:min-h-[45dvh] mt-10  flex flex-col gap-y-10 lg:flex-row justify-center items-center lg:justify-between lg:items-start flex-wrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {projects.map((project, index) => (

                        <Work 
                            beforeImage={project.beforeImage}
                            beforeAlt={`Avant travaux - ${project.title}`}
                            afterImage={project.afterImage}
                            afterAlt={`Après travaux - ${project.title}`}
                            location={project.location}
                            year={project.year}
                            works={project.works}
                            slug={project.slug}
                            key={index} 
                        />
                ))}
            </motion.div>

        </section>
    )
} 