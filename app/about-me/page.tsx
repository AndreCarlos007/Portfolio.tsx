"use client";
import AboutSlider from '@/components/AboutSlider'
import React from 'react'

const page = () => {
  return (
     <div style={{backgroundImage: "url(/bg-2.jpg)" }}
        className='flex items-center justify-center w-screen h-screen bg-cover bg-center text-white gap-40'>
            <div className="">
                <h1>About me</h1>
            </div>
            <div className='w-full pt-40 sm:pt-0  max-w-[300px] sm:max-w-[340px] md:pt-0 md:max-w-[350px]'>
                <h1 className='font-bold pb-3 text-[2rem] '>My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Education.</span></h1>
                <AboutSlider/>
            </div>
        </div>
  )
}

export default page
