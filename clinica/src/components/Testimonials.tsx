import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Laura Martínez",
    role: "Paciente de Ortodoncia",
    image: "https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwc21pbGluZyUyMHdoaXRlJTIwdGVldGh8ZW58MXx8fHwxNzcwNjgxNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "¡Increíble experiencia! El trato fue super amable y los resultados de mi tratamiento de ortodoncia superaron mis expectativas. Ahora no paro de sonreír."
  },
  {
    name: "Carlos Rodríguez",
    role: "Limpieza y Blanqueamiento",
    image: "https://images.unsplash.com/photo-1667851468681-d54c6e209b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1hbiUyMHNtaWxpbmclMjB3aGl0ZSUyMHRlZXRofGVufDF8fHx8MTc3MDY4MTU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Llevaba años sin ir al dentista por miedo, pero aquí me hicieron sentir muy cómodo. El blanqueamiento quedó espectacular. Totalmente recomendado."
  },
  {
    name: "Ana García",
    role: "Implante Dental",
    image: "https://images.unsplash.com/photo-1758686254593-7c4cd55b2621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA2MDk5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "La atención al detalle es impresionante. Me explicaron todo el procedimiento paso a paso y el resultado final es tan natural que nadie nota la diferencia."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-300 font-semibold tracking-wider uppercase text-sm">Testimonios</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Lo que dicen nuestros pacientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-teal-800/50 p-8 rounded-2xl border border-teal-700 hover:bg-teal-800 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-200 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-500"
                />
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-teal-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
