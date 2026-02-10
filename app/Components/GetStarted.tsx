import Reveal from "./Reveal"
 export default function GetStarted() {
  return (
    <Reveal>
    <section className="bg-[#8a8b4a] text-white py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-6xl font-bold mb-10">
          Get started today.
        </h2>

        <p className="text-2xl leading-relaxed mb-4 font-semibold ">
          Ready to take the first step towards a happier, healthier you?
        </p>

        <p className="text-lg md:text-2xl leading-relaxed mb-12 font-semibold">
          Contact me to book your first session. I look forward to
          starting this therapeutic journey with you.
        </p>

        <button className="border border-white px-10 py-4 text-lg tracking-wide transition-all duration-300 hover:bg-white hover:text-[#8a8b4a] font-bold">
          GET IN TOUCH →
        </button>

      </div>
    </section>
    </Reveal>
  )
}
