"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import Head from 'next/head'

// Importação dinâmica otimizada com um skeleton loader
const IconCloudDemo = dynamic(() => import('@/components/ui/IconCloudDemo'), { 
  ssr: false, 
  loading: () => <div className="w-[400px] h-[400px] animate-pulse bg-gray-300 rounded-lg"></div> 
})

const Page: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 }) 

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&family=Montserrat:wght@100..900&family=Poppins:wght@100..900&family=Sora:wght@100..800&family=Sour+Gummy:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{ backgroundImage: "url(/bg-2.AVIF)" }}
        className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      >
        <div className="max-w-[320px] md:max-w-[400px]" ref={ref}>
          {inView ? <IconCloudDemo /> : <div className="w-[320px] h-[320px] animate-pulse bg-gray-300 rounded-lg"></div>}
        </div>
      </div>
    </>
  )
}

export default Page
