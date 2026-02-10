{/* PAGE 4 */}
import { motion, AnimatePresence } from "framer-motion"
export default function Points() {
    return(
      <section className="min-h-screen flex flex-col lg:flex-row">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-screen"
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=1000w"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-[#dcd8e6] flex items-center px-10 md:px-20 py-20"
        >
          <div className="max-w-xl">

            <h2 className="text-4xl md:text-5xl font-medium text-[#24351f] mb-8">
              You don’t have to do this all <span className="italic">alone.</span>
            </h2>

            <p className="text-[#24351f]/80 mb-6 text-2xl font-semibold">
              If you are facing any of these, there’s hope:
            </p>

            <ul className="space-y-4 text-[#24351f]/90 text-2xl mb-10 list-disc pl-6 font-normal ">
              <li>Persistent feelings of sadness</li>
              <li>Trouble focusing or making decisions</li>
              <li>Difficulty maintaining relationships</li>
              <li>Feeling constantly exhausted</li>
              <li>A pervasive sense of overwhelm</li>
            </ul>

            <p className="text-[#24351f]/80 text-2xl font-semibold">
              With empathy and guidance, we'll work together to navigate life.
            </p>
            <button className="mt-10 px-34 py-4 border border-[#24351f] text-[#24351f] font-bold text-xl transition-all duration-300 hover:bg-[#24351f] hover:text-white">
              Work with me →
            </button>

          </div>
        </motion.div>

      </section>
)
}