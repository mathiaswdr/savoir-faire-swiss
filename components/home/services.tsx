'use client';

import ServiceCard from "./service-card";
import { motion } from "framer-motion";


export default function Services() {

    return (
        <section id="nos-services" className="min-h-[90dvh] w-full  sm:px-6 lg:px-0 lg:w-screen py-8 lg:py-0 mt-10 lg:mt-16">
            <motion.div 
                className="w-full flex flex-col lg:flex-row  lg:h-[45dvh] lg:justify-between items-stretch lg:items-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <ServiceCard 
                    title="Peinture"
                    description="Redonnez du caractère à vos espaces avec notre service de peinture intérieure et extérieure. Nous préparons soigneusement les supports (ponçage, rebouchage, impression), protégeons votre chantier et appliquons des peintures durables à faibles émissions. Murs, plafonds, boiseries, métal ou façades : finitions mates, velours ou satin, nuanciers RAL/NCS à la demande. Travail soigné, délais tenus, résultat net et durable."
                    style=""
                    crossColor="#EDF4DB"
                    mainColor="#7D9395"
                    slug="peinture"
                />
                <ServiceCard
                    title="Plâtrerie"
                    description="Nos équipes réalisent vos travaux de plâtrerie : cloisons et doublages en plaques de plâtre, faux-plafonds, enduits et lissage, bandes et joints. Solutions thermiques et phoniques, plaques hydrofuges et coupe-feu selon les besoins. Chantier protégé, finitions nettes, délais respectés."
                    style=""
                    crossColor="#EC6B60"
                    mainColor="#B8D8D8"
                    slug="platrerie"
                />
            </motion.div>
            <motion.div 
                className="w-full flex flex-col lg:flex-row  lg:h-[45dvh] lg:justify-between items-stretch lg:items-start lg:mt-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <ServiceCard
                    title="Isolation"
                    description="Améliorez le confort thermique et acoustique de vos bâtiments. Isolation des combles, murs, planchers et toitures (ITI/ITE), traitement des ponts thermiques, pose de pare-vapeur et membranes d'étanchéité à l'air. Matériaux adaptés (laine minérale, fibre de bois, PIR, ouate). Chantier protégé, finitions soignées, économies d'énergie durables."
                    style="bg-mainRed"
                    crossColor="#B8D8D8"
                    mainColor="#EC6B60"
                    slug="isolation"
                />
                <ServiceCard
                    title="Recyclage"
                    description="Tri et évacuation responsables des déchets de chantier : inertes, bois, ferrailles, cartons/plastiques, plâtre, D3E et déchets spécifiques. Bennes dédiées, acheminement vers filières agréées et site laissé propre avec justificatifs de prise en charge."
                    style="bg-mainYellow"
                    crossColor="#7D9395"
                    mainColor="#EDF4DB"
                    slug="recyclage"
                />
            </motion.div>
            <motion.div 
                className="w-full flex flex-col lg:flex-row  lg:h-[45dvh] lg:justify-between items-stretch lg:items-start lg:mt-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <ServiceCard
                    title="Carrelage et Parquets"
                    description="Pose soignée de carrelage, faïence et parquets pour rénover durablement vos sols intérieurs. Préparation des supports, calepinage, joints et finitions propres pour un rendu durable et élégant."
                    style=""
                    crossColor="#EDF4DB"
                    mainColor="#7D9395"
                    slug="carrelage-et-parquets"
                />
                <ServiceCard
                    title="Fenêtres et stores électriques"
                    description="Installation et remplacement de fenêtres, stores et motorisations pour améliorer confort, isolation et praticité. Pose, raccordements, réglages et mise en service inclus."
                    style=""
                    crossColor="#EC6B60"
                    mainColor="#B8D8D8"
                    slug="fenetres-et-stores-electriques"
                />
            </motion.div>
        </section>
    )
} 
