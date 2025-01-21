import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[90px] lg:h-[90px] bg-[#0000008a] flex justify-between items-center px-10 md:px-20 max-w-screen-2xl rounded-r-3xl'>
        <div className='flex flex-row gap-3 items-center'>

            <a className='text-white text-[2rem] font-semibold md:text-[2.5rem] z-50' href="/">André .</a>
        </div>

        <div className='flex flex-row gap-3 mb-2'>
            <a href="https://www.linkedin.com/in/andr%C3%A9-carloscx/" target='_blank'><img src="/linkedin.svg" alt="" /></a>
            <a href="https://github.com/AndreCarlos007" target='_blank'><img src="/github.svg" alt="Github" /></a>
            <a href="/"><img src="/discordnew.svg" alt="Discord" /></a>
          
        </div>
    </div>
  )
}

export default Navbar
