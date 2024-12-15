import React from 'react';
import { FaBook, FaWarehouse, FaChartLine, FaTruck, FaChalkboardTeacher } from 'react-icons/fa';

const ProgramasCapacitacion = () => {
  const programas = [
    {
      id: 1,
      title: 'Manejo del ERP SAP para los módulos de MRP, DRP y Almacén',
      topics: [
        {
          subtitle: 'Introducción al ERP SAP',
          details: [
            'Conceptos básicos y arquitectura de SAP',
            'Importancia de SAP en la gestión de la cadena de suministro',
          ],
        },
        {
          subtitle: 'Planificación de Requerimientos de Material (MRP)',
          details: [
            'Configuración y personalización del módulo MRP',
            'Creación de órdenes de producción y compra',
            'Optimización de inventarios y reducción de desperdicios',
            'Ejercicios prácticos en MRP',
          ],
        },
        {
          subtitle: 'Planificación de Requerimientos de Distribución (DRP)',
          details: [
            'Estrategias de distribución y planificación',
            'Configuración de parámetros clave en el DRP',
            'Cálculo de necesidades de distribución y control de inventarios',
            'Simulaciones en DRP para optimización de la red de distribución',
          ],
        },
        {
          subtitle: 'Gestión de Almacén (Warehouse Management)',
          details: [
            'Introducción a la gestión de almacén en SAP',
            'Movimientos de inventario y control de stock',
            'Gestión de ubicaciones de almacenamiento y picking',
            'Ejercicios prácticos en el módulo de almacén',
          ],
        },
        {
          subtitle: 'Informes y Análisis en SAP',
          details: [
            'Generación de reportes en MRP, DRP y Almacén',
            'Personalización de reportes para la toma de decisiones',
            'Análisis de datos de inventario y pronósticos de demanda',
          ],
        },
      ],
      icon: <FaWarehouse />,
    },
    {
      id: 2,
      title: 'Logistics Procurement and Compliance',
      topics: [
        {
          subtitle: 'Introducción a la Gestión de Compras Logísticas',
          details: [
            'Conceptos fundamentales de la logística de compras',
            'Rol de la gestión de compras en la cadena de suministro',
          ],
        },
        {
          subtitle: 'Proceso de Procure-to-Pay (P2P)',
          details: [
            'Flujo de trabajo completo de P2P',
            'Negociación con proveedores y estrategias de sourcing',
            'Técnicas de evaluación y selección de proveedores',
          ],
        },
        {
          subtitle: 'Cumplimiento Normativo en Logística',
          details: [
            'Principales normativas internacionales (INCOTERMS, CTPAT, etc.)',
            'Gestión de riesgos en la cadena de suministro',
            'Procedimientos y políticas para el cumplimiento normativo',
          ],
        },
        {
          subtitle: 'Contratos y Gestión de Proveedores',
          details: [
            'Redacción y negociación de contratos',
            'Evaluación de desempeño de proveedores',
            'Implementación de auditorías de cumplimiento',
          ],
        },
        {
          subtitle: 'Sostenibilidad y Ética en Compras Logísticas',
          details: [
            'Políticas de compras sostenibles',
            'Responsabilidad social y ética en la selección de proveedores',
          ],
        },
      ],
      icon: <FaTruck />,
    },
    {
      id: 3,
      title: 'Sales & Operations Planning (S&OP)',
      topics: [
        {
          subtitle: 'Introducción al S&OP',
          details: [
            'Conceptos y objetivos de S&OP',
            'Beneficios de una planificación integrada de ventas y operaciones',
          ],
        },
        {
          subtitle: 'Proceso de S&OP',
          details: [
            'Etapas del proceso S&OP: previsión, balance de demanda y oferta, alineación financiera',
            'Identificación y gestión de restricciones en la cadena de suministro',
          ],
        },
        {
          subtitle: 'Previsión de Demanda',
          details: [
            'Técnicas de pronóstico de ventas',
            'Herramientas y métodos estadísticos en la previsión de demanda',
          ],
        },
        {
          subtitle: 'Planificación de la Producción y Gestión de Inventarios',
          details: [
            'Balanceo de inventarios y programación de producción',
            'Estrategias de inventario para evitar roturas de stock y exceso de inventario',
          ],
        },
        {
          subtitle: 'Revisión Ejecutiva y Toma de Decisiones',
          details: [
            'Análisis de escenarios y simulaciones de planes',
            'Generación de reportes y KPIs para la toma de decisiones',
          ],
        },
        {
          subtitle: 'Tecnologías en S&OP',
          details: [
            'Software y herramientas de S&OP',
            'Integración de datos para S&OP efectivo',
          ],
        },
      ],
      icon: <FaChartLine />,
    },
    {
      id: 4,
      title: 'Introducción al Análisis de Datos con Power BI',
      topics: [
        {
          subtitle: 'Introducción a Power BI',
          details: [
            'Conceptos básicos de Business Intelligence',
            'Componentes de Power BI y su interfaz de usuario',
          ],
        },
        {
          subtitle: 'Preparación y Modelado de Datos',
          details: [
            'Importación y transformación de datos desde diversas fuentes',
            'Limpieza y modelado de datos en Power Query',
            'Creación de relaciones entre tablas y diseño de modelos de datos',
          ],
        },
        {
          subtitle: 'Visualización de Datos',
          details: [
            'Tipos de visualizaciones y gráficos en Power BI',
            'Diseño de dashboards interactivos',
            'Personalización y formato de visualizaciones para un análisis eficaz',
          ],
        },
      ],
      icon: <FaBook />,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-purple-800 mb-4 transition-colors duration-300">
          Programas de Capacitación
        </h2>
        <p className="text-gray-600 text-lg">
          Nuestros programas de capacitación están diseñados para dotar a los equipos de las habilidades que necesitan para prosperar en un entorno moderno de la cadena de suministro.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 px-6">
        {programas.map((programa) => (
          <div
            key={programa.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow group"
          >
            <div className="flex items-center mb-4">
              <div className="text-4xl text-purple-800 group-hover:text-purple-500 transition-colors duration-300 mr-4">
                {programa.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-purple-500 transition-colors duration-300">
                {programa.title}
              </h3>
            </div>
            {programa.topics.map((topic, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-xl font-medium text-gray-700 mb-2">
                  {topic.subtitle}
                </h4>
                <ul className="list-disc pl-6 text-gray-600">
                  {topic.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramasCapacitacion;
