import React from 'react'
import { motion } from "framer-motion"
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { BiLogoTiktok } from 'react-icons/bi'

const SocialMedia = () => {
    return (
        <div className="flex gap-2 mt-1">
            <motion.a
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: .3 }}
                target="_blank"
                href="https://www.linkedin.com/in/mohammad-imam-rifai-79bab9265/">
                <AiFillLinkedin size={40} className="text-gray-900 dark:text-white hover:scale-125 duration-200" />
            </motion.a>
            <motion.a
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: .5 }}
                target="_blank"
                href="https://github.com/mohimamrifai">
                <AiFillGithub size={40} className="text-gray-900 dark:text-white hover:scale-125 duration-200" />
            </motion.a>
            <motion.a
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: .7 }}
                target="_blank"
                href="https://www.instagram.com/maspalul_/?igshid=MzNlNGNkZWQ4Mg%3D%3D">
                <AiFillInstagram size={40} className="text-gray-900 dark:text-white hover:scale-125 duration-200" />
            </motion.a>
            <motion.a
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                target="_blank"
                transition={{ delay: .9 }}
                href="https://www.tiktok.com/@maspalul">
                <BiLogoTiktok size={40} className="text-gray-900 dark:text-white hover:scale-125 duration-200" />
            </motion.a>
        </div>
    )
}

export default SocialMedia