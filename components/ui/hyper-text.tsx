"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const rand = (max: number) => Math.floor(Math.random() * max)

interface HyperTextProps {
  children: string
  className?: string
  duration?: number
  delay?: number
  startOnView?: boolean
  animateOnHover?: boolean
}

export function HyperText({
  children,
  className,
  duration = 800,
  delay = 0,
  startOnView = false,
  animateOnHover = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(children.split(""))
  const [isAnimating, setIsAnimating] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)
  const iterationCount = useRef(0)

  const trigger = () => {
    if (animateOnHover && !isAnimating) {
      iterationCount.current = 0
      setIsAnimating(true)
    }
  }

  useEffect(() => {
    if (startOnView) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsAnimating(true), delay)
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      if (elementRef.current) observer.observe(elementRef.current)
      return () => observer.disconnect()
    } else {
      const t = setTimeout(() => setIsAnimating(true), delay)
      return () => clearTimeout(t)
    }
  }, [delay, startOnView])

  useEffect(() => {
    if (!isAnimating) return
    let frameId: number
    const start = performance.now()
    const max = children.length

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      iterationCount.current = progress * max
      setDisplayText(
        children.split("").map((char, i) =>
          char === " " ? " " : i <= iterationCount.current ? children[i] : CHARS[rand(CHARS.length)]
        )
      )
      if (progress < 1) frameId = requestAnimationFrame(animate)
      else setIsAnimating(false)
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [isAnimating, children, duration])

  return (
    <span ref={elementRef} className={className} onMouseEnter={trigger}>
      <AnimatePresence>
        {displayText.map((char, i) => (
          <motion.span key={i} className={char === " " ? "inline-block w-[0.3em]" : ""}>
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  )
}
