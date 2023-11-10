"use client";

import { motion } from 'framer-motion'
import React from 'react'

export default function SectionBathBombs() {
    return (
        <section>
            <motion.div className='relative w-screen h-screen  flex flex-col items-center justify-center shadow-2xl'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <img className='w-full h-screen object-cover absolute brightness-[0.6] shadow-[-10px_-10px_30px_6px_rgba(0,0,0,0.1)]' src="/images/bathBombBg.jpg" alt="" />
                <motion.h1
                    className='flex flex-col justify-center items-center absolute top-[4.5rem] right-[3rem] font-cerlions text-white text-[4rem]  font-[700]'
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: [0, 0.5, 1] }}
                    transition={{ duration: 1.5 }}
                >Decouvrez nos bombes de bain</motion.h1>


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


// initial = {{ y: -50, opacity: 0 }}
// whileInView = {{ y: [0, -15, -20, 0], opacity: [1, 0.5, 1] }}
// transition = {{ duration: 1.5, repeat: Infinity }}