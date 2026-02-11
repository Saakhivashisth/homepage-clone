{/* PAGE 2 */}
import Reveal from "./Reveal"

export default function Specialities() {
  return (
    <Reveal>
      <section className="min-h-screen flex flex-col lg:flex-row">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 bg-[#e7e1d9] flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-16 sm:py-20">

          <div className="max-w-xl">

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#2d4a2d] mb-6 sm:mb-8 font-bold leading-tight">
              Live a fulfilling life.
            </h2>

            <p className="text-[#2d4a2d]/80 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-6 font-semibold">
              Life can be challenging—especially when you're trying
              to balance your personal and professional life.
            </p>

            <p className="text-[#2d4a2d]/80 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-semibold">
              It's easy to feel like you're alone in facing these
              challenges, but I want you to know that I'm here to help.
            </p>

          </div>

          {/* BUTTON */}
          <div className="pt-8 sm:pt-10 mt-10 border-t border-[#2d4a2d] w-full flex justify-center lg:justify-start">
            <button className="text-[#2d4a2d] tracking-wide hover:tracking-widest transition border border-[#2d4a2d] text-base sm:text-lg font-medium hover:bg-[#2d4a2d] hover:text-white px-8 sm:px-10 py-3 sm:py-4">
              GET IN TOUCH →
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 relative min-h-[350px] sm:min-h-[450px] lg:min-h-screen">
          <img
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=1000w"
            alt="Therapy support environment"
            className="w-full h-full object-cover"
          />
        </div>

      </section>
    </Reveal>
  )
}
