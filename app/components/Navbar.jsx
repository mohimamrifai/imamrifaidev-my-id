"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Title from "../elements/title";
import LinkNav from "../elements/link";
import navLinks from "../navLinks";

export default function Navbar() {
  // state untuk toggle humberger menu
  const [active, setActive] = useState(false);
  // state untuk dark / light
  const [isDark, setIsDark] = useState(false);

  // function untuk handle darkmode
  const handleDarkMode = () => {
    document.body.classList.toggle("dark");
    setIsDark(!isDark);
  };

  // tampilan untuk icon dark & light
  function DisplayDarkAndLight() {
    return (
      <>
        {isDark ? (
          <button onClick={handleDarkMode}>
            <BsFillSunFill size={20} className="dark:text-white" />
          </button>
        ) : (
          <button onClick={handleDarkMode}>
            <BsFillMoonFill
              size={20}
              className="text-gray-900 dark:text-white"
            />
          </button>
        )}
      </>
    );
  }

  return (
    <div className="flex justify-center flex-row dark:bg-gray-900">
      <nav className="py-3 px-6 fixed top-2 w-11/12 md:py-3 lg:px-20 bg-slate-50 bg-opacity-5 backdrop-blur-lg z-20 dark:bg-white dark:bg-opacity-5 shadow-xl flex justify-between rounded-2xl">
        <Title />
        <div className="hidden md:flex md:items-center">
          {navLinks.map(({ name, href }) => (
            <LinkNav key={href} value={name} hrefValue={href} />
          ))}
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <DisplayDarkAndLight />
          <Link
            href="https://api.whatsapp.com/send?phone=6282118668919&text=Halo%2C%20imam"
            target="_blank"
            className="hidden md:block md:text-base font-Poppins border-2 hover:bg-blue-600 duration-200 transition-all hover:text-white md:border-gray-300 md:w-min md:py-1 md:px-3 md:text-gray-900 dark:text-gray-100 rounded-lg"
          >
            Contact
          </Link>
          <AiOutlineMenu
            size={23}
            onClick={() => setActive(true)}
            className="md:hidden dark:text-white"
          />
        </div>
      </nav>

      {/* nav ketika aktif di mobile */}
      <div
        className={`fixed top-0 z-20 ${
          active ? "right-0" : "-right-96"
        } bg-gray-900 text-gray-100 py-5 px-10 h-full w-10/12 transition-all duration-300 ease-linear md:hidden lg:hidden`}
      >
        <AiOutlineClose
          size={25}
          className="absolute right-5 top-5"
          onClick={() => setActive(false)}
        />
        <div className="flex flex-col">
          {navLinks.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className="mb-3 text-lg"
              onClick={() => setActive(false)}
            >
              {name}
            </Link>
          ))}
          <Link
            href="https://api.whatsapp.com/send?phone=6282118668919&text=Halo%2C%20imam"
            target="_blank"
            className="text-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
