/* eslint-disable @next/next/no-img-element */
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";


export default function Footer(){
    return(
        <div className="bg-zinc-700 py-14 relative z-10">
            <div className="container mx-auto px-6  text-center">
                <div className="flex justify-center space-x-2 mb-4">
                    <Link target="_blank" href="https://www.linkedin.com/in/akram-hamlaoui-1240b9285/?trk=nav_responsive_tab_profile_pic&originalSubdomain=dz">
                        <FaLinkedin className="text-white text-2xl"/>
                    </Link>
                    <Link target="_blank" href="https://github.com/Akram2205">
                    <FaGithub className="text-white text-2xl"/>
                    </Link>
                </div>
                <p className="text-white">Designed by <span className="text-yellow-500">Akram Hamlaoui</span> | © 2024 portfolio</p>
            </div>
        </div>
    )
}