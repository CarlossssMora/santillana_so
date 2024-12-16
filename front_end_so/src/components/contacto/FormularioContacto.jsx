import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
const [formData, setFormData] = useState({
    nombre_empresa: '',
    nombre_representante: '',
    correo: '',
    telefono: '',
    pais: '',
    fecha_cita: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post('http://localhost:5000/contacto/nuevo', formData);
    console.log('Formulario enviado:', response.data);
    alert('¡Formulario enviado con éxito!');

    // Limpiar formulario
    setFormData({
        nombre_empresa: '',
        nombre_representante: '',
        correo: '',
        telefono: '',
        pais: '',
        fecha_cita: '',
    });
    } catch (error) {
    console.error('Error al enviar el formulario:', error);
    alert('Hubo un error al enviar el formulario.');
    }
};

return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md">

    <input name="nombre_empresa" placeholder="Nombre de la Empresa" value={formData.nombre_empresa} onChange={handleChange} className="block w-full border p-2 mb-4" required />
    <input name="nombre_representante" placeholder="Nombre del Representante" value={formData.nombre_representante} onChange={handleChange} className="block w-full border p-2 mb-4" required />
    <input name="correo" type="email" placeholder="Correo Electrónico" value={formData.correo} onChange={handleChange} className="block w-full border p-2 mb-4" required />
    <input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} className="block w-full border p-2 mb-4" required/>
    <select name="pais" value={formData.pais} onChange={handleChange} className="block w-full border p-2 mb-4" required>
        <option value="">- Seleccione País -</option>
        <option value="MX">México</option>
        <option value="EEUU">Estados Unidos</option>
        <option value="PR">Perú</option>
        <option value="CO">Colombia</option>
        <option value="AR">Argentina</option>
        <option value="ES">España</option>
        <option value="CL">Chile</option>
    </select>
    <input name="fecha_cita" type="date" value={formData.fecha_cita} onChange={handleChange} className="block w-full border p-2 mb-6" required />

    <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
        Enviar
    </button>
    </form>
);
};

export default ContactForm;
