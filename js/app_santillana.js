// Importamos el módulo http de Node.js, express, rutas,modelos, etc
require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const http = require('http');
const { connectDB } = require('./config/db'); // Importar la función de conexión a DB
const inicio = require('./routes/inicio');
// const models = require('./models/');

// Definimos el puerto en el que el servidor va a escuchar
const PORT = process.env.PORT || 5000; // Usar el puerto de la variable de entorno si está definida
const app = express();

// Middleware para usar JSON
app.use(express.json());

// Conecta la aplicación a la base de datos de MongoDB
connectDB(process.env.DB_URI)
    .then(() => {
        console.log('Conexión a la base de datos establecida');

        // Usamos las rutas y modelos definidos
        app.use(inicio);
        // app.use(modelo1)

        // MANEJO DE ERRORES
        // Manejo de rutas no encontradas
        app.use((req, res, next) => {
            res.status(404).json({ error: 'Ruta no encontrada' });
        });

        // Manejo de errores internos en el servidor
        app.use((err, req, res, next) => { // Middleware para errores
            console.error(err);
            res.status(500).json({ error: 'Error interno del servidor' });
        });

        // Creamos el servidor
        const server = http.createServer(app);

        // El servidor escucha en el puerto especificado
        server.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });

        // Cerrar conexión a la base de datos al cerrar el servidor
        process.on('SIGINT', () => {
            mongoose.connection.close(() => {
                console.log('Conexión a la base de datos cerrada');
                process.exit(0);
            });
        });
    })
    .catch((error) => {
        console.error('Error al conectar con la base de datos:', error);
    });
