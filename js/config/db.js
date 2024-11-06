const mongoose = require('mongoose');
mongoose.set('strictQuery', true); // Para mantener el comportamiento actual de Mongoose


// Función para conectar a la base de datos
const connectDB = (uri) => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.error('Error de conexión a MongoDB:', error));
};

// Exportar la función de conexión
module.exports = { connectDB };
