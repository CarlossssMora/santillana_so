import React from 'react';
import { FaUsers } from 'react-icons/fa';

const NuestroEquipo = () => {
    return (
        <section className="py-16 mb-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
                {/* Encabezado */}
                    <div className="mb-8 text-center">
                    <FaUsers className="text-purple-600 text-5xl mx-auto mb-4" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-purple-800">
                        Nuestro Equipo
                    </h2>
                </div>

                {/* Contenido */}
                <div className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    <p>
                        Nuestro equipo de consultores combina décadas de experiencia en gestión de la cadena 
                        de suministro, compliance y logística. Con antecedentes desde análisis avanzados hasta 
                        logística de transporte, nuestros consultores no solo son expertos en sus campos, sino 
                        también apasionados por ayudar a los clientes a tener éxito. Al estar a la vanguardia de 
                        las tendencias de la industria, aseguramos que nuestros clientes se beneficien de las 
                        últimas innovaciones y mejores prácticas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NuestroEquipo;
