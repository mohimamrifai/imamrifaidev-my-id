"use client"

import React from 'react'
import DivExtra from "../elements/DivExtra"
import DisplayNama from "../elements/DisplayNama"
import DisplayRole from "../elements/DisplayRole"
import DisplayBio from "../elements/DisplayBio"
import ButtonTalk from "../elements/ButtonTalk"
import ButtonFollow from "../elements/ButtonFollow"
import SocialMedia from "./SocialMedia"
import ImageProfil from '../elements/ImageProfil'

export default function Hero() {

    return (
        <div className='px-6 pt-32 md:flex md:px-20 md:items-center md:justify-between lg:py-10 xl:py-16 md:pt-28 dark:bg-gray-900 duration-300 transition-all'>
            <div className="left lg:w-8/12 lg:relative lg:z-10">
                <DivExtra />
                <DisplayNama />
                <DisplayRole />
                <DisplayBio />
                <ButtonTalk />
                <div className="social-media mt-28 font-medium text-xl md:mt-16">
                    <ButtonFollow />
                    <SocialMedia />
                </div>
            </div>
            <ImageProfil />
        </div>
    )
}
