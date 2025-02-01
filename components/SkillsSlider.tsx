import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { FC, JSX } from "react";
import { FaReact,  FaAws } from "react-icons/fa";  // React Icon para React
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiTailwindcss, SiNextdotjs, SiMongodb, SiDocker, SiGit, SiFigma, SiTerraform, SiKubernetes, SiOpenai, SiMysql } from "react-icons/si";  // Outros ícones

// Tipagem para os cards
type TechnologyCard = {
  name: string;
  icon: JSX.Element;
  description: string;
};

// Dados do slider
const technologyData: TechnologyCard[] = [
{
    name: "Next.js",
    icon: <SiNextdotjs className="text-black text-5xl" />,
    description: "React framework for building full-stack web applications.",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-400 text-5xl" />,
    description: "Library for building user interfaces efficiently.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-5xl" />,
    description: "Typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    description: "Popular language for creating interactive web elements.",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-orange-500 text-5xl" />,
    description: "Standard markup language for structuring web content.",
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="text-blue-600 text-5xl" />,
    description: "Stylesheet language for designing and styling web pages.",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-blue-400 text-5xl" />,
    description: "Utility-first CSS framework for rapid UI development.",
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-pink-500 text-5xl" />,
    description: "Design tool for prototyping and collaboration.",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500 text-5xl" />,
    description: "JavaScript runtime for server-side applications.",
  },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-800 text-5xl" />,
    description: "Minimal web framework for Node.js.",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-500 text-5xl" />, // Ícone do MySQL
    description: "Relational database management system based on SQL.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 text-5xl" />,
    description: "NoSQL database for modern applications.",
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-blue-500 text-5xl" />,
    description: "Platform for containerizing applications.",
  },
  {
    name: "AWS",
    icon: <FaAws className="text-orange-500 text-5xl" />, // Ícone da AWS
    description: "Cloud platform offering computing, storage, and AI services.",
  },
  {
    name: "Terraform",
    icon: <SiTerraform className="text-purple-500 text-5xl" />,
    description: "Infrastructure as code software for provisioning cloud services.",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes className="text-blue-600 text-5xl" />,
    description: "Container orchestration platform for managing workloads.",
  },
  {
    name: "OpenAI",
    icon: <SiOpenai className="text-green-500 text-5xl" />,
    description: "AI research lab creating tools like ChatGPT.",
  },
  {
    name: "Git",
    icon: <SiGit className="text-orange-500 text-5xl" />,
    description: "Version control system for tracking changes in source code.",
  },
];

const TechnologySlider: FC = () => {
  return (
    <Swiper
      direction="vertical"
      pagination={{
        dynamicBullets: true,
      }}
      effect="cards" // Define o efeito como "cards"
      grabCursor={true} // Adiciona um cursor estilizado ao passar pelos slides
      modules={[Pagination, EffectCards, Autoplay]}
      className="h-[250px]"
      cardsEffect={{ slideShadows: false }}
      autoplay={{
        delay: 2500, // Define o intervalo entre as trocas de slides
        disableOnInteraction: false, // Permite o autoplay continuar após interação do usuário
      }}
      loop={true}
    >
      {technologyData.map((tech, index) => (
        <SwiperSlide key={index}>
          <div className="p-6 bg-gradient-to-r border-1 border-purple-400 bg-purple-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60  text-white flex flex-col items-center text-center shadow-none">
            {tech.icon}
            <h2 className="text-[1rem] font-bold mt-4">{tech.name}</h2>
            <p className="text-[0.9rem] text-[#FFFFFF99] mt-2">{tech.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TechnologySlider;
