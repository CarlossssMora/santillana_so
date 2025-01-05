import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ActualizarProyecto = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState(null);
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

  const fetchProyectos = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/proyecto/cliente/${userId}`);
      setProyectos(response.data);
    } catch (error) {
      console.error('Error al cargar los proyectos:', error.message);
      setProyectos([]);
    }
  };

  const handleUserChange = (e) => {
    const userId = e.target.value;
    setSelectedUserId(userId);
    setProyectos([]);
    setSelectedProject(null);
    setFormData(null);
    if (userId) fetchProyectos(userId);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setFormData(project);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/proyecto/actualizar/${formData._id}`, formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      alert('Proyecto actualizado correctamente.');
      navigate('/administrador');
    } catch (error) {
      console.error('Error al actualizar el proyecto:', error.message);
      alert('Hubo un error al actualizar el proyecto.');
    }
  };

  const handleRegresar = () => {
    navigate('/administrador');
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-8 bg-gray-100 shadow-2xl rounded-lg">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
        Actualizar Proyecto
      </h2>

      {/* Botón de regresar */}
      <div className="mb-6 flex justify-start">
        <button
          onClick={handleRegresar}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Regresar
        </button>
      </div>

      {/* Selección de Usuario */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Selecciona un Usuario</label>
        <select
          value={selectedUserId}
          onChange={handleUserChange}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Selecciona un Usuario --</option>
          {usuarios.map((usuario) => (
            <option key={usuario._id} value={usuario._id}>
              {usuario.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Tabla de Proyectos */}
      {proyectos.length > 0 && (
        <table className="w-full bg-white shadow-md rounded mb-6">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="p-2">Nombre del Proyecto</th>
              <th className="p-2">Fecha de Inicio</th>
              <th className="p-2">Avance (%)</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proyectos.map((proyecto) => (
              <tr key={proyecto._id} className="text-center">
                <td className="p-2">{proyecto.nombre}</td>
                <td className="p-2">{new Date(proyecto.fechainicio).toLocaleDateString()}</td>
                <td className="p-2">{proyecto.avance}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleProjectSelect(proyecto)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Formulario de Edición */}
      {selectedProject && formData && (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="nombre"
            placeholder="Nombre del Proyecto"
            value={formData.nombre}
            onChange={handleInputChange}
            className="block w-full border p-2 mb-4"
            required
          />
          <input
            name="fechainicio"
            type="date"
            value={formData.fechainicio.split('T')[0]}
            onChange={handleInputChange}
            className="block w-full border p-2 mb-4"
            required
          />
          <input
            name="fechafin"
            type="date"
            value={formData.fechafin ? formData.fechafin.split('T')[0] : ''}
            onChange={handleInputChange}
            className="block w-full border p-2 mb-4"
          />
          <input
            name="responsable"
            placeholder="Responsable"
            value={formData.responsable}
            onChange={handleInputChange}
            className="block w-full border p-2 mb-4"
          />
          <textarea
            name="comentarios"
            placeholder="Comentarios"
            value={formData.comentarios}
            onChange={handleInputChange}
            className="block w-full border p-2 mb-4"
          ></textarea>
          <input
            name="avance"
            type="number"
            placeholder="Avance (%)"
            value={formData.avance}
            onChange={handleInputChange}
            className="block w-full border p-2 mb-4"
            min="0"
            max="100"
          />
          <input
            name="monto"
            type="number"
            placeholder="Monto Total"
            value={formData.monto}
            onChange={handleInputChange}
            className="block w-full border p-2 mb-4"
            required
          />
          <input
            name="anticipo"
            type="number"
            placeholder="Anticipo"
            value={formData.anticipo}
            onChange={handleInputChange}
            className="block w-full border p-2 mb-4"
          />
          <input
            name="restante"
            type="number"
            placeholder="Restante"
            value={formData.restante}
            onChange={handleInputChange}
            className="block w-full border p-2 mb-4"
          />
          <select
            name="statusFactura"
            value={formData.statusFactura}
            onChange={handleInputChange}
            className="block w-full border p-2 mb-4"
            required
          >
            <option value="Pendiente">Pendiente</option>
            <option value="Pagado">Pagado</option>
            <option value="Cancelado">Cancelado</option>
          </select>

          <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              Actualizar Proyecto
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ActualizarProyecto;