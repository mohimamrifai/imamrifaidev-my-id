import React from 'react'
import Card from './Card'
import { datas } from '../data'


export default function Projects() {
    return (
        <div className='mt-20 pt-20 w-10/12 mx-auto lg:w-8/12 md:text-center lg:pt-28 lg:text-left' id='portofolio'>
            <h2 className='text-2xl text-blue-600 font-semibold tracking-wider'>Portofolio</h2>
            <p className='text-gray-700'>Each project is a unique part of development 🌱</p>
            <div className="container">
                {datas.map(({id, img, judul, desc, tech, code, demo})=> (
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
        </div>
    )
}
