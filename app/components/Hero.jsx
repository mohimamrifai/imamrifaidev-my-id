import React from 'react'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className='px-6 md:flex md:px-20 md:items-center md:justify-between lg:py-28 md:pt-20'>
            <div className="left lg:w-8/12 lg:relative lg:z-10">
                <div className="w-4/12 bg-gray-800 h-[8px]"></div>
                <h3 className='mt-5 text-4xl font-medium tracking-widest font-Poppins'>I'm Imam rifai</h3>
                <p className='mt-3 text-4xl font-bold tracking-wider font-Poppins lg:text-6xl'>Front-end Developer</p>
                <p className='mt-6 mb-10 text-gray-700 font-Poppins w-10/12'>Lover of JavaScript, coding enthusiast, constantly learning and growing, building amazing projects.</p>
                <a href="#" className=' bg-gray-900 py-3 text-white px-4 tracking-widest'>LET'S TALK</a>
                <div className="social-media mt-28 font-medium text-xl md:mt-16">
                    <p className='text-gray-700'>Follow me</p>
                    <div className="flex gap-2 mt-1">
                        <a href="#">
                            <Image src="/linkedin.png" width={40} height={50} alt='icon1'/>
                        </a>
                        <a href="#">
                            <Image src="/github.png" width={40} height={50} alt='icon2'/>
                        </a>
                        <a href="#">
                            <Image src="/instagram.png" width={40} height={50} alt='icon3'/>
                        </a>
                        <a href="#">
                            <Image src="/tiktok.png" width={40} height={50} alt='icon4'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="right bg-gradient-to-t from-black to-white mt-16 w-10/12 md:mt-6 mx-auto rounded-bl-[50px] md:h-[300px] rounded-br-[50px] overflow-hidden lg:w-6/12 lg:rounded-none lg:bg-none lg:h-[600px] lg:mt-0">
                <Image src="/profile.png" alt='hero' className='w-full h-full object-cover rounded-bl-[50px] rounded-br-[50px] ' width={350} height={400} />
            </div>
        </div>
    )
}
