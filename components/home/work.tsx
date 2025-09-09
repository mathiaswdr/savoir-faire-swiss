
import Image from "next/image";


type WorkProps = {
    beforeImage: string;
    beforeAlt?: string;
    afterImage: string;
    afterAlt?: string;
    location: string;
    year: number;
    works: string[];
}

export default function Work(props: WorkProps) {

    const { beforeImage, afterImage, location, year, works, beforeAlt, afterAlt } = props;

    return(
        <div className="w-full lg:w-[48%] h-full relative ">
            <div className="flex flex-col lg:flex-row gap-5 justify-between items-center w-full ">
                <div className="flex flex-col gap-y-2 w-full lg:w-1/2">
                    <Image 
                        src={beforeImage}
                        alt={beforeAlt ? beforeAlt : "Image de chantier"}
                        width={500}
                        height={400}
                        className="object-cover"
                        quality={80}
                    
                    />
                    <h3 className="text-3xl font-semibold uppercase">Avant</h3>
                </div>

                <div className="flex flex-col gap-y-2 w-full lg:w-1/2">
                    <Image 
                        src={afterImage}
                        alt={afterAlt ? afterAlt : "Image de chantier"}
                        width={500}
                        height={400}
                        className="object-cover"
                        quality={80}
                    />
                    <h3 className="text-3xl font-semibold uppercase">Après</h3>
                </div>
            </div>
            <div className="w-full bg-clearBlue flex flex-col gap-y-1 p-5 mt-2">
                <div className="flex gap-x-4 items-center">
                    <span className="font-semibold">Lieu: </span>
                    <span>{location}</span>
                </div>
                <div className="flex gap-x-4 items-center">
                    <span className="font-semibold">Année: </span>
                    <span>{year}</span>
                </div>
                <div className="flex gap-x-4 items-center">
                    <span className="font-semibold">Travaux réalisés : </span>
                    <span>{works.join(", ")}</span>
                </div>
            </div>
        </div>
    )
}