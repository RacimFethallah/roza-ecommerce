"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaSearch, FaShoppingBag, FaPhone } from 'react-icons/fa';
import { FaHouse, FaBoxArchive } from 'react-icons/fa6';
import { BsTelephoneFill } from 'react-icons/bs';
import { TfiClose } from 'react-icons/tfi';
import { IoIosPeople} from 'react-icons/io';
import { AiOutlineMenu, AiFillInfoCircle } from 'react-icons/ai';


export default function Header() {

    const [isSidebarMenu, setIsSidebarMenu] = useState(false);
    const [isShopMenu, setIsShopMenu] = useState(false);

    const toggleSideMenu = () => {
        setIsSidebarMenu(!isSidebarMenu);
    };
    const closeSideMenu = () => {
        setIsSidebarMenu(false);
      };

    const toggleShopMenu = () => {
        setIsShopMenu(!isShopMenu);
    }
    const closeShopMenu = () => {
        setIsShopMenu(false);
      };
    return (
        // <header className='z-[999] relative'>
        //     <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem]  sm:py-0 bg-white'>
        //         <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-black dark:text-gray-400  sm:w-[initial] sm:flex-nowrap sm:gap-[2.0rem] gap-10 '>

        //             <li>Heeyr</li>

        //         </ul>
        //     </nav>
        // </header>


        <header className=" z-[999] fixed w-full flex-col justify-center items-center gap-2.5 inline-flex ">
            {/* <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full shadow-lg"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div> */}
            <motion.nav className="w-full justify-between items-center inline-flex bg-white shadow-xl"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <ul className="justify-start items-center gap-6 flex hover:cursor-pointer">
                    <motion.li
                        className="justify-start items-center gap-2.5 ml-2 flex hover:border-b-[0.15rem] hover:shadow-xl hover:border-black   transition-all ease-in-out  duration-150"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        onClick={toggleSideMenu}>
                        <div className="text-black text-base font-normal flex items-center gap-2 "><AiOutlineMenu />Menu</div>
                    </motion.li>
                    <motion.li
                        className="justify-start items-center gap-2.5 flex hover:border-b-[0.15rem] hover:shadow-xl hover:border-black   transition-all ease-in-out  duration-150"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}>
                        <div className="text-black text-base font-normal flex items-center gap-2"><FaSearch />Rechercher</div>
                    </motion.li>
                </ul>
                <motion.div className=" flex-col justify-center items-center gap-1 inline-flex"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}>
                    <Image
                        src="/images/Roza-logo-wb2.png"
                        alt='Projects I worked on'
                        quality={95}
                        width={74}
                        height={64}
                        className=""
                    />
                </motion.div>

                <ul className="justify-center items-center gap-6 flex hover:cursor-pointer">
                    <motion.li
                        className="bg-black bg-opacity-0 justify-center items-center gap-2.5 flex hover:border-b-[0.15rem] hover:shadow-2xl hover:border-black   transition-all ease-in-out  duration-150"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}>
                        <div className="text-black text-base font-normal  flex items-center gap-2 ">Contactez-nous <FaPhone /> </div>
                    </motion.li>
                    <motion.li
                        className="bg-black bg-opacity-0 justify-center items-center gap-2.5 mr-2 flex hover:border-b-[0.15rem] hover:shadow-2xl hover:border-black   transition-all ease-in-out  duration-150"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}>
                        <div className=" text-black text-base font-normal  flex items-center gap-2 "
                        onClick={toggleShopMenu}>Mon panier <FaShoppingBag /></div>
                    </motion.li>
                </ul>
            </motion.nav>


            {/* Sidebar */}
            {isSidebarMenu && (
                <motion.nav
                    className="fixed top-0 left-0 h-screen w-[22rem] bg-white shadow-2xl p-6 overflow-y-auto"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                >
                    <button className='flex flex-row justify-center  items-center gap-2 text-xl mb-20  '
                    onClick={closeSideMenu}>
                    <TfiClose />
                        Fermer
                    </button>
                    <ul className=''>
                        <li className=' flex flex-row items-center gap-3 text-xl mb-14 cursor-pointer'>
                        <FaHouse />
                            Acceuil
                        </li>
                        <li className=' flex flex-row items-center gap-3 text-xl mb-14 cursor-pointer'>
                        <AiFillInfoCircle />
                            À propos
                        </li>
                        <li className=' flex flex-row items-center gap-3 text-xl mb-14 cursor-pointer'>
                            <FaBoxArchive />
                            Nos produits
                        </li>
                        <li className=' flex flex-row items-center gap-3 text-xl mb-14 cursor-pointer'>
                            <IoIosPeople />
                            Témoignages
                        </li>
                        <li className=' flex flex-row items-center gap-3 text-xl mb-14 cursor-pointer'
                        onClick={toggleShopMenu}>
                            <BsTelephoneFill />
                            Nous contacter
                        </li>
                    </ul>
                </motion.nav>
            )}

            {/* ShopMenu */}
            {isShopMenu && (
                <motion.nav
                    className="fixed top-0 right-0 h-screen w-[22rem] bg-white shadow-xl p-5"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                >
                    <button className='flex flex-row right-5 absolute items-center gap-2 text-xl  '
                    onClick={closeShopMenu}>
                    <TfiClose />
                        Fermer
                    </button>
                    <ul>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </motion.nav>
            )}



        </header>

    )
}
