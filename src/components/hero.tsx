"use client";
import { motion } from 'framer-motion';
import React from 'react'
import { BsArrowDown } from 'react-icons/bs';

export default function Hero() {


    return (
        <section className=''>



            <motion.div className='relative w-screen h-screen  flex flex-col items-center justify-center shadow-2xl'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <img className='w-full h-screen object-cover absolute brightness-[0.6]' src="/images/heroBg.jpg" alt="" />
                <motion.div
                className='w-full h-full'
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{scale: 1, opacity: 1 }}
                
                transition={{ type: "tween", duration: 1 }}>
                    <img
                        className="h-[700px] w-[700px] object-cover mt-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        src="/images/Rozawb.png"
                        alt=""
                    />
                </motion.div>

                <motion.div className='text-white text-xl font-thin flex flex-col justify-center items-center -mt-10 absolute bottom-0 mb-1'
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: [0, -15, -20, 0], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}>
                    Défilez vers le bas
                    <BsArrowDown />
                </motion.div>
            </motion.div>




        </section>

    )
}


// const backgroundImageStyle = {
//     backgroundImage: `url('/images/heroBg.jpg')`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "100vh", // Set the height of the container
//     width: "100vw", // Set the width of the container
// };


{/* <motion.div
                className="flex flex-col items-center justify-center object-cover"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={backgroundImageStyle}
            >
                <div className=' opacity-5 '></div>
                <img
                    className="h-[700px] w-[700px] object-cover mt-2"
                    src="/images/rozaWhite.png"
                    alt=""
                />


                <div className='text-white text-2xl font-bold flex flex-col justify-center items-center -mt-10'>
                    defilez vers le bas
                    <BsArrowDown />
                </div>
            </motion.div> */}