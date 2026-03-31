'use client';

import Cross from "../cross";
import ServiceCard from "./service-card";
import { motion } from "framer-motion";
import ServiceCardBis from "./services-card-bis";

const services = [
    {
        title: "Peinture",
        description: "Peinture intérieure et extérieure professionnelle. Préparation complète des supports, finitions mates ou satinées selon vos besoins.",
        style: "",
        crossColor: "#EDF4DB",
        mainColor: "#7D9395",
        color: "#f3f3f3",
        hoverColor: "#1b1b1b",
        slug: "peinture"
    },
    {
        title: "Plâtrerie",
        description: "Cloisons, faux-plafonds, enduits et finitions. Solutions thermiques et phoniques avec plaques spécialisées selon vos contraintes.",
        style: "",
        crossColor: "#B8D8D8",
        mainColor: "#EC6B60",
        slug: "platrerie"
    },
    {
        title: "Isolation",
        description: "Isolation thermique et acoustique complète. Combles, murs, planchers avec matériaux performants pour réduire vos consommations.",
        style: "",
        crossColor: "#7D9395",
        mainColor: "#EDF4DB",
        color: "#1b1b1b",
        hoverColor: "#f3f3f3",
        slug: "isolation"
    },
    {
        title: "Recyclage",
        description: "Tri sélectif et évacuation responsable des déchets de chantier vers filières agréées. Site laissé propre garanti.",
        style: "",
        crossColor: "#EDF4DB",
        mainColor: "#4F6367",
        slug: "recyclage"
    },
    {
        title: "Maçonnerie",
        description: "Travaux de gros œuvre : murs porteurs, cloisons, dalles et fondations. Matériaux de qualité, respect des normes DTU.",
        style: "",
        crossColor: "#EC6B60",
        mainColor: "#B8D8D8",
        color: "#1b1b1b",
        hoverColor: "#f3f3f3",
        slug: "maconnerie"
    },
    {
        title: "Carrelage",
        description: "Pose de carrelage, faïence et mosaïque intérieur/extérieur. Finitions soignées, étanchéité parfaite des joints.",
        style: "",
        crossColor: "#EDF4DB",
        mainColor: "#7D9395",
        slug: "carrelage"
    },
    {
        title: "Électricité",
        description: "Installation électrique complète, mise en sécurité et dépannage. Conformité aux normes NF C 15-100 garantie.",
        style: "",
        crossColor: "#B8D8D8",
        mainColor: "#EC6B60",
        slug: "electricite"
    },
    {
        title: "Démolition",
        description: "Déconstruction sélective et désamiantage sécurisé. Respect des protocoles environnementaux et de sécurité.",
        style: "",
        crossColor: "#EDF4DB",
        mainColor: "#4F6367",
        slug: "demolition"
    },
    {
        title: "Revêtements - Parquets",
        description: "Pose de parquets, stratifiés et revêtements souples. Préparation des supports, finitions et plinthes incluses.",
        style: "",
        crossColor: "#7D9395",
        mainColor: "#EDF4DB",
        color: "#1b1b1b",
        hoverColor: "#f3f3f3",
        slug: "revetements-de-sols"
    },
    {
        title: "Sanitaire - Cuisine",
        description: "Installation complète sanitaires et cuisines. Plomberie, raccordements, pose d'équipements et mise en service.",
        style: "",
        crossColor: "#EDF4DB",
        mainColor: "#4F6367",
        slug: "sanitaire-cuisine"
    },
    {
        title: "Petits travaux",
        description: "Bricolage, réparations et aménagements du quotidien. Intervention rapide pour tous vos besoins ponctuels.",
        style: "",
        crossColor: "#EDF4DB",
        mainColor: "#7D9395",
        slug: "petits-travaux"
    },
    {
        title: "Déménagement et nettoyage",
        description: "Service complet de déménagement et nettoyage fin de chantier. Emballage, transport et remise en état.",
        style: "",
      crossColor: "#B8D8D8",
        mainColor: "#EC6B60",
        slug: "demenagement-nettoyage"
    }
];

export default function ServicesBis() {

    return (
        <section id="nos-services" className="min-h-[90dvh] w-full max-w-screen-2xl sm:px-6 lg:px-8 lg:w-full  py-8 lg:py-0 flex flex-col justify-start items-center px-4">
            <div className="w-full max-w-screen-2xl flex flex-col justify-start items-start py-10 mt-10">
                <h1 className="text-darkGray text-6xl font-switzer">Nos services</h1>
                <p className="text-2xl font-switzer font-semibold text-darkBlue">Comment nous pouvons vous être utile ?</p>
            </div>
            <motion.div
                className="w-full max-w-screen-2xl  flex flex-wrap gap-4 lg:justify-start items-stretch lg:items-center"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, staggerChildren: 0.2 }}
            >
                {services.map((service) => (
                    <ServiceCardBis
                        key={service.slug}
                        title={service.title}
                        description={service.description}
                        style={service.style}
                        crossColor={service.crossColor}
                        mainColor={service.mainColor}
                        slug={service.slug}
                        color={service.color ? service.color : "#f3f3f3"}
                        hoverColor={service.hoverColor ? service.hoverColor : "#1b1b1b"}
                    />
                ))}
            </motion.div>
            {/* <motion.div
                className="w-full flex flex-col lg:flex-row  lg:h-[45dvh] lg:justify-between items-stretch lg:items-start lg:mt-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <ServiceCardBis
                    title="Isolation"
                    description="Améliorez le confort thermique et acoustique de vos bâtiments. Isolation des combles, murs, planchers et toitures (ITI/ITE), traitement des ponts thermiques, pose de pare-vapeur et membranes d'étanchéité à l'air. Matériaux adaptés (laine minérale, fibre de bois, PIR, ouate). Chantier protégé, finitions soignées, économies d'énergie durables."
                    style="bg-mainRed"
                    crossColor="#B8D8D8"
                    mainColor="#EC6B60"
                    slug="isolation"
                />
                <ServiceCardBis
                    title="Recyclage"
                    description="Tri et évacuation responsables des déchets de chantier : inertes, bois, ferrailles, cartons/plastiques, plâtre, D3E et déchets spécifiques. Bennes dédiées, acheminement vers filières agréées et site laissé propre avec justificatifs de prise en charge."
                    style="bg-mainYellow"
                    crossColor="#7D9395"
                    mainColor="#EDF4DB"
                    slug="recyclage"
                />
            </motion.div> */}
        </section>
    )
}