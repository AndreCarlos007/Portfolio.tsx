
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full h-[90px] lg:h-[90px] bg-[#0000008a] flex justify-between items-center px-10 md:px-20 max-w-screen-2xl rounded-r-3xl z-[100]'>
        <div className='flex flex-row gap-3 items-center'>
            <Link href="/" className='text-white text-[1.5rem] sm:text-[2rem] font-semibold md:text-[2.5rem]' >André .</Link>
        </div>

        <div className='flex flex-row gap-3 mb-2'>
            <Link href="https://www.linkedin.com/in/andr%C3%A9-carloscx" target='_blank'><img src="/linkedin.svg" alt="Linkedin" /></Link>
            <Link href="https://github.com/AndreCarlos007" target='_blank'><img src="/github.svg" alt="Github" /></Link>
            <Link href="/curriculoAndre.pdf" target='_blank' ><img  src="/curriculum.png" alt="Discord" width={40} /></Link>
          
        </div>
    </div>
  )
}

export default Navbar
