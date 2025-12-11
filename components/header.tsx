"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            C
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-amber-900">Cassamee</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#keunggulan" className="text-amber-900 hover:text-orange-600 transition-colors">
            Keunggulan
          </a>
          <a href="#produk" className="text-amber-900 hover:text-orange-600 transition-colors">
            Produk
          </a>
          <a href="#pesan" className="text-amber-900 hover:text-orange-600 transition-colors">
            Pesan
          </a>
          <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
            Hubungi Kami
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-amber-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-amber-100 p-4 space-y-3">
          <a href="#keunggulan" className="block text-amber-900 hover:text-orange-600">
            Keunggulan
          </a>
          <a href="#produk" className="block text-amber-900 hover:text-orange-600">
            Produk
          </a>
          <a href="#pesan" className="block text-amber-900 hover:text-orange-600">
            Pesan
          </a>
          <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white">Hubungi Kami</Button>
        </nav>
      )}
    </header>
  )
}
