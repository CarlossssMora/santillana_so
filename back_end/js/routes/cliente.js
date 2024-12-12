import express from 'express';
import Cliente from '../models/cliente.js'; // Asegúrate de usar la ruta correcta

const router = express.Router();

// Ruta para crear un nuevo cliente
router.post('/cliente/nuevo', async (req, res) => {
    try {
        const nuevoCliente = new Cliente(req.body); // req.body contiene los datos del cliente
        const clienteGuardado = await nuevoCliente.save();
        res.status(201).json(clienteGuardado);
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para obtener todos los clientes
router.get('/cliente/lista', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para obtener un cliente por su ID
router.get('/cliente/obtener/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
        res.json(cliente);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para actualizar un cliente
router.put('/cliente/actualizar/:id', async (req, res) => {
    try {
        const clienteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!clienteActualizado) return res.status(404).json({ message: "Cliente no encontrado" });
        res.json(clienteActualizado);
    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para eliminar un cliente
router.delete('/cliente/eliminar/:id', async (req, res) => {
    try {
        const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
        if (!clienteEliminado) return res.status(404).json({ message: "Cliente no encontrado" });
        res.json({ message: "Cliente eliminado" });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});



router.post('/cliente/login', async (req, res) => {
  const { correo, contrasenia } = req.body;

  try {
    // Busca al cliente con el usuario y contraseña
    const cliente = await Cliente.findOne({ correo });

    if (!cliente) {
      return res.status(400).json({ message: 'Usuario incorrecto' });
    }

    // Compara la contraseña enviada con la del cliente (sin encriptar)
    if (cliente.contrasenia !== contrasenia) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Envía el cliente como respuesta
    res.status(200).json({ message: 'Inicio de sesión exitoso', cliente });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;