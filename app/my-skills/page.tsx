"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

// Importação dinâmica dos componentes para melhor performance
const IconCloudDemo = dynamic(() => import('@/components/ui/IconCloudDemo'), { ssr: false })
const SkillsSlider = dynamic(() => import('@/components/SkillsSlider'), { ssr: false })

const Page: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, delay: 100 }) // Corrigida a importação e uso correto

  return (
    <div
      style={{ backgroundImage: "url(/bg-2.AVIF)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center overflow-scroll md:overflow-hidden"
    >
      <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100..800&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap"
            as="style"
            type="font/woff2"
            crossOrigin='anonymous'
          />
      <div className="flex flex-col lg:flex-row items-center gap-10 mt-80 mb-36 sm:mt-56 sm:mb-40 md:mb-0 md:mt-0">
        <div className="order-2 lg:order-1 md:ml-20">
          <h1 className="text-white font-bold text-[1.6rem] text-center sm:text-[2rem] pb-7">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 font-bold">skills.</span>
          </h1>
          <div className="max-w-[280px] sm:max-w-[320px] select-none">
            <SkillsSlider />
          </div>
        </div>
        <div className="order-1 lg:order-2 pt-36 md:pt-0 max-w-[400px]" ref={ref}>
          {inView && <IconCloudDemo />}
        </div>
      </div>
    </div>
  )
}

export default Page
