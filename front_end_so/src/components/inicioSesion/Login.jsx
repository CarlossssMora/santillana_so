import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ toggleRegister }) => {
  const [formData, setFormData] = useState({
    usuario: '',
    contrasenia: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/cliente/login', formData);
      console.log('Inicio de sesión exitoso:', response.data);
      alert('¡Inicio de sesión exitoso!');
    } catch (error) {
      console.error('Error en inicio de sesión:', error);
      alert('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-12 shadow-2xl rounded-lg mt-20 mb-20">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-8">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="usuario"
          placeholder="Nombre de Usuario"
          value={formData.usuario}
          onChange={handleChange}
          className="block w-full border p-4 mb-8 text-lg rounded-lg"
          required
        />
        <input
          name="contrasenia"
          type="password"
          placeholder="Contraseña"
          value={formData.contrasenia}
          onChange={handleChange}
          className="block w-full border p-4 mb-8 text-lg rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition text-xl font-bold"
        >
          Iniciar Sesión
        </button>
      </form>
      <button
        onClick={toggleRegister}
        className="mt-8 text-purple-600 hover:text-purple-800 transition block text-center text-lg"
      >
        ¿Eres nuevo? <span className="font-semibold underline">Regístrate aquí</span>
      </button>
    </div>
  );
};

export default Login;

