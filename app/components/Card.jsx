import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {TbWorldWww} from 'react-icons/tb'
import {AiFillGithub} from 'react-icons/ai'

export default function Card({ judul, img, desc, tech, code, demo, index }) {
    return (
        <div className={`my-10 rounded-md text-center md:items-center md:flex md:gap-5 lg:gap-10 lg:my-0 md:mx-auto lg:py-10`}>
            <Image src={`/${img}`} width={350} height={300} alt={judul} className='rounded-md border-2 border-gray-300 p-1 md:h-[280px] lg:w-[400px] lg:h-[300px] mx-auto' />
            <div>
                <h3 className='mt-3 text-2xl font-bold text-blue-600 dark:text-blue-300'>{judul}</h3>
                <div className='flex mt-5 px-3 justify-center gap-5'>
                    {tech.map(({ name, icon }, index) => (
                        <div className='flex gap-2' key={index}>
                            <Image src={`/${icon}`} height={20} width={25} alt={name}/>
                            <p className='font-bold text-gray-800 dark:text-slate-300'>{name}</p>
                        </div>
                    ))}
                </div>
                <p className='mt-5 text-justify px-3 text-base text-gray-600 lg:text-justify w-10/12 mx-auto dark:text-slate-300'>{desc}</p>
                {/* live demo and code */}
                <div className='flex mt-5 justify-center gap-10'>
                    <Link href={code} className='flex gap-2 underline'>
                        <p className='font-bold text-gray-800 dark:text-white'>Code</p>
                        <AiFillGithub size={25} className='dark:text-white' />
                    </Link>
                    <Link href={demo} className='flex gap-2 underline'>
                        <p className='font-bold text-gray-800 dark:text-white'>Demo</p>
                        <TbWorldWww size={25} className='dark:text-white' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
