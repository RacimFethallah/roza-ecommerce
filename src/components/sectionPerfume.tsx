"use client";


import { motion } from 'framer-motion'
import React from 'react'

export default function SectionPerfume() {
  return (
    <section>
            <motion.div className='relative w-screen h-screen  flex flex-col items-center justify-center shadow-2xl'

            >
                <img className='w-full h-screen object-cover absolute brightness-[0.9] shadow-[-10px_-10px_30px_10px_rgba(0,0,0,0.1)]' src="/images/perfumeBg.jpg" alt="" />
                <img
                        className="h-[400px] w-[400px] object-cover mt-2 absolute top-[63%] left-[66.5%] transform -translate-x-1/2 -translate-y-1/2"
                        src="/images/Rozawb.png"
                        alt=""
                    />
                <motion.h1
                    className='flex flex-col justify-center items-center absolute top-[4.5rem] left-[2rem] font-cerlions text-white text-[4rem]  font-[700]'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: [0, 0.5, 1] }}
                    transition={{ duration: 1.5 }}
                >Decouvrez notre collection de parfums</motion.h1>


                <motion.div
                    className='flex flex-col justify-center items-center w-full absolute bottom-0  mb-14 '
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <a
                        className='text-white text-xl bg-white bg-opacity-30 w-[10rem] font-thin tracking-wider text-center   shadow-2xl rounded-[25px] p-2 border-2 border-white  hover:-translate-y-5 transition-all hover:cursor-pointer outline-none focus:scale-110 active:scale-105 hover:bg-opacity-50'

                    >
                        Parcourir
                    </a>
                </motion.div>

            </motion.div>
        </section>
  )
}
