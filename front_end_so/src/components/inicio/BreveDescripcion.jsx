import React from 'react';

const BreveDescripcion = () => {
    return (
        <section className="w-full py-16">
        {/* Contenedor principal */}
        <div className="flex flex-col md:grid md:grid-cols-2 items-center w-full">
            {/* Imagen */}
            <div className="h-[300px] sm:h-[350px] md:h-[400px] w-full">
            <img
                src="/img/descripcion_empresa.png"
                alt="Equipo trabajando"
                className="w-full h-full object-cover"
            />
            </div>

            {/* Sección de texto */}
            <div className="bg-purple-800 text-white flex items-center justify-center p-8 sm:p-12 h-auto md:h-[400px] w-full">
                <div className="max-w-lg">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left">
                    Sobre Nosotros
                    </h3>
                    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                    Santillana Strategic Operation es una firma de consultoría de
                    primer nivel especializada en optimizar operaciones complejas de
                    la cadena de suministro mediante investigación de operaciones,
                    ciencia de datos, análisis avanzados y soluciones logísticas
                    específicas. Nuestro equipo se dedica a transformar datos en
                    conocimientos prácticos, ayudándote a alcanzar el éxito a largo
                    plazo.
                    </p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default BreveDescripcion;
