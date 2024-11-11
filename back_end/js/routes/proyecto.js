import express from 'express';
import Proyecto from '../models/proyecto.js';

const router= express.Router();

//Ruta para crear un nuevo proyecto
router.post('/proyecto/nuevo',async(req,res)=>{
    try{
        const nuevoProyecto=new Proyecto(req.body); //contiene los datos del proyecto
        const proyectoGuardado= await nuevoProyecto.save();
        res.status(201).json(proyectoGuardado);   
    }
    catch (error){
        res.status(400).json({message: error.message});
    }
});

//Ruta para obtener todos los proyectos
router.get('/proyecto/lista', async (req, res) => {
    try {
        const proyectos= await Proyecto.find();
        res.json(proyectos);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para obtener un proyecto por su ID
router.get('/proyecto/obtener/:id', async (req, res) => {
    try {
        const proyecto = await Proyecto.findById(req.params.id);
        if (!proyecto) return res.status(404).json({ message: "Proyecto no encontrado" });
        res.json(proyecto);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para actualizar un proyecto
router.put('/proyecto/actualizar/:id', async (req, res) => {
    try {
        const proyectoActualizado = await Proyecto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!proyectoActualizado) return res.status(404).json({ message: "Proyecto no encontrado" });
        res.json(proyectoActualizado);
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para eliminar un cliente
router.delete('/proyecto/eliminar/:id', async (req, res) => {
    try {
        const proyectoEliminado = await Proyecto.findByIdAndDelete(req.params.id);
        if (!proyectoEliminado) return res.status(404).json({ message: "Proyecto no encontrado" });
        res.json({ message: "Proyecto eliminado" });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;