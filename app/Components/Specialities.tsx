 {/* PAGE 2 */}
 import Reveal from "./Reveal"
 export default function Specialities() {
  return (
    <Reveal>
      <section className="min-h-screen flex flex-col lg:flex-row">

        <div className="w-full lg:w-1/2 bg-[#e7e1d9] flex flex-col justify-between px-10 md:px-20 py-20">

          <div className="max-w">
            <h2 className="text-4xl md:text-7xl  text-[#2d4a2d] mb-8 font-bold">
              Live a fulfilling life.
            </h2>

            <p className="text-[#2d4a2d]/80 text-4xl leading-relaxed mb-6 font-semibold">
              Life can be challenging—especially when you're trying
              to balance your personal and professional life.
            </p>

            <p className="text-[#2d4a2d]/80  leading-relaxed text-4xl font-semibold">
              It's easy to feel like you're alone in facing these
              challenges, but I want you to know that I'm here to help.
            </p>
          </div>

          <div className="pt-10 border-t border-[#2d4a2d] w-full flex justify-center">
            <button className="text-[#2d4a2d] tracking-wide hover:tracking-widest transition align-middle flex-justify-center items-center border border-[#2d4a2d] text-lg font-medium hover:bg-[#2d4a2d] hover:text-white items-center px-10 py-4 ">
              GET IN TOUCH →
            </button>
          </div>

        </div>

        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-screen">
          <img
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=1000w"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

      </section>
    </Reveal>
      )
 }
