"use client";
import {
  Button,
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { motion, scale, Variants } from "framer-motion";
import { html } from "motion/react-client";
import { useState } from "react";
import { useScrolls } from "../contextScrollProvider";

type ProjectCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  firstDialog?: string | undefined;
  secondDialog?: string | undefined;
  thirdDialog?: string | undefined;
  onClick?: () => void;
};

export default function ProjectCard({
  imageSrc,
  title,
  description,
  firstDialog,
  secondDialog,
  thirdDialog,
  onClick,
}: ProjectCardProps) {
  const { setYPos } = useScrolls();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const textVariants: Variants = {
    offScreen: {
      x: 100,
      opacity: 0,
    },
    onScreen: {
      x: 0,
      opacity: 100,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  const imageVariants: Variants = {
    initialLoad: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    tapLoad: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      cursor: "pointer",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <motion.button
        variants={imageVariants}
        whileHover="hover"
        initial={{ scale: 0.5 }}
        whileInView="initialLoad"
        whileTap="tapLoad"
        viewport={{ once: true }}
        onClick={() => {
          if (onClick) {
            onClick();
          }
          setYPos(-100);
          setIsOpen(true);
        }}
        className="col-span-4 row-span-1 md:row-span-2 rounded-2xl overflow-hidden xl:col-span-5 xl:row-span-4"
      >
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </motion.button>
      <motion.div
        variants={textVariants}
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true }}
        className="col-span-4 row-span-1 md:row-span-2 xl:col-span-7 xl:row-span-4 mt-4 md:self-center"
      >
        <div className="text-sm xl:text-lg">{title}</div>
        <div className="text-md xl:text-2xl mt-2">{description}</div>
      </motion.div>
      <Dialog
        open={isOpen && !!firstDialog}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/70" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="max-w-2xl rounded-xl bg-black/30 backdrop-blur-xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <img
                src={imageSrc}
                alt={title}
                className="object-cover w-full h-full rounded-xl"
              />
              <div className="py-5 px-2 md:py-10 md:px-10 text-sm md:text-md lg:text-xl">
                <div className="mb-2">{firstDialog}</div>
                {secondDialog && <div className="mb-2">{secondDialog}</div>}
                {thirdDialog && <div>{thirdDialog}</div>}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
