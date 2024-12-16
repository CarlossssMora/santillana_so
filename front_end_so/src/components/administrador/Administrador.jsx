import React from 'react';

const Administrador = ({ administrador }) => {
  console.log('Administrador recibido:', administrador); // Validar si tiene datos

  return (
    <div className="max-w-4xl mx-auto text-center mt-20">
      <h1 className="text-3xl font-bold text-purple-800">
        ¡Bienvenido al Panel de Administración, {administrador?.nombre || 'Invitado'}!
      </h1>
    </div>
  );
};

export default Administrador;

