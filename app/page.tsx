"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { DiaTextReveal } from "@/components/ui/dia-text-reveal"
import { TextAnimate } from "@/components/ui/text-animate"
import { HyperText } from "@/components/ui/hyper-text"

type TeamMember = {
  name: string
  role: string
  linkedin: string
  x: string
  bg: string
  photo: {
    src: string
    wrapClass: string
    wrapStyle?: React.CSSProperties
    imgClass: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Iroshan",
    role: "Lead Designer",
    linkedin: "#",
    x: "#",
    bg: "#f2e07a",
    photo: {
      src: "/avatars/iroshan.png",
      wrapClass: "absolute inset-[0_0.5px] rounded-full overflow-hidden",
      imgClass: "absolute h-[138.01%] left-[-18.46%] max-w-none top-[-15.55%] w-[139.01%]",
    },
  },
  {
    name: "Sandaruwan",
    role: "Product Designer",
    linkedin: "#",
    x: "#",
    bg: "#f2aced",
    photo: {
      src: "/avatars/sandaruwan.png",
      wrapClass: "absolute left-0 right-0 top-[2.59px] overflow-hidden",
      wrapStyle: { aspectRatio: "64 / 61.4" },
      imgClass: "absolute h-[541.95%] left-[-122.77%] max-w-none top-[-47.73%] w-[404.46%]",
    },
  },
  {
    name: "Thinuka",
    role: "Creative Designer",
    linkedin: "#",
    x: "#",
    bg: "transparent",
    photo: {
      src: "/avatars/thinuka.png",
      wrapClass: "absolute inset-0",
      imgClass: "size-full object-cover",
    },
  },
  {
    name: "Minindu",
    role: "Product Designer",
    linkedin: "#",
    x: "#",
    bg: "transparent",
    photo: {
      src: "/avatars/minindu.png",
      wrapClass: "absolute inset-0",
      imgClass: "size-full object-cover",
    },
  },
]

export default function Home() {
  const [hoveredAvatar, setHoveredAvatar] = useState<number | null>(null)
  const prevAvatarRef = useRef<number | null>(null)

  const handleHoverStart = (i: number) => {
    prevAvatarRef.current = hoveredAvatar
    setHoveredAvatar(i)
  }
  const handleHoverEnd = () => {
    prevAvatarRef.current = hoveredAvatar
    setHoveredAvatar(null)
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed left-1/2 -translate-x-1/2 top-5 z-50 bg-[#1f1f1f] flex items-center gap-4 sm:gap-[60px] pl-4 sm:pl-6 pr-2 sm:pr-3 py-3 rounded-full"
      >
        <div className="relative h-5 w-[134px]">
          <Image src="/byondx-logo.svg" alt="Byondx" fill className="object-contain object-left" />
        </div>
        <div className="flex items-center gap-2">
          <motion.a
            href="/work"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgba(255,255,255,0.18)] flex items-center justify-center rounded-full size-8 shrink-0 overflow-hidden relative cursor-pointer"
            initial="rest"
            whileHover="hover"
          >
            <motion.img
              src="/icons/figma.svg"
              alt="Figma"
              className="size-4 absolute"
              variants={{
                rest: { y: 0, filter: "blur(0px)", opacity: 1 },
                hover: { y: -28, filter: "blur(6px)", opacity: 0 },
              }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="size-4 absolute"
              variants={{
                rest: { y: 28, filter: "blur(6px)", opacity: 0 },
                hover: { y: 0, filter: "blur(0px)", opacity: 1 },
              }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            >
              <path d="M9.57648 2.53365C7.57781 1.29918 5 2.73688 5 5.08605V18.914C5 21.2632 7.57781 22.7009 9.57648 21.4664L20.7705 14.5524C22.6686 13.3801 22.6686 10.6199 20.7705 9.44763L9.57648 2.53365Z" fill="white"/>
            </motion.svg>
          </motion.a>
          <motion.a
            href="https://cal.com/byondx-studio/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-[10px] py-[6px] rounded-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(0,0,0,0.08)]"
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
            variants={{
              rest: { backgroundColor: "#ffffff" },
              hover: { backgroundColor: "#f0f0f0" },
            }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative size-4 overflow-hidden shrink-0">
              <motion.img
                src="/icons/calendar.svg"
                alt=""
                className="size-4 absolute"
                variants={{
                  rest: { y: 0, filter: "blur(0px)", opacity: 1 },
                  hover: { y: -20, filter: "blur(6px)", opacity: 0 },
                }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="size-4 absolute"
                variants={{
                  rest: { y: 20, filter: "blur(6px)", opacity: 0 },
                  hover: { y: 0, filter: "blur(0px)", opacity: 1 },
                }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              >
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#14141f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </div>
            <span className="text-[#14141f] text-sm font-medium tracking-[-0.32px] leading-5 whitespace-nowrap">
              Book a Intro
            </span>
          </motion.a>
        </div>
      </motion.nav>

      {/* Main column */}
      <div className="flex-1 flex flex-col items-center">
        {/* Hero */}
        <main className="flex flex-col items-center justify-center flex-1 w-full gap-3 px-4">
          {/* Avatar row + shared tooltip */}
          <div className="relative inline-flex flex-col items-center">
            <div className="flex items-center">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, filter: "blur(8px)", opacity: 0 }}
                  animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 0.6, delay: 3.5 + i * 0.08, ease: [0.16, 1, 1, 1] }}
                  className={`relative${i < teamMembers.length - 1 ? " -mr-[15px]" : ""}`}
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 1, 1] }}
                    className="relative cursor-pointer"
                    onHoverStart={() => handleHoverStart(i)}
                    onHoverEnd={() => handleHoverEnd()}
                  >
                    <div
                      className="relative overflow-hidden rounded-full shadow-[1px_1px_2px_0px_rgba(0,0,0,0.06)] size-12"
                      style={{ backgroundColor: member.bg }}
                    >
                      <div className={member.photo.wrapClass} style={member.photo.wrapStyle}>
                        <img src={member.photo.src} alt={member.name} className={member.photo.imgClass} />
                      </div>
                      <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0px_0px_0px_0.5px_rgba(0,0,0,0.04),inset_0px_0px_0px_2px_white]" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Single shared tooltip below */}
            <AnimatePresence>
              {hoveredAvatar !== null && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute top-full mt-3 z-50 whitespace-nowrap"
                >
                  <div className="bg-[#1f1f1f] flex items-center px-3 py-2 rounded-full overflow-hidden">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        key={hoveredAvatar}
                        custom={prevAvatarRef.current !== null ? (hoveredAvatar > prevAvatarRef.current ? 1 : -1) : 1}
                        variants={{
                          enter: (dir: number) => ({ x: dir * 16, opacity: 0 }),
                          center: { x: 0, opacity: 1 },
                          exit: (dir: number) => ({ x: dir * -16, opacity: 0 }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.22, ease: [0.19, 1, 0.22, 1] }}
                        className="flex items-center gap-[6px]"
                      >
                        <span className="text-white text-[14px] font-normal leading-4">
                          {teamMembers[hoveredAvatar].name}
                        </span>
                        <span className="text-white/40 text-[14px] font-normal leading-4">
                          {teamMembers[hoveredAvatar].role}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Headline */}
          <div className="text-center max-w-[855px]">
            <p className="text-[24px] sm:text-[36px] font-normal leading-[30px] sm:leading-[40px] tracking-[-1.72px]">
              <DiaTextReveal
                text="One studio for the entire surface of your product"
                textColor="#000000"
                duration={1.8}
              />
            </p>
            <TextAnimate
              animation="blurIn"
              as="p"
              by="word"
              delay={2}
              duration={1.2}
              once
              className="text-[24px] sm:text-[36px] font-normal leading-[30px] sm:leading-[40px] tracking-[-1.72px] text-black/40"
            >
              Interface, system, story, and the screen it ships on. Built for scale, clarity, and growth.
            </TextAnimate>
          </div>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4.4, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-center p-1 pb-4"
        >
          <div className="flex flex-col items-center gap-1 text-[13px] tracking-[-0.72px] text-center">
            <HyperText animateOnHover={false} className="text-black leading-normal text-[13px] tracking-[-0.72px]">
              A fresh new site is on the way. We are heads-down on client work right now, so it lands in Q4 2026.
            </HyperText>
            <p className="text-black leading-normal bg-[#f0f0f0]">From the beautiful island of Sri Lanka 🇱🇰</p>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}
