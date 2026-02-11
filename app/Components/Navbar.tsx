"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-[#f6f1e8] relative z-50">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-5 flex items-center justify-between">

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="text-[#2f3e1f]"
          >
            {open ? <X size={30} /> : <Menu size={28} />}
          </button>
        </div>

        {/* LOGO */}
        <div className="
          absolute left-1/2 -translate-x-1/2
          lg:static lg:translate-x-0
          text-[#2f3e1f]
          text-2xl sm:text-3xl lg:text-4xl xl:text-5xl
          font-semibold
        ">
          Lilac Template
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-8 xl:gap-12 text-[#2f3e1f] text-lg xl:text-xl font-semibold">
          <a href="#" className="hover:opacity-70 transition">
            Blog
          </a>
          <a href="#" className="hover:opacity-70 transition">
            Contact
          </a>
        </div>

      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="lg:hidden fixed inset-0 bg-[#f6f1e8] flex flex-col items-center justify-center gap-10 text-[#2f3e1f] text-3xl sm:text-4xl font-semibold text-center">
          
          <a href="#" onClick={() => setOpen(false)}>
            Blog
          </a>

          <a href="#" onClick={() => setOpen(false)}>
            Contact
          </a>

        </div>
      )}
    </nav>
  )
}
