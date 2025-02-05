"use client"
import "./globals.css"
import Image from "next/image"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        {/* Otimização do carregamento de fontes */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&family=Montserrat:wght@100..900&family=Poppins:wght@100..900&family=Sora:wght@100..800&family=Sour+Gummy:wght@100..900&display=swap"
          rel="stylesheet"
        />
        {/* Pré-carregamento otimizado da imagem de fundo */}
        <link rel="preload" href="/main-bg.AVIF" as="image" type="image/avif" />
      </Head>

      <main className="relative w-screen h-screen">
        {/* Background otimizado */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/main-bg.webp)" }} />

        {/* Texto e informações principais */}
        <div className="relative sm:pl-10 sm:pt-28 sm:max-w-[320px] md:max-w-[600px] lg:max-w-[700px] md:pl-[5.3rem] md:pt-36 flex flex-col gap-5 z-50">
          <h1 className="text-white text-[50px] hidden sm:block sm:text-[1.2rem] sm:font-semibold md:text-[2rem] lg:text-[2.5rem]">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "} Software Development.
            </span>
          </h1>
          <p className="text-white/80 hidden sm:block md:text-[1rem] text-justify">
            I create digital solutions that prioritize both aesthetics and usability. 
            <span className="hidden lg:block">
              My name is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 font-bold">André Carlos.</span> This portfolio showcases a variety of projects that demonstrate my expertise in diverse technologies and innovative design approaches.
            </span>
          </p>
        </div>

        {/* Imagens decorativas */}
        <div className="absolute bottom-0 right-0 z-10">
          <Image
            src="/horse.AVIF"
            alt="horse"
            height={200}
            width={115}
            className="absolute right-48 top-40 md:w-[350px] md:top-32 md:right-44 lg:top-4 lg:right-72 pointer-events-none"
            priority
          />
          <Image
            src="/cliff.webp"
            alt="cliff"
            width={310}
            height={400}
            className="md:w-[500px] lg:w-[600px] lg:h-[600px] pointer-events-none"
            priority
          />
        </div>

        {/* Estrelas como fundo */}
        <Image
          src="/stars.AVIF"
          alt="stars"
          height={300}
          width={300}
          className="absolute top-0 left-0 z-10 pointer-events-none"
          loading="lazy"
        />
      </main>
    </>
  )
}
