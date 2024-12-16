"use client"
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPrisma, SiMysql, SiFigma, SiLaravel } from "react-icons/si";

const skills = [
  {
    name: "React.js",
    icon: <FaReact className="text-4xl text-blue-400" />,
    description: "Library JavaScript untuk membangun antarmuka pengguna yang interaktif dan responsif"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-4xl" />,
    description: "Framework React dengan fitur SSR, routing, dan optimasi built-in"
  },
  {
    name: "Laravel",
    icon: <SiLaravel className="text-4xl text-red-500" />,
    description: "Framework PHP untuk pengembangan web yang kuat dan fleksibel"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl text-cyan-400" />,
    description: "Framework CSS utility-first untuk styling cepat dan fleksibel"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-4xl text-blue-600" />,
    description: "JavaScript dengan pengetikan statis untuk kode yang lebih aman"
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-4xl text-green-600" />,
    description: "Runtime JavaScript untuk backend development"
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-4xl" />,
    description: "ORM modern untuk Node.js dan TypeScript"
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-4xl text-blue-500" />,
    description: "Sistem manajemen database relasional yang populer"
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-4xl text-orange-600" />,
    description: "Sistem kontrol versi untuk manajemen kode"
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-4xl text-purple-500" />,
    description: "Tool desain UI/UX kolaboratif berbasis web"
  }
];

export default function Skills() {
  return (
    <div className="mt-14 md:p-10 p-3">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.25, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-6xl md:text-8xl font-bold text-white custom-outline md:ps-5 opacity-25"
      >
        Skills & Tools
      </motion.p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20 relative max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl transition-transform duration-200 group-hover:scale-105">
                {skill.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {skill.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="absolute w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl -z-20 opacity-40"></div>
      </div>
    </div>
  );
}
