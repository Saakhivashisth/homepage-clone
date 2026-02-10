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
    <Reveal>
      <div className="border-t border-[#24351f]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-8 text-left"
        >
          <div className="flex items-center gap-6">
            <span className="text-3xl text-[#24351f]">
              {open ? "−" : "+"}
            </span>
            <h3 className="text-2xl md:text-3xl text-[#24351f] font-medium">
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
              className="overflow-hidden pb-6 pl-14 text-[#24351f]/80 text-lg"
            >
              {answer}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export default function FAQSection() {
  return (
    <Reveal>
      <section className="min-h-screen bg-[#faf4f4] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <div className="w-[300px] h-[380px] sm:w-[320px] sm:h-[460px] lg:w-[380px] lg:h-[550px] overflow-hidden rounded-t-[300px]">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=1000w"
                  alt="FAQ"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-[#24351f] font-medium mb-12">
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
    </Reveal>
  )
}
