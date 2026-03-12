import React from 'react';
import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-teal-100 rounded-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-gray-100 rounded-3xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600721187850-c944924fd48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGRlbnRpc3QlMjBzbWlsaW5nfGVufDF8fHx8MTc3MDYzNTE4MXww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Dentista sonriendo" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden sm:block">
              <p className="text-4xl font-bold text-teal-600 mb-1">15+</p>
              <p className="text-gray-600 font-medium">Años de experiencia creando sonrisas.</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm">Sobre Nosotros</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Comprometidos con tu Salud y Bienestar</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              En ConsultoriOdonto, creemos que una visita al dentista debe ser una experiencia positiva. Nuestro equipo de profesionales altamente calificados se dedica a brindar atención personalizada en un ambiente relajado.
            </p>
            <p className="text-gray-600 mb-8">
              Utilizamos las últimas técnicas y tecnologías para asegurar tratamientos indoloros y resultados excepcionales. Tu sonrisa es nuestra mejor carta de presentación.
            </p>

            <div className="space-y-4">
              {[
                "Equipo profesional certificado",
                "Tecnología de última generación",
                "Atención de urgencias 24/7",
                "Planes de financiamiento flexibles"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-teal-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#contact" className="text-teal-600 font-bold hover:text-teal-700 transition-colors inline-flex items-center gap-2 border-b-2 border-teal-600 pb-1">
                Conoce a nuestro equipo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
