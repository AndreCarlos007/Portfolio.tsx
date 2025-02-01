import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
import { SiDatabricks } from "react-icons/si";
import * as React from "react";

//Icones da navegação

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/about-me",
    icon: RxPerson,
    link: "/about-me"
  },
  {
    name: "/my-skills",
    icon: SiDatabricks,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
