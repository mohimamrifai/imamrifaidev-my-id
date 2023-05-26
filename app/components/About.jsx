
import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <div className='mt-20 w-10/12 mx-auto lg:px-6' id='about'>
            <h2 className='text-2xl text-blue-600 font-semibold tracking-wider pt-20 md:mb-3 md:text-center lg:text-left lg:w-10/12 lg:mx-auto lg:pt-28'>About me</h2>
            <p className='text-gray-700 text-justify mb-5 md:mb-3 md:w-10/12 mx-auto lg:hidden'>Halo 😉, perkenalkan, nama saya <b>Mohammad Imam Rifai</b>. Saat ini saya berusia <b>21 tahun</b> dan tinggal di Kabupaten Indramayu, Provinsi Jawa Barat.</p>

            <p className='text-gray-700 text-justify mb-5 md:mb-3 md:w-10/12 mx-auto lg:hidden'>Saat ini saya sedang menempuh pendidikan strata 1 (S1) jurusan Pendidikan Ekonomi di STKIP Pangeran Dharma Kusuma Indramayu.</p>

            <p className='text-gray-700 text-justify mb-5 md:mb-3 md:w-10/12 mx-auto lg:hidden'>Selama dua tahun terakhir, saya telah mempelajari secara otodidak berbagai teknologi yang berkaitan dengan pengembangan web, seperti HTML, CSS, dan JavaScript.</p>

            <p className='text-gray-700 text-justify mb-5 md:mb-3 md:w-10/12 mx-auto lg:hidden'>Saat ini, saya sedang mendalami teknologi framework, terutama yang berbasis JavaScript seperti React JS, Next JS, dan lain-lain.</p>

            <p className='hidden md:hidden lg:block lg:w-10/12 lg:mx-auto lg:text-justify lg:text-lg lg:mb-5'>Halo 😉, Perkenalkan, nama saya <b>Mohammad Imam Rifai</b>. Saat ini saya berusia <b>21 tahun</b> dan tinggal di Kabupaten Indramayu, Provinsi Jawa Barat. Saat ini saya sedang menempuh pendidikan strata 1 (S1) jurusan Pendidikan Ekonomi di STKIP Pangeran Dharma Kusuma Indramayu. Selama dua tahun terakhir, saya telah mempelajari secara otodidak berbagai teknologi yang berkaitan dengan pengembangan web, seperti HTML, CSS, dan JavaScript. Saat ini, saya sedang mendalami teknologi framework, terutama yang berbasis JavaScript seperti React JS, Next JS, dan lain-lain.</p>

            <Link href="/blog" className='italic underline font-medium md:px-14 lg:px-24'> 👉 Baca tulisan aku yuk 👈</Link>
        </div>
    )
}
