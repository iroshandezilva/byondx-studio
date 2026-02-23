"use client";

import { useState, useCallback } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "motion/react";
import Image from "next/image";

const testimonials = [
  {
    quote: '"Their quality of work, work-ethic, and overall reliability ',
    highlight: "are truly rare find",
    end: '"',
    name: "Yaniv Masjedi",
    role: "CMO at Nextiva.com",
    avatar: "/images/photos/yaniv.png",
  },
  {
    quote: '"The team delivered exceptional designs that ',
    highlight: "tripled our conversion rates",
    end: '"',
    name: "Sarah Chen",
    role: "CEO at Teramind",
    avatar: "/images/photos/yaniv.png",
  },
  {
    quote: '"Working with them felt like having an ',
    highlight: "in-house design team",
    end: '"',
    name: "Alex Rivera",
    role: "CTO at Netic",
    avatar: "/images/photos/yaniv.png",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export function TestimonialCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);

  const index = ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const paginate = useCallback((newDirection: number) => {
    setPage(([prev]) => [prev + newDirection, newDirection]);
  }, []);

  const current = testimonials[index];

  return (
    <LazyMotion features={domAnimation}>
    <div className="w-full overflow-hidden">
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <m.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="bg-background rounded-[30px] p-6 flex flex-col gap-3 items-center overflow-hidden"
        >
          {/* Quote */}
          <p className="text-[14px] font-semibold text-black text-center tracking-[-0.56px] leading-[19.6px]">
            {current.quote}
            <span className="text-orange-highlight">{current.highlight}</span>
            {current.end}
          </p>

          {/* Navigation + Avatar */}
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2.5 h-10">
              {/* Left arrow */}
              <button
                onClick={() => paginate(-1)}
                className="w-10 h-10 rounded-full border-2 border-border-gray flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  className="rotate-180"
                >
                  <path
                    d="M1 5H11M11 5L7 1M11 5L7 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-[0px_5px_3px_0px_rgba(0,0,0,0.01),0px_2px_2px_0px_rgba(0,0,0,0.02),0px_1px_1px_0px_rgba(0,0,0,0.03)] ring-3 ring-white">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right arrow */}
              <button
                onClick={() => paginate(1)}
                className="w-10 h-10 rounded-full border-2 border-border-gray flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                >
                  <path
                    d="M1 5H11M11 5L7 1M11 5L7 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Name + Role */}
            <div className="flex flex-col items-center">
              <span className="text-[12px] font-semibold text-black tracking-[-0.36px] leading-[18px]">
                {current.name}
              </span>
              <span className="text-[12px] font-semibold text-black opacity-40 tracking-[-0.24px] leading-[16.2px]">
                {current.role}
              </span>
            </div>
          </div>
        </m.div>
      </AnimatePresence>
    </div>
    </LazyMotion>
  );
}
