import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

const Clientes = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [proyectos, setProyectos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cliente/lista');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al cargar los usuarios:', error.message);
      }
    };

    fetchUsuarios();
  }, []);

  const fetchProyectos = async (ClienteID) => {
    try {
      const response = await axios.get(`http://localhost:5000/proyecto/cliente/${ClienteID}`);
      setProyectos(response.data);
    } catch (error) {
      console.error('Error al cargar los proyectos:', error.message);
      setProyectos([]);
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    fetchProyectos(user._id);
  };

  const handleEliminarUsuario = async () => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este cliente? Esta acción no se puede deshacer.');
    if (!confirmacion) return;

    try {
      await axios.delete(`http://localhost:5000/cliente/eliminar/${selectedUser._id}`);
      alert('Cliente eliminado correctamente');
      setUsuarios(usuarios.filter((usuario) => usuario._id !== selectedUser._id));
      setSelectedUser(null);
      setProyectos([]);
    } catch (error) {
      console.error('Error al eliminar el cliente:', error.message);
      alert('Hubo un error al eliminar el cliente.');
    }
  };

  const handleRegresar = () => {
    navigate('/administrador');
  };

  const proyectosFinalizados = proyectos.filter(
    (proyecto) => new Date(proyecto.fechafin) < new Date()
  );
  const proyectosEnCurso = proyectos.filter(
    (proyecto) => !proyecto.fechafin || new Date(proyecto.fechafin) >= new Date()
  );

  const barDataTotal = {
    labels: ['Monto Total', 'Anticipo', 'Restante'],
    datasets: [
      {
        label: 'Totales',
        data: [
          proyectos.reduce((acc, p) => acc + p.monto, 0),
          proyectos.reduce((acc, p) => acc + p.anticipo, 0),
          proyectos.reduce((acc, p) => acc + p.restante, 0),
        ],
        backgroundColor: ['#4caf50', '#2196f3', '#f44336'],
      },
    ],
  };

  const barDataAvance = {
    labels: proyectos.map((p) => p.nombre),
    datasets: [
      {
        label: 'Avance (%)',
        data: proyectos.map((p) => p.avance),
        backgroundColor: '#673ab7',
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-8 bg-gray-100 shadow-2xl rounded-lg">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Clientes</h2>

      <div className="mb-6 flex justify-between items-center">
        <button
          onClick={handleRegresar}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Regresar
        </button>

        {selectedUser && (
          <button
            onClick={handleEliminarUsuario}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Eliminar Cliente
          </button>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Selecciona un Cliente</label>
        <select
          onChange={(e) => {
            const user = usuarios.find((u) => u._id === e.target.value);
            handleUserSelect(user);
          }}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Selecciona un Cliente --</option>
          {usuarios.map((usuario) => (
            <option key={usuario._id} value={usuario._id}>
              {usuario.nombre}
            </option>
          ))}
        </select>
      </div>

      {selectedUser && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Información del Cliente</h3>
          <table className="w-full bg-white shadow-md rounded mb-6">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="p-2">Campo</th>
                <th className="p-2">Valor</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(selectedUser).map(([key, value]) => (
                <tr key={key} className="text-center">
                  <td className="p-2 font-semibold">{key}</td>
                  <td className="p-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {proyectosEnCurso.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Proyectos en Curso</h3>
          <table className="w-full bg-white shadow-md rounded mb-6">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="p-2">Nombre</th>
                <th className="p-2">Fecha de Inicio</th>
                <th className="p-2">Fecha de Fin</th>
                <th className="p-2">Monto</th>
                <th className="p-2">Anticipo</th>
                <th className="p-2">Restante</th>
                <th className="p-2">Avance (%)</th>
              </tr>
            </thead>
            <tbody>
              {proyectosEnCurso.map((proyecto) => (
                <tr key={proyecto._id} className="text-center">
                  <td className="p-2">{proyecto.nombre}</td>
                  <td className="p-2">{new Date(proyecto.fechainicio).toLocaleDateString()}</td>
                  <td className="p-2">{proyecto.fechafin ? new Date(proyecto.fechafin).toLocaleDateString() : '-'}</td>
                  <td className="p-2">{proyecto.monto}</td>
                  <td className="p-2">{proyecto.anticipo}</td>
                  <td className="p-2">{proyecto.restante}</td>
                  <td className="p-2">{proyecto.avance}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {proyectosFinalizados.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Proyectos Finalizados</h3>
          <table className="w-full bg-white shadow-md rounded mb-6">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="p-2">Nombre</th>
                <th className="p-2">Fecha de Inicio</th>
                <th className="p-2">Fecha de Fin</th>
                <th className="p-2">Monto</th>
                <th className="p-2">Anticipo</th>
                <th className="p-2">Restante</th>
                <th className="p-2">Avance (%)</th>
              </tr>
            </thead>
            <tbody>
              {proyectosFinalizados.map((proyecto) => (
                <tr key={proyecto._id} className="text-center">
                  <td className="p-2">{proyecto.nombre}</td>
                  <td className="p-2">{new Date(proyecto.fechainicio).toLocaleDateString()}</td>
                  <td className="p-2">{proyecto.fechafin ? new Date(proyecto.fechafin).toLocaleDateString() : '-'}</td>
                  <td className="p-2">{proyecto.monto}</td>
                  <td className="p-2">{proyecto.anticipo}</td>
                  <td className="p-2">{proyecto.restante}</td>
                  <td className="p-2">{proyecto.avance}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {proyectos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow rounded">
            <Bar data={barDataTotal} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
          <div className="bg-white p-4 shadow rounded">
            <Bar data={barDataAvance} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Clientes;