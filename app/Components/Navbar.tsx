"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-[#f6f1e8]  top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* MOBILE MENU BUTTON (LEFT SIDE MOBILE ONLY) */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-[#2f3e1f]"
          >
            {open ? <X size={32} /> : <Menu size={28} />}
          </button>
        </div>

        {/* LOGO */}
        <div className="text-[#2f3e1f] text-4xl lg:text-5xl font-semibold lg:order-first ml-auto lg:ml-0">
          Lilac Template
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-10 text-[#2f3e1f] text-xl font-semibold">
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
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6f1e8] gap-12 text-[#2f3e1f] text-5xl font-semibold text-center">
          <a href="#" onClick={() => setOpen(false)}>Blog</a>
          <a href="#" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}
