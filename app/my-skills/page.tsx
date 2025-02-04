"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

// Importação dinâmica dos componentes para melhor performance
const IconCloudDemo = dynamic(() => import('@/components/ui/IconCloudDemo'), { ssr: false })

const Page: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, delay: 100 }) // Corrigida a importação e uso correto

  return (
    <div
      style={{ backgroundImage: "url(/bg-2.AVIF)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center "
    >
      <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100..800&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap"
            as="style"
            type="font/woff2"
            crossOrigin='anonymous'
          />
      <div className="flex items-center ">
        <div className="">
        </div>
        <div className="max-w-[320px] md:max-w-[400px]" ref={ref}>
          {inView && <IconCloudDemo />}
        </div>
        <div>
          <div>
            {/* CARD */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
