import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[90px] lg:h-[90px] bg-[#0000008a] flex justify-between items-center px-10 md:px-20 '>
        <div className='flex flex-row gap-3 items-center'>

            <h1 className='text-white text-[2rem] font-semibold md:text-[2.5rem]'>André .</h1>
        </div>

        <div className='flex flex-row gap-3 mb-2 '>
            {Socials.map((social) => (
                <Image 
                    key={social.name}
                    src={social.src}
                    alt={social.name}
                    width={28}
                    height={28}
                    className='md:w-[35px]'
                />
            ))}
        </div>
    </div>
  )
}

export default Navbar
