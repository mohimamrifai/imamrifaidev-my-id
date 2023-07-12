import React from 'react'

import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3, BiLogoJavascript, BiLogoMongodb } from 'react-icons/bi'
import {FaBootstrap, FaReact, FaNodeJs, FaPhp, FaLaravel} from 'react-icons/fa'
import {SiExpress, SiMysql, SiTailwindcss} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'

export default function Skills() {
  return (
    <div className='mt-20 pt-20 font-Poppins w-10/12 mx-auto lg:w-8/12 md:text-center lg:pt-28 lg:text-left'>
      <h2 className='text-2xl text-blue-600 dark:text-blue-300 font-semibold tracking-wider'>Skills</h2>
      <div className='py-5 grid grid-cols-4 lg:grid-cols-6 gap-5'>
        <AiFillHtml5 size={70} color='#dd4b25'/>
        <BiLogoCss3 size={70} color='#254bdd'/>
        <BiLogoJavascript size={70} color='#efd81d' />
        <FaPhp size={70} color='#697ab1' />
        <FaBootstrap size={60} color='#8212fa'/>
        <SiTailwindcss size={60} color='#38bdf8' />
        <FaLaravel size={60} color='#f72719'/>
        <FaReact size={60} color='#38bdf8' />
        <FaNodeJs size={60} color='#3c823b' />
        <SiExpress size={60} />
        <SiMysql size={60} color='#00718b' />
        <BiLogoMongodb size={60} color='#3c823b' />
        <BsGit size={60} color='#e84d31'/>
      </div>
    </div>
  )
}
