"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const LinkNav = ({value, hrefValue}) => {

    const pathname = usePathname();
  return (
    <Link href={hrefValue} className={`text-lg mx-3 hover:text-blue-600 font-Poppins duration-200 hover:underline ${pathname === hrefValue ? "text-blue-600 dark:text-gray-100 font-semibold" : "text-gray-900 dark:text-gray-100"}`}>
        {value}
    </Link>
  )
}

export default LinkNav