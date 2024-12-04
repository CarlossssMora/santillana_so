import React from 'react';

const BreveDescripcion = () => {
    return (
        <section className="w-full py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
                <div className="h-[400px] w-full">
                <img
                    src="/img/descripcion_empresa.png"
                    alt="Equipo trabajando"
                    className="w-full h-full object-cover"
                />
                </div>
        
                <div className="bg-purple-800 text-white flex items-center justify-center p-12 h-[400px] w-full">
                <div className="max-w-lg">
                    <h3 className="text-4xl font-bold mb-6">Sobre Nosotros</h3>
                    <p className="text-lg leading-relaxed">
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
