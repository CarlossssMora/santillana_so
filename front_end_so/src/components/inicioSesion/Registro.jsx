import React, { useState } from 'react';
import axios from 'axios';

const Registro = ({ toggleLogin }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    usuario: '',
    correo: '',
    contrasenia: '',
    regimenFiscal: '',
    RFC: '',
    direccion: '',
    telefono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/cliente/nuevo', formData);
      console.log('Registro exitoso:', response.data);
      alert('¡Registro exitoso!');
      toggleLogin();
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('El correo o RFC ya existen. Intenta con otros datos.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-12 shadow-2xl rounded-lg mt-20 mb-20">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-8">Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre Completo"
          onChange={handleChange}
          className="block w-full border p-4 mb-6 text-lg rounded-lg"
          required
        />
        <input
          name="usuario"
          placeholder="Nombre de Usuario"
          onChange={handleChange}
          className="block w-full border p-4 mb-6 text-lg rounded-lg"
          required
        />
        <input
          name="correo"
          type="email"
          placeholder="Correo Electrónico"
          onChange={handleChange}
          className="block w-full border p-4 mb-6 text-lg rounded-lg"
          required
        />
        <input
          name="contrasenia"
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
          className="block w-full border p-4 mb-6 text-lg rounded-lg"
          required
        />
        <input
          name="regimenFiscal"
          placeholder="Régimen Fiscal"
          onChange={handleChange}
          className="block w-full border p-4 mb-6 text-lg rounded-lg"
        />
        <input
          name="RFC"
          placeholder="RFC"
          onChange={handleChange}
          className="block w-full border p-4 mb-6 text-lg rounded-lg"
          required
        />
        <input
          name="direccion"
          placeholder="Dirección"
          onChange={handleChange}
          className="block w-full border p-4 mb-6 text-lg rounded-lg"
          required
        />
        <input
          name="telefono"
          placeholder="Teléfono"
          onChange={handleChange}
          className="block w-full border p-4 mb-6 text-lg rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition text-xl font-bold"
        >
          Registrarse
        </button>
      </form>
      <button
        onClick={toggleLogin}
        className="mt-8 text-purple-600 hover:text-purple-800 transition block text-center text-lg"
      >
        ¿Ya tienes una cuenta? <span className="font-semibold underline">Inicia sesión</span>
      </button>
    </div>
  );
};

export default Registro;
