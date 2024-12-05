import React from 'react';
import {
  FaCogs,
  FaDatabase,
  FaChartBar,
  FaChalkboardTeacher,
  FaTruck,
  FaShieldAlt,
  FaMapMarkedAlt,
} from 'react-icons/fa';

const AreasEspecializacion = () => {
  const areas = [
    {
      icon: <FaCogs className="text-purple-600 text-4xl" />,
      title: "Optimización de la Cadena de Suministro",
      description:
        "Desarrollamos estrategias personalizadas para mejorar la eficiencia y reducir costos en tu cadena de suministro.",
    },
    {
      icon: <FaDatabase className="text-purple-600 text-4xl" />,
      title: "Ciencia de Datos y Análisis de Datos",
      description:
        "Transformamos tus datos en conocimiento práctico mediante análisis avanzados y modelos predictivos.",
    },
    {
      icon: <FaChartBar className="text-purple-600 text-4xl" />,
      title: "Estadísticas y Análisis Avanzado",
      description:
        "Utilizamos herramientas estadísticas avanzadas para resolver problemas complejos y optimizar tus procesos.",
    },
    {
      icon: <FaChalkboardTeacher className="text-purple-600 text-4xl" />,
      title: "Programas de Capacitación",
      description:
        "Capacitamos a tus equipos en las mejores prácticas de la industria para potenciar sus habilidades.",
    },
    {
      icon: <FaTruck className="text-purple-600 text-4xl" />,
      title: "Gestión de 3PL y Transporte",
      description:
        "Optimizamos la logística y transporte mediante estrategias efectivas para la gestión de 3PL.",
    },
    {
      icon: <FaShieldAlt className="text-purple-600 text-4xl" />,
      title: "Cumplimiento Logístico y Regulatorio",
      description:
        "Aseguramos que tus operaciones cumplan con todas las normativas logísticas y regulatorias.",
    },
    {
      icon: <FaMapMarkedAlt className="text-purple-600 text-4xl" />,
      title: "Optimización de Redes de Distribución",
      description:
        "Diseñamos redes de distribución eficientes para maximizar tu alcance y minimizar costos.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Título */}
        <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
          Nuestras Áreas de Especialización
        </h3>
        <p className="text-lg sm:text-xl text-gray-700 mb-12">
          Ofrecemos servicios de consultoría en una amplia gama de áreas para ayudarte a alcanzar tu máximo potencial.
        </p>

        {/* Contenedor de Áreas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              {/* Ícono */}
              <div className="mb-4">{area.icon}</div>
              {/* Título */}
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                {area.title}
              </h4>
              {/* Descripción */}
              <p className="text-gray-600 text-sm sm:text-base">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasEspecializacion;
