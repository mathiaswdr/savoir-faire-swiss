
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type WorkProps = {
    beforeImage: string;
    beforeAlt?: string;
    afterImage: string;
    afterAlt?: string;
    location: string;
    year: number;
    works: string[];
    slug: string;
}

export default function Work(props: WorkProps) {

    const { beforeImage, afterImage, location, year, works, beforeAlt, afterAlt, slug } = props;

    return(
        <div className="w-full lg:w-[48%] h-full relative ">
            <div className="flex flex-col lg:flex-row gap-5 justify-between items-center w-full ">
                <div className="flex flex-col gap-y-2 w-full lg:w-1/2">
                    <div className="relative w-full h-64 overflow-hidden rounded-lg">
                        <Image 
                            src={beforeImage}
                            alt={beforeAlt ? beforeAlt : "Image de chantier"}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 24vw, 100vw"
                            quality={80}
                        />
                    </div>
                    <h3 className="text-3xl font-semibold uppercase">Avant</h3>
                </div>

                <div className="flex flex-col gap-y-2 w-full lg:w-1/2">
                    <div className="relative w-full h-64 overflow-hidden rounded-lg">
                        <Image 
                            src={afterImage}
                            alt={afterAlt ? afterAlt : "Image de chantier"}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 24vw, 100vw"
                            quality={80}
                        />
                    </div>
                    <h3 className="text-3xl font-semibold uppercase">Après</h3>
                </div>
            </div>
            <div className="w-full bg-clearBlue rounded-lg flex flex-col gap-y-1 p-5 mt-3 relative">
                <div className="flex gap-x-4 items-center">
                    <span className="font-semibold">Lieu: </span>
                    <span>{location}</span>
                </div>
                <div className="flex gap-x-4 items-center">
                    <span className="font-semibold">Année: </span>
                    <span>{year}</span>
                </div>
                <div className="flex flex-col 2xl:flex-row justify-start items-start gap-x-4 2xl:justify-start 2xl:items-center">
                    <span className="font-semibold min-w-44">Travaux réalisés :  </span>
                    <span>{works.join(", ")}</span>
                </div>

                <Link 
                    href={`/projets/${slug}`} 
                    className="flex gap-x-2 items-center mt-4 group font-semibold globalHover hover:text-darkBlue"
                >
                    En savoir plus
                    <ArrowRight size={20} className="globalHover group-hover:translate-x-2 relative top-[1px]" />
                </Link>

                {/* <div className={`absolute bottom-3 right-3 w-14 h-14 rounded-full bg-mainRed flex justify-center items-center`}>
                    <ArrowRight size={40} color="#B8D8D8" />
                </div> */}
            </div>
        </div>
    )
}
