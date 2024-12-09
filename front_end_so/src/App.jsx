import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BreveDescripcion from './components/inicio/BreveDescripcion';
import AreasEspecializacion from './components/inicio/AreasEspecializacion';
import PropuestaValor from './components/inicio/PropuestaValor';
import SeccionHero from './components/inicio/SeccionHero';
import SobreNos from './components/sobrenosotros/SobreNos';
import Contact from './components/contacto/Contacto'; 
import Sesion from './components/inicioSesion/InicioSesion';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta principaal */}
        <Route
          path="/"
          element={
            <main>
              <SeccionHero />
              <BreveDescripcion />
              <AreasEspecializacion />
              <PropuestaValor />
            </main>
          }
        />
        {/* Ruta Sobre Nosotros */}
        <Route path="/sobre_nosotros" element={<SobreNos />} />

        {/* Ruta Contacto */}
        <Route path="/contact" element={<Contact />} />
        {/* Ruta Inicio Session */}
        <Route path="/inicio_sesion" element={<Sesion />} />
        {/* Ruta Dashboard del usuario */}
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
