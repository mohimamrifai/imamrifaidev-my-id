import React from 'react'
import { motion } from "framer-motion"

const initial = { opacity: 0, scale: 0 }
const animate = { opacity: 1, scale: 1 }


export default function ImageProfil() {
    return (
        <div 
            className="right bg-gradient-to-t from-black to-white mt-16 w-10/12 md:mt-6 mx-auto rounded-bl-[50px] md:h-[300px] rounded-br-[50px] overflow-hidden lg:w-6/12 lg:rounded-none lg:bg-none lg:h-[600px] lg:mt-0">
            <motion.img 
                initial={initial} 
                animate={animate} 
                transition={{ duration: 1, ease: "backInOut" }} 
                src="/profile.png" 
                alt='hero' 
                className='w-full h-full object-cover rounded-bl-[50px] rounded-br-[50px]' 
                width={350} height={400} />
        </div>
    )
}
