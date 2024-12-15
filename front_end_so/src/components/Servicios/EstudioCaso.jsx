import React from 'react';

const EstudioCaso = () => {
  return (
    <section
      className="py-16 mt-16 mb-16"
      style={{
        background: "linear-gradient(to bottom, #8b5cf6, #6a11cb)",
        color: "white",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Estudios de Caso / Historias de Éxito de Cliente
        </h2>

        {/* Texto principal */}
        <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          Explora cómo hemos ayudado a empresas a lograr resultados excepcionales. 
          Nuestros estudios de caso destacan los desafíos específicos que enfrentaron nuestros clientes, 
          las estrategias que implementamos y los resultados medibles que logramos juntos.
        </p>

        {/* Elementos visuales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Caso 1 */}
          <div className="p-6 bg-white text-purple-800 rounded-lg shadow-lg border-2 border-transparent transform transition-transform duration-300 hover:scale-105 hover:bg-purple-700 hover:text-white hover:border-white">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Reducción de Costos
            </h3>
            <p className="text-sm sm:text-base">
              Ayudamos a una empresa líder a disminuir los costos de distribución en un 20%, optimizando procesos logísticos.
            </p>
          </div>

          {/* Caso 2 */}
          <div className="p-6 bg-white text-purple-800 rounded-lg shadow-lg border-2 border-transparent transform transition-transform duration-300 hover:scale-105 hover:bg-purple-700 hover:text-white hover:border-white">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Mejora en Pronósticos
            </h3>
            <p className="text-sm sm:text-base">
              Implementamos modelos avanzados que incrementaron la precisión en pronósticos de ventas en un 35%.
            </p>
          </div>

          {/* Caso 3 */}
          <div className="p-6 bg-white text-purple-800 rounded-lg shadow-lg border-2 border-transparent transform transition-transform duration-300 hover:scale-105 hover:bg-purple-700 hover:text-white hover:border-white">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Innovación Operativa
            </h3>
            <p className="text-sm sm:text-base">
              Diseñamos soluciones personalizadas que transformaron las operaciones internas de una empresa multinacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstudioCaso;
