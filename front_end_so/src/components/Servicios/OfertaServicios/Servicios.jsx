import React from 'react';
import TarjetaServicio from './TarjetaServicio';
import {
  FaChartBar,
  FaDatabase,
  FaTools,
  FaChalkboardTeacher,
  FaTruckMoving,
  FaFileAlt,
  FaNetworkWired,
} from 'react-icons/fa';

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      title: 'Optimización de la Cadena de Suministro',
      description:
        'Optimiza cada eslabón de tu cadena de suministro para minimizar costos, reducir tiempos de entrega y mejorar los niveles de servicio. Nuestros expertos analizan y mapean los procesos de extremo a extremo, aplican modelos predictivos y prescriptivos e implementan soluciones que mejoran la eficiencia, la visibilidad y la resiliencia, permitiendo operaciones sin problemas y un crecimiento estratégico.',
      icon: <FaNetworkWired />,
      image: '/img/servicio1.jpg',
    },
    {
      id: 2,
      title: 'Ciencia de Datos y Análisis de Datos',
      description:
        'Los datos son el núcleo de cada decisión. Aprovechamos técnicas avanzadas de ciencia de datos para extraer conocimientos prácticos, ayudando a las organizaciones a tomar decisiones informadas rápidamente. Nuestros servicios incluyen análisis predictivo, modelos de aprendizaje automático y estrategias basadas en datos diseñadas para mejorar la precisión y ofrecer resultados tangibles.',
      icon: <FaDatabase />,
      image: '/img/servicio2.jpg',
    },
    {
      id: 3,
      title: 'Six Sigma y Lean Manufacturing',
      description:
        'Comprende datos complejos mediante análisis estadísticos robustos. Desde la identificación de tendencias hasta la prueba de hipótesis, proporcionamos los análisis necesarios para tomar decisiones basadas en evidencia que impulsan el crecimiento y optimizan las operaciones, sentando una base sólida para mejoras estratégicas.',
      icon: <FaChartBar />,
      image: '/img/servicio3.jpg',
    },
    {
      id: 4,
      title: 'Programas de Capacitación en Cadena de Suministro',
      description:
        'Capacita a tu equipo con las habilidades y el conocimiento necesarios para sobresalir en el panorama actual de la cadena de suministro. Nuestros programas de capacitación personalizados abarcan áreas críticas, incluyendo gestión logística, análisis de datos y cumplimiento normativo, lo que permite a los empleados adoptar mejores prácticas y liderar mejoras operativas.',
      icon: <FaChalkboardTeacher />,
      image: '/img/servicio4.jpg',
    },
    {
      id: 5,
      title: 'Gestión de 3PL y Transporte',
      description:
        'Gestiona eficazmente la logística de terceros y optimiza las redes de transporte. Asistimos en la selección, gestión y optimización de socios 3PL, asegurando una coordinación fluida, reducción de costos y entregas puntuales. Nuestras soluciones de gestión de transporte maximizan la capacidad y aseguran confiabilidad en todos los modos.',
      icon: <FaTruckMoving />,
      image: '/img/servicio5.jpg',
    },
    {
      id: 6,
      title: 'Cumplimiento Logístico y Asesoría Regulatoria',
      description:
        'Mantente al día con los paisajes regulatorios complejos con nuestros servicios de cumplimiento y asesoría. Ofrecemos orientación experta para asegurar que tus operaciones se alineen con estándares globales y locales, minimizando riesgos y evitando sanciones costosas, mientras fomentamos una cultura de cumplimiento y seguridad.',
      icon: <FaFileAlt />,
      image: '/img/servicio6.jpg',
    },
    {
      id: 7,
      title: 'Optimización de Redes de Distribución',
      description:
        'Mejora la eficiencia de la distribución optimizando tu red. Nuestro equipo evalúa la estructura y el rendimiento de tu red, identificando oportunidades de mejora para reducir costos y mejorar los niveles de servicio. Desde la selección de sitios hasta la optimización de almacenes, aseguramos que tus canales de distribución se alineen estratégicamente con los objetivos del negocio.',
      icon: <FaTools />,
      image: '/img/servicio7.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-purple-800 mb-4">
          Nuestros Servicios de Consultoría Logística
        </h2>
        <p className="text-gray-600 text-lg">
          Optimizamos cada aspecto de su cadena de suministro para impulsar la eficiencia y el
          crecimiento de su negocio.
        </p>
      </div>

      {/* Tarjetas Responsivas */}
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {servicios.map((servicio) => (
          <TarjetaServicio
            key={servicio.id}
            title={servicio.title}
            description={servicio.description}
            icon={servicio.icon}
            image={servicio.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Servicios;
