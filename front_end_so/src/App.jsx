import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Administrador from './components/administrador/Administrador';
//
const App = () => {
  const [cliente, setCliente] = useState(null);
  const [admin, setAdmin] = useState(null); // Estado para el admin

  // Cargar cliente y admin desde localStorage al iniciar
  useEffect(() => {
    const savedCliente = localStorage.getItem('cliente');
    const savedAdmin = localStorage.getItem('admin');

    if (savedCliente) {
      setCliente(JSON.parse(savedCliente));
    }

    if (savedAdmin) {
      setAdmin(JSON.parse(savedAdmin));
    }
  }, []);

  // Función para cerrar sesión del cliente
  const cerrarSesion = () => {
    localStorage.removeItem('cliente');
    setCliente(null);
    alert('Sesión del cliente cerrada correctamente');
  };

  // Función para cerrar sesión del admin
  const cerrarSesionAdmin = () => {
    localStorage.removeItem('admin');
    setAdmin(null);
    alert('Sesión del administrador cerrada correctamente');
  };

  return (
    <Router>
      <Navbar
        cliente={cliente}
        cerrarSesion={cerrarSesion}
        admin={admin}
        cerrarSesionAdmin={cerrarSesionAdmin}
      />
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
        <Route path="/servicios" element={<SeccionServicios />} />
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
              setAdmin={(adminData) => {
                setAdmin(adminData);
                localStorage.setItem('admin', JSON.stringify(adminData));
              }}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard cliente={cliente} />} />
        <Route path="/administrador" element={<Administrador administrador={admin} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
