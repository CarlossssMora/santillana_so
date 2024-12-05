import React from 'react';
import { FaBullseye } from 'react-icons/fa';

const MisionEmpresa = () => {
    return (
        <section
        className="py-16 my-16 text-white text-center"
        style={{
            background: "linear-gradient(to right, #6a11cb, #8b5cf6, #a78bfa)",
        }}
        >
            <div className="max-w-4xl mx-auto px-4">
                {/* Icono */}
                <div className="mb-6">
                <FaBullseye className="text-6xl sm:text-7xl mx-auto" />
                </div>

                {/* Título */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Misión de la Empresa</h2>

                {/* Texto */}
                <p className="text-lg sm:text-xl leading-relaxed">
                Nuestra misión es empoderar a las organizaciones mediante la entrega
                de soluciones que optimicen las cadenas de suministro, aprovechen los
                datos para la toma de decisiones estratégicas y aseguren el cumplimiento
                normativo. En <span className="font-bold">Santillana Strategic Operation</span>,
                creemos en crear sistemas sostenibles y eficientes que impulsen el
                crecimiento, reduzcan el desperdicio y fortalezcan la resiliencia en
                un mercado global en constante cambio.
                </p>
            </div>
        </section>
    );
};

export default MisionEmpresa;
