import Link from 'next/link'; // Importa o componente Link do Next.js para navegação interna
import React from 'react'; // Importa React para criar o componente funcional
import Image from 'next/image';


// Função principal que representa a página
const Page: React.FC = () => {
  
  return (
    // Contêiner principal da página com fundo personalizado e layout responsivo
    <div 
      style={{backgroundImage: "url(/bg-2.AVIF)" }} // Adiciona a imagem de fundo
      className='flex flex-col lg:flex-row overflow-scroll lg:overflow-hidden items-center justify-center w-screen h-screen bg-cover bg-center text-white gap-10 sm:gap-10 md:gap-8 lg:gap-32 pt-96 pb-20 sm:pt-64 sm:pb-0 lg:pb-0 lg:pt-0 '>
        <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100..800&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap"
            as="style"
            type="font/woff2"
            crossOrigin='anonymous'
          />
          <link
            rel="preload"
            href="/bg-2.AVIF"
            as="image"
            type="image/avif"
            sizes="100vw"
          />
      {/* Seção da biografia */}
      <div className="max-w-[270px] pt-[47rem] sm:max-w-[320px] md:max-w-[400px] sm:pt-[35rem] md:pt-0 lg:max-w-[400px]">
        {/* Título da seção de biografia */}
        <h1 className='text-[1.5rem] font-bold text-purple-500'>Biography</h1>
        
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

      <div className='border-b-4 border-[#ffffff36] pl-72 sm:pl-80 lg:pl-0 lg:border-l-4 lg:border-[#ffffff36] rounded-3xl lg:pt-96'></div>
      {/* Seção da educação */}
      <div className='w-full pb-24 sm:pt-0 sm:pb-44 md:pb-28 max-w-[290px] sm:max-w-[320px] md:pt-0 md:max-w-[400px] lg:max-w-[350px] lg:pt-16 lg:pb-20'>
        {/* Título da seção de educação */}
        {/* <h1 className='font-bold pb-3 text-[2rem] '>
          My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Education.</span>
        </h1> */}
        
        {/* Componente formação academica */}
        <div className='max-w-[400px]'>
          <div className=''>
            <div className='flex gap-6'>
            <h1 className='text-[1.5rem] font-bold text-purple-500 '>Systems Analysis and Development</h1>
            <Image className=' ' src="/certificado.AVIF" alt='certificado' width={120} height={20} />
            </div>
            <div className='pt-1'>
            <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 font-extrabold'>UniFacema - Maranhão</h3>
            <span className='text-[1rem] text-[#FFFFFF99] font-extralight'> February 2024 - August 2026</span>
            </div>
            
          </div>

          <div className='pt-1'>
            <p className='md:text-[0.9rem] text-justify'>Training in development, management, and system implementation, 
              covering programming (PHP, JS, C#), databases (SQL/NoSQL), requirements analysis, agile methodologies (Scrum), 
              responsive web/mobile development, and cloud computing. Focus on efficient technological solutions for the market.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Page; // Exporta o componente para ser usado como uma página no Next.js
