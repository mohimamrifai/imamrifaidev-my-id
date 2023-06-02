import React from 'react'

import { datas } from '../data'
import Card from '../components/Card'

export default function page() {
    return (
        <div className='mt-20 md:mt-24 px-10 lg:w-8/12 lg:mx-auto'>
            <h2 className='text-2xl'>All projects </h2>
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
    )
}
