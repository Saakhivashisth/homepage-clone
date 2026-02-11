import Reveal from "./Reveal"

export default function GetStarted() {
  return (
    <Reveal>
      <section className="bg-[#8a8b4a] text-white py-20 sm:py-24 lg:py-32 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight">
            Get started today.
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-4 font-semibold">
            Ready to take the first step toward a happier, healthier you?
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 sm:mb-12 font-medium max-w-2xl mx-auto">
            Contact me to book your first session. I look forward to
            beginning this therapeutic journey with you.
          </p>

          <button className="border border-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg tracking-wide transition-all duration-300 hover:bg-white hover:text-[#8a8b4a] font-bold rounded-sm">
            GET IN TOUCH →
          </button>

        </div>
      </section>
    </Reveal>
  )
}
