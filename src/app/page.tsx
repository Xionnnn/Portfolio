"use client";
import { motion, Variants } from "framer-motion";
import { Hero } from "@/component/Hero";
import ProjectExplorer, { type Project } from "@/component/projectExplorer";

const projects: Project[] = [
  {
    imageSrc: "./greatnusa.png",
    title: "GreatNusa | (Greatnusa.com)",
    description:
      "Digital platform for lifelong learner that provides a wide variety of selected topics through massive online open courses for young professionals in Indonesia",
    caseStudy: [
      "GreatNusa is a digital platform for lifelong learner that provides a wide variety of selected topics through massive online open courses for young professionals in Indonesia. In this wonderful opportunity, i learn not only to code, but to communicate, and to collaborate with others to make and maintain a platform that helps thousands of people to learn and gain new knowledge.",
      "At GreatNusa, I joined the core development team to enhance the external and internal websites. My primary role involved full-stack development on both internal and external-facing features.",
      "My work mainly involves the LMS system on the main website. I helped create features to enhance the LMS in GreatNusa, such as creating and adjusting various LMS materials according to needs, solving bugs, etc, using React.js with Next.js framework for the frontend and the PHP framework Laravel for the backend.",
    ],
  },
  {
    imageSrc: "./Adaptist-Prose.jpg",
    title: "Accelist | Adaptist Prose",
    description: "AI-powered omnichannel ticketing and service management platform",
    caseStudy: [
      "Contributed as the main developer for the UI revamp across the platform's core features, helping modernize the website layout, improve UI responsiveness, and streamline the user experience while collaborating with the Project Manager, Software Architect, and Team Lead to align product decisions.",
      "Troubleshot and resolved bugs to improve application stability and user experience.",
    ],
  },
  {
    imageSrc: "./promigo.png",
    title: "Promigo | Main Website and Website Design",
    description:
      "Online Promo hub websites that provide promo variety from different brands that help students and people near Binus Anggrek get the best deal",
    externalUrl: "https://github.com/PromigoWebsite/PromigoWeb",
    externalLabel: "View on GitHub",
  },
];

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
      <div className="min-h-screen w-full flex flex-col justify-center items-center border-b border-gray-700 px-4">
        <Hero HeroText="Hi there, You have landed in Arvin's portfolio" />
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm md:text-base px-2"
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
      {/* About me */}
      <section className="border-b border-gray-700 px-4 py-12 md:px-10 md:py-20 xl:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(220px,280px)_1fr] md:gap-16">
        {/* About me */}
        <motion.div
          className="w-full max-w-[280px] justify-self-center overflow-hidden rounded-2xl border border-gray-700 bg-black/10"
          variants={abtMeImg}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true }}
        >
          <img
            src="./SelfGlaze.jpg"
            alt="Portrait of Arvin"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="border-t border-gray-700 px-4 py-3 text-sm text-gray-300">
            Software Developer <span className="text-gray-500">• Jakarta, Indonesia</span>
          </div>
        </motion.div>
        <motion.div
          className="max-w-3xl"
          variants={abtMe}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Profile</p>
          <h2 className="mt-2 text-3xl md:text-5xl">About Me</h2>
          <p className="pt-5 text-base leading-relaxed md:text-xl">
            I'm a curious learner and a passionate software developer currently
            attending computer science major at 5th semester in BINUS
            University. With a strong foundation in JavaScript, React, php, and
            more. I'm eager to connect with fellow software developer and find
            opportunities to grow my skills.
          </p>
        </motion.div>
        </div>
      </section>
      {/* Experience */}
      <section className="border-b border-gray-700 px-4 py-12 md:px-10 md:py-20 xl:px-16">
        <motion.div
          className="mx-auto max-w-6xl"
          variants={abtMeExp}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Career</p>
          <h2 className="mt-2 text-3xl md:text-5xl">Experience</h2>
          <div className="relative mt-10 space-y-12 border-l border-gray-600 pl-6 md:mt-14 md:space-y-16 md:pl-10">
          <article className="relative">
          <span className="absolute -left-[31px] top-1 size-3 rounded-full border-2 border-gray-300 bg-[#212020] md:-left-[45px]" />
          <p className="text-sm text-gray-400">
            February 2026 - Present
          </p>
          <h3 className="mt-2 text-lg font-bold md:text-2xl">
            FullStack Software Engineer Intern <span className="font-normal text-gray-400">| Accelist Lentera Indonesia</span>
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed md:text-base">
            At Accelist, I joined the product development team to maintain and enhance Adaptist Prose,
            AI-powered omnichannel ticketing and service management platform. My role involved around maintaning the platform by performing bug troubleshooting and fixing it,
            and i have had the opportunity to be the main developer for the UI revamp across the platform’s user facing features.
          </p>
          </article>
          <article className="relative">
          <span className="absolute -left-[31px] top-1 size-3 rounded-full border-2 border-gray-300 bg-[#212020] md:-left-[45px]" />
          <p className="text-sm text-gray-400">
            September 2024 - July 2025
          </p>
          <h3 className="mt-2 text-lg font-bold md:text-2xl">
            FullStack Software Engineer Intern <span className="font-normal text-gray-400">| GreatNusa</span>
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed md:text-base">
            At GreatNusa, I joined the core development team to enhance a
            platform, serving thousands of lifelong learners in Indonesia. My
            primary role involved full-stack development on both internal and
            external-facing features.
          </p>
          </article>
          </div>
        </motion.div>
      </section>
      {/* Projects */}
      <section className="border-b border-gray-700 px-4 py-12 md:px-10 md:py-20 xl:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Selected work</p>
          <h2 className="mt-2 text-3xl md:text-5xl">Projects</h2>
          <ProjectExplorer projects={projects} />
        </div>  
      </section>
    </div>
  );
}
