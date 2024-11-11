//Importamos el modulo express
import express from 'express';

//Creamos un enrutador
const router= express.Router();

//Ruta principal (GET /)
router.get('/',(req,res)=>{
    res.json({message: 'Bienvenido a Santillana'});
});

export default router;