import React from 'react';
import { FaIndustry, FaShoppingCart, FaHospital, FaFlask, FaAppleAlt, FaCarAlt, FaShippingFast } from 'react-icons/fa';

const IndustriasServimos = () => {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">
            Industrias a las que Servimos
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Brindamos nuestra experiencia especializada en una variedad de industrias, ofreciendo soluciones personalizadas que abordan desafíos específicos.
          </p>
        </div>

        {/* Tarjetas de Industrias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta 1: Manufactura */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex items-center space-x-4 hover:shadow-2xl transition duration-300">
            <FaIndustry className="text-purple-600 text-5xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Manufactura</h3>
              <p className="text-gray-600 text-sm">Optimización de tiempos y recursos en la cadena de producción.</p>
            </div>
          </div>

          {/* Tarjeta 2: Retail */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex items-center space-x-4 hover:shadow-2xl transition duration-300">
            <FaShoppingCart className="text-purple-600 text-5xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Retail</h3>
              <p className="text-gray-600 text-sm">Gestión de inventarios y optimización de procesos logísticos.</p>
            </div>
          </div>

          {/* Tarjeta 3: Salud */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex items-center space-x-4 hover:shadow-2xl transition duration-300">
            <FaHospital className="text-purple-600 text-5xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Salud</h3>
              <p className="text-gray-600 text-sm">Cumplimiento normativo y distribución eficiente de productos médicos.</p>
            </div>
          </div>

          {/* Tarjeta 4: Farmacéutica */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex items-center space-x-4 hover:shadow-2xl transition duration-300">
            <FaFlask className="text-purple-600 text-5xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Farmacéutica</h3>
              <p className="text-gray-600 text-sm">Optimización de la cadena de suministro y control de calidad.</p>
            </div>
          </div>

          {/* Tarjeta 5: Alimentos */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex items-center space-x-4 hover:shadow-2xl transition duration-300">
            <FaAppleAlt className="text-purple-600 text-5xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Alimentos</h3>
              <p className="text-gray-600 text-sm">Reducción de tiempos de entrega y control de distribución.</p>
            </div>
          </div>

          {/* Tarjeta 6: Automotriz */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex items-center space-x-4 hover:shadow-2xl transition duration-300">
            <FaCarAlt className="text-purple-600 text-5xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Automotriz</h3>
              <p className="text-gray-600 text-sm">Optimización de procesos productivos y logísticos.</p>
            </div>
          </div>

          {/* Tarjeta 7: Comercio Electrónico */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex items-center space-x-4 hover:shadow-2xl transition duration-300">
            <FaShippingFast className="text-purple-600 text-5xl" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Comercio Electrónico</h3>
              <p className="text-gray-600 text-sm">Logística ágil y entregas puntuales a gran escala.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriasServimos;
