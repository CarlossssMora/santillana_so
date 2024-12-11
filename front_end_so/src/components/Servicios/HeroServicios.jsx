import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative w-full h-[90vh] text-white text-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/img/servicios_hero.jpg')", // Ruta de tu imagen de fondo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay semi-transparente */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido del Hero */}
      <div className="relative max-w-4xl px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Nuestros Servicios</h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          Soluciones integrales y personalizadas para tu negocio
        </p>
      </div>
    </section>
  );
};

export default Hero;
