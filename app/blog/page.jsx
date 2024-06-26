import React from 'react'
import { posts } from '../posts'
import Image from 'next/image'
import Link from 'next/link'


export default function Blog() {
    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <div className='pt-20 pb-10 min-h-screen w-10/12 mx-auto font-Poppins dark:bg-gray-900'>
            <h1 className='text-2xl font-semibold text-gray-900 md:mt-24 dark:text-white'>My Blog Posts</h1>
            <div className='mt-8 lg:grid lg:gap-5 lg:grid-cols-3'>
                {posts.map(({ id, judul, slug, desc }) => (
                    <div key={id} className='border-2 mb-10 pb-5'>
                    <Image 
                        src="/blog/post-img.png" width={300} height={350} alt='gambar' className='w-full mb-5'
                     />
                        <Link href={`/blog/post/${slug}`} className='text-2xl ps-8 font-playFair tracking-wider font-bold'>{judul}</Link>
                        <p className='my-3 px-8 text-justify text-gray-800 dark:text-slate-300'>{desc}...</p>
                        <Link href={`/blog/post/${slug}`} className='underline ps-8 font-semibold'>Read more</Link>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}
