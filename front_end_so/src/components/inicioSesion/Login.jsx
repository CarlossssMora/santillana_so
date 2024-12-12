import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ toggleRegister,setCliente }) => {
  const [formData, setFormData] = useState({
    correo: '',
    contrasenia: '',
  });

  const navigate = useNavigate(); // Hook para redirigir

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/cliente/login', formData);
  
      console.log('Respuesta del servidor:', response.data); // Verifica aquí qué devuelve el backend
  
      const cliente = response.data.cliente || response.data; // Maneja ambas estructuras
  
      console.log('Inicio de sesión exitoso:', cliente);
  
      // Guarda el cliente en localStorage y actualiza el estado global 
      setCliente(cliente);
      localStorage.setItem('cliente', JSON.stringify(cliente));
      
      // Redirigir al Dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error en inicio de sesión:', error);
      alert('Usuario o contraseña incorrectos.');
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto bg-white p-12 shadow-2xl rounded-lg mt-20 mb-20">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-8">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="correo"
          placeholder="Correo"
          value={formData.correo}
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
