import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-100 py-16">
        {/* Sección de Descripción con Imagen de Fondo */}
        <section
          className="relative bg-cover bg-center bg-no-repeat text-white py-32"
          style={{
            backgroundImage: "url('/img/consultoria.png')",
          }}
        >
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Bienvenido a Santillana Strategic Operation
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Somos una empresa dedicada a ofrecer soluciones estratégicas para
              optimizar tus operaciones. Con años de experiencia en el mercado,
              nos enfocamos en impulsar la innovación, eficiencia y crecimiento
              de nuestros clientes mediante servicios personalizados y tecnología
              de vanguardia.
            </p>
            <a
              href="/about_us"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
            >
              Conoce Más Sobre Nosotros
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
