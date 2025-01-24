import React from 'react'

import { IconCloudDemo } from '@/components/ui/IconCloudDemo'

const page = () => {
  return (
    <div style={{backgroundImage: "url(/bg-2.jpg)" }}
    className='h-screen w-screen flex items-center justify-center bg-cover bg-center overflow-scroll md:overflow-hidden'>
        <div className="flex flex-col md:flex-row items-center gap-10  mt-80 mb-36 sm:mt-56 sm:mb-40 md:mb-0 md:mt-0">
          <div className='order-2 md:order-1 md:ml-20'>
          <h1 className='text-white font-bold text-[1.6rem] sm:text-[2rem]'>My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 font-bold'>skills.</span></h1>
          <p className='max-w-[270px] sm:max-w-[320px] md:max-w-[400px] text-[0.9rem] text-white text-justify'>I have knowledge in various web development tools and technologies and continuously strive to deepen my expertise. 
            I&apos;m always learning, practicing, and staying updated in this ever-evolving field.</p>
          </div>
          <div className='order-1 md:order-2'>
          <IconCloudDemo />
          </div>
                
              </div>
    </div>
  )
}

export default page
