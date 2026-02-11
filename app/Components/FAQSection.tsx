"use client"

import Reveal from "./Reveal"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function FAQItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-t border-[#24351f]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 sm:py-8 text-left"
      >
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-2xl sm:text-3xl text-[#24351f]">
            {open ? "−" : "+"}
          </span>
          <h3 className="text-lg sm:text-2xl lg:text-3xl text-[#24351f] font-medium">
            {question}
          </h3>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden pb-6 pl-10 sm:pl-14 text-[#24351f]/80 text-base sm:text-lg"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section className="bg-[#faf4f4] py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="grid gap-14 lg:grid-cols-2 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start order-1 lg:order-none"
          >
            <div className="w-[260px] h-[340px] sm:w-[320px] sm:h-[440px] lg:w-[380px] lg:h-[520px] overflow-hidden rounded-t-[300px]">
              <img
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=1000w"
                alt="FAQ"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#24351f] font-medium mb-8 sm:mb-12">
              FAQs
            </h2>

            <div className="border-b border-[#24351f]">
              <FAQItem
                question="Do you take insurance?"
                answer="Yes, I accept select insurance providers. Contact me to verify your coverage."
              />

              <FAQItem
                question="What are your rates?"
                answer="Session rates vary depending on length and format. Please reach out for detailed pricing."
              />

              <FAQItem
                question="Do you have any openings?"
                answer="Availability changes weekly. Feel free to contact me for the latest openings."
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
