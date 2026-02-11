"use client"

import { motion } from "framer-motion"
import Navbar from "./Navbar"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#f6f1e8] flex items-center px-6 sm:px-10 lg:px-20 overflow-hidden">

      {/* Animated Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full z-50"
      >
        <Navbar />
      </motion.div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 items-center gap-12 lg:gap-20 pt-28 lg:pt-32">

        {/* Image */}
        <div className="flex justify-center lg:justify-start order-1 lg:order-none">
          <div className="
            w-[260px] h-[340px]
            sm:w-[320px] sm:h-[420px]
            md:w-[420px] md:h-[540px]
            lg:w-[520px] lg:h-[680px]
            overflow-hidden rounded-t-[220px] sm:rounded-t-[260px] md:rounded-t-[320px] lg:rounded-t-[420px]
          ">
            <img
              src="https://images.unsplash.com/photo-1591090222528-94b00518861b"
              alt="Therapist portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-center lg:text-left order-2 lg:order-none">
          <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl
            leading-tight text-[#2f3e1f] mb-6 font-semibold
          ">
            Live your life <br className="hidden sm:block" /> in full bloom
          </h1>

          <p className="
            text-[#2f3e1f]/80 
            text-base sm:text-lg md:text-xl 
            mb-8 lg:mb-10 
            max-w-md mx-auto lg:mx-0 
            font-medium
          ">
            Therapy for Adults in Minneapolis, MN.
          </p>

          <button className="
            px-6 sm:px-8 py-3 sm:py-4
            border border-[#2f3e1f]
            text-[#2f3e1f]
            text-base sm:text-lg lg:text-xl
            font-semibold
            transition-all duration-300
            hover:bg-[#2f3e1f] hover:text-white
          ">
            Connect with me →
          </button>
        </div>

      </div>
    </section>
  )
}
