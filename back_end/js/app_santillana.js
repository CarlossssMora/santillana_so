//IMPORTACION DE HERRAMIENTAS
import dotenv from 'dotenv';                            
import express from 'express';
import connectMongoDB from './config/connectMongoDB.js';
import cookieParser from 'cookie-parser'; //mantiente la sesion iniciada hasta que decida cerrar

//IMPORTACION DE RUTAS
import cliente from './routes/cliente.js';  

//IMPORTACION DE MODELOS

//IMPORTACION DE MIDDLEWARES


dotenv.config();//Utilizar dotenv para llamar las variables del archivo .env
console.log(process.env.MONGO_URI);
console.log(process.env.PORT);

const app=express();
const PORT= process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/',cliente);

app.listen(PORT,()=>{
    console.log(`Servidor levantado en el puerto ${PORT}`);
});
