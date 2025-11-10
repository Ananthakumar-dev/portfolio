import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Button } from "@/components/ui/button";
import header_bg from "@/app/_assets/header-bg.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
    <div className="fixed top-0 left-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={header_bg} alt="header background" className="w-full" />
    </div>
    
    <nav className="fixed w-full flex items-center justify-between px-8 py-2 z-50">
      {/* Logo */}
      <div className="flex gap-1">
        <span className="text-2xl font-bold">Ananthakumar</span>
        <span className="w-2 h-2 border rounded-full bg-red-600 relative top-5"></span>
      </div>

      {/* Menu */}
      <ul className="flex gap-10 shadow-lg rounded-full px-4">
        <li className="px-4 py-3">
            <a href="">Home</a>
        </li>
        <li className="px-4 py-3">
            <a href="">About me</a>
        </li>
        <li className="px-4 py-3">
            <a href="">Services</a>
        </li>
        <li className="px-4 py-3">
            <a href="">My work</a>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        {/* Dark mode icon */}
        <ThemeSwitch />

        {/* connect */}
        <div>
            <Button variant="outline">
                Contact
            </Button>
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavBar;
