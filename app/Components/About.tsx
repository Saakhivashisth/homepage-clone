import Reveal from "./Reveal"

export default function About() {
  return (
    <Reveal>
      <section className="min-h-screen bg-[#e9e3db] flex items-center px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-medium text-[#2f3e1f] mb-6 sm:mb-8 leading-tight">
              Hi, I’m Lilac.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#2f3e1f]/80 leading-relaxed mb-8 sm:mb-10 font-semibold">
              I'm committed to providing a safe and supportive environment where we can explore your thoughts,
              feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges
              life throws your way.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="px-6 sm:px-8 py-3 sm:py-4 border border-[#2f3e1f] text-[#2f3e1f] transition-all duration-300 hover:bg-[#2f3e1f] hover:text-white text-lg sm:text-xl font-semibold">
                LET'S CHAT →
              </button>
            </div>

          </div>

          {/* RIGHT IMAGES */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">

            <div className="relative">

              {/* BIG ARCH IMAGE */}
              <div className="w-[260px] h-[360px] sm:w-[320px] sm:h-[440px] md:w-[360px] md:h-[500px] lg:w-[420px] lg:h-[560px] overflow-hidden rounded-t-[300px]">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=1000w"
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* SMALL CIRCLE IMAGE */}
              <div className="absolute bottom-[-20px] right-[-10px] sm:bottom-[-30px] sm:right-[-20px] md:bottom-[-35px] md:right-[-25px] lg:bottom-[-40px] lg:right-[-40px] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-xl border-8 border-[#e9e3db]">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=1000w"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </section>
    </Reveal>
  )
}
