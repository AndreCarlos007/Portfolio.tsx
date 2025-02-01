"use client";
import WorkSlider from '../../components/WorkSlider';

const page = () => {
  return (
    <div 
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className='flex items-center justify-center w-screen h-screen bg-cover bg-center'>
      <div className='flex flex-col lg:flex-row items-center gap-12'>
        {/* Text Section */}
        <div className='text-center lg:text-left flex flex-col items-center lg:items-start gap-6 '>
          <h1 className='text-white text-[2rem] hidden sm:block sm:pt-44 md:pt-0 font-extrabold'>My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'
          >
            projects
            </span>
          </h1>
          <p className='text-white hidden sm:block md:block md:max-w-[480px] max-w-[320px] lg:max-w-[420px] text-[0.9rem] text-justify'>
          I&apos;m working on projects focused on software development and technology to enhance <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>my skills. </span>
          My goal is to create innovative solutions and grow as a developer.
          </p>
        </div>

        {/* Slider Section */}
        <div className='w-full pt-40 sm:pt-0  max-w-[300px] sm:max-w-[340px] md:pt-0 md:max-w-[600px]'>
          <WorkSlider />
        </div>
      </div>
    </div>
  );
};

export default page;
