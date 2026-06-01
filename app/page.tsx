"use client"

import { motion } from "motion/react"
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
    bg: "#def1b1",
    photo: {
      src: "/avatars/minindu.png",
      wrapClass: "absolute overflow-hidden h-[62.28px] right-[2.5px] top-[1.72px] w-[59.724px]",
      imgClass: "absolute h-[357.07%] left-[-49.46%] max-w-none top-[-9.95%] w-[289.74%]",
    },
  },
]

export default function Home() {
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
          <div className="bg-[rgba(255,255,255,0.18)] flex items-center justify-center rounded-full size-8 shrink-0">
            <img src="/icons/figma.svg" alt="Figma" className="size-4" />
          </div>
          <a
            href="https://cal.com/byondx-studio/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex items-center gap-1 px-[10px] py-[6px] rounded-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(0,0,0,0.08)]"
          >
            <img src="/icons/calendar.svg" alt="" className="size-5" />
            <span className="text-[#14141f] text-sm font-medium tracking-[-0.32px] leading-5 whitespace-nowrap">
              Book a Intro
            </span>
          </a>
        </div>
      </motion.nav>

      {/* Main column */}
      <div className="flex-1 flex flex-col items-center">
        {/* Hero */}
        <main className="flex flex-col items-center justify-center flex-1 w-full gap-8 px-4">
          {/* Avatar row */}
          <div className="flex items-center">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, filter: "blur(8px)", opacity: 0 }}
                animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.6, delay: 3.5 + i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                className={`relative group${i < teamMembers.length - 1 ? " -mr-[15px]" : ""} hover:z-10`}
              >
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 whitespace-nowrap z-20">
                  <div className="bg-white flex items-center gap-[6px] px-3 py-1 rounded-full shadow-[0px_2px_8px_rgba(0,0,0,0.12)]">
                    <span className="text-black text-[14px] font-normal leading-4">{member.name}</span>
                    <span className="text-[#8f8f8f] text-[14px] font-normal leading-4">{member.role}</span>
                    <div className="bg-[#d9d9d9] h-3 w-px rounded-sm shrink-0" />
                    <a href={member.linkedin} aria-label="LinkedIn">
                      <img src="/icons/linkedin.svg" alt="" className="size-5" />
                    </a>
                    <a href={member.x} aria-label="X">
                      <img src="/icons/x.svg" alt="" className="size-5" />
                    </a>
                  </div>
                </div>

                {/* Avatar */}
                <div
                  className="relative overflow-hidden rounded-full shadow-[1px_1px_2px_0px_rgba(0,0,0,0.06)] size-16 transition-transform duration-200 group-hover:-translate-y-[1.5px]"
                  style={{ backgroundColor: member.bg }}
                >
                  <div className={member.photo.wrapClass} style={member.photo.wrapStyle}>
                    <img src={member.photo.src} alt={member.name} className={member.photo.imgClass} />
                  </div>
                  <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0px_0px_0px_0.5px_rgba(0,0,0,0.04),inset_0px_0px_0px_2px_white]" />
                </div>
              </motion.div>
            ))}
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
        <footer className="flex items-center justify-center p-1 pb-4">
          <div className="flex flex-col items-center gap-2 text-[13px] tracking-[-0.72px] text-center">
            <HyperText className="text-black leading-normal text-[13px] tracking-[-0.72px]">
              A fresh new site is on the way. We are heads-down on client work right now, so it lands in Q4 2026.
            </HyperText>
            <p className="text-black/40 leading-normal">From the beautiful island of Sri Lanka 🇱🇰</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
