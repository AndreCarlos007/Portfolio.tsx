import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules"; // Importando o módulo EffectCoverflow
import { FC } from "react";
import { HiAcademicCap } from "react-icons/hi2";

// Tipagem para os cards
type EducationCard = {
  course: string;
  institution: string;
  description: string;
};

// Dados do slider
const educationData: EducationCard[] = [
  {
    course: "Systems Analysis and Development",
    institution: "UniFacema - 3º semester",
    description:
      "Focused on software development, programming, and IT solutions.",
  },
  {
    course: "Web Development",
    institution: "Online Course - B7web Platform",
    description:
      "Knowledge in technologies such as React, Next, Node.js, and TailwindCSS.",
  },
];

const EducationSlider: FC = () => {
  return (
    <Swiper
      direction="horizontal"
      pagination={{
        clickable: true,
      }}
      effect="coverflow" // Alterado para 'coverflow' para aplicar o efeito Coverflow
      grabCursor={true} // Adiciona o cursor estilizado de arrastar
      modules={[Pagination, EffectCoverflow, Autoplay]} // Incluindo o módulo EffectCoverflow
      className="h-[190px]"
      coverflowEffect={{
        rotate: 50, // Controle do ângulo de rotação
        stretch: 0, // Controla a distorção de esticar os slides
        depth: 100, // Profundidade do efeito de coverflow
        modifier: 1, // Modificador de intensidade do efeito
      }}
      autoplay={{
        delay: 3000, // Define o intervalo entre as trocas de slides
        disableOnInteraction: false, // Permite o autoplay continuar após interação do usuário
      }}
      loop={true}
    >
      {educationData.map((education, index) => (
        <SwiperSlide key={index}>
          <div className="p-6 bg-gradient-to-r border-1 border-purple-400 bg-purple-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 rounded-lg shadow-lg text-white">
            <h2 className="text-[1rem] font-bold mb-2 flex">
              {education.course}
              <p className="text-white">
                <HiAcademicCap />
              </p>
            </h2>
            <h3 className="text-[0.9rem] font-semibold mb-4">
              {education.institution}
            </h3>
            <p className="text-[0.8rem] text-[#FFFFFF99] flex">
              {education.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EducationSlider;
