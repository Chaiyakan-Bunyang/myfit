"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiPhoneCall, BiUser, BiUserCircle } from "react-icons/bi";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { CgLogOut } from "react-icons/cg";
import ResponsiveMenu from "./ResponsiveMenu";
import axios from "axios";
import { API_URL, NEXT_API_URL } from "../../constant/constant";
import Swal from "sweetalert2";
import Cookies from 'js-cookie'
const Navbar = () => {
  const [ShowMenu,SetShowMenu] = useState(false);
  const [user,SetStateUser] = useState({
    username: '',
    email: '',
  })

  const fetchData = async () =>{
    let res:any = "";
    try{
      res = await axios.get(API_URL.AUTHENTICATION,{withCredentials:true})
      const {username,email} = res?.data;
      SetStateUser((prevState) => ({
        ...prevState,
        username: username,
        email: email,
      }));

    } catch(error){
      console.log(error);
    }
    if(res.status !== 200){
      Swal.fire({
        icon: "error",
        title: "เซสชันหมดอายุ",
        text: "กรุณาเข้าสู่ระบบอีกครั้งเพื่อต่ออายุเซสชัน"
      }).then((result)=>{
        if(result.isConfirmed){
          window.location.href = '/login'
        }
      })
    }
  }
  useEffect(()=>{
    SetShowMenu(false)
    fetchData();
  },[])
  const toggleMenu = () =>{
    SetShowMenu(!ShowMenu);
  }

  const Logout = async () =>{
    let res:any
    try{
      res = await axios.post(NEXT_API_URL.LOGOUT)
      
    } catch(error){
      console.log(error);
    }
    if(res.status == 200){
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "กำลังออกจากระบบ",
        showConfirmButton: false,
        timer: 1000
      }).then(() =>{
        window.location.href = "/login"
      })
    }
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
                        <ul className="space-y-1">
                            <li className="p-2 rounded-md hover:bg-indigo-500 transition-all duration-300 hover:w-100 hover:text-white">Service</li>
                            <li className="p-2 rounded-md hover:bg-indigo-500 transition-all duration-300 hover:w-100 hover:text-white">About us</li>
                            <li className="p-2 rounded-md hover:bg-indigo-500 transition-all duration-300 hover:w-100  hover:text-white">Privacy policy</li>
                        </ul>
                    </div>
                </li>
                <li className="transition-all duration-300 cursor-pointer  hover:scale-95">Services</li>
                <li className="transition-all duration-300 cursor-pointer  hover:scale-95">Contact Us</li>
                <li className="group relative cursor-pointer">
                    <div>
                      {/* <Link className="bg-primary hover:bg-blue-500 hover:scale-100 duration-300  text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-md cursor-pointer" href="/login">
                            Login
                      </Link> */}
                      <div className="flex items-center gap-1 h-[72px]">
                        <FaUserCircle size={30}/>
                        <h1 className="text-sm flex items-center gap-1">ยินดีต้อนรับ {user.username} <span><FaCaretDown className="transition-all duration-300 group-hover:rotate-180"/></span></h1>
                      </div>
                      <div className="absolute -left-1 z-[99999] hidden w-[200px] bg-white shadow-md rounded-md p-2 text-black group-hover:block">
                        <ul className="space-y-3">
                            <li className="p-2 rounded-md hover:bg-indigo-500 transition-all duration-300 hover:w-100 hover:text-white">Profile</li>
                            <li className="p-2 rounded-md hover:bg-indigo-500 transition-all duration-300 hover:w-100 hover:text-white">Edit Profile</li>
                            <li className="p-2 rounded-md hover:bg-red-500 transition-all duration-300 hover:w-100  hover:text-white flex items-center gap-1"
                            onClick={()=> Logout()}
                            >
                              <span><CgLogOut/></span>Log out
                            </li>
                        </ul>
                    </div>
                      
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
      <div className="md:hidden">
      <ResponsiveMenu ShowMenu = {ShowMenu}/>
      </div>
    </div>
      
  );
};

export default Navbar;
