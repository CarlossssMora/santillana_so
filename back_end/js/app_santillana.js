import dotenv from 'dotenv';                            
dotenv.config();
import express from 'express';
import connectMongoDB from './config/connectMongoDB.js';
import cookieParser from 'cookie-parser'; //mantiente la sesion iniciada hasta que decida cerrar

console.log(process.env.MONGO_URI);
console.log(process.env.PORT);

const app=express();
const PORT= process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.listen(PORT,()=>{
    console.log(`Servidor levantado en el puerto ${PORT}`);
});
