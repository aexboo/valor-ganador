"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  label: string
}

export function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2000, label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-slate-400 leading-snug max-w-[180px] mx-auto">{label}</div>
    </div>
  )
}
