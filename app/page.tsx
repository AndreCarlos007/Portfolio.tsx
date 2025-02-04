import "./globals.css";
import Image from "next/image"

export default function Home() {
  return (
    <main className="w-screen h-screen" >
    <div
      className="flex w-screen  h-screen  bg-cover bg-center"
      style={{ backgroundImage: "url(/main-bg.webp)" }}
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
            href="/main-bg.AVIF"
            as="image"
            type="image/avif"
            sizes="100vw"
          />
      <div className="sm:pl-10 sm:pt-28 sm:max-w-[320px] md:max-w-[600px] lg:max-w-[700px] md:pl-[5.3rem] md:pt-36  flex flex-col gap-5 z-[50] ">
        <h1 className="text-[50px] text-white hidden sm:block sm:text-[1.2rem] sm:font-semibold md:text-[2rem] lg:text-[2.5rem] ">
          Make anything possible with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Software Development.
          </span>
        </h1>
        <p className="text-white/80 hidden sm:block md:block md:text-[1rem] text-justify">
        I create digital solutions that prioritize both aesthetics and usability. <span className="hidden lg:block">My name is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 font-bold">André Carlos.</span> This portfolio showcases a variety of projects that demonstrate my expertise
        in diverse technologies and innovative design approaches.</span>
        </p>
      </div>
    </div>

    <div className="absolute bottom-0 right-0 z-[10]">
      <Image
        src="/horse.AVIF"
        alt="horse"
        height={200}
        width={115}
        className="absolute right-48 top-40 md:w-[350px] md:top-32 md:right-44 lg:top-4 lg:right-72 pointer-events-none"
        priority
      />
      {/* Montanha */}
      <Image 
      src="/cliff.webp" 
      alt="cliff" 
      width={310} 
      height={400}
      className="md:w-[500px] lg:w-[600px] lg:h-[600px] pointer-events-none"
      priority
      />
    </div>

    <Image
      src="/stars.AVIF"
      alt="stars"
      height={300}
      width={300}
      className="absolute top-0 left-0 z-[10] pointer-events-none"
      loading="lazy"
    />
  </main>
  );
}
