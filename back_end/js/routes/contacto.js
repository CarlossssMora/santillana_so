import express from 'express';
import Contacto from '../models/contacto.js';

const router= express.Router();

//Ruta para crear un nuevo contacto
router.post('/contacto/nuevo',async(req,res)=>{
    try{
        const nuevoContacto=new Contacto(req.body); //contiene los datos del proyecto
        const contactoGuardado= await nuevoContacto.save();
        res.status(201).json(contactoGuardado);   
    }
    catch (error){
        res.status(400).json({message: error.message});
    }
});

//Ruta para obtener todos los proyectos
router.get('/contacto/lista', async (req, res) => {
    try {
        const contactos= await Contacto.find();
        res.json(contactos);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para eliminar un cliente
router.delete('/contacto/eliminar/:id', async (req, res) => {
    try {
        const contactoEliminado = await Contacto.findByIdAndDelete(req.params.id);
        if (!contactoEliminado) return res.status(404).json({ message: "Contacto no encontrado" });
        res.json({ message: "Contacto eliminado" });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;