import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {BsArrowRight} from 'react-icons/bs'

// Tipagem para as imagens e slides
type ImageType = {
  title: string;
  path: string;
  link: string;
};

type SlideType = {
  images: ImageType[];
};

type WorkSlidesType = {
  slides: SlideType[];
};

// Dados do slider
export const workSlides: WorkSlidesType = {
  slides: [
    {
      images: [
        { title: 'title', path: '/work/thumb2.png', link: 'https://mv-p-cidade-consciente.vercel.app/'},
        { title: 'title', path: '/work/thumb1.png', link: ''},
        { title: 'title', path: '/work/thumb1.png', link: ''},
        { title: 'title', path: '/work/thumb1.png', link: ''},
      ],
    },
    {
      images: [
        { title: 'title', path: '/work/thumb1.png', link: ''},
        { title: 'title', path: '/work/thumb1.png', link: ''},
        { title: 'title', path: '/work/thumb1.png', link: ''},
        { title: 'title', path: '/work/thumb1.png', link: ''},
      ],
    },
  ],
};

// Componente funcional
const WorkSlider: FC = () => {
  return (
    <Swiper
      spaceBetween={100}
      pagination={{
        
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[340px]"
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <Link key={imageIndex} href={image.link} target='_blank'>
              <div
                key={imageIndex}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden transform transition duration-300 ease-in-out hover:scale-110">
                  {/* Imagem */}
                  <Image src={image.path} width={500} height={300} alt={image.title} />
                  {/* Gradiente de sobreposição */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#270d76] opacity-0 
                    group-hover:opacity-80 transition-all duration-700">
                    </div>

                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-8 md:group-hover:-translate-y-14 transition-all duration-300 text-white '>
                        <div className='flex text-[8px] md:text-[16px] font-bold gap-x-2 tracking-[0.2rem]'>
                            <div className='delay-100'>LIVE </div>
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                            <div className='text-[12px] md:text-[25px] translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /> </div>
                        </div>
                    </div>
                </div>
              </div>
            </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
