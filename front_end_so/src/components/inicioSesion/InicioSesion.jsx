import React, { useState } from 'react';
import Login from './Login';
import Registro from './Registro';
import LoginAdmin from './LoginAdmin';

const Sesion = ({ setCliente, setAdmin }) => {  // Acepta setAdmin como prop
  const [vistaActual, setVistaActual] = useState('login'); // 'login', 'registro', 'admin'

  // Funciones para cambiar la vista
  const toggleRegister = () => setVistaActual('registro');
  const toggleLogin = () => setVistaActual('login');
  const toggleLoginAdmin = () => setVistaActual('admin');

  let contenidoVista;

  // Manejo del renderizado basado en `vistaActual`
  if (vistaActual === 'login') {
    contenidoVista = (
      <Login 
        toggleRegister={toggleRegister} 
        toggleLoginAdmin={toggleLoginAdmin} 
        setCliente={setCliente} 
      />
    );
  } else if (vistaActual === 'registro') {
    contenidoVista = <Registro toggleLogin={toggleLogin} />;
  } else if (vistaActual === 'admin') {
    contenidoVista = <LoginAdmin setAdmin={setAdmin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {contenidoVista}
    </div>
  );
};

export default Sesion;

