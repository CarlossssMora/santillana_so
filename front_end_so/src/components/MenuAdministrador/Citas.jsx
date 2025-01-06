import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Citas = () => {
  const [nombre, setNombre] = useState('');
  const [citas, setCitas] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const buscarCitas = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/contactos/citas/${nombre}`);
      setCitas(response.data);
      setMensaje('');
    } catch (error) {
      setCitas([]);
      setMensaje('No se encontraron citas pendientes para este cliente.');
    }
  };

  const eliminarCita = async (id) => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar esta cita?');
    if (!confirmacion) return;

    try {
      await axios.delete(`http://localhost:5000/contactos/eliminar/${id}`);
      setCitas((prevCitas) => prevCitas.filter((cita) => cita._id !== id));
      alert('Cita eliminada exitosamente.');
    } catch (error) {
      console.error('Error al eliminar la cita:', error.message);
      alert('Hubo un error al eliminar la cita.');
    }
  };

  const handleRegresar = () => {
    navigate('/administrador');
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-gray-100 shadow-2xl rounded-lg">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Buscar Citas</h2>

      {/* Botón de regresar */}
      <div className="mb-6 flex justify-start">
        <button
          onClick={handleRegresar}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Regresar
        </button>
      </div>

      {/* Campo para buscar citas */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Nombre del Representante</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Ingresa el nombre del representante"
        />
        <button
          onClick={buscarCitas}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Buscar
        </button>
      </div>

      {/* Mensaje cuando no se encuentran citas */}
      {mensaje && <p className="text-red-500 font-semibold text-center">{mensaje}</p>}

      {/* Tabla de citas */}
      {citas.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Citas Encontradas</h3>
          <table className="w-full bg-white shadow-md rounded mb-6">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="p-2">Nombre del Representante</th>
                <th className="p-2">Nombre de la Empresa</th>
                <th className="p-2">Correo</th>
                <th className="p-2">Teléfono</th>
                <th className="p-2">País</th>
                <th className="p-2">Fecha de Cita</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita) => (
                <tr key={cita._id} className="text-center">
                  <td className="p-2">{cita.nombre_representante}</td>
                  <td className="p-2">{cita.nombre_empresa}</td>
                  <td className="p-2">{cita.correo}</td>
                  <td className="p-2">{cita.telefono}</td>
                  <td className="p-2">{cita.pais}</td>
                  <td className="p-2">{new Date(cita.fecha_cita).toLocaleDateString()}</td>
                  <td className="p-2">
                    <button
                      onClick={() => eliminarCita(cita._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-lg transition"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Citas;