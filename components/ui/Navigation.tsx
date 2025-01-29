import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div className="flex flex-col items-center md:justify-center gap-y-4 fixed h-max bottom-0 mt-auto md:right-[2%] z-50 top-0 w-full md:w-16 md:max-w-md md:h-screen">
      <div className="flex w-full md:flex-col items-center justify-between md:justify-center gap-y-10 px-4 sm:px-6 md:px-0 h-[1px] md:h-max py-8 bg-[#0000008a] backdrop-blur-sm text-3xl md:text-xl rounded-t-[3rem] md:rounded-full overflow-visible">
        {isRouting}
        {NavLinks.map((nav) => (
          <Link
            key={nav.name}
            href={nav.link}
            className="group relative transition-all"
          >
            <nav.icon
              className={`w-[22px] hover:h-[30px] hover:text-purple-900 transition-all duration-300 ${
                path === nav.name ? "text-purple-700" : "text-white"
              }`}
            />
            {/* Label para desktop */}
            <span className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {nav.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;