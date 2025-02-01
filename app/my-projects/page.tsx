"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

// Carregamento dinâmico do WorkSlider
const WorkSlider = dynamic(() => import("@/components/WorkSlider").then(mod => mod.default), { ssr: false });

const Page: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, delay: 100 });

  return (
    <div
      style={{ backgroundImage: "url(/bg-2.AVIF)" }}
      className="flex items-center justify-center w-screen h-screen bg-cover bg-center"
    >
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
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
          <h1 className="text-white text-[2rem] hidden sm:block sm:pt-44 md:pt-0 font-extrabold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              projects.
            </span>
          </h1>
          <p className="text-white hidden sm:block md:block md:max-w-[480px] max-w-[320px] lg:max-w-[420px] text-[0.9rem] text-justify">
            I&apos;m working on projects focused on software development and technology to enhance{" "}
            <Link href="/my-skills" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              my skills.
            </Link>
            My goal is to create innovative solutions and grow as a developer.
          </p>
        </div>

        {/* Slider Section */}
        <div className="w-full pt-40 sm:pt-0 max-w-[300px] sm:max-w-[340px] md:pt-0 md:max-w-[600px]" ref={ref}>
          {inView && <WorkSlider />}
        </div>
      </div>
    </div>
  );
};

export default Page;
