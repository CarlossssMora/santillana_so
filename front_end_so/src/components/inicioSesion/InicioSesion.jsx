import React, { useState } from 'react';
import Login from './Login';
import Registro from './Registro';

const Sesion = ({ setCliente }) => {  // Recibe setCliente como prop
  const [isLogin, setIsLogin] = useState(true);

  const toggleRegister = () => setIsLogin(false);
  const toggleLogin = () => setIsLogin(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {isLogin ? (
        <Login toggleRegister={toggleRegister} setCliente={setCliente} />
      ) : (
        <Registro toggleLogin={toggleLogin} />
      )}
    </div>
  );
};

export default Sesion;

