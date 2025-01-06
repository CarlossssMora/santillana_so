import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import MenuAdministrador from './components/MenuAdministrador/MenuAdministrador';
import MenuUsuario from './components/MenuUsuario/MenuUsuario';
import ConfigurarPerfil from './components/MenuUsuario/ConfigurarPerfil';
import MisionEmpresa from './components/sobrenosotros/MisionEmpresa';
import NuestroEnfoque from './components/sobrenosotros/NuestroEnfoque';
import NuestroEquipo from './components/sobrenosotros/NuestroEquipo';
import VerProyectos from './components/MenuUsuario/VerProyectos';
import ConfigurarPerfilAdmin from './components/MenuAdministrador/ConfigurarPerfilAdmin';
import CrearProyecto from './components/MenuAdministrador/CrearProyecto';
import ActualizarProyecto from './components/MenuAdministrador/ActualizarProyecto';
import Clientes from './components/MenuAdministrador/Clientes';
import Citas from './components/MenuAdministrador/Citas';




const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.targetSection) {
      setTimeout(() => {
        const section = document.getElementById(location.state.targetSection);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [location]);

  return null;
};

const App = () => {
  const [cliente, setCliente] = useState(null);
  const [admin, setAdmin] = useState(null);

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

  const cerrarSesion = () => {
    localStorage.removeItem('cliente');
    setCliente(null);
    alert('Sesión del cliente cerrada correctamente');
  };

  const cerrarSesionAdmin = () => {
    localStorage.removeItem('admin');
    setAdmin(null);
    alert('Sesión del administrador cerrada correctamente');
  };

  const actualizarPerfil = (nuevosDatos) => {
    setCliente((prevCliente) => {
      const clienteActualizado = { ...prevCliente, ...nuevosDatos };
      localStorage.setItem('cliente', JSON.stringify(clienteActualizado));
      return clienteActualizado;
    });
    alert('Perfil actualizado correctamente');
  };

  const actualizarPerfilAdmin = (nuevosDatos) => {
    setAdmin((prevAdmin) => {
      const adminActualizado = { ...prevAdmin, ...nuevosDatos };
      localStorage.setItem('admin', JSON.stringify(adminActualizado));
      return adminActualizado;
    });
  };
  

  return (
    <Router>
      <ScrollToSection />
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
        <Route
          path="/sobre_nosotros"
          element={
            <SobreNos>
              <section id="mision">
                <MisionEmpresa />
              </section>
              <section id="equipo">
                <NuestroEquipo />
              </section>
              <section id="enfoque">
                <NuestroEnfoque />
              </section>
            </SobreNos>
          }
        />
        <Route path="/servicios" element={<SeccionServicios />} />
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
        <Route path="/menu_usuario" element={<MenuUsuario cliente={cliente} handleCerrarSesion={cerrarSesion} />} />
        <Route path="/configurar_perfil" element={<ConfigurarPerfil cliente={cliente} actualizarPerfil={actualizarPerfil} />} />
        <Route path="/dashboard" element={<Dashboard cliente={cliente} />} />
        <Route path="/administrador" element={<MenuAdministrador administrador={admin} handleCerrarSesion={cerrarSesionAdmin} />} />
        <Route path="/ver-proyectos" element={<VerProyectos cliente={cliente} />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/configurar_perfil_admin" element={<ConfigurarPerfilAdmin administrador={admin} actualizarPerfilAdmin={actualizarPerfilAdmin} />} />
        <Route path="/crear_proyecto" element={<CrearProyecto />} />
        <Route path="/actualizar_proyecto" element={<ActualizarProyecto />} />
        <Route path="/citas" element={<Citas />} />



      </Routes>
      <Footer />
    </Router>
  );
};

export default App;