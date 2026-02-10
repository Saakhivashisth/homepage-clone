"use client"

import { motion } from "framer-motion"
import Navbar from "./Navbar"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#f6f1e8] flex items-center px-8">

      {/* Animated Navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full z-50"
      >
        <Navbar />
      </motion.div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-20 pt-24">

        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <div className="w-[560px] h-[720px] overflow-hidden rounded-t-[460px]">
            <img
              src="https://images.unsplash.com/photo-1591090222528-94b00518861b"
              alt="Therapist portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <h1 className="text-5xl md:text-8xl leading-tight text-[#2f3e1f] mb-6 font-semibold">
            Live your life <br /> in full bloom
          </h1>

          <p className="text-[#2f3e1f]/80 text-xl mb-10 max-w-md font-medium">
            Therapy for Adults in Minneapolis, MN.
          </p>

          <button className="px-8 py-4 border border-[#2f3e1f] text-[#2f3e1f] text-2xl font-semibold transition hover:bg-[#2f3e1f] hover:text-white">
            Connect with me →
          </button>
        </div>

      </div>
    </section>
  )
}
