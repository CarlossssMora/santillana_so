import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaCog, FaFolder, FaSignOutAlt } from 'react-icons/fa';

const MenuUsuario = ({ cliente, handleCerrarSesion }) => {
  const navigate = useNavigate();

  const cerrarSesionYRedirigir = () => {
    handleCerrarSesion(); // Limpia la sesión
    navigate('/inicio_sesion'); // Redirige a la ruta /inicio_sesion
  };

  return (
    <div className="w-screen flex items-center justify-center bg-gray-200">
      <div className="bg-gray-100 shadow-2xl rounded-lg overflow-hidden w-full max-w-5xl h-auto flex flex-col my-8">
        {/* Encabezado */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-center p-8">
          <FaUserCircle className="text-8xl mx-auto mb-4" />
          <h1 className="text-3xl font-semibold">{`Bienvenido, ${cliente.nombre}`}</h1>
        </div>

        {/* Opciones */}
        <div className="flex-1 p-8 flex flex-col items-start gap-6">
        {/* Ver proyectos del cliente */}
        <Link
            to="/ver-proyectos"
            className="flex items-center gap-4 text-gray-700 hover:text-purple-600 hover:bg-gray-200 rounded-lg px-6 py-3 transition w-full"
          >
            <FaFolder className="text-2xl" />
            <span className="text-lg">Ver proyectos</span>
          </Link>
          <Link
            to="/configurar_perfil"
            className="flex items-center gap-4 text-gray-700 hover:text-purple-600 hover:bg-gray-200 rounded-lg px-6 py-3 transition w-full"
          >
            <FaCog className="text-2xl" />
            <span className="text-lg">Configurar perfil</span>
          </Link>
        </div>
        
        {/* Botón de Cerrar Sesión */}
        <div className="p-6 bg-gray-200">
          <button
            onClick={cerrarSesionYRedirigir}
            className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition font-semibold"
          >
            <FaSignOutAlt />
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuUsuario;
