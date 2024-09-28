"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Digify | Digital Marketing Landing Page",
    href: "https://digify-pi.vercel.app/",
    src: "/project1.png",
  },
  {
    id: 2,
    title: "Umahku | Furniture Shop",
    href: "#",
    src: "/project2.png",
  },
  {
    id: 3,
    title: "Website Seblak Prasmanan",
    href: "https://seblak-prasmanan-lubis.vercel.app/",
    src: "/project3.png",
  },
  {
    id: 4,
    title: "Website Digital Bank",
    href: "#",
    src: "/project4.png",
  },
  {
    id: 5,
    title: "Mirland | Jasa Website",
    href: "https://mirland-id.vercel.app",
    src: "/project5.png",
  },
  {
    id: 6,
    title: "Easy Rent | Rental Mobile",
    href: "https://rent-mir.vercel.app/",
    src: "/project6.png",
  },
  {
    id: 7,
    title: "Website Bakso Sapi Mang Budi",
    href: "https://baksomangbudi.vercel.app/",
    src: "/project7.png",
  },
];

export default function Projects() {
  return (
    <div>
      <div className="py-16 px-5 md:p-36 mt-36 md:mt-10">
        <p className="text-center text-5xl font-bold leading-loose">
          Making users<span className="bg-purple-500 text-white">happy,</span>{" "}
          writing clean <span className="bg-blue-400 text-white">code</span> and
          mastering the art of{" "}
          <span className="bg-pink-400 text-white">remote work</span> like a
          ninja
        </p>
      </div>
      <div className="mt-14 md:p-10 p-3">
        <p className="text-6xl md:text-8xl font-bold text-white custom-outline md:ps-5 opacity-25">
          This is a project I have worked on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-5 relative">
          {projects.map((item) => (
            <div key={item.id} className="bg-white rounded overflow-hidden">
              <Image
                src={item.src}
                alt="project 1"
                width={1000}
                height={1000}
              />
              <div className="p-4">
                <Link href={item.href} target="_blank" className="font-semibold text-xl">{item.title}</Link>
              </div>
            </div>
          ))}
          <div className="absolute w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl bottom-0 left-0 -z-20 opacity-60"></div>
        </div>
      </div>
    </div>
  );
}
