import React from 'react';
import { ArrowRight, CalendarCheck } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBicmlnaHR8ZW58MXx8fHwxNzcwNjgxNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Clínica Dental Moderna" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[600px] flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Sonreí con Confianza, <br/>
            <span className="text-teal-300">Vuelve a Brillar</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
            Cuidado dental experto en un ambiente cómodo y moderno. Tu salud bucal es nuestra prioridad. Tecnología de punta y trato humano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <CalendarCheck size={20} />
              Reserva tu turno
            </a>
            <a href="#services" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2">
              Nuestros Servicios
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
