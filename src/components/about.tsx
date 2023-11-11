"use client";

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className=' p-8  h-full md:h-full flex flex-col sm:flex-row gap-2.5'>
            <motion.div
                className='flex flex-col   w-full md:w-[50%] justify-center items-center relative text-center '
                initial={{x:-200, opacity: 0 }}
                whileInView={{
                    x:0,
                    opacity: [0, 0.5, 1],
                }}
                transition={{
                    duration: 1.5,
                }}>
                <motion.h1
                    className='font-cerlions font-bold text-5xl mb-3'
                >Qui sommes-nous</motion.h1>
                <p className='text-xl px-10 leading-relaxed mt-2 relative'>
                    Nous sommes bien plus qu&apos;une simple boutique en ligne. Nous sommes une destination de choix pour les amateurs de détente, de raffinement et de rajeunissement. Chez <span className='font-cerlions'>Roza Bath & Body</span>, nous mettons tout en œuvre pour vous offrir une vaste gamme de produits de bain soigneusement sélectionnés. Notre passion pour la relaxation et la revitalisation transparaît dans chaque produit que nous proposons. Nous travaillons en étroite collaboration avec des artisans passionnés et des marques renommées pour vous garantir des articles de la plus haute qualité. Chez <span className='font-cerlions'>Roza Bath & Body</span>, la qualité est notre priorité, car nous croyons que chaque bain, chaque soin de la peau, et chaque moment de détente méritent d&apos;être exceptionnels. Nos produits sont conçus pour apporter une touche de magie à votre routine quotidienne, transformant chaque instant en une expérience sensorielle unique. Que vous recherchiez un échappatoire à la fin d&apos;une journée chargée, des cadeaux attentionnés pour vos proches ou des produits de qualité pour votre rituel de soins personnels, nous avons ce qu&apos;il vous faut.
                </p>
            </motion.div>


            <motion.div className='flex flex-col  w-full md:w-[50%] justify-center items-center relative'
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}>
                <Image
                    src="/images/aboutimg2.jpg"
                    alt='Projects I worked on'
                    quality={95}
                    width={360}
                    height={360}
                    className="translate-x-[8rem] translate-y-[4rem] rounded-[20px] shadow-2xl origin-bottom-right hover:rotate-12 hover:translate-x[1rem] hover:scale-105   transition-all duration-[400ms]"
                />
                <Image
                    src="/images/perfumepic2.jpg"
                    alt='Projects I worked on'
                    quality={95}
                    width={360}
                    height={360}
                    className=" -translate-x-[7rem] -translate-y-[4rem] rounded-[20px] shadow-2xl origin-bottom-left hover:-rotate-12 hover:-translate-x[1rem] hover:scale-105  transition-all duration-[400ms]"
                />
            </motion.div>

        </section>
    )
}
