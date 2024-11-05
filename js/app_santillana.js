//Importamos el módulo http de Node.js, express,rutas y modelos
const express= require ('express');
const http= require ('http');
const inicio = require('./routes/inicio');
//const models= require('./models/');


//Definimos el puerto en el que el servidor va a escuchar
const PORT=5000;
const app= express();

//Middleware para usar JSON
app.use(express.json());

//Usamos las rutas y modelos definidas
app.use(inicio);
//app.use(modelo1)

//MANEJO DE ERRORES

//Manejo de rutas no encontradas
app.use((req,res,next)=>{
    res.status(404).json({error: 'Ruta no encontrada'});
});

//Manejo de errores internos en el servidos
app.use((req,res,next)=>{
    res.status(500).json({error: 'Error interno del servidor'});
});

//Creamos el servidor
const server=http.createServer(app);

//El servidor escucha en el puerto que se especifico
server.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});
