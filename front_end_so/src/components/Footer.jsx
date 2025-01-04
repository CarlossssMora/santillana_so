import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    navigate('/sobre_nosotros', { state: { targetSection: sectionId } });
  };

  return (
    <footer className="bg-purple-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-8 md:grid-cols-3">
        
        {/* Información de la Empresa */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-4">
            <img
              src="/img/santillanasologo_white.png"
              alt="Logo Santillana SO"
              className="h-12"
            />
            <h3 className="text-xl font-bold">
              Santillana Strategic Operation
            </h3>
          </div>
          <p className="mt-4 text-lg font-semibold">
            Síguenos en nuestras redes sociales
          </p>
          <SocialIcons />
        </div>

        {/* Menú Sobre Nosotros */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Sobre Nosotros</h3>
          <nav className="space-y-2">
            <button
              onClick={() => handleScrollToSection('mision')}
              className="block hover:underline"
            >
              Misión de la Empresa
            </button>
            <button
              onClick={() => handleScrollToSection('equipo')}
              className="block hover:underline"
            >
              Nuestro Equipo
            </button>
            <button
              onClick={() => handleScrollToSection('enfoque')}
              className="block hover:underline"
            >
              Nuestro Enfoque
            </button>
          </nav>
        </div>

        {/* Contacto */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">
            Mantente en contacto con nosotros
          </h3>
          <ul className="space-y-4">
            <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <img src="/img/icons-phone.png" alt="Teléfono" className="h-6" />
              <span>+52 222 546 2429</span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <img src="/img/icons-casa.png" alt="Email" className="h-6" />
              <span>contact.santillanaso@gmail.com</span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <img
                src="/img/icons-nuevo-post.png"
                alt="Dirección"
                className="h-6"
              />
              <span>
                Calle Miguel Hidalgo #65, Colonia Las Margaritas, Puebla de
                Zaragoza
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-500 text-center pt-4">
        <p>© 2024 Santillana SO. Todos los derechos reservados.</p>
        <p className="mt-2">Powered by Santillana SO</p>
      </div>
    </footer>
  );
};

export default Footer;