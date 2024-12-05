import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BreveDescripcion from './components/BreveDescripcion';
import AreasEspecializacion from './components/AreasEspecializacion';
import PropuestaValor from './components/PropuestaValor';
import SeccionHero from './components/SeccionHero';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <SeccionHero />
        <BreveDescripcion />
        <AreasEspecializacion />
        <PropuestaValor />
      </main>
      <Footer />
    </div>
  );
};

export default App;
