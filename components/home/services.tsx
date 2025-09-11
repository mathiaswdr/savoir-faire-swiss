import Cross from "../cross";
import ServiceCard from "./service-card";


export default function Services() {

    return (
        <section id="nos-services" className="min-h-[90dvh] w-full  sm:px-6 lg:px-0 lg:w-screen lg:max-w-bigScreen py-8 lg:py-0">
            <div className="w-full flex flex-col lg:flex-row  lg:h-[45dvh] lg:justify-between items-stretch lg:items-start">
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
            </div>
            <div className="w-full flex flex-col lg:flex-row  lg:h-[45dvh] lg:justify-between items-stretch lg:items-start lg:mt-0">
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
            </div>
        </section>
    )
} 