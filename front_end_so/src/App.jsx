import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BreveDescripcion from './components/BreveDescripcion';
import AreasEspecializacion from './components/AreasEspecializacion';
import PropuestaValor from './components/PropuestaValor';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section
          className="relative bg-cover bg-center bg-no-repeat text-white h-[90vh] pb-16"
          style={{
            backgroundImage: "url('/img/consultoria.png')",
          }}
        >
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center flex items-center justify-center h-full">
            <div>
              <h2 className="text-4xl font-bold">
                Bienvenido a Santillana Strategic Operation
              </h2>
              <p className="text-lg mt-4">
                Líderes en soluciones estratégicas para optimizar tus operaciones.
              </p>
            </div>
          </div>
        </section>
        <BreveDescripcion />
        <AreasEspecializacion />
        <PropuestaValor />
      </main>
      <Footer />
    </div>
  );
};

export default App;
