"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaSearch, FaShoppingBag, FaPhone, FaTrash } from 'react-icons/fa';
import { FaHouse, FaBoxArchive } from 'react-icons/fa6';
import { BsTelephoneFill } from 'react-icons/bs';
import { TfiClose } from 'react-icons/tfi';
import { IoIosPeople } from 'react-icons/io';
import { AiOutlineMenu, AiFillInfoCircle } from 'react-icons/ai';
import Link from 'next/link';


export default function Header() {

    const [isSidebarMenu, setIsSidebarMenu] = useState(false);
    const [isShopMenu, setIsShopMenu] = useState(false);
    const [shopItems, setShopItems] = useState<string[]>([]); // Explicitly define type as string[]

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
    const addItemToShop = (item: string) => {
        setShopItems([...shopItems, item]);
    };

    const removeItemFromShop = (index: number) => {
        const newShopItems = [...shopItems];
        newShopItems.splice(index, 1);
        setShopItems(newShopItems);
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
                        onClick={() => {
                            toggleSideMenu();
                            addItemToShop("bathbomb");
                        }}>
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
                        <div className="text-black text-base font-normal flex items-center gap-2 -mr-3" onClick={toggleShopMenu}>
                            Mon panier <FaShoppingBag />
                            <span className='border border-black bg-white rounded-full w-6 h-6 text-center -translate-x-4 -translate-y-2 shadow-xl'>{shopItems.length}</span>
                        </div>

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
                            <Link href={{pathname:"/"}} onClick={closeSideMenu}>Acceuil</Link>  
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
                    className="fixed top-0 right-0 h-screen w-[22rem] bg-white shadow-xl flex flex-col"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                >
                    <div className='flex flex-row items-center  p-5'>
                        <h1 className='float-left text-2xl '>Sac (<span>{shopItems.length}</span>)</h1>
                        <button className='flex float-right flex-row right-5 absolute items-center gap-2 text-xl  '
                            onClick={closeShopMenu}>
                            <TfiClose />
                            Fermer
                        </button>
                    </div>

                    {shopItems.length > 0 ? (
                        <>
                            <ul className='flex flex-col overflow-y-auto px-3 py-2 shadow-2xl '>
                                {shopItems.map((item, index) => (
                                    <li key={index}
                                        className='bg-[#f6f6f6] mb-3 w-full min-h-[127px] rounded-xl shadow-xl flex flex-col border border-black '>
                                        <div className='flex flex-row'>
                                            <div className='p-3'>
                                            {item}{' '}
                                            </div>
                                            
                                            <button className='ml-auto p-3'  onClick={() => removeItemFromShop(index)}><FaTrash size={18} /></button>
                                        </div>
                                        <div className='flex mt-auto items-center justify-end px-3'>
                                            <span>1000.00DA</span>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                            <div className='flex flex-col mt-auto'>
                                <div className=' rounded-full bg-black h-1 '></div>
                                <div className='px-3 text-lg mt-2'>
                                    <span className='float-left flex'>Total</span>
                                    <span className='float-right'>1000.00DA</span>
                                </div>



                                <a href="#" className='w-full mt-5 inline-block text-center text-white font-bold text-xl tracking-wider bg-[#152949]  p-5 rounded-tl-3xl rounded-tr-3xl shadow-[0px_-10px_20px_10px_#00000024] hover:bg-white hover:text-[#152949] transition-all ease-in-out duration-500 hover:border hover:border-black hover:scale-105'>Commander</a>
                            </div>

                        </>

                    ) : (
                        <>
                            <div className='flex flex-col justify-center items-center h-full'>
                                <FaShoppingBag size={"4rem"} />

                                <p className="text-center text-3xl mt-7 flex justify-center font-bold">
                                    Votre panier est vide.
                                </p>
                                <p className="text-center text-lg mt-2 flex justify-center font-light">
                                    Découvrez notre sélection de produits!
                                </p>
                            </div>

                        </>
                    )}
                </motion.nav>
            )}



        </header>

    )
}
