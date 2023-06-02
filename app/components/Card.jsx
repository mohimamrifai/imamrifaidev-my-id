import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ judul, img, desc, tech, code, demo, index }) {
    return (
        <div className={`my-10 rounded-md text-center md:items-center md:flex ${index % 2 == 0 ? "flex-row-reverse" : "flex-row"} md:gap-5 lg:gap-10 lg:my-0 md:mx-auto lg:py-10`}>
            <Image src={`/${img}`} width={350} height={300} alt={judul} className='rounded-md border-2 border-gray-300 p-1 md:h-[280px] lg:w-[400px] lg:h-[300px] mx-auto' />
            <div>
                <h3 className='mt-3 text-2xl font-bold text-blue-600'>{judul}</h3>
                <div className='flex mt-5 px-3 justify-center gap-5'>
                    {tech.map(({ name, icon }, index) => (
                        <div className='flex gap-2' key={index}>
                            <Image src={`/${icon}`} height={20} width={25} alt={name}/>
                            <p className='font-bold text-gray-800'>{name}</p>
                        </div>
                    ))}
                </div>
                <p className='mt-5 text-justify px-3 text-base text-gray-600 lg:text-justify w-10/12 mx-auto'>{desc}</p>
                {/* live demo and code */}
                <div className='flex mt-5 justify-center gap-10'>
                    <Link href={code} className='flex gap-2 underline'>
                        <p className='font-bold text-gray-800'>Code</p>
                        <Image src="/github.png" height={25} width={25} alt='code' />
                    </Link>
                    <Link href={demo} className='flex gap-2 underline'>
                        <p className='font-bold text-gray-800'>Demo</p>
                        <Image src="/open-up.png" height={25} width={25} alt='demo'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
