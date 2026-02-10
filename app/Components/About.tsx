
import Reveal from "./Reveal"
export default function About() {
  return (
    <Reveal>
    <section className="min-h-screen bg-[#e9e3db] flex items-center px-8 md:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h2 className="text-7xl md:text-6xl font-medium text-[#2f3e1f] mb-8">
            Hi, I’m Lilac.
          </h2>

          <p className="text-lg md:text-2xl text-[#2f3e1f]/80 leading-relaxed mb-10 font-semibold">
            I'm committed to providing a safe and supportive
            environment where we can explore your thoughts,
            feelings, and behaviors. With empathy and guidance,
            we'll work together to navigate the challenges life
            throws your way.
          </p>
         <div className=" items-center justify-center">
          <button className="px-8 py-4 border border-[#2f3e1f] text-[#2f3e1f] transition-all duration-300 hover:bg-[#2f3e1f] hover:text-white text-2xl font-semibold">
            LET'S CHAT →
          </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center lg:justify-end mt-16 lg:mt-0">

          <div className="relative">

            {/* BIG ARCH IMAGE */}
            <div className="w-[300px] h-[400px] sm:w-[360px] sm:h-[480px] lg:w-[420px] lg:h-[560px] overflow-hidden rounded-t-[300px]">
              <img
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=1000w"
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>

            {/* SMALL CIRCLE IMAGE */}
            <div className="absolute bottom-[-30px] right-[-20px] sm:bottom-[-35px] sm:right-[-30px] lg:bottom-[-40px] lg:right-[-40px] w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-xl border-8 border-[#e9e3db]">
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
