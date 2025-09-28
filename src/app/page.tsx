"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import ProjectCard from "../component/projectCard";
import { Hero } from "@/component/Hero";
import { useState } from "react";

export default function Main() {
  const abtMeImg: Variants = {
    offScreen: {
      x: -100,
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

  const abtMeExp: Variants = {
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

  const abtMe: Variants = {
    offScreen: {
      y: 100,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 100,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  return (
    <div>
      <div className="h-screen w-screen flex flex-col justify-center items-center border-b-1 border-gray-700">
        <Hero HeroText="Hi there, You have landed in Arvin's portfolio" />
        <motion.div
          className="absolute bottom-5"
          animate={{ y: [0, -8] }}
          transition={{
            type: "spring",
            bounce: 0.5,
            stiffness: 100,
            damping: 10,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Scroll down to continue
        </motion.div>
      </div>
      {/* About me, Experience */}
      <div className="grid grid-cols-4 grid-rows-4 md:grid-cols-8 md:grid-rows-8 px-10 xl:px-50 py-20 gap-x-12 border-b-1 border-gray-700">
        {/* About me */}
        <motion.div
          className="col-span-4 row-span-2 md:col-span-2 md:row-span-8 overflow-hidden self-center"
          variants={abtMeImg}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true }}
        >
          <img
            src="./SelfGlaze.jpg"
            alt="Photo"
            className="object-cover max-w-full max-h-full"
          />
        </motion.div>
        <motion.div
          className="col-span-4 row-span-1 md:row-span-8 pt-2 md:pt-4"
          variants={abtMe}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true }}
        >
          <div className="text-lg md:text-3xl">About Me</div>
          <div className="text-md lg:text-xl pt-2">
            I'm a curious learner and a passionate software developer currently
            attending computer science major at 5th semester in BINUS
            University. With a strong foundation in JavaScript, React, php, and
            more. I'm eager to connect with fellow software developer and find
            opportunities to grow my skills.
          </div>
        </motion.div>
        {/* Experience */}
        <motion.div
          className="col-span-4 row-span-1 md:col-span-2 md:row-span-8 pt-4"
          variants={abtMeExp}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true }}
        >
          <div className="text-lg md:text-3xl">Experience</div>
          <div className="text-sm md:text-md pt-2 border-b-1">
            September 2024 - July 2025
          </div>
          <div className="text-md lg:text-lg pt-2 font-bold">
            FullStack Software Engineer Intern | GreatNusa
          </div>
          <div className="text-sm pt-2 ">
            At GreatNusa, I joined the core development team to enhance a
            platform, serving thousands of lifelong learners in Indonesia. My
            primary role involved full-stack development on both internal and
            external-facing features.
          </div>
        </motion.div>
      </div>
      {/* Feature Highlight */}
      <div className="grid grid-cols-4 grid-rows-4 md:grid-cols-8 md:grid-rows-8 xl:grid-cols-12 xl:grid-rows-12 px-10 xl:px-50 py-20 md:gap-y-10 xl:gap-y-15 gap-x-12">
        <ProjectCard
          imageSrc="./greatnusa.png"
          title="GreatNusa | Main Website (Greatnusa.com)"
          description="Digital platform for lifelong learner that provides a wide variety of selected topics through massive online open courses for young professionals in Indonesia"
          firstDialog="GreatNusa is a digital platform for lifelong learner that provides a wide variety of selected topics through massive online open courses for young professionals in Indonesia. In this wonderful opportunity, i learn not only to code, but to communicate, and to collaborate with others to make and maintain a platform that helps thousands of people to learn and gain new knowledge."
          secondDialog="At GreatNusa, I joined the core development team to enhance the external and internal websites. My primary role involved full-stack development on both internal and external-facing features."
          thirdDialog="My work mainly involves the LMS system on the main website. I helped create features to enhance the LMS in GreatNusa, such as creating and adjusting various LMS materials according to needs, solving bugs, etc, using React.js with Next.js framework for the frontend and the PHP framework Laravel for the backend."
        />
        <ProjectCard
          imageSrc="./greatnusa_cover.jpeg"
          title="GreatNusa | Admin System"
          description="Admin website for GreatNusa that provides control and streamline process for managing content in Greatnusa website"
          firstDialog="Among many others, one of my main contributions to the admin website was in the development of the 'Certificate Generation' feature. I helped build the front-end components using React and developed the backend logic in PHP (Laravel) to automatically generate PDF certificates upon course completion based on the created template in the admin website. This feature automated a previously manual process, saving the admin a considerable amount of time."
        />
        <ProjectCard
          imageSrc="./promigo.png"
          title="Promigo | Main Website and Website Design"
          description="Online Promo hub websites that provide promo variety from different brands that help students and people near Binus Anggrek get the best deal"
          onClick={() => {
            window.open(
              "https://github.com/PromigoWebsite/PromigoWeb",
              "_blank"
            );
          }}
        />
      </div>
    </div>
  );
}
