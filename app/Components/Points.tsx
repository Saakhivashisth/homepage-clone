"use client"

import { motion } from "framer-motion"

export default function Points() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen">

      {/* IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-auto"
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=1000w"
          alt="Supportive therapy environment"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* CONTENT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 bg-[#dcd8e6] flex items-center px-6 sm:px-10 md:px-16 lg:px-20 py-16 lg:py-20"
      >
        <div className="max-w-xl mx-auto lg:mx-0">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#24351f] mb-6 leading-tight">
            You don’t have to do this all <span className="italic">alone.</span>
          </h2>

          <p className="text-[#24351f]/80 mb-6 text-base sm:text-lg md:text-xl font-semibold">
            If you are facing any of these, there’s hope:
          </p>

          <ul className="space-y-3 text-[#24351f]/90 text-base sm:text-lg md:text-xl mb-8 list-disc pl-6">
            <li>Persistent feelings of sadness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted</li>
            <li>A pervasive sense of overwhelm</li>
          </ul>

          <p className="text-[#24351f]/80 text-base sm:text-lg md:text-xl font-semibold">
            With empathy and guidance, we'll work together to navigate life.
          </p>

          <button className="mt-8 px-8 sm:px-10 py-3 sm:py-4 border border-[#24351f] text-[#24351f] font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-[#24351f] hover:text-white">
            Work with me →
          </button>

        </div>
      </motion.div>

    </section>
  )
}
