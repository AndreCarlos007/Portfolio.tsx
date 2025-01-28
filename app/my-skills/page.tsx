"use client";
import React from 'react'
import { IconCloudDemo } from '@/components/ui/IconCloudDemo'
import SkillsSlider from '@/components/SkillsSlider'

const page = () => {
  return (
    <div style={{backgroundImage: "url(/bg-2.jpg)" }}
    className='h-screen w-screen flex items-center justify-center bg-cover bg-center overflow-scroll md:overflow-hidden'>
        <div className="flex flex-col lg:flex-row items-center gap-10  mt-80 mb-36 sm:mt-56 sm:mb-40 md:mb-0 md:mt-0">
          <div className='order-2 lg:order-1 md:ml-20'>
          <h1 className='text-white font-bold text-[1.6rem] text-center sm:text-[2rem] pb-7'>My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 font-bold'>skills.</span></h1>
            <div className='max-w-[280px] sm:max-w-[320px] '>
            <SkillsSlider />
            </div>
          </div>
          <div className='order-1 lg:order-2 pt-36 sm: md:pt-0 max-w-[400px]'>
          <IconCloudDemo />
          </div>
                
              </div>
    </div>
  )
}

export default page
