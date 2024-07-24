import Image from "next/image";
import {App} from './Particle'
import TextEffect from './TextEffect'
import { FiDownload } from "react-icons/fi";
import Link from "next/link";


export default function Hero(){
    return(
        <div id="home" className="h-[100vh] w-full relative">
            <App/>
            <div className="container mx-auto px-6">
                <div className="absolute flex items-center justify-around z-10 pt-28">
                    <div className="w-full md:w-[52%]">
                        <h1 className="text-white text-3xl font-bold pb-4">HI, IM <span className="text-yellow-500">AKRAM</span></h1>
                        <TextEffect />
                        <p className="text-gray-400 py-5 text-lg">Hi! My name is Hamlaoui Akram, I am Passionate MERN Stack Developer dedicated to building dynamic and responsive web applications, leveraging MongoDB, Express.js, React, and Node.js to deliver seamless user experiences.
                        </p>
                        <a className=" bg-[#55e6a5] relative z-10 py-2 px-4 flex w-fit items-center font-semibold" href='/CV.pdf' download>
                            <button className="pr-2">Download CV  </button>
                            <FiDownload className="text-lg"/>
                        </a>
                        
                    </div>
                    <div className="hidden w-[35%] md:block">
                        <Image src="https://static.vecteezy.com/system/resources/previews/029/711/176/non_2x/developer-with-ai-generated-free-png.png" alt=""  width={350} height={350}/>
                    </div>
                </div>
            </div>
        </div>

    )
}