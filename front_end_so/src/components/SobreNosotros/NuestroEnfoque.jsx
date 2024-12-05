import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const NuestroEnfoque = () => {
    return (
        <section className="py-16 mb-16 bg-purple-50">
            <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
                {/* Encabezado */}
                    <div className="mb-8 text-center">
                    <FaLightbulb className="text-purple-600 text-5xl mx-auto mb-4" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-purple-800">
                        Nuestro Enfoque
                    </h2>
                </div>

                {/* Contenido */}
                <div className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    <p>
                        Creemos que cada cliente es único. Nuestro enfoque de consultoría se basa en personalizar
                        soluciones para cada organización con la que trabajamos. Utilizando conocimientos prácticos
                        de la cadena de suministro, realizamos evaluaciones exhaustivas, identificamos puntos críticos
                        y desarrollamos estrategias paso a paso que se alinean con los objetivos específicos de nuestros
                        clientes. Este enfoque ágil y adaptable asegura que cada solución sea tanto impactante como
                        sostenible.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NuestroEnfoque;
