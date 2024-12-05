import React from "react";

const SeccionHero = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat text-white h-[70vh] sm:h-[80vh] md:h-[90vh] pb-16"
            style={{
                backgroundImage: "url('/img/consultoria.png')",
            }}
            >
            {/* Capa oscura */}
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            
            {/* Contenido */}
            <div className="relative max-w-4xl mx-auto px-4 text-center flex items-center justify-center h-full">
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Bienvenido a Santillana Strategic Operation
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
                        Líderes en soluciones estratégicas para optimizar tus operaciones.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SeccionHero;
