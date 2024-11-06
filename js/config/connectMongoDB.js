// Función para conectar a la base de datos
const connectMongoDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("La variable de entorno MONGO_URI no está definida");
        }
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado a MongoDB:', conn.connection.host);
    } catch (error) {
        console.error('Error en la conexión a MongoDB:', error);
        process.exit(1); // Salir del proceso en caso de error
    }
};

// Exportar la función de conexión
export default connectMongoDB;



