'use client'; // Indica que este componente deve ser renderizado no lado do cliente.

import React, { useState, useRef, JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import WorkSliderBtns from '@/components/WorkSliderBts'; // Importa o componente de botões de navegação do slider
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper'; // Importa a tipagem do Swiper para melhor controle.
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {TbBrandTypescript,TbBrandTailwind,TbBrandNextjs,TbBrandJavascript, TbBrandFramerMotion} from 'react-icons/tb';
import { DiHtml5, DiGit } from 'react-icons/di';
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger,} from "@/components/ui/tooltip";


// Define a interface para os itens da stack tecnológica de cada projeto
interface StackItem {
  icon: JSX.Element;
  name: string;
}

// Define a estrutura de cada projeto
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  live: string;
  github: string;
  stack: StackItem[];
}

// Lista de projetos com suas respectivas informações
const projects: Project[] = [
  {
    id: '01',
    title: 'TCClass',
    category: 'Full-Stack',
    description: `Platform for reviewing and correcting theses that combines AI for technical analysis and academic freelancers for 
    mentorship and personalized support, facilitating fair agreements between students and professors.`,
    image: '/work/tcclass.png',
    live: 'https://tc-class-jsx.vercel.app/',
    github: 'https://github.com/AndreCarlos007/TCClass.jsx',
    stack: [
      { icon: <TbBrandNextjs size={60} />, name: 'next' },
      { icon: <TbBrandJavascript size={60} />, name: 'javascript' },
      { icon: <TbBrandTailwind size={60} />, name: 'tailwind' },
      { icon: <TbBrandFramerMotion size={60} />, name: 'framer-motion' },
      { icon: <DiHtml5 size={60} />, name: 'html5' },
      { icon: <DiGit size={60} />, name: 'git' },
    ],
  },
  {
    id: '02',
    title: 'Portfólio André',
    category: 'Front-end',
    description: `Portfolio built with Next.js, TypeScript, and Tailwind CSS, using Swiper, Framer Motion, React Icons, 
    and React Icon Cloud to create a dynamic, responsive, and modern interface.`,
    image: '/work/portfolio.png',
    live: 'https://andre-portfolio-tsx-rosy.vercel.app/',
    github: 'https://github.com/AndreCarlos007/Portfolio.tsx',
    stack: [
      { icon: <TbBrandNextjs size={60} />, name: 'next' },
      { icon: <TbBrandTypescript size={60} />, name: 'typescript' },
      { icon: <TbBrandTailwind size={60} />, name: 'tailwind' },
      { icon: <DiHtml5 size={60} />, name: 'html5' },
      { icon: <DiGit size={60} />, name: 'git' },
    ],
  },
 
];

const Work: React.FC = () => {
  const [project, setProject] = useState<Project>(projects[0]); // Estado que armazena o projeto atualmente exibido

  const swiperRef = useRef<SwiperType | null>(null); // Referência para o Swiper

  // Atualiza o estado do projeto com base no slide ativo
  const handleSlideChange = (swiper: SwiperType) => {
    setProject(projects[swiper.activeIndex]);
  };

  // Função para navegar para o slide anterior
  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  // Função para navegar para o próximo slide
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <main 
      style={{ backgroundImage: "url(/bg-2.AVIF)" }} // Define a imagem de fundo da seção
      className="flex items-center justify-center h-screen w-screen bg-cover bg-center p-4 overflow-scroll md:overflow-hidden "
    >
      <div className="container max-w-7xl flex items-center justify-center pt-[45rem] pb-[5rem] sm:pt-[35rem] sm:pb-0 md:pt-[12.5rem]
      lg:pt-[6rem] lg:pb-0">
        <div className="flex flex-col lg:flex lg:flex-row w-full items-center justify-around ">
          
          {/* Seção de informações do projeto */}
          <div className="space-y-4 order-2 lg:order-1  sm:mb-36">
            <div className="">
              <span className="text-[3.5rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 font-bold">
                {project.id}
              </span>
              <h2 className="text-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 font-bold">
                {project.category} project
              </h2>
            </div>

            <p className="text-white/80 text-justify max-w-[100vw] mx-5 md:max-w-[500px]">
              {project.description}
            </p>

            {/* Lista de tecnologias usadas no projeto */}
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((item, index) => (
                <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[65px] h-[65px] rounded-md bg-white/5 flex items-center justify-center">
                        <span className="text-purple-100 hover:text-purple-800 text-4xl ">
                          {item.icon}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>{item.name}</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>

            <div className="border border-white/20 max-w-[350px]" />

            {/* Links para visualizar o projeto ao vivo e acessar o repositório */}
            <div className="flex gap-4">
              <Link href={project.live} target="_blank" rel="noopener noreferrer">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center">
                      <BsArrowUpRight className="text-purple-100 hover:text-purple-800 text-3xl" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center">
                      <BsGithub className="text-purple-100 hover:text-purple-800 text-3xl" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>

          {/* Seção do Swiper para exibir os projetos */}
          <div className="pt-10 lg:pt-0 lg:w-1/2 flex flex-col order-1 lg:order-2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="h-[200px] w-[300px] sm:h-[200px] sm:w-[320px] md:h-[300px] md:w-[500px] lg:h-[300px] lg:w-[500px]"
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      fill
                      className="object-cover rounded-md"
                      quality={100}
                      alt={`${project.title} project image`}
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Botões de navegação do slider */}
            <div className="mt-4 lg:mr-[4.2rem] ">
              <WorkSliderBtns
                onPrev={goToPrevSlide}
                onNext={goToNextSlide}
                containerStyles="flex justify-center lg:justify-end gap-4"
                btnStyles="bg-white/5 hover:bg-purple-950 text-purple-100 w-[44px] h-[44px] flex items-center justify-center rounded-[0.4rem] transition-all"
                iconsStyles="text-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Work;
