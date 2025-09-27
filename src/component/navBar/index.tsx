"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { div } from "motion/react-client";
import { useEffect, useState } from "react";

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState(1);
  const [yPos,setYPos] = useState(0);
  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious()!;
    setScrollDirection(diff > 0 ? 0 : 1);
    setYPos(diff > 0 ? -50 : 0);
  });
  return (
    <motion.div
      className="fixed top-0 w-screen z-50 bg-[#212020]"
      animate={{ opacity: scrollDirection ,y: yPos}}
      transition={{ duration: 0.3 }}
    >
      <div className="border-b-2 border-gray-700 flex justify-between items-center text-white px-10 h-16">
        <motion.button
          whileHover={{ scale: 1.1, cursor: "pointer", rotate: -2 }}
          onClick={()=>{
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }}
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
            whileHover={{ scale: 1.1, cursor: "pointer", rotate: -2 }}
          >
            LinkedIn
          </motion.button>
          <motion.button
            className="cursor-pointer"
            onClick={() => {
              window.open("https://github.com/Xionnnn");
            }}
            whileHover={{ scale: 1.1, cursor: "pointer", rotate: -2 }}
          >
            GitHub
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
