"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Reveal from "./Reveal"

function BackgroundItem({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-t border-[#24351f]/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 sm:py-8 text-left"
      >
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#24351f] font-medium">
          {title}
        </h3>

        <span className="text-2xl sm:text-3xl text-[#24351f]">
          {open ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden pb-6 sm:pb-8 text-[#24351f]/80 text-base sm:text-lg leading-relaxed pr-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ProfessionalBackground() {
  return (
    <Reveal>
      <section className="bg-[#e9e3db] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-16">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#24351f] font-medium text-center mb-10 sm:mb-14 lg:mb-16">
            My Professional Background
          </h2>

          <div className="border-b border-[#24351f]/60">

            <BackgroundItem title="Education">
              <p>
                Master’s Degree in Clinical Psychology from XYZ University.
                Specialized in trauma-informed therapy and CBT.
              </p>
            </BackgroundItem>

            <BackgroundItem title="Licensure">
              <p>
                Licensed Professional Counselor (LPC), State of Minnesota.
                License #000000.
              </p>
            </BackgroundItem>

            <BackgroundItem title="Certifications">
              <p>
                Certified in EMDR Therapy, Mindfulness-Based Stress Reduction,
                and Advanced Couples Therapy.
              </p>
            </BackgroundItem>

          </div>

        </div>
      </section>
    </Reveal>
  )
}
