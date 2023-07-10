import React from 'react'

import { datas } from '../data'
import Card from '../components/Card'

export default function page() {
    return (
        <div className='dark:bg-gray-900'>
            <div className='pt-20 font-Poppins pb-10 md:pt-24 px-10 lg:w-8/12 lg:mx-auto '>
            <h2 className='text-2xl dark:text-white'>All projects </h2>
            <div className="container flex flex-col justify-center items-center">
                {datas.map(({ id, img, judul, desc, tech, code, demo }) => (
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
        </div>
)
}
