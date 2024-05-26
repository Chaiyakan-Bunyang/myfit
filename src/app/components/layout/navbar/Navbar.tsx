"use client"
import Link from "next/link";
import React, { useState } from "react";
import { BiPhoneCall, BiUser, BiUserCircle } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [ShowMenu,SetShowMenu] = useState(false);

  const toggleMenu = () =>{
    SetShowMenu(!ShowMenu);
    console.log(ShowMenu);
  }
  return (
    <div>
      <header className="bg-navbar relative z-[99] text-white border-b-[1px] border-primary/50">
        <nav className="container flex items-center justify-between h-[70px] py-2">
          {/* Logo section */}
        <div className="text-2xl md:text-3xl text-white">
            <Link href="/">My<span className="inline-block font-bold text-primary">Fit</span></Link>
        </div>
          {/* Desktop menu section */}
        <div className="hidden md:block">
            <ul className="flex gap-10 items-center">
                <li className="group relative cursor-pointer">
                    <a href="#" className="flex items-center gap-[2px] h-[72px]">
                        Home <span> <FaCaretDown className="transition-all duration-300 group-hover:rotate-180"/></span>
                    </a>
                    {/* DropDown section */}
                    <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md rounded-md p-2 text-black group-hover:block">
                        <ul className="space-y-3">
                            <li className="p-2 rounded-md hover:bg-indigo-500 transition-all duration-300 hover:scale-95 hover:text-white">Service</li>
                            <li className="p-2 rounded-md hover:bg-indigo-500 transition-all duration-300 hover:scale-95 hover:text-white">About us</li>
                            <li className="p-2 rounded-md hover:bg-indigo-500 transition-all duration-300 hover:scale-95  hover:text-white">Privacy policy</li>
                        </ul>
                    </div>
                </li>
                <li className="transition-all duration-300 cursor-pointer  hover:scale-95">Services</li>
                <li className="transition-all duration-300 cursor-pointer  hover:scale-95">Contact Us</li>
                <li>
                    <div>
                      <Link className="bg-primary hover:bg-blue-500 hover:scale-100 duration-300  text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-md cursor-pointer" href="/login">
                            Login
                      </Link>
                    </div>
                </li>
            </ul>
        </div>
          {/* Mobile menu section */}
          <div className="flex items-center gap-4 md:hidden">
            {
              ShowMenu ? <HiMenuAlt1 
              onClick={toggleMenu}
              className="cursor-pointer transition-all" 
              size={30}
              /> 
              : <HiMenuAlt3 
              onClick={toggleMenu}
              className="cursor-pointer transition-all" 
              size={30}
              />
            }
          </div>
        </nav>
      </header>
      {/* Mobile Menu Section */}
      <ResponsiveMenu ShowMenu = {ShowMenu}/>
    </div>
      
  );
};

export default Navbar;
