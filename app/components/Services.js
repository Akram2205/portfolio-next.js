'use client'
import { TbDeviceImacCode } from "react-icons/tb";
import { TbDeviceImacCog } from "react-icons/tb";
import { TbDeviceImac } from "react-icons/tb";
import { motion } from 'framer-motion';

export default function Services(){
    const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      };
    return(
        <div id="services" className="relative z-10 bg-gray-100 pt-20 pb-3">
            <motion.section className="container mx-auto px-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={sectionVariants}>
                <h1 className="text-black pb-14 text-3xl font-bold mx-auto">MY <span className="text-yellow-500">SERVICES</span></h1>
                <div className="md:grid md:grid-cols-3 md:gap-x-6">
                    <div className="bg-red-500 rounded-md p-6 mb-8 md:hover:-rotate-6 md:hover:scale-105 duration-200 ">
                        <TbDeviceImacCode className="mx-auto text-white mb-4 text-6xl" />
                        <h1 className="text-white pb-4 font-bold text-2xl">FRONTEND</h1>
                        <p className="text-gray-200 text-lg">Using ReactJS & Tailwind CSS</p>
                    </div>
                    <div className="bg-orange-500 rounded-md p-6 mb-8 md:hover:scale-105 duration-200">
                        <TbDeviceImacCog className="mx-auto text-white mb-4 text-6xl"/>
                        <h1 className="text-white pb-4 font-bold text-2xl">BACKEND</h1>
                        <p className="text-gray-200 text-lg">Using ExpressJS & MongoDB</p>
                    </div>
                    <div className="bg-blue-500 rounded-md p-6 mb-8 md:hover:rotate-6 md:hover:scale-105 duration-200">
                        <TbDeviceImac className="mx-auto text-white mb-4 text-6xl"/>
                        <h1 className="text-white pb-4 font-bold text-2xl">FULLSTACK</h1>
                        <p className="text-gray-200 text-lg">Using MERN Technology Stack</p>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}