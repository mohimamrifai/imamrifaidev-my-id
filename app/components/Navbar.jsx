"use client"

import { usePathname } from 'next/navigation';

import React, { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {

    const navLinks = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Blog",
            href: "/blog"
        },
    ]
    const [active, setActive] = useState(false);
    const pathname = usePathname();

    return (
        <div>
            <nav className='flex justify-between items-center py-2 px-6 border-2 fixed top-0 w-full md:py-5 lg:px-20 bg-white z-20'>
                <h1 className='text-gray-900 text-3xl font-semibold font-playFair md:text-4xl'>imamrifai.dev</h1>
                <div className='hidden md:flex md:items-center'>
                    {navLinks.map(({ name, href }) => (
                        <a href={href} className={`text-lg mx-3 ${pathname === href ? "text-blue-600 font-semibold" : "text-gray-900"}`}>{name}</a>
                    ))}
                    {/* <Link href="#about" className='text-lg mx-3'>About us</Link>
                    <Link href="#portofolio" className='text-lg mx-3'>Portofolio</Link>
                    <Link href="/blog" className='text-lg mx-3'>Blog</Link> */}
                </div>
                <a href="#" className='hidden md:block md:text-lg border-2  md:border-gray-700 md:w-min md:py-1 md:px-6 md:text-gray-900 md:font-semibold'>Contact</a>
                <Image
                    src="/menu.png"
                    width={23}
                    height={18}
                    onClick={() => setActive(true)}
                    className='md:hidden'
                    alt='menu'
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
                    <a href="/" className='mb-3 text-lg' onClick={() => setActive(false)} >Home</a>
                    <a href="/blog" onClick={() => setActive(false)} className='mb-3 text-lg'>Blog</a>
                    <a href="#" className='mb-3 text-lg border-2 border-white w-min py-1 px-6'>Contact</a>
                </div>
            </div>
        </div>
    )
}
