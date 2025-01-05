import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CrearProyecto = () => {
  const [formData, setFormData] = useState({
    ClienteID: '', // ID del cliente asociado
    nombre: '',
    fechainicio: '',
    fechafin: '',
    responsable: '',
    comentarios: '',
    avance: 0,
    factura: '',
    monto: '',
    anticipo: '',
    restante: '',
    statusFactura: 'Pendiente', // Valor predeterminado
  });

  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const navigate = useNavigate(); // Hook para redirigir

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/proyecto/nuevo', formData);
      console.log('Proyecto creado:', response.data);
      alert('¡Proyecto creado con éxito!');

      // Redirige a MenuAdministrador después de crear el proyecto
      navigate('/administrador');
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
      alert('Hubo un error al crear el proyecto.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegresar = () => {
    navigate('/administrador'); // Redirige al menú del administrador
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">Crear Proyecto</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="ClienteID"
          placeholder="ID del Cliente"
          value={formData.ClienteID}
          onChange={handleChange}
          className="block w-full border p-2 mb-4"
          required
        />
        <input
          name="nombre"
          placeholder="Nombre del Proyecto"
          value={formData.nombre}
          onChange={handleChange}
          className="block w-full border p-2 mb-4"
          required
        />
        <input
          name="fechainicio"
          type="date"
          value={formData.fechainicio}
          onChange={handleChange}
          className="block w-full border p-2 mb-4"
          required
        />
        <input
          name="fechafin"
          type="date"
          value={formData.fechafin}
          onChange={handleChange}
          className="block w-full border p-2 mb-4"
        />
        <input
          name="responsable"
          placeholder="Responsable"
          value={formData.responsable}
          onChange={handleChange}
          className="block w-full border p-2 mb-4"
        />
        <textarea
          name="comentarios"
          placeholder="Comentarios"
          value={formData.comentarios}
          onChange={handleChange}
          className="block w-full border p-2 mb-4"
        ></textarea>
        <input
          name="avance"
          type="number"
          placeholder="Avance (%)"
          value={formData.avance}
          onChange={handleChange}
          className="block w-full border p-2 mb-4"
          min="0"
          max="100"
        />
        <input
          name="factura"
          placeholder="Número de Factura"
          value={formData.factura}
          onChange={handleChange}
          className="block w-full border p-2 mb-4"
        />
        <input
          name="monto"
          type="number"
          placeholder="Monto Total"
          value={formData.monto}
          onChange={handleChange}
          className="block w-full border p-2 mb-4"
          required
        />
        <input
          name="anticipo"
          type="number"
          placeholder="Anticipo"
          value={formData.anticipo}
          onChange={handleChange}
          className="block w-full border p-2 mb-4"
        />
        <input
          name="restante"
          type="number"
          placeholder="Restante"
          value={formData.restante}
          onChange={handleChange}
          className="block w-full border p-2 mb-4"
        />
        <select
          name="statusFactura"
          value={formData.statusFactura}
          onChange={handleChange}
          className="block w-full border p-2 mb-4"
          required
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Pagado">Pagado</option>
          <option value="Cancelado">Cancelado</option>
        </select>

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
            {isLoading ? 'Guardando...' : 'Crear Proyecto'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearProyecto;