import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VerProyectos = ({ cliente }) => {
  const [proyectos, setProyectos] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [sumaMontos, setSumaMontos] = useState(0);
  const [sumaAnticipos, setSumaAnticipos] = useState(0);
  const [sumaRestantes, setSumaRestantes] = useState(0);
  const navigate = useNavigate(); // Hook para redirigir

  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/proyecto/cliente/${cliente._id}`);
        const proyectosUsuario = response.data;

        // Calcular las sumas
        const totalMontos = proyectosUsuario.reduce((sum, proyecto) => sum + proyecto.monto, 0);
        const totalAnticipos = proyectosUsuario.reduce((sum, proyecto) => sum + proyecto.anticipo, 0);
        const totalRestantes = proyectosUsuario.reduce((sum, proyecto) => sum + proyecto.restante, 0);

        // Actualizar estados
        setProyectos(proyectosUsuario);
        setSumaMontos(totalMontos);
        setSumaAnticipos(totalAnticipos);
        setSumaRestantes(totalRestantes);
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

  // Datos para la gráfica de resumen financiero
  const dataResumen = {
    labels: ['Monto Total', 'Anticipo Total', 'Restante Total'],
    datasets: [
      {
        label: 'Resumen de Proyectos',
        data: [sumaMontos, sumaAnticipos, sumaRestantes],
        backgroundColor: ['#6b46c1', '#48bb78', '#f56565'], // Colores de las barras
      },
    ],
  };

  const optionsResumen = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Resumen Financiero de Proyectos' },
    },
  };

  // Datos para la gráfica de avances
  const dataAvance = {
    labels: proyectos.map((proyecto) => proyecto.nombre), // Nombre de los proyectos
    datasets: [
      {
        label: 'Porcentaje de Avance',
        data: proyectos.map((proyecto) => proyecto.avance), // Avance de cada proyecto
        backgroundColor: '#3182ce', // Color para todas las barras
      },
    ],
  };

  const optionsAvance = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Avance de Proyectos' },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // Máximo de la escala
        ticks: { stepSize: 10 },
      },
    },
  };

  // Manejar el regreso al menú de usuario
  const handleRegresar = () => {
    navigate('/menu_usuario');
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">Proyectos</h2>

        {isLoading ? (
          <p className="text-center">Cargando proyectos...</p>
        ) : mensaje ? (
          <p className="text-center text-red-500 font-bold">{mensaje}</p>
        ) : (
          <>
            {/* Tabla de proyectos */}
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

            {/* Gráficas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Gráfica Resumen Financiero */}
              <div>
                <Bar data={dataResumen} options={optionsResumen} />
              </div>

              {/* Gráfica Avance de Proyectos */}
              <div>
                <Bar data={dataAvance} options={optionsAvance} />
              </div>
            </div>
          </>
        )}

        {/* Botón de regresar */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleRegresar}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Regresar al Menú
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerProyectos;