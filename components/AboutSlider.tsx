import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
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
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[190px]"
    >
      {educationData.map((education, index) => (
        <SwiperSlide key={index}>
          <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-500 rounded-lg shadow-lg text-white">
            <h2 className="text-[1rem] font-bold mb-2 flex">{education.course}<p className="text-white"><HiAcademicCap /></p></h2>
            <h3 className="text-[0.9rem] font-semibold mb-4">{education.institution}</h3>
            <p className="text-[0.8rem] text-[#FFFFFF99] flex">{education.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EducationSlider;
