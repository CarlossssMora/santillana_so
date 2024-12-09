import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-purple-800 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              src="/img/santillanasologo_removebg.png"
              alt="Logo de Santillana SO"
              className="h-12 sm:h-16"
            />
          </Link>
        </div>

        {/* Botón Hamburguesa y Botón Iniciar Sesión en Móviles */}
        <div className="flex items-center gap-4 sm:hidden">
          {/* Botón de Iniciar Sesión (Móviles) */}
          <Link to="/sesion">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition flex items-center">
              Iniciar Sesión
              <span className="w-4 h-4 inline-block border-t-2 border-r-2 border-white rotate-45 transform ml-2"></span>
            </button>
          </Link>
          {/* Menú Hamburguesa */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navegación */}
        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } sm:flex sm:items-center sm:gap-8 flex-col sm:flex-row absolute sm:static top-16 left-0 w-full sm:w-auto bg-purple-800 sm:bg-transparent`}
        >
          <Link
            to="/"
            className="block text-gray-200 hover:text-white transition px-4 py-2 text-center"
          >
            Inicio
          </Link>
          <Link
            to="/services"
            className="block text-gray-200 hover:text-white transition px-4 py-2 text-center"
          >
            Servicios
          </Link>
          <Link
            to="/sobre_nosotros"
            className="block text-gray-200 hover:text-white transition px-4 py-2 text-center"
          >
            Sobre Nosotros
          </Link>
          <Link
            to="/contact"
            className="block text-gray-200 hover:text-white transition px-4 py-2 text-center"
          >
            Contacto
          </Link>
          {/* Botón de Iniciar Sesión (Pantallas Grandes) */}
          <div className="hidden sm:block">
            <Link to="/inicio_sesion">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition flex items-center">
                Iniciar Sesión
                <span className="w-4 h-4 inline-block border-t-2 border-r-2 border-white rotate-45 transform ml-2"></span>
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
