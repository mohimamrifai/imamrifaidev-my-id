'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'
import Title from '../elements/title';
import LinkNav from '../elements/link';
import navLinks from '../navLinks';

export default function Navbar() {

    // state untuk toggle humberger menu
    const [active, setActive] = useState(false);
    const [isDark , setIsDark] = useState(false)

  const handleDarkMode = () => {
    document.body.classList.toggle('dark')
    setIsDark(!isDark)
  }

    return (
        <div>
            <nav className='flex justify-between items-center py-2 px-6 fixed top-0 w-full md:py-5 lg:px-20 bg-white z-20 dark:bg-gray-900'>
                <Title />
                <div className='hidden md:flex md:items-center'>
                    {navLinks.map(({ name, href }) => (
                        <LinkNav key={href} value={name} hrefValue={href}/>
                    ))}
                </div>
                <div className='flex items-center gap-3 md:gap-2'>
                    {isDark ? 
                        <button  
                            onClick={handleDarkMode}>
                            <BsFillSunFill size={20} className='dark:text-white'/>
                        </button>
                         : 
                        <button 
                            onClick={handleDarkMode}>
                            <BsFillMoonFill size={20} className='text-gray-900 dark:text-white'/>
                        </button>
                    }
                    <Link 
                        href="https://api.whatsapp.com/send?phone=6282118668919&text=Halo%2C%20imam" target='_blank' 
                        className='hidden md:block md:text-lg font-Poppins border-2 hover:bg-blue-600 duration-200 transition-all hover:text-white md:border-gray-700 md:w-min md:py-1 md:px-6 md:text-gray-900 dark:text-gray-100'>
                        Contact
                    </Link>
                </div>
                <AiOutlineMenu 
                    size={25}
                    onClick={() => setActive(true)}
                    className='md:hidden dark:text-white'
                    />
            </nav>

            {/* nav ketika aktif di mobile */}
            <div className={`fixed top-0 z-20 ${active ? "right-0" : "-right-96"} bg-gray-900 text-gray-100 py-5 px-10 h-full w-10/12 transition-all duration-300 ease-linear md:hidden lg:hidden`}>
                <AiOutlineClose
                    size={25}
                    className='absolute right-5 top-5'
                    onClick={() => setActive(false)}
                />
                <div className='flex flex-col'>
                    {navLinks.map(({ name, href }) => (
                        <Link 
                            key={href}
                            href={href} 
                            className="mb-3 text-lg" 
                            onClick={() => setActive(false)}>
                            {name}
                        </Link>
                    ))}
                    <Link 
                        href="https://api.whatsapp.com/send?phone=6282118668919&text=Halo%2C%20imam" target='_blank' 
                        className='mb-3 text-lg border-2 border-white w-min py-1 px-6'>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}
