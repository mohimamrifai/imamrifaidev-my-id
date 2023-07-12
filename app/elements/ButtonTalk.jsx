import React from 'react'
import { motion } from "framer-motion"

const initial = { opacity: 0 }
const animate = { opacity: 1 }

function ButtonTalk() {
    return (
        <motion.a
            initial={initial}
            animate={animate}
            transition={{ duration: .7 }}
            href="https://api.whatsapp.com/send?phone=6282118668919&text=Halo%2C%20imam"
            className='bg-gray-900 py-3 font-Poppins text-white px-4 tracking-widest hover:bg-blue-600 dark:border-2 dark:border-white transition-all duration-200'
            target='_blank'
        >
            LET'S TALK
        </motion.a>
    )
}

export default ButtonTalk
