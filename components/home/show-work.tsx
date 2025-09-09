
import Cross from "../cross";
import ServiceCard from "./service-card";
import Image from "next/image";
import Work from "./work";

export default function ShowWork() {

    return (
        <section className="min-h-[90dvh] w-screen max-w-bigScreen flex flex-col justify-start items-center mt-20 lg:px-10">
            <h1 className="font-switzer text-5xl lg:text-6xl ">Nos réalisations</h1>
            <div className="w-full max-w-screen-2xl min-h-screen px-mobileScreen lg:min-h-[45dvh] mt-10  flex flex-col gap-y-10 lg:flex-row justify-center items-center lg:justify-between lg:items-start flex-wrap">
                <Work 
                    beforeImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
                    beforeAlt="Chantier de rénovation d'une cuisine"
                    afterImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
                    afterAlt="Cuisine rénovée avec des finitions modernes"
                    location="Genève"
                    year={2023}
                    works={["Rénovation", "Peinture", "Finitions"]}
                />
                <Work 
                    beforeImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
                    beforeAlt="Chantier de rénovation d'une cuisine"
                    afterImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
                    afterAlt="Cuisine rénovée avec des finitions modernes"
                    location="Genève"
                    year={2023}
                    works={["Rénovation", "Peinture", "Finitions"]}
                />
                <Work 
                    beforeImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
                    beforeAlt="Chantier de rénovation d'une cuisine"
                    afterImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
                    afterAlt="Cuisine rénovée avec des finitions modernes"
                    location="Genève"
                    year={2023}
                    works={["Rénovation", "Peinture", "Finitions"]}
                />
                <Work 
                    beforeImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
                    beforeAlt="Chantier de rénovation d'une cuisine"
                    afterImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
                    afterAlt="Cuisine rénovée avec des finitions modernes"
                    location="Genève"
                    year={2023}
                    works={["Rénovation", "Peinture", "Finitions"]}
                />
            </div>

        </section>
    )
} 