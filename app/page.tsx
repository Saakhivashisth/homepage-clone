"use client"

import Navbar from "./Components/Navbar"
import FAQSection from "./Components/FAQSection"
import ProfessionalBackground from "./Components/ProfessionalBackground"
import GetStarted from "./Components/GetStarted"
import Footer from "./Components/Footer"
import HeroSection from "./Components/HeroSection"
import Specialities from "./Components/Specialities"
import Cards from "./Components/Cards"
import Points from "./Components/Points"
import About from "./Components/About"

export default function Page() {
  return (
    <>
      

      <main className="min-h-screen pt-4  bg-[#f6f1e8]">
        <HeroSection />
        <Specialities />
        <Cards />
        <Points />
        <About />
        <FAQSection />
        <ProfessionalBackground />
        <GetStarted />
        <Footer />
      </main>
    </>
  )
}
