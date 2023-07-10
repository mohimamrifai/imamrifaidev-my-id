"use client"

import { motion  } from "framer-motion"
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import {BiLogoTiktok} from 'react-icons/bi'

import React from 'react'
import Link from "next/link"

export default function Hero() {
    
    const initial = { x : "-200%" }
    const animate = { x: "0" }
    const config = {
        duration: 1,
        ease: "backInOut",
    }

    return (
        <div className='px-6 pt-32 md:flex md:px-20 md:items-center md:justify-between lg:py-28 md:pt-20 dark:bg-gray-900 duration-300 transition-all'>
            <div className="left lg:w-8/12 lg:relative lg:z-10">
                <motion.div 
                    initial={{y: -350}} 
                    animate={{y: 0}} 
                    transition={config} 
                    className="w-4/12 bg-gray-800 h-[8px] dark:bg-gray-100">
                </motion.div>
                <motion.h3 
                    initial={initial} 
                    animate={animate} 
                    transition={config} 
                    className='mt-5 text-4xl font-medium tracking-widest font-Poppins dark:text-gray-100'>
                    I'm Imam rifai
                </motion.h3>
                <motion.p 
                    initial={initial} 
                    animate={animate} 
                    transition={{duration: .5, ease: "backInOut"}} 
                    className='mt-3 text-4xl font-bold tracking-wider font-Poppins lg:text-6xl dark:text-gray-100'>
                    Front-end Developer
                </motion.p>
                <motion.p 
                    initial={initial} 
                    animate={animate} 
                    transition={{duration: .8, ease: "backInOut"}} 
                    className='mt-6 mb-10 text-gray-700 font-Poppins w-10/12 dark:text-gray-100'>
                    Lover of JavaScript, coding enthusiast, constantly learning and growing, building amazing projects.
                </motion.p>
                <motion.a 
                initial={{opacity: "0"}} 
                animate={{opacity: 1}} 
                transition={{duration: .7}} 
                href="#" 
                className='bg-gray-900 py-3 font-Poppins text-white px-4 tracking-widest hover:bg-blue-600 dark:border-2 dark:border-white transition-all duration-200'>
                    <Link href="https://api.whatsapp.com/send?phone=6282118668919&text=Halo%2C%20imam" target="_blank" className="dark:text-gray-100">    
                        LET'S TALK
                    </Link>
                </motion.a>
                <div className="social-media mt-28 font-medium text-xl md:mt-16">
                    <motion.p 
                        initial={{opacity: "0"}} 
                        animate={{opacity: 1}} 
                        className='text-gray-700 font-Poppins dark:text-gray-100'>
                        Follow me
                    </motion.p>
                    <div className="flex gap-2 mt-1">
                        <motion.a 
                            initial={{opacity: 0, x: -100}} 
                            animate={{opacity: 1, x: 0}} 
                            transition={{ delay: .3}} 
                            target="_blank" 
                            href="https://www.linkedin.com/in/mohammad-imam-rifai-79bab9265/">
                            <AiFillLinkedin size={40} className="text-gray-900 dark:text-white hover:scale-125 duration-200"/>
                        </motion.a>
                        <motion.a 
                            initial={{opacity: 0, x: -100}} 
                            animate={{opacity: 1, x: 0}} 
                            transition={{ delay: .5}}
                            target="_blank"
                            href="https://github.com/mohimamrifai">
                            <AiFillGithub size={40} className="text-gray-900 dark:text-white hover:scale-125 duration-200"/>
                        </motion.a>
                        <motion.a 
                            initial={{opacity: 0, x: -100}} 
                            animate={{opacity: 1, x: 0}} 
                            transition={{ delay: .7}} 
                            target="_blank"
                            href="https://www.instagram.com/maspalul_/?igshid=MzNlNGNkZWQ4Mg%3D%3D">
                            <AiFillInstagram size={40} className="text-gray-900 dark:text-white hover:scale-125 duration-200" />
                        </motion.a>
                        <motion.a 
                            initial={{opacity: 0, x: -100}} 
                            animate={{opacity: 1, x: 0}} 
                            target="_blank"
                            transition={{ delay: .9}} 
                            href="https://www.tiktok.com/@maspalul">
                            <BiLogoTiktok size={40} className="text-gray-900 dark:text-white hover:scale-125 duration-200" />
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
