import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VerProyectos = ({ cliente }) => {
  const [proyectos, setProyectos] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/proyecto/cliente/${cliente._id}`);
        setProyectos(response.data);
        setMensaje('');
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setMensaje('El usuario no tiene ningún proyecto.');
        } else {
          setMensaje('Ocurrió un error al obtener los proyectos.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (cliente && cliente._id) {
      obtenerProyectos();
    }
  }, [cliente]);

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">Proyectos</h2>

        {isLoading ? (
          <p className="text-center">Cargando proyectos...</p>
        ) : mensaje ? (
          <p className="text-center text-red-500 font-bold">{mensaje}</p>
        ) : (
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Nombre</th>
                <th className="border border-gray-300 px-4 py-2">Fecha Inicio</th>
                <th className="border border-gray-300 px-4 py-2">Fecha Fin</th>
                <th className="border border-gray-300 px-4 py-2">% Avance</th>
                <th className="border border-gray-300 px-4 py-2">Costo Total</th>
                <th className="border border-gray-300 px-4 py-2">Abono</th>
                <th className="border border-gray-300 px-4 py-2">Restante</th>
              </tr>
            </thead>
            <tbody>
              {proyectos.map((proyecto) => (
                <tr key={proyecto._id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{proyecto.nombre}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(proyecto.fechainicio).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {proyecto.fechafin ? new Date(proyecto.fechafin).toLocaleDateString() : 'Sin definir'}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{proyecto.avance}%</td>
                  <td className="border border-gray-300 px-4 py-2">${proyecto.monto.toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2">${proyecto.anticipo.toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2">${proyecto.restante.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default VerProyectos;
