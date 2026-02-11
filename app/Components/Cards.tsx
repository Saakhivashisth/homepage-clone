/* PAGE 3 */
import Reveal from "./Reveal"

export default function Cards() {
  return (
    <Reveal>
      <section className="bg-[#e8e2d8] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 bg-[#edebe7]">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center text-[#24351f] font-bold mb-12 sm:mb-16 lg:mb-20">
            My Specialties
          </h2>

          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 bg-[#ede1dd] p-6 sm:p-8">

            {[
              {
                title: "Self-Esteem",
                description:
                  "Building a strong sense of self-worth is key to living a fulfilled life. Together, we’ll work on strengthening your confidence and helping you embrace your authentic self.",
                img: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=750w",
              },
              {
                title: "Relationships",
                description:
                  "Healthy relationships begin with clear communication and emotional awareness. I help individuals and couples build stronger, more meaningful connections.",
                img: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=500w",
              },
              {
                title: "Burnout",
                description:
                  "Feeling overwhelmed or emotionally drained? We’ll work together to restore balance, set boundaries, and rebuild your energy in a sustainable way.",
                img: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=500w",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[#24351f] p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[480px] sm:min-h-[520px] lg:min-h-[600px]"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl text-[#24351f] font-semibold mb-4 sm:mb-6">
                    {item.title}
                  </h3>

                  <p className="text-[#24351f]/80 leading-relaxed text-base sm:text-lg">
                    {item.description}
                  </p>
                </div>

                <div className="mt-10 sm:mt-12 flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 object-cover rounded-full"
                  />
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </Reveal>
  )
}
