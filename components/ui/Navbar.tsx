
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full h-[90px] gap-2 lg:h-[90px] bg-[#0000008a] flex justify-between items-center px-10 md:px-20 max-w-screen-2xl rounded-r-3xl z-[100] '>
        <div className='flex flex-row gap-3 items-center'>
            <Link href="/" className='text-white text-[1.5rem] sm:text-[2rem] font-semibold md:text-[2.5rem]' >André.</Link>
        </div>

        <div className='flex flex-row gap-3 mb-2'>
          <div className=''>
          <Link href="https://www.linkedin.com/in/andr%C3%A9-carloscx" rel="noopener noreferrer" target='_blank'><Image width={40} height={40} loading='lazy' src="/linkedin.svg" alt="Linkedin" /></Link>
          </div>
          
          <div className=''>
          <Link href="https://github.com/AndreCarlos007" rel="noopener noreferrer" target='_blank'><Image width={40} height={40} loading='lazy'  src="/github.svg" alt="Github" /></Link>
          </div>
            
          <div className=''>
          <Link href="/curriculoAndre.pdf" rel="noopener noreferrer" target='_blank' ><Image width={40} height={40} loading='lazy'   src="/curriculum.AVIF" alt="Discord" /></Link>
          </div>
            
          
        </div>
    </div>
  )
}

export default Navbar
