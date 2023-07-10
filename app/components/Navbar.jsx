"use client"

import { usePathname } from 'next/navigation';
import {AiOutlineMenu} from 'react-icons/ai'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import navLinks from '../navLinks';
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'

export default function Navbar() {

    const [active, setActive] = useState(false);
    const [isDark , setIsDark] = useState(false)
    const pathname = usePathname();

    const handleDarkMode = () => {
        document.body.classList.toggle('dark')
        setIsDark(!isDark)
      }

    return (
        <div>
            <nav className='flex justify-between items-center py-2 px-6 fixed top-0 w-full md:py-5 lg:px-20 bg-white z-20 dark:bg-gray-900'>
                <Link href="/" className='text-gray-900 hover:text-blue-600 duration-200 text-3xl font-semibold font-playFair md:text-4xl dark:text-gray-100'>imamrifai.dev</Link>
                <div className='hidden md:flex md:items-center'>
                    {navLinks.map(({ name, href }) => (
                        <a href={href} key={name} className={`text-lg mx-3 hover:text-blue-600 font-Poppins duration-200 hover:underline ${pathname === href ? "text-blue-600 dark:text-gray-100 font-semibold" : "text-gray-900 dark:text-gray-100"}`}>{name}</a>
                    ))}
                </div>
                <div className='flex items-center gap-3'>
                {isDark ? <button  className='text-slate-100' onClick={handleDarkMode}><BsFillSunFill size={20}/></button> : <button onClick={handleDarkMode}><BsFillMoonFill size={20}/></button>}
                <Link href="https://api.whatsapp.com/send?phone=6282118668919&text=Halo%2C%20imam" target='_blank' className='hidden md:block md:text-lg font-Poppins border-2 hover:bg-blue-600 duration-200 transition-all hover:text-white md:border-gray-700 md:w-min md:py-1 md:px-6 md:text-gray-900 dark:text-gray-100'>Contact</Link>
                </div>
                <AiOutlineMenu 
                    size={25}
                    onClick={() => setActive(true)}
                    className='md:hidden dark:text-white'
                    />
            </nav>

            {/* nav ketika aktif di mobile */}
            <div className={`fixed top-0 z-20 ${active ? "right-0" : "-right-96"} bg-gray-900 text-gray-100 py-5 px-10 h-full w-10/12 transition-all duration-300 ease-linear md:hidden lg:hidden`}>
                <Image
                    src="/tutup.png"
                    width={23}
                    height={18}
                    className='absolute right-5 top-5'
                    onClick={() => setActive(false)}
                    alt='close'
                />
                <div className='flex flex-col'>
                    <Link href="/" className='mb-3 text-lg' onClick={() => setActive(false)} >Home</Link>
                    <Link href="/blog" onClick={() => setActive(false)} className='mb-3 text-lg'>Blog</Link>
                    <Link href="/projects" onClick={() => setActive(false)} className='mb-3 text-lg'>Projects</Link>
                    <Link href="#" className='mb-3 text-lg border-2 border-white w-min py-1 px-6'>Contact</Link>
                </div>
            </div>
        </div>
    )
}
