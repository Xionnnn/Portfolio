"use client";
import {AnimatePresence, motion, useMotionValueEvent, useScroll} from "framer-motion";
import { useState} from "react";
import {useScrolls} from "../contextScrollProvider";
import Lucide from "../../component/Lucide";

export default function Nav() {

    // const [scrollDirection, setScrollDirection] = useState(1);
    // const [yPos,setYPos] = useState(0);
    const {scrollY} = useScroll();
    const {yPos, setYPos, scrollDirection, setScrollDirection, scrollToTop} = useScrolls();
    const [isOpen, setIsOpen] = useState(false);
    useMotionValueEvent(scrollY, "change", (current) => {
        const diff = current - scrollY.getPrevious()!;
        setScrollDirection(diff > 0 ? 0 : 1);
        setYPos(diff > 0 ? -50 : 0);
    });
    return (
        <motion.div
            className="fixed top-0 w-screen z-50 bg-[#212020]"
            animate={{opacity: scrollDirection, y: yPos}}
            transition={{duration: 0.3}}
        >
            <div
                className="hidden sm:flex border-b-2 border-gray-700 justify-between items-center text-white px-6 md:px-10 h-14 md:h-16 ">
                <motion.button
                    whileHover={{scale: 1.1, cursor: "pointer", rotate: -2}}
                    onClick={scrollToTop}
                >
                    Arvin Hasim
                </motion.button>
                <div className="flex justify-between w-30">
                    <motion.button
                        className="cursor-pointer"
                        onClick={() => {
                            window.open(
                                "https://www.linkedin.com/in/arvin-hasim-506634235/",
                                "_blank"
                            );
                        }}
                        whileHover={{scale: 1.1, cursor: "pointer", rotate: -2}}
                    >
                        LinkedIn
                    </motion.button>
                    <motion.button
                        className="cursor-pointer"
                        onClick={() => {
                            window.open("https://github.com/Xionnnn");
                        }}
                        whileHover={{scale: 1.1, cursor: "pointer", rotate: -2}}
                    >
                        GitHub
                    </motion.button>
                </div>
            </div>
            <div className={'sm:hidden flex border-b-2 border-gray-700 justify-between items-center text-white px-6 md:px-10 h-14 md:h-16'}>
                <div>
                    Arvin Hasim
                </div>

                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={isOpen ? "open" : "close"}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2, type: "decay"}}
                    >
                        {!isOpen ?
                            <>
                                <button onClick={() => {
                                    setIsOpen((prev) => !prev)
                                }}
                                >
                                    <Lucide icon="Ellipsis" className='h-6 w-6 stroke-2'/>
                                </button>
                            </> :
                            <>
                                <motion.div
                                    className='fixed inset-x-0 top-0 bg-[#212020] border-b-2 border-gray-700 px-6 pt-3.5 h-52'
                                >
                                    <div className={'size-full flex flex-col'}>
                                        <div className={'flex justify-between items-center text-white'}>
                                            <div>
                                                Arvin Hasim
                                            </div>
                                            <button
                                                className={'h-6 w-6'}
                                                onClick={() => {
                                                    setIsOpen((prev) => !prev)
                                                }}
                                            >
                                                <Lucide icon="X" className='h-6 w-6 stroke-2'/>
                                            </button>
                                        </div>
                                        <div className={'mt-10 flex flex-col justify-center'}>
                                            <div className={'text-center'}>
                                                <motion.button
                                                    className="cursor-pointer text-xl "
                                                    onClick={() => {
                                                        window.open(
                                                            "https://www.linkedin.com/in/arvin-hasim-506634235/",
                                                            "_blank"
                                                        );
                                                    }}
                                                >
                                                    LinkedIn
                                                </motion.button>
                                            </div>
                                            <div className={'mt-5 text-center'}>
                                                <motion.button
                                                    className="cursor-pointer text-xl"
                                                    onClick={() => {
                                                        window.open("https://github.com/Xionnnn");
                                                    }}
                                                >
                                                    GitHub
                                                </motion.button>
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        }
                    </motion.div>

                </AnimatePresence>
            </div>
        </motion.div>
    );
}
