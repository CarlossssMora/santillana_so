import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-purple-800 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img
              src="/img/santillanasologo_removebg.png"
              alt="Logo de Santillana SO"
              className="h-20"
            />
          </a>
        </div>
        {/* Navegación */}
        <nav className="flex items-center gap-8">
          <a
            href="/"
            className="text-gray-200 hover:text-white transition relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-1/2 after:bottom-[-2px] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
          >
            Inicio
          </a>
          <a
            href="/services"
            className="text-gray-200 hover:text-white transition relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-1/2 after:bottom-[-2px] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
          >
            Servicios
          </a>
          <a
            href="/about_us"
            className="text-gray-200 hover:text-white transition relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-1/2 after:bottom-[-2px] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
          >
            Sobre Nosotros
          </a>
          <a
            href="/contact"
            className="text-gray-200 hover:text-white transition relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-1/2 after:bottom-[-2px] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0"
          >
            Contacto
          </a>
          {/* Botón de Inicio de Sesión */}
          <button className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition gap-2">
            Iniciar Sesión
            <span className="w-4 h-4 inline-block border-t-2 border-r-2 border-white rotate-45 transform"></span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
