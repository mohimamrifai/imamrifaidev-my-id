import React from 'react'
import Card from './Card'
import { datas } from '../data'
import Link from 'next/link'


export default function Projects() {
    return (
        <div className='mt-20 pt-20 font-Poppins w-10/12 mx-auto lg:w-8/12 md:text-center lg:pt-28 lg:text-left' id='portofolio'>
            <h2 className='text-2xl text-blue-600 dark:text-blue-300 font-semibold tracking-wider'>Portofolio</h2>
            <p className='text-gray-700 lg:text-lg dark:text-slate-100'>Project yang pernah aku buat 🌱</p>
            <div className="container">
                {datas.slice(0,3).map(({id, img, judul, desc, tech, code, demo})=> (
                    <Card 
                        judul={judul} 
                        key={id}
                        img={img}
                        desc={desc}
                        tech={tech}
                        code={code}
                        demo={demo}
                        index={id}
                         />
                ))} 
            </div>
            <Link href="/projects" className='block text-center py-10
            underline text-xl font-medium text-gray-900 dark:text-white'>See all projects 👉</Link>
        </div>
    )
}
