"use client";
import { Montserrat_Alternates } from "next/font/google";
import { motion } from "framer-motion";

const monserrat = Montserrat_Alternates({
  subsets: ["vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

const initial = { opacity: 0 };
const animate = { opacity: 1 };
const transition = { duration: 0.2 };

export default function Hero() {
  return (
    <BackgroundLines>
      <div>
        <motion.div
          initial={initial}
          animate={animate}
          transition={transition}
          className="py-16 px-10 text-center"
        >
          <div>Hello <motion.div className="inline-block" animate={{
            rotate: [0, -20, 20, -20, 0],
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }
          }}>👋</motion.div>, my name is</div>
          <h1
            className={`${monserrat.className} font-black text-2xl md:text-4xl`}
          >
            MOHAMMAD IMAM RIFAI
          </h1>
        </motion.div>
        <div className="flex flex-col gap-10 md:gap-14">
          <motion.h1
            initial={initial}
            animate={animate}
            transition={{delay: .1, duration: 1}}
            href="#"
            className="text-6xl md:text-8xl font-bold text-white custom-outline underline decoration-purple-500 md:ps-5"
          >
            <motion.div>UI & UX Designer</motion.div>
          </motion.h1>
          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ delay: 0.3, duration: 1 }}
            href="#"
            className="text-6xl md:text-8xl font-bold text-white custom-outline underline decoration-blue-400 text-right md:pe-5"
          >
            Software Engineer
          </motion.h1>
          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ delay: 0.5, duration: 1 }}
            href="#"
            className="text-6xl text-left md:text-8xl font-bold text-white custom-outline underline decoration-pink-400 md:text-center"
          >
            Remote Worker
          </motion.h1>
        </div>
      </div>
    </BackgroundLines>
  );
}
