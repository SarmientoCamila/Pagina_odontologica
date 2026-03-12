import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Agenda tu turno</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos listos para atenderte. Déjanos tus datos y nos pondremos en contacto lo antes posible para confirmar tu turno.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="+54 11 1234 5678" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="juan@ejemplo.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Servicio de Interés</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-gray-600">
                  <option>Selecciona un servicio</option>
                  <option>Consulta General</option>
                  <option>Limpieza Dental</option>
                  <option>Blanqueamiento</option>
                  <option>Ortodoncia</option>
                  <option>Implantes</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje (Opcional)</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="¿Tienes alguna duda específica?"></textarea>
              </div>

              <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl">
                Enviar Solicitud
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="bg-teal-900 text-white p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Dirección</p>
                    <p className="text-teal-100">Calle, Ciudad, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Llamanos</p>
                    <p className="text-teal-100">+54 11 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-teal-100">contacto@odontologico.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Horarios</p>
                    <p className="text-teal-100">Lun - Vie: 9:00 AM - 7:00 PM</p>
                    <p className="text-teal-100">Sáb: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mock Map */}
            <div className="bg-gray-200 rounded-2xl h-64 w-full flex items-center justify-center relative overflow-hidden">
               {/* This is a placeholder for a real map embed */}
               <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-74.006,40.7128,13,0/800x600?access_token=YOUR_TOKEN')] bg-cover bg-center opacity-50 grayscale"></div>
               <div className="z-10 bg-white p-3 rounded-full shadow-lg">
                  <MapPin className="text-red-500 w-8 h-8" />
               </div>
               <p className="absolute bottom-4 right-4 bg-white/80 px-2 py-1 text-xs rounded">Encuentranos en:</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
