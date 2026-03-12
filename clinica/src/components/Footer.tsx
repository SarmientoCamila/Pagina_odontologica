import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-teal-500 block mb-4">ConsultoriOdonto</span>
            <p className="text-gray-400 max-w-sm mb-6">
              Dedicados a crear sonrisas saludables y felices. Tu clínica dental de confianza con los mejores profesionales y tecnología.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Servicios</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">Nosotros</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Aviso Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ConsultoriOdonto Clínica Dental. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
