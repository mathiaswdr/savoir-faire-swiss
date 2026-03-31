'use client'

import { useState } from 'react'
import Cross from "../cross"
import {motion} from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServiceCardBis({title, description, style, crossColor, mainColor, slug, color, hoverColor}: {title: string, description: string, style?: string, crossColor?: string, mainColor?: string, slug?: string, color?: string, hoverColor?: string}) {
    const [isHovered, setIsHovered] = useState(false)


    const anim = {
        initial: { 
            opacity: 0, 
            y: 50 ,
            // transition: {
            //     duration: 0.5,
            //     type: "spring"
            // }
        },
        animate: { 
            opacity: 1, 
            y: 0 ,
            // transition: {
            //     duration: 0.5,
            //     type: "spring"
            // }
        }
    }

    return(
        <motion.div
            className='w-full'
            variants={anim}
            transition={{
                duration: 0.5,
                type: "spring"
            }}
        >

            <Link 
                className={`text-white w-full  lg:w-[390px] 2xl:w-[480px] min-h-[300px] lg:h-[350px] flex flex-col gap-y-2 ${style} p-6 sm:p-8 lg:p-8 relative rounded-lg group globalHover cursor-pointer overflow-hidden`}
                style={{
                    backgroundColor: isHovered ? crossColor : mainColor,
                    color: isHovered ? hoverColor || 'black' : color || 'white'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href={`/services/${slug}`}
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-switzer font-semibold">{title}</h1>
                
                <p className="text-sm sm:text-base lg:text-lg font-medium w-full lg:w-full line-clamp-4 sm:line-clamp-none">
                    {description}
                </p>

                <div className={`w-[50px] h-[50px] absolute bottom-6 sm:bottom-8 lg:bottom-5 left-6 sm:left-8 lg:left-5 flex items-center justify-center z-50`}>
                    <div className={`w-full h-full flex items-center justify-center globalHover z-40`}>
                        <Cross 
                            style="hidden !w-full !h-full scale-90  lg:block globalHover group-hover:rotate-[360deg] group-hover:opacity-0 absolute top-0 left-0  scale-75 sm:scale-90 lg:scale-100" 
                            color={isHovered ? mainColor : crossColor}
                        />

                        <ArrowRight 
                            color={isHovered ? mainColor : crossColor}
                            className="w-full h-full absolute top-0 left-0 lg:opacity-0 globalHover group-hover:rotate-[360deg] group-hover:opacity-100 scale-75 sm:scale-90 lg:scale-100" 
                        />
                    </div>
                    <button className="w-56  text-xl h-full absolute top-0 left-0 opacity-0 globalHover group-hover:opacity-100 group-hover:translate-x-10">En savoir plus</button>
                </div>
    


                {/* <h3 className='hidden sm:block absolute bottom-8 sm:bottom-12 lg:bottom-[4rem] left-6 sm:left-8 lg:left-10 font-semibold text-2xl sm:text-3xl lg:text-4xl uppercase italic translate-x-10 opacity-0 globalHover group-hover:translate-x-0 group-hover:opacity-100'>En savoir plus</h3> */}

            </Link>
        </motion.div>

    )
}