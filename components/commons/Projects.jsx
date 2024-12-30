"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  // Next.js | React Js Category
  {
    id: 1,
    title: "Topupaja.com",
    href: "https://topupaja-com.vercel.app/",
    src: "/project8.png",
    description: "Sebuah website untuk topup game dirancang menggunakan Next.js, Tailwind CSS, dan TypeScript.",
    tools: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma", "MySQL", "Clerk"],
    category: "Next.js | React Js",
  },
  {
    id: 2,
    title: "Digify | Digital Marketing Landing Page", 
    href: "https://digify-pi.vercel.app/",
    src: "/project1.png",
    description: "Sebuah landing page untuk digital marketing dirancang menggunakan Next.js, Tailwind CSS, dan Framer Motion.",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Next.js | React Js",
  },
  {
    id: 3,
    title: "Website Seblak Prasmanan",
    href: "https://seblak-prasmanan-lubis.vercel.app/",
    src: "/project3.png",
    description: "Sebuah website untuk seblak prasmanan dirancang menggunakan Next.js, Tailwind CSS, dan Framer Motion.",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Next.js | React Js",
  },
  {
    id: 4,
    title: "Mirland | Jasa Website",
    href: "https://mirland-id.vercel.app",
    src: "/project5.png",
    description: "Sebuah website untuk jasa website dirancang menggunakan Next.js, Tailwind CSS, dan Framer Motion.",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Next.js | React Js",
  },
  {
    id: 5,
    title: "Easy Rent | Rental Mobile",
    href: "https://rent-mir.vercel.app/",
    src: "/project6.png",
    description: "Sebuah website untuk rental mobile dirancang menggunakan Next.js, Tailwind CSS, dan Framer Motion.",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Next.js | React Js",
  },
  {
    id: 6,
    title: "Website Bakso Sapi Mang Budi",
    href: "https://baksomangbudi.vercel.app/",
    src: "/project7.png",
    description: "Sebuah website untuk bakso sapi mang budi dirancang menggunakan Next.js, Tailwind CSS, dan Framer Motion.",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Next.js | React Js",
  },
  
  // UI/UX Design Category
  {
    id: 7,
    title: "Umahku | Furniture Shop",
    href: "#",
    src: "/project2.png",
    description: "Desain UI/UX untuk furniture shop dirancang menggunakan Figma.",
    tools: ["Figma"],
    category: "UI/UX Design",
  },
  {
    id: 8,
    title: "Website Digital Bank",
    href: "#",
    src: "/project4.png",
    description: "Desain UI/UX untuk digital bank dirancang menggunakan Figma.",
    tools: ["Figma"],
    category: "UI/UX Design",
  }
];

export default function Projects() {
  return (
    <div>
      <div className="mt-14 md:p-10 p-3">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.25, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-bold text-white custom-outline md:ps-5 opacity-25"
        >
          This is a project I have worked on.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-5 relative">
          {projects.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
              key={item.id}
              className="bg-white rounded overflow-hidden cursor-pointer shadow-sm hover:shadow-md"
            >
              <Link href={item.href} target="_blank">
                <div className="overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="font-semibold text-xl hover:text-purple-500 transition-colors">{item.title}</div>
                  {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
                  <div className="flex gap-2 flex-wrap">
                    {item.tools.map((tool, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-gray-100 text-sm rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="absolute w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl bottom-0 left-0 -z-20 opacity-60"></div>
        </div>
      </div>
      <div className="py-16 px-5 md:p-36 mt-36 md:mt-10">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold leading-loose"
        >
          Making users<span className="bg-purple-500 text-white">happy,</span>{" "}
          writing clean <span className="bg-blue-400 text-white">code</span> and
          mastering the art of{" "}
          <span className="bg-pink-400 text-white">remote work</span> like a
          ninja
        </motion.p>
      </div>
    </div>
  );
}
