import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BreveDescripcion from './components/inicio/BreveDescripcion';
import AreasEspecializacion from './components/inicio/AreasEspecializacion';
import PropuestaValor from './components/inicio/PropuestaValor';
import SeccionHero from './components/inicio/SeccionHero';
import SeccionServicios from './components/Servicios/SeccionServicios';
import SobreNos from './components/sobrenosotros/SobreNos';
import Contact from './components/contacto/Contacto'; 
import Sesion from './components/inicioSesion/InicioSesion';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  const [cliente, setCliente] = useState(null);

  // Cargar cliente desde localStorage al iniciar
  useEffect(() => {
    const savedCliente = localStorage.getItem('cliente');
    if (savedCliente) {
      setCliente(JSON.parse(savedCliente));
    }
  }, []);

  // Función para cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem('cliente');
    setCliente(null);
    alert('Sesión cerrada correctamente');
  };

  return (
    <Router>
      <Navbar cliente={cliente} cerrarSesion={cerrarSesion} />
      <Routes>
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
        <Route path='/servicios' element={<SeccionServicios/>}/>
        <Route path="/sobre_nosotros" element={<SobreNos />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/inicio_sesion"
          element={
            <Sesion
              setCliente={(clienteData) => {
                setCliente(clienteData);
                localStorage.setItem('cliente', JSON.stringify(clienteData));
              }}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard cliente={cliente} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
