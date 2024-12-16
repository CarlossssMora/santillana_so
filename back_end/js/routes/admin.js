import express from 'express';
import Administrador from  '../models/admin.js';

const router = express.Router();

router.post('/admin/login', async (req, res) => {
    const { correo, contrasenia } = req.body;
  
    try {
      const administrador = await Administrador.findOne({ correo });
  
      if (!administrador) {
        return res.status(400).json({ message: 'Administrador incorrecto' });
      }
  
      if (administrador.contrasenia !== contrasenia) {
        return res.status(400).json({ message: 'Contraseña incorrecta' });
      }
  
      // Envía la respuesta como 'admin' para que sea consistente
      res.status(200).json({ message: 'Inicio de sesión exitoso', admin: administrador });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  


export default router;