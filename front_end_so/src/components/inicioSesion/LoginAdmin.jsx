import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = ({ setAdmin }) => {
  const [formData, setFormData] = useState({
    correo: '',
    contrasenia: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Muestra los datos del formulario en la consola
    console.log('Datos enviados al servidor:', formData);
    
    try {
      // Llama al endpoint específico para el inicio de sesión de administradores
      const response = await axios.post('http://localhost:5000/admin/login', formData);
  
      const admin = response.data.admin || response.data; // Maneja la respuesta del servidor
      console.log('Inicio de sesión exitoso (Admin):', admin);
  
      // Guarda el admin en localStorage y actualiza el estado global
      setAdmin(admin);
      localStorage.setItem('admin', JSON.stringify(admin));
  
      // Redirige al panel de administradores
      navigate('/administrador');
    } catch (error) {
      console.error('Error en inicio de sesión del administrador:', error);
      alert('Correo o contraseña incorrectos.');
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto bg-white p-12 shadow-2xl rounded-lg mt-20 mb-20">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-8">Administrador</h2>
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
    </div>
  );
};

export default LoginAdmin;
