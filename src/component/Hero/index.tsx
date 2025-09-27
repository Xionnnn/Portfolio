import { useState } from "react";
import { delay, motion } from "framer-motion";

export function Hero({ HeroText }: { HeroText: string }) {
  const heroDelay = HeroText.length * 0.03;
  const [delay, setDelay] = useState(heroDelay);
  return (
    <div className="flex flex-col items-center justify-center h-10/12">
      <div
        className="flex justify-center items-center text-lg md:text-2xl xl:text-3xl text-center"
        style={{ whiteSpace: "pre" }}
      >
        {HeroText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.03,
            }}
            animate={{ scale: 1 }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.2, 1, 0.2, 1] }}
          transition={{
            duration: 6,
            delay: heroDelay,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ display: "inline-block" }}
        >
          ...
        </motion.span>
      </div>
      <div className="pt-8 text-xl flex justify-center">
        <motion.button
          className="rounded-md bg-gray-400 px-2 text-black"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2, cursor: "pointer" }}
          whileTap={{ scale: 1.1 }}
          transition={{ delay, duration: 0.3 }}
          onAnimationComplete={() => setDelay(0)}
        >
          Download CV
        </motion.button>
      </div>
    </div>
  );
}
