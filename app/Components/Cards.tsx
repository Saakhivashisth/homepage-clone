{/* PAGE 3 */}
import Reveal from "./Reveal"

export default function Cards() {
  return (
    <Reveal>
      <section className="bg-[#e8e2d8] py-24">
        <div className="max-w-10xl mx-auto px-8 bg-[#edebe7]">

          <h2 className="text-5xl text-center text-[#24351f] font-bold mb-20">
            My Specialties
          </h2>

          <div className="grid md:grid-cols-3 gap-10 bg-[#ede1dd]">

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
                className="border border-[#24351f] p-10 flex flex-col justify-between min-h-[650px]"
              >
                <div>
                  <h3 className="text-3xl text-[#24351f] font-semibold mb-6">
                    {item.title}
                  </h3>

                  <p className="text-[#24351f]/80 leading-relaxed text-xl font-semibold">
                    {item.description}
                  </p>
                </div>

                <div className="mt-12 flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-64 h-64 object-cover rounded-full"
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
