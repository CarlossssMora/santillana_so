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

//Ruta para obtener todos los contactos
router.get('/contacto/lista', async (req, res) => {
    try {
        const contactos= await Contacto.find();
        res.json(contactos);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/contactos/eliminar/:id', async (req, res) => {
    try {
      const citaEliminada = await Contacto.findByIdAndDelete(req.params.id);
      if (!citaEliminada) {
        return res.status(404).json({ message: 'Cita no encontrada.' });
      }
      res.status(200).json({ message: 'Cita eliminada exitosamente.' });
    } catch (error) {
      console.error('Error al eliminar cita:', error.message);
      res.status(500).json({ message: 'Error al eliminar cita.' });
    }
  });
  


// Ruta para buscar citas asociadas a un representante por nombre
router.get('/contactos/citas/:nombre', async (req, res) => {
    const { nombre } = req.params;
  
    try {
      const citas = await Contacto.find({
        nombre_representante: new RegExp(nombre, 'i'), // Búsqueda insensible a mayúsculas/minúsculas
      });
  
      if (citas.length === 0) {
        return res.status(404).json({ message: 'No se encontraron citas.' });
      }
  
      res.status(200).json(citas);
    } catch (error) {
      console.error('Error al buscar citas:', error.message);
      res.status(500).json({ message: 'Error al buscar citas.' });
    }
  });

export default router;