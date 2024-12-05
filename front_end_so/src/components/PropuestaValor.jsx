import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const PropuestaValor = () => {
  return (
    <section
      className="py-16 mt-16 mb-16"
      style={{
        background: "linear-gradient(to right, #6a11cb, #8b5cf6, #a78bfa)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Propuesta de Valor
        </h2>

        {/* Texto principal */}
        <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          ¿Qué diferencia a{" "}
          <span className="font-bold">Santillana Strategic Operation</span>? 
          Priorizamos resultados medibles y el éxito del cliente mediante estrategias personalizadas basadas en datos 
          que abordan desafíos operativos únicos. Nuestro historial comprobado de excelencia en la cadena de suministro 
          y la logística está respaldado por nuestro compromiso con la innovación y soluciones en tiempo real que 
          satisfacen las demandas del mercado actual.
        </p>

        {/* Elementos visuales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <FaCheckCircle className="text-5xl sm:text-6xl mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Resultados Medibles
            </h3>
            <p className="text-sm sm:text-base">
              Nos enfocamos en generar resultados tangibles para nuestros clientes, asegurando un impacto positivo y duradero.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaCheckCircle className="text-5xl sm:text-6xl mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Estrategias Personalizadas
            </h3>
            <p className="text-sm sm:text-base">
              Diseñamos soluciones adaptadas a las necesidades únicas de cada cliente y sus operaciones.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaCheckCircle className="text-5xl sm:text-6xl mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Innovación Continua
            </h3>
            <p className="text-sm sm:text-base">
              Implementamos tecnologías avanzadas y soluciones en tiempo real para superar los retos del mercado actual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropuestaValor;
