"use client"

import { motion  } from "framer-motion"

import React from 'react'
import Image from 'next/image'
import Link from "next/link"

export default function Hero() {
    
    const initial = { x : "-200%" }
    const animate = { x: "0" }
    const config = {
        duration: 1,
        ease: "backInOut",
    }

    return (
        <div className='px-6 md:flex md:px-20 md:items-center md:justify-between lg:py-28 md:pt-20'>
            <div className="left lg:w-8/12 lg:relative lg:z-10">
                <motion.div initial={{y: -350}} animate={{y: 0}} transition={config} className="w-4/12 bg-gray-800 h-[8px]"></motion.div>
                <motion.h3 initial={initial} animate={animate} transition={config} className='mt-5 text-4xl font-medium tracking-widest font-Poppins'>I'm Imam rifai</motion.h3>
                <motion.p initial={initial} animate={animate} transition={{duration: .5, ease: "backInOut"}} className='mt-3 text-4xl font-bold tracking-wider font-Poppins lg:text-6xl'>Front-end Developer</motion.p>
                <motion.p initial={initial} animate={animate} transition={{duration: .8, ease: "backInOut"}} className='mt-6 mb-10 text-gray-700 font-Poppins w-10/12'>Lover of JavaScript, coding enthusiast, constantly learning and growing, building amazing projects.</motion.p>
                <motion.a initial={{opacity: "0"}} animate={{opacity: 1}} transition={{duration: .7}} href="#" className='bg-gray-900 py-3 font-Poppins text-white px-4 tracking-widest hover:bg-blue-600 transition-all duration-200'>
                    <Link href="https://api.whatsapp.com/send?phone=6282118668919&text=Halo%2C%20imam" target="_blank">    
                        LET'S TALK
                    </Link>
                </motion.a>
                <div className="social-media mt-28 font-medium text-xl md:mt-16">
                    <motion.p initial={{opacity: "0"}} animate={{opacity: 1}} className='text-gray-700 font-Poppins'>Follow me</motion.p>
                    <div className="flex gap-2 mt-1">
                        <motion.a initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{ delay: .3}} href="#" className='hover:scale-125 duration-200'>
                            <Link href="https://www.linkedin.com/in/mohammad-imam-rifai-79bab9265/" target="_blank">
                                <Image src="/linkedin.png" width={40} height={50} alt='icon1'/>
                            </Link>
                        </motion.a>
                        <motion.a initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{ delay: .5}} href="#" className='hover:scale-125 duration-200'>
                        <Link href="https://github.com/mohimamrifai" target="_blank">
                            <Image src="/github.png" width={40} height={50} alt='icon2'/>
                        </Link>
                        </motion.a>
                        <motion.a initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{ delay: .7}} href="#" className='hover:scale-125 duration-200'>
                        <Link href="https://www.instagram.com/maspalul_/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank">
                            <Image src="/instagram.png" width={40} height={50} alt='icon3'/>
                        </Link>
                        </motion.a>
                        <motion.a initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{ delay: .9}} href="#" className='hover:scale-125 duration-200'>
                        <Link href="https://www.tiktok.com/@maspalul" target="_blank">
                            <Image src="/tiktok.png" width={40} height={50} alt='icon4'/>
                        </Link>
                        </motion.a>
                    </div>
                </div>
            </div>
            <div className="right bg-gradient-to-t from-black to-white mt-16 w-10/12 md:mt-6 mx-auto rounded-bl-[50px] md:h-[300px] rounded-br-[50px] overflow-hidden lg:w-6/12 lg:rounded-none lg:bg-none lg:h-[600px] lg:mt-0">
                <motion.img initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration: 1, ease: "backInOut"}} src="/profile.png" alt='hero' className='w-full h-full object-cover rounded-bl-[50px] rounded-br-[50px] ' width={350} height={400} />
            </div>
        </div>
    )
}
