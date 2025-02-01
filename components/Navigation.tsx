"use client";
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
    <div className="relative h-full">
    <div
      style={{ left: "20%" }}
      className="fixed z-[50] -bottom-20 w-[60%] md:w-[60%] lg:w-[32%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-[#ffffff14] md:pl-16 px-7 py-7 overflow-hidden"
    >

      {isRouting }
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-16 pl- min-w-[20%]">
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-purple-700" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Navigation;