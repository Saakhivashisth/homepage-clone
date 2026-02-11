import Reveal from "./Reveal"

export default function Footer() {
  return (
    <Reveal>
      <footer className="bg-[#e9e3db] text-[#24351f]">

        {/* TOP SECTION */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
          <div className="grid gap-12 sm:gap-16 md:grid-cols-2 lg:grid-cols-3">

            {/* LEFT COLUMN */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
                Lilac Template
              </h2>

              <div className="space-y-3 text-base sm:text-lg font-medium">
                <p>
                  123 Example Road <br />
                  Minneapolis, MN
                </p>

                <p className="underline underline-offset-4 cursor-pointer hover:opacity-70 transition">
                  email@example.com
                </p>

                <p className="underline underline-offset-4 cursor-pointer hover:opacity-70 transition">
                  (555) 555-5555
                </p>
              </div>
            </div>

            {/* HOURS COLUMN */}
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
                Hours
              </h3>

              <p className="text-base sm:text-lg leading-relaxed font-medium">
                Monday – Friday <br />
                10am – 6pm
              </p>
            </div>

            {/* FIND COLUMN */}
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
                Find
              </h3>

              <ul className="space-y-3 text-base sm:text-lg font-medium">
                <li className="underline underline-offset-4 cursor-pointer hover:opacity-70 transition">
                  Home
                </li>
                <li className="underline underline-offset-4 cursor-pointer hover:opacity-70 transition">
                  Contact
                </li>
                <li className="underline underline-offset-4 cursor-pointer hover:opacity-70 transition">
                  Blog
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="bg-[#ded7cf] py-8 sm:py-10 px-6 text-center text-sm sm:text-base lg:text-lg space-y-4 sm:space-y-6 font-semibold">

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 underline underline-offset-4">
            <span className="cursor-pointer hover:opacity-70 transition">
              Privacy & Cookies Policy
            </span>
            <span className="cursor-pointer hover:opacity-70 transition">
              Good Faith Estimate
            </span>
            <span className="cursor-pointer hover:opacity-70 transition">
              Website Terms & Conditions
            </span>
            <span className="cursor-pointer hover:opacity-70 transition">
              Disclaimer
            </span>
          </div>

          <p>
            Website Template Credits:{" "}
            <span className="underline underline-offset-4 cursor-pointer hover:opacity-70 transition">
              Go Bloom Creative
            </span>
          </p>

          <p>
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>

        </div>

      </footer>
    </Reveal>
  )
}
