"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const LinkNav = ({value, hrefValue}) => {

    const pathname = usePathname();
  return (
    <div className="relative px-2 mx-2 py-1 group">
      <Link
        href={hrefValue}
        className={`text-xl font-Poppins ${
          pathname === hrefValue
            ? "text-gray-900 dark:text-gray-100 font-semibold"
            : "text-gray-900 dark:text-gray-100"
        }`}
      >
        {value}
      </Link>
      <div className="absolute w-0 group-hover:w-full duration-30000 transition-all h-3 -z-10 bottom-1 bg-gradient-to-r from-cyan-500 to-blue-500 left-0"></div>
    </div>
  );
}

export default LinkNav