"use client";
import React from "react";
import Image from "next/image";

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
          {Array.from({ length: 7 }).map((_, index) => (
            <Image
              key={index}
              src={`/project${index + 1}.png`}
              alt="project 1"
              width={1000}
              height={1000}
              className="rounded shadow-md"
            />
          ))}
          <div className="absolute w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl bottom-0 left-0 -z-20 opacity-60"></div>
        </div>
      </div>
    </div>
  );
}
