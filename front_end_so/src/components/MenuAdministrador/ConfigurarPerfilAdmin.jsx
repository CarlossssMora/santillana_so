import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfigurarPerfilAdmin = ({ administrador, actualizarPerfilAdmin }) => {
  const [formData, setFormData] = useState({
    contrasenia: administrador.contrasenia || '',
    correo: administrador.correo || '',
    nombre: administrador.nombre || '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [mostrarContrasenia, setMostrarContrasenia] = useState(false); // Estado para alternar visibilidad
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleMostrarContrasenia = () => {
    setMostrarContrasenia((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const adminId = administrador._id || administrador.id;

      if (!adminId) {
        alert('No se encontró el ID del administrador.');
        setIsLoading(false);
        return;
      }

      const response = await axios.put(
        `http://localhost:5000/administrador/actualizar/${adminId}`,
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );

      actualizarPerfilAdmin(response.data); // Actualiza los datos en el estado global
      alert('Perfil actualizado correctamente');
      navigate('/administrador'); // Redirige al menú del administrador
    } catch (error) {
      console.error('Error al actualizar el perfil del administrador:', error.message);
      alert('Hubo un error al actualizar el perfil');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegresar = () => {
    navigate('/administrador');
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-gray-100 shadow-2xl rounded-lg">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
        Configuración de Perfil del Administrador
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Campo Nombre */}
        <div>
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Nombre"
            required
          />
        </div>

        {/* Campo Correo */}
        <div>
          <label className="block text-gray-700">Correo</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Correo electrónico"
            required
          />
        </div>

        {/* Campo Contraseña */}
        <div>
          <label className="block text-gray-700">Contraseña</label>
          <div className="relative">
            <input
              type={mostrarContrasenia ? 'text' : 'password'} // Alterna entre 'text' y 'password'
              name="contrasenia"
              value={formData.contrasenia}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              placeholder="Contraseña"
              required
            />
            <button
              type="button"
              onClick={toggleMostrarContrasenia}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-purple-600 focus:outline-none"
            >
              {mostrarContrasenia ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
        </div>

        {/* Botones */}
        <div className="col-span-1 md:col-span-2 flex justify-between mt-4">
          <button
            type="button"
            onClick={handleRegresar}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Regresar
          </button>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition"
            disabled={isLoading}
          >
            {isLoading ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfigurarPerfilAdmin;