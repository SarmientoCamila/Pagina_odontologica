import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="flex-shrink-0 flex items-center gap-2">
              <span className="text-3xl font-bold text-teal-600">ConsultoriOdonto</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Inicio</a>
            <a href="#services" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Servicios</a>
            <a href="#about" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Nosotros</a>
            <a href="#testimonials" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Testimonios</a>
            <a href="#contact" className="bg-teal-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-teal-700 transition-colors flex items-center gap-2">
              <Phone size={18} />
              <span>Agendar Turno</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Inicio</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Servicios</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Nosotros</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Testimonios</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-teal-600 font-semibold bg-teal-50 rounded-md">Agendar Cita</a>
          </div>
        </div>
      )}
    </nav>
  );
}
