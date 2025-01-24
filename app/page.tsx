import "./globals.css";
import Image from "next/image"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-screen h-screen " >
    <div
      className="flex  w-screen  h-screen  bg-cover bg-center"
      style={{ backgroundImage: "url(/main-bg.webp)" }}
    >
      <div className="sm:pl-10 sm:pt-28 sm:max-w-[320px] md:max-w-[600px] lg:max-w-[700px] md:pl-[5.3rem] md:pt-36  flex flex-col gap-5 z-[50] ">
        <h1 className="text-[50px] text-white hidden sm:block sm:text-[1.2rem] sm:font-semibold md:text-[2rem] lg:text-[2.5rem] ">
          Make anything possible with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Software Development.
          </span>
        </h1>
        <p className="text-gray-200 hidden sm:block md:block md:text-[1rem] text-justify">
        I create digital solutions that prioritize both aesthetics and usability. <span className="hidden lg:block">My name is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 font-bold">André Carlos.</span> This portfolio showcases a variety of projects that demonstrate my expertise
        in diverse technologies and innovative design approaches.</span>
        </p>
        <div className="flex-col md:flex-row hidden md:flex gap-5">
          <Link
            href="/my-skills"
            className="px-6 py-2 font-medium bg-gradient-to-r from-purple-950 to-red-000 text-white w-fit transition-all shadow-[1px_1px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-md max-w-[200px]"
          >
            Skills
          </Link>
          <Link
            href="/my-projects"
            className="px-6 py-2 font-medium bg-gradient-to-r from-purple-950 to-red-000 text-white w-fit transition-all shadow-[1px_1px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-md max-w-[200px]"
          >
            Projects
          </Link>
          <Link
            href="/contacte-me"
            className="px-6 py-2 font-medium bg-gradient-to-r from-purple-950 to-red-000 text-white w-fit transition-all shadow-[1px_1px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-md max-w-[200px]"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
          {/* BOTOES PARA CELULARES E TABLETS*/}
    <div className="absolute pb-6 pr-1 flex bottom-20 z-[60] right-5 flex-col md:hidden gap-5">
      <Link href="/my-skills" className="px-6 py-2  font-medium bg-gradient-to-r from-purple-950 to-red-000 text-white  transition-all shadow-[2px_2px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-md max-w-[150px] block text-center">
        Skills
      </Link>
      <Link href="/my-projects" className="block px-6  py-2 font-medium bg-gradient-to-r from-purple-950 to-red-000 text-white transition-all shadow-[2px_2px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-md max-w-[150px] text-center">
      Projects
      </Link>

      <Link href="/contacte-me" className="px-6 py-2  font-medium bg-gradient-to-r from-purple-950 to-red-000 text-white  transition-all shadow-[2px_2px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-md max-w-[150px] block text-center">
        Contact
      </Link>
    </div>

    <div className="absolute bottom-0 right-0 z-[10]">
      <Image
        src="/horse.png"
        alt="horse"
        height={200}
        width={115}
        className="absolute right-48 top-40 md:w-[350px] md:top-32 md:right-44 lg:top-4 lg:right-72 pointer-events-none"
      />

      <Image 
      src="/cliff.webp" 
      alt="cliff" 
      width={310} 
      height={400}
      className="md:w-[500px] lg:w-[600px] lg:h-[600px] pointer-events-none"
      />
    </div>

      
     {/* <div className="absolute bottom-0 z-[5] w-full h-auto">
      <Image
        src="/trees.webp"
        alt="trees"
        width={2000}
        height={2000}
        className="w-full h-full pointer-events-none"
      />
    </div> */}

    <Image
      src="/stars.png"
      alt="stars"
      height={300}
      width={300}
      className="absolute top-0 left-0 z-[10] pointer-events-none"
    />
  </main>
  );
}
