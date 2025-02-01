import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
const page = () => {
  return (
    <div style={{backgroundImage: "url(/bg-2.jpg)" }}
    className='h-screen w-screen items-center justify-center flex bg-cover bg-center overflow-scroll md:overflow-hidden '>
        <div className='flex flex-col w-full max-w-[300px] sm:max-w-[340px] md:max-w-[600px] mt-72 mb-36 sm:mt-36 md:mt-0 md:mb-0'>
            <h2 className='text-white text-[2rem] font-bold mb-3 text-center'>
              Let&apos;s <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>connect.</span>
            </h2>
            <form className=' text-white flex-1 flex flex-col gap-6 w-full mx-auto' action="">
                <div className='flex gap-x-6 w-full'>
                    <input type="text" placeholder='name' name="name" className='w-full h-[40px] rounded-lg pl-6 capitalize bg-transparent border border-white/10 outline-none focus:ring-1 focus:ring-purple-800 placeholder:text-white/30 placeholder:font-light ' />
                    <input type="email" placeholder='email' name="email" className='w-full h-[40px] rounded-lg pl-6 capitalize bg-transparent border border-white/10 outline-none focus:ring-1 focus:ring-purple-800 placeholder:text-white/30 placeholder:font-light' />
                </div>
                <input type="text" placeholder='subject' name="name" className='w-full h-[40px] rounded-lg pl-6 capitalize bg-transparent border border-white/10 outline-none focus:ring-1 focus:ring-purple-800 placeholder:text-white/30 placeholder:font-light' />
                
                <textarea placeholder='message' className='w-full h-[120px] p-6 capitalize rounded-lg resize-none
                bg-transparent outline-none focus:ring-1 focus:ring-purple-800 border border-white/10 placeholder:text-white/30 placeholder:font-light'></textarea>
                
                <button className=' text-white h-[52px] rounded-full border border-white/30 max-w-[170px] px-8 transition-all duration-300
                flex items-center justify-center overflow-hidden hover:border-purple-800 group'> 
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s talk</span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 
                transition-all duration-300 absolute text-[22px]'/>
                </button>
                
            </form>
        </div>
      </div>
  )
}

export default page
