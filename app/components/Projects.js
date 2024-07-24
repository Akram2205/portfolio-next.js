'use client'
import Image from "next/image";
import { motion } from 'framer-motion';


export default function Projects(){
    const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      };
    return(
        <div id="project" className="bg-gray-100 py-20 relative z-10">
            <motion.section className="container mx-auto px-6  text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={sectionVariants}>
                <h1 className="text-black pb-14 text-3xl font-bold mx-auto">MY <span className="text-yellow-500">PROJECTS</span></h1>
                <div className="grid lg:grid-cols-2 gap-6 text-left">
                    <div className="p-6 bg-white rounded-md">
                        <div className="mb-6 border border-gray-200">
                            <Image className="w-full" src="/images/booking.png" alt="" width={1800} height={1000} />
                        </div>
                        <h2 className="font-semibold text-lg pb-3">Booking hotels</h2>
                        <p className="text-sm text-gray-600">Web Application used to book hotels, with an admin panel to control hotels and users, devloped by ReactJS and ExpressJS </p>
                    </div>
                    <div className="p-6 bg-white rounded-md">
                        <div className="mb-6 border border-gray-200">
                            <Image className="w-full" src="/images/apiUniv.png" alt="" width={1800} height={1000} />
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg pb-3">Students API</h2>
                            <p className="text-sm text-gray-600">This API provides endpoints to access and manage students data efficiently </p>
                        </div>
                    </div>
                    <div className="p-6 bg-white mb-3 rounded-md">
                        <div className="mb-6 border border-gray-200">
                            <Image className="w-full" src="/images/adminPanel.png" alt="" width={1800} height={1000} />
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg pb-3">Admin panel</h2>
                            <p className="text-sm text-gray-600">A control panel that allows users to control (CRUD)</p>
                        </div>
                    </div>
                    <div className="p-6 bg-white mb-3 rounded-md">
                        <div className="mb-6 border border-gray-200">
                            <Image className="w-full" src="/images/templateNext.png" alt="" width={1800} height={1000} />
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg pb-3">Family Home Security Design</h2>
                            <p className="text-sm text-gray-600">Designed by nextJS and Tailwind</p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}