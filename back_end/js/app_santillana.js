//IMPORTACION DE HERRAMIENTAS
import dotenv from 'dotenv';                            
import connectMongoDB from './config/connectMongoDB.js';

//IMPORTACION DE MIDDLEWARES
import express from 'express';
import cookieParser from 'cookie-parser'; 
import cors from 'cors';

//IMPORTACION DE RUTAS
import cliente from './routes/cliente.js';  
import proyecto from './routes/proyecto.js';
import contacto from './routes/contacto.js';


dotenv.config();//Utilizar dotenv para llamar las constantes del archivo .env


const app=express();
const PORT= process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true})); //Permite que tu aplicación pueda entender y procesar datos que vienen desde formularios HTML. Es útil cuando tienes datos enviados desde formularios, y convierte la información codificada (como name=John&age=30) en un objeto JavaScript.
app.use(cookieParser());//Permite que tu aplicación lea cookies en las solicitudes entrantes. Las cookies son pequeños fragmentos de datos que los navegadores almacenan y envían al servidor en cada solicitud. Esto es útil para mantener información sobre la sesión del usuario o para recordar preferencias.
app.use(cors());// Permite que tu servidor acepte solicitudes desde otros dominios. Sin cors, los navegadores bloquearán estas solicitudes, especialmente cuando el frontend y backend están en diferentes servidores.


app.use('/',cliente);
app.use('/',proyecto);
app.use('/',contacto);



app.listen(PORT,()=>{
    console.log(`Servidor levantado en el puerto ${PORT}`);
    connectMongoDB();
});


