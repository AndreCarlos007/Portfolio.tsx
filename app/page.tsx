"use client"
import "./globals.css";
import Image from "next/image"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-screen h-screen text-justify" >
    <div
      className="flex  w-screen  h-screen  bg-cover bg-center"
      style={{ backgroundImage: "url(/main-bg.webp)" }}
    >
      <div className="sm:pl-10 sm:pt-28 sm:max-w-[320px] md:pl-40 md:pt-36 flex flex-col gap-5 z-[50] ">
        <h1 className="text-[50px] text-white hidden sm:block sm:text-[1.4rem] sm:font-semibold  ">
          Make anything possible with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-900">
            {" "}
            Web Development
          </span>
        </h1>
        <p className="text-gray-200 hidden sm:block  md:block">
        I create digital solutions that prioritize both aesthetics and usability. 
        </p>
        <div className="flex-col md:flex-row hidden md:flex gap-5">
          <Link
            href="/my-skills"
            className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
          >
            Learn more
          </Link>
          <Link
            href="/my-projects"
            className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
          >
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
            My projects
          </Link>
          <Link
            href="/contacte-me"
            className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
          >
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
            Contact
          </Link>
        </div>
      </div>
    </div>
          {/* BOTOES PARA CELULARES */}
    <div className="absolute flex bottom-20 z-[20] right-5 flex-col md:hidden gap-5">
      <Link href="/my-skills" className="px-6 py-2 font-medium bg-gradient-to-r from-purple-900 to-red-000 text-white w-fit transition-all shadow-[2px_2px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-md max-w-[200px]">
        Learn more
      </Link>
      <Link href="/my-projects" className="px-6 py-2 font-medium bg-gradient-to-r from-purple-900 to-red-000 text-white w-fit transition-all shadow-[2px_2px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-md max-w-[200px]">
        My projects
      </Link>
      <Link href="/contacte-me" className="px-6 py-2 font-medium bg-gradient-to-r from-purple-900 to-red-000 text-white w-fit transition-all shadow-[2px_2px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-md max-w-[200px]">
        Contact
      </Link>

    </div>

    <div className="absolute bottom-0 right-0 z-[10]">
      <Image
        src="/horse.png"
        alt="horse"
        height={200}
        width={115}
        className="absolute right-48 top-40"
      />

      <Image 
      src="/cliff.webp" 
      alt="cliff" 
      width={310} 
      height={400}
      className=""
      />
    </div>

    <div className="absolute bottom-0 z-[5] w-full h-auto">
      <Image
        src="/trees.webp"
        alt="trees"
        width={2000}
        height={2000}
        className="w-full h-full"
      />
    </div>

    <Image
      src="/stars.png"
      alt="stars"
      height={300}
      width={300}
      className="absolute top-0 left-0 z-[10]"
    />
  </main>
  );
}
