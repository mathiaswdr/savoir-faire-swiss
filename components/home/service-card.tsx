'use client'

import { useState } from 'react'
import Cross from "../cross"
import {motion} from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServiceCard({title, description, style, crossColor, mainColor, slug}: {title: string, description: string, style?: string, crossColor?: string, mainColor?: string, slug?: string}) {
    const [isHovered, setIsHovered] = useState(false)

    return(
        <Link 
            className={`w-full lg:w-1/2 min-h-[300px] lg:h-full flex flex-col gap-y-2 ${style} p-6 sm:p-8 lg:p-10 relative group globalHover cursor-pointer transition-all duration-300 overflow-hidden`}
            style={{
                backgroundColor: isHovered ? crossColor : mainColor,
                // color: isHovered ? 'white' : 'black'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href={`/services/${slug}`}
        >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-switzer font-semibold">{title}</h1>
            
            <p className="text-sm sm:text-base lg:text-lg font-medium w-full lg:w-10/12 line-clamp-4 sm:line-clamp-none">
                {description}
            </p>

            <Cross 
                style="hidden lg:block globalHover group-hover:rotate-[360deg] group-hover:opacity-0 absolute bottom-6 sm:bottom-8 lg:bottom-10 right-6 sm:right-8 lg:right-10 scale-75 sm:scale-90 lg:scale-100" 
                color={isHovered ? mainColor : crossColor}
            />

            <ArrowRight 
                size={102} 
                color={isHovered ? mainColor : crossColor}
                className="absolute bottom-6 sm:bottom-8 lg:bottom-10 right-6 sm:right-8 lg:right-10 lg:opacity-0 globalHover group-hover:rotate-[360deg] group-hover:opacity-100 scale-75 sm:scale-90 lg:scale-100" 
            />

            {/* <h3 className='hidden sm:block absolute bottom-8 sm:bottom-12 lg:bottom-[4rem] left-6 sm:left-8 lg:left-10 font-semibold text-2xl sm:text-3xl lg:text-4xl uppercase italic translate-x-10 opacity-0 globalHover group-hover:translate-x-0 group-hover:opacity-100'>En savoir plus</h3> */}

        </Link>
    )
}