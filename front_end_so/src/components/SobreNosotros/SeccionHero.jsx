import React from 'react';

const SeccionHero = () => {
    return (
        <section
            className="relative w-full h-[90vh] text-white text-center flex items-center justify-center"
            style={{
                backgroundImage: "url('/img/sobrenos_hero.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
            {/* Content */}
            <div className="relative max-w-4xl px-4">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Sobre Nosotros
                </h1>
                <p className="text-lg sm:text-xl leading-relaxed">
                En Santillana Strategic Operation nos especializamos en optimizar
                operaciones complejas de la cadena de suministro mediante estrategias
                innovadoras, ciencia de datos y soluciones personalizadas. Nuestro
                compromiso es ofrecer resultados tangibles y duraderos a nuestros
                clientes.
                </p>
            </div>
            </section>
        );
};

export default SeccionHero;
