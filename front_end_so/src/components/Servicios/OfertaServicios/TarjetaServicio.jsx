import React, { memo } from 'react';

const TarjetaServicio = ({ title, description, icon, image, alternateColor }) => {
  return (
    <div className="group relative shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Imagen de fondo con overlay */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Overlay semi-transparente */}
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>
      )}

      {/* Contenido Principal */}
      <div className="relative p-6 flex flex-col items-center text-center h-full z-10">
        {/* Icono */}
        <div
          className={`flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
            alternateColor ? 'bg-purple-600 text-white' : 'bg-gray-200 text-purple-600'
          } group-hover:scale-110 transition-transform duration-300`}
        >
          <span className="text-3xl">{icon}</span>
        </div>

        {/* Título */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-white text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default memo(TarjetaServicio);
