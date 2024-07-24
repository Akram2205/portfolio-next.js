'use client'
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function Contact(){
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    const form = useRef();
    
    const [inputs,setInputs] = useState({
        name :'',
        email: '',
        message:'',
    })

    const sendEmail = (e) => {    
        e.preventDefault();
        emailjs
          .sendForm('service_z3170li', 'template_a5igd7p',form.current , {
            publicKey: 'eTMq3w2V_ilXoUncB',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setInputs({
                name :'',
                email: '',
                message:'',
              })
            },
            (error) => {
                console.log('FAILED...', error.text)  
            },
          );
      };
      const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      };
    return(
        <div id="contact" className="bg-gray-100 py-20 relative z-10">
            <motion.section className="container mx-auto px-6  text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={sectionVariants}>
                <h1 className="text-black pb-14 text-3xl font-bold mx-auto">MY <span className="text-yellow-500">CONTACT</span></h1>
                <div className="pl-6 lg:flex lg:pl-0 justify-around bg-white rounded-sm shadow-md py-8">
                    <div className="flex space-x-4 mb-6">
                        <IoLocationOutline className="border border-black text-yellow-500 rounded-full text-5xl p-3"/>
                        <div className="text-left">
                            <h2 className="font-semibold text-lg">Address</h2>
                            <p className="text-sm text-gray-600">Constantine 25000, Algeria</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-6">
                        <FiPhone className="border border-black text-yellow-500 rounded-full text-5xl p-3"/>
                        <div className="text-left">
                            <h2 className="font-semibold text-lg">Phone</h2>
                            <p className="text-sm text-gray-600">+213 667 230 866</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-6">
                        <IoMailOutline className="border border-black text-yellow-500 rounded-full text-5xl p-3"/>
                        <div className="text-left">
                            <h2 className="font-semibold text-lg">Email</h2>
                            <p className="text-sm text-gray-600">akramhamlaoui200@gmail.com</p>
                        </div>
                    </div>

                </div>
                <form ref={form} onSubmit={sendEmail} className="bg-white mt-8 text-left p-6">
                    <div className="lg:flex lg:justify-between lg:space-x-6">
                        <input name="name" value={inputs.name} placeholder="Your Name" className="p-3 mb-6 block w-full border border-gray-200 focus:outline-none focus:border-black"
                            onChange={(e)=>{setInputs({...inputs,name:e.target.value})}}
                        />
                        <input name="email" value={inputs.email} placeholder="Your Email" className="p-3 mb-6 block w-full border border-gray-200 focus:outline-none focus:border-black"
                            onChange={(e)=>{setInputs({...inputs,email:e.target.value})}}
                        />
                    </div>
                    
                    <textarea name="message" value={inputs.message} placeholder="Message" className="p-3 h-32 mb-6 w-full border border-gray-200 focus:outline-none focus:border-black"
                     onChange={(e)=>{setInputs({...inputs,message:e.target.value})}}
                    />
                    <input type="submit" value={'Send'} className="py-2 mx-auto block px-5 rounded-2xl text-yellow-400 border bg-zinc-700 "/>
                </form>
            </motion.section>
        </div>
    )
}