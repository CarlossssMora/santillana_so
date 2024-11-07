//IMPORTACION DE HERRAMIENTAS
import dotenv from 'dotenv';                            
import express from 'express';
import connectMongoDB from './config/connectMongoDB.js';
import cookieParser from 'cookie-parser'; //mantiente la sesion iniciada hasta que decida cerrar

//IMPORTACION DE RUTAS
import cliente from './routes/cliente.js';  
import proyecto from './routes/proyecto.js';
import contacto from './routes/contacto.js';
//IMPORTACION DE MIDDLEWARES


dotenv.config();//Utilizar dotenv para llamar las constantes del archivo .env


const app=express();
const PORT= process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/',cliente);
app.use('/',proyecto);
app.use('/',contacto);



app.listen(PORT,()=>{
    console.log(`Servidor levantado en el puerto ${PORT}`);
    connectMongoDB();
});


