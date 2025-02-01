"use client";
import AboutSlider from '@/components/AboutSlider'
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
     <div style={{backgroundImage: "url(/bg-2.jpg)" }}
        className='flex flex-col md:flex-row overflow-scroll md:overflow-hidden items-center justify-center w-screen h-screen bg-cover bg-center text-white gap-10 sm:gap-10 md:gap-8 lg:gap-32'>
            <div className="max-w-[270px] pt-[47rem] sm:max-w-[320px] sm:pt-[30rem] md:pt-0 lg:max-w-[600px] ">
                <h1 className='text-[1.5rem] font-bold text-[#FFFFFF99]'>BIOGRAPHY</h1>
                <div className='text-justify md:text-[0.9rem]'>
                <p>Hello, I&apos;m <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>André Carlos</span>, a 20-year-old Systems Analysis and Development student, and I am passionate about programming. 
                    My journey began at the age of 17, during a technical IT course, where I was introduced to programming through languages like Portugol and Python. 
                    That first contact ignited my love for technology, and since then, I have been dedicated to expanding my knowledge.</p>
                <p className='pt-3'>I have come to know various technologies, frameworks, databases, and tools, constantly improving <Link href='/my-skills' className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'> my skill</Link> set. 
                    I am a focused, detail-oriented, and dedicated individual, currently seeking an internship to gain practical experience and deepen my expertise.</p>
                </div>
            </div>
            <div className='w-full pb-24 sm:pt-0  max-w-[300px] sm:max-w-[340px] md:pt-0 md:max-w-[350px] lg:pt-16'>
                <h1 className='font-bold pb-3 text-[2rem] '>My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Education.</span></h1>
                <AboutSlider/>
            </div>
        </div>
  )
}

export default page
