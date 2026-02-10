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
    <div className="border-t border-[#24351f]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-8 text-left"
      >
        <h3 className="text-2xl md:text-3xl text-[#24351f] font-medium">
          {title}
        </h3>

        <span className="text-3xl text-[#24351f]">
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
            className="overflow-hidden pb-8 text-[#24351f]/80 text-lg"
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
    <section className="bg-[#e9e3db] py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl md:text-5xl text-[#24351f] font-medium text-center mb-16">
          My Professional Background
        </h2>
    
        <div className="border-b border-[#24351f]">

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
