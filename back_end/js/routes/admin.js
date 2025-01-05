import express from 'express';
import Administrador from '../models/admin.js';

const router = express.Router();

// Ruta para iniciar sesión del administrador
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

    res.status(200).json({ message: 'Inicio de sesión exitoso', admin: administrador });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para actualizar el perfil del administrador
router.put('/administrador/actualizar/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Encuentra y actualiza al administrador por su ID
    const adminActualizado = await Administrador.findByIdAndUpdate(
      id,
      req.body, // Los nuevos datos del administrador
      { new: true } // Devuelve el documento actualizado
    );

    if (!adminActualizado) {
      return res.status(404).json({ message: 'Administrador no encontrado' });
    }

    res.status(200).json(adminActualizado);
  } catch (error) {
    console.error('Error al actualizar el perfil del administrador:', error);
    res.status(500).json({ message: 'Error al actualizar el perfil del administrador' });
  }
});

export default router;