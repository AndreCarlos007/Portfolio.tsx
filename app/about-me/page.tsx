"use client"; // Indica que o componente deve ser renderizado no cliente
import AboutSlider from '@/components/AboutSlider' // Importa o componente AboutSlider para exibir informações educacionais
import Link from 'next/link'; // Importa o componente Link do Next.js para navegação interna
import React from 'react'; // Importa React para criar o componente funcional

// Função principal que representa a página
const page = () => {
  return (
    // Contêiner principal da página com fundo personalizado e layout responsivo
    <div 
      style={{backgroundImage: "url(/bg-2.jpg)" }} // Adiciona a imagem de fundo
      className='flex flex-col md:flex-row overflow-scroll md:overflow-hidden items-center justify-center w-screen h-screen bg-cover bg-center text-white gap-10 sm:gap-10 md:gap-8 lg:gap-32'>
      
      {/* Seção da biografia */}
      <div className="max-w-[270px] pt-[47rem] sm:max-w-[320px] sm:pt-[35rem] md:pt-0 lg:max-w-[600px]">
        {/* Título da seção de biografia */}
        <h1 className='text-[1.5rem] font-bold text-[#FFFFFF99]'>BIOGRAPHY</h1>
        
        {/* Texto da biografia */}
        <div className='text-justify md:text-[0.9rem]'>
          {/* Parágrafo 1: Introdução e paixão por programação */}
          <p>
            Hello, I&apos;m 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'> André Carlos</span>, 
            a 20-year-old Systems Analysis and Development student, and I am passionate about programming.
            My journey began at the age of 17, during a technical IT course, where I was introduced to programming 
            through languages like Portugol and Python. That first contact ignited my love for technology, and since then, 
            I have been dedicated to expanding my knowledge.
          </p>
          
          {/* Parágrafo 2: Conhecimento em tecnologias e busca por estágio */}
          <p className='pt-3'>
            I have come to know various technologies, frameworks, databases, and tools, constantly improving 
            <Link href='/my-skills' className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'> my skill</Link> set. 
            I am a focused, detail-oriented, and dedicated individual, currently seeking an internship to gain practical experience 
            and deepen my expertise.
          </p>
        </div>
      </div>

      {/* Seção da educação */}
      <div className='w-full pb-24 sm:pt-0 sm:pb-44 md:pb-28 max-w-[290px] sm:max-w-[320px] md:pt-0 md:max-w-[350px] lg:pt-16 lg:pb-20'>
        {/* Título da seção de educação */}
        <h1 className='font-bold pb-3 text-[2rem] '>
          My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Education.</span>
        </h1>
        
        {/* Componente slider para exibir informações educacionais */}
        <div className='select-none'>
        <AboutSlider />
        </div>
        
      </div>
    </div>
  )
}

export default page; // Exporta o componente para ser usado como uma página no Next.js
