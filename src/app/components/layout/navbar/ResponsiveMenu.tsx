import Link from 'next/link';
import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
type propsType = {
    ShowMenu: boolean;
}
const ResponsiveMenu = (props:propsType) => {
    const {ShowMenu} = props;
    console.log(props);
    
  return (
    <div 
        className={`${ShowMenu ? "-left-[100%]" 
        : "left-0"} h-screen w-[50%] bg-slate-800 fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8
        flex justify-between flex-col text-white
        `}
    >
        <div>
            <div className='flex items-center justify-start gap-3'>
                <FaUserCircle size={50}/>
                <div>
                    <h1>Admin</h1>
                    <h1 className='text-sm text-slate-500'>admin</h1>
                </div>
            </div>
            <nav className='mt-12'>
                    <ul className='space-y-4 text-xl'>
                        <li className='transition-all duration-300 cursor-pointer  hover:scale-95'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='transition-all duration-300 cursor-pointer  hover:scale-95'>
                            <Link href="/">Service</Link>
                        </li>
                        <li className='transition-all duration-300 cursor-pointer  hover:scale-95'>
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>
                    <div className='flex justify-center mt-12'>
                      <Link className="bg-primary hover:bg-blue-500 hover:scale-100 duration-300 w-[75%] text-center  text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-md cursor-pointer" href="/login">
                            Login
                      </Link>
                    </div>
            </nav>
        </div>
        <div className='footer'>
            <h1>2024 All Rights Reserved </h1> 
        </div>
    </div>
  )
}

export default ResponsiveMenu