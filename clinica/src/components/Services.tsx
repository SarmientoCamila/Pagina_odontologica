import React from 'react';
import { Sparkles, Activity, ShieldCheck, Heart, Smile, Microscope } from 'lucide-react';

const services = [
  {
    icon: <Sparkles className="w-8 h-8 text-teal-600" />,
    title: "Blanqueamiento Dental",
    description: "Recupera el brillo natural de tus dientes con nuestros tratamientos seguros y efectivos."
  },
  {
    icon: <Activity className="w-8 h-8 text-teal-600" />,
    title: "Limpieza Profunda",
    description: "Prevención es salud. Eliminamos placa y sarro para mantener tus encías sanas."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
    title: "Implantes Dentales",
    description: "Soluciones duraderas para reemplazar dientes perdidos y restaurar tu función masticatoria."
  },
  {
    icon: <Smile className="w-8 h-8 text-teal-600" />,
    title: "Ortodoncia Invisible",
    description: "Alinea tu sonrisa de forma discreta y cómoda con la última tecnología."
  },
  {
    icon: <Heart className="w-8 h-8 text-teal-600" />,
    title: "Odontopediatría",
    description: "Cuidado especial y delicado para los más pequeños de la casa."
  },
  {
    icon: <Microscope className="w-8 h-8 text-teal-600" />,
    title: "Endodoncia",
    description: "Tratamientos de conducto para salvar tus dientes y eliminar el dolor."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm">Tratamientos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una gama completa de tratamientos dentales para toda la familia, utilizando tecnología avanzada y materiales de la más alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
