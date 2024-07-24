'use client'
import Link from "next/link";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Nav(){
    const [openBar,setOpenBar] = useState(false)
    return(
        <div className="bg-zinc-900  fixed w-full z-40 ">
            <div className="container h-[12vh] mx-auto px-4 flex justify-between sm:justify-around items-center">
                <ScrollLink smooth={true} duration={500} to="home" className="cursor-pointer">
                    <h1 className="text-white font-semibold text-xl">WEB<span className="text-yellow-500">DEV</span></h1>
                </ScrollLink>
                
                <div>
                <FaBarsStaggered onClick={()=>{setOpenBar(!openBar)}} className="sm:hidden text-white text-2xl"/>
                    <div className={`${openBar ? "absolute top-0 h-[100vh] w-full left-0 bg-gray-900 flex justify-center" :"hidden "} sm:block`}>
                        <IoMdClose onClick={()=>{setOpenBar(false)}} className="text-white text-2xl absolute right-0 m-4 sm:hidden" />
                        <ul className={`flex flex-col space-y-6 justify-center text-center text-2xl sm:flex-row sm:space-x-4 sm:space-y-0 sm:text-base font-semibold text-white`}>
                            <ScrollLink onClick={()=>{setOpenBar(false)}} smooth={true} duration={500} to="home" className="cursor-pointer">
                                <li>Home</li>
                            </ScrollLink>
                            <ScrollLink onClick={()=>{setOpenBar(false)}} className="cursor-pointer" to="services" smooth={true} duration={500}>
                                <li>Services</li>
                            </ScrollLink>
                            <ScrollLink onClick={()=>{setOpenBar(false)}} className="cursor-pointer" to="project" smooth={true} duration={500}>
                                <li>Project</li>
                            </ScrollLink>
                            <ScrollLink onClick={()=>{setOpenBar(false)}} className="cursor-pointer" to="contact" smooth={true} duration={500}>
                                <li>Contact</li>
                            </ScrollLink>
                            
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}