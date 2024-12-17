import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfigurarPerfil = ({ cliente, actualizarPerfil }) => {
  const [formData, setFormData] = useState({
    usuario: cliente.usuario || '',
    contrasenia: cliente.contrasenia || '', 
    nombre: cliente.nombre || '',
    nombreCompania: cliente.nombreCompania || '',
    razonSocial: cliente.razonSocial || '',
    RFC: cliente.RFC || '',
    direccion: cliente.direccion || '',
    telefono: cliente.telefono || '',
    correo: cliente.correo || '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const clienteId = cliente._id || cliente.id;

      if (!clienteId) {
        alert('No se encontró el ID del cliente.');
        setIsLoading(false);
        return;
      }

      const response = await axios.put(
        `http://localhost:5000/cliente/actualizar/${clienteId}`,
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );

      actualizarPerfil(response.data);
      alert('Perfil actualizado correctamente');
      navigate('/menu_usuario');
    } catch (error) {
      console.error('Error al actualizar el perfil:', error.message);
      alert('Hubo un error al actualizar el perfil');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegresar = () => {
    navigate('/menu_usuario');
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-gray-100 shadow-2xl rounded-lg">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
        Configuración de Perfil
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Campo Usuario */}
        <div>
          <label className="block text-gray-700">Usuario</label>
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Usuario"
            required
          />
        </div>

        {/* Campo Contraseña */}
        <div>
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="text" // Misma propiedad que los demás campos
            name="contrasenia"
            value={formData.contrasenia}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Contraseña"
            required
          />
        </div>

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

        {/* Campo Nombre Compañía */}
        <div>
          <label className="block text-gray-700">Nombre de la Compañía</label>
          <input
            type="text"
            name="nombreCompania"
            value={formData.nombreCompania}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Nombre de la compañía"
          />
        </div>

        {/* Campo Razón Social */}
        <div>
          <label className="block text-gray-700">Razón Social</label>
          <input
            type="text"
            name="razonSocial"
            value={formData.razonSocial}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Razón Social"
          />
        </div>

        {/* Campo RFC */}
        <div>
          <label className="block text-gray-700">RFC</label>
          <input
            type="text"
            name="RFC"
            value={formData.RFC}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="RFC"
          />
        </div>

        {/* Campo Dirección */}
        <div>
          <label className="block text-gray-700">Dirección</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Dirección"
          />
        </div>

        {/* Campo Teléfono */}
        <div>
          <label className="block text-gray-700">Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Teléfono"
          />
        </div>

        {/* Campo Correo */}
        <div>
          <label className="block text-gray-700">Correo</label>
          <input
            type="text"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Correo electrónico"
            required
          />
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

export default ConfigurarPerfil;
