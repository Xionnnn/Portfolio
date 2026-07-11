"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useState } from "react";

export type Project = {
  imageSrc: string;
  title: string;
  description: string;
  caseStudy?: string[];
  externalUrl?: string;
  externalLabel?: string;
};

type ProjectExplorerProps = {
  projects: Project[];
};

export default function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [selectionVersion, setSelectionVersion] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const caseStudyId = useId();
  const shouldReduceMotion = useReducedMotion();
  const activeProject = projects[activeIndex];

  useEffect(() => {
    setIsCaseStudyOpen(false);
  }, [activeIndex]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!activeProject) {
    return null;
  }

  const canAnimate = hasMounted && !shouldReduceMotion;
  const contentTransition = canAnimate
    ? { duration: 0.35, ease: "easeOut" as const }
    : { duration: 0 };

  return (
    <motion.div
      className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(220px,0.35fr)_minmax(0,1fr)] lg:gap-12"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible"
        aria-label="Project selector"
      >
        {projects.map((project, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.button
              key={project.title}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setSelectionVersion((version) => version + 1);
              }}
              whileHover={canAnimate ? { x: 6, y: -2, scale: 1.02 } : undefined}
              whileTap={canAnimate ? { scale: 0.98 } : undefined}
              className="relative min-w-56 rounded-xl border border-transparent hover:border-gray-700  bg-black/10 p-3 text-left outline-none transition-colors lg:min-w-0"
              aria-pressed={isActive}
            >
              {isActive && (
                <motion.span
                  layoutId="active-project"
                  className="absolute inset-0 border border-gray-700 rounded-xl"
                  transition={contentTransition}
                />
              )}
              <div className="relative flex items-center gap-3">
                <motion.img
                  src={project.imageSrc}
                  alt=""
                  className="aspect-video w-20 rounded-md object-cover"
                  animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                  transition={contentTransition}
                />
                <span className="text-sm font-medium leading-snug">{project.title}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="min-w-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={`${activeProject.title}-${selectionVersion}`}
            initial={canAnimate ? { opacity: 0, scale: 0 } : false}
            animate={{ opacity: 1, scale: 1 }}
            exit={canAnimate ? { opacity: 0, scale: 0.8 } : undefined}
            transition={
              canAnimate
                ? { type: "spring", stiffness: 240, damping: 20 }
                : contentTransition
            }
          >
            <motion.div
              className="overflow-hidden rounded-2xl border border-gray-700 bg-black/10"
              whileHover={canAnimate ? { scale: 1.015 } : undefined}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <motion.img
                src={activeProject.imageSrc}
                alt={activeProject.title}
                className="aspect-video w-full object-cover"
                whileHover={canAnimate ? { scale: 1.06 } : undefined}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>
            <div className="pt-6">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Selected project</p>
              <h3 className="mt-2 text-2xl md:text-4xl">{activeProject.title}</h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed md:text-base">
                {activeProject.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {activeProject.caseStudy && (
                  <button
                    type="button"
                    onClick={() => setIsCaseStudyOpen((isOpen) => !isOpen)}
                    className="rounded-full border border-gray-500 px-4 py-2 text-sm transition-colors hover:border-gray-100 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200"
                    aria-expanded={isCaseStudyOpen}
                    aria-controls={caseStudyId}
                  >
                    {isCaseStudyOpen ? "Hide Me!!" : "Click Me!!"}
                  </button>
                )}
                {activeProject.externalUrl && (
                  <a
                    href={activeProject.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm text-black transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200"
                  >
                    {activeProject.externalLabel ?? "View project"} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>

              <AnimatePresence initial={false}>
                {activeProject.caseStudy && isCaseStudyOpen && (
                  <motion.div
                    id={caseStudyId}
                    initial={canAnimate ? { height: 0, opacity: 0 } : false}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={canAnimate ? { height: 0, opacity: 0 } : undefined}
                    transition={contentTransition}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 border-l border-gray-600 pl-5 text-sm leading-relaxed text-gray-300 md:text-base">
                      {activeProject.caseStudy.map((paragraph) => (
                        <p key={paragraph} className="mt-4 first:mt-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
