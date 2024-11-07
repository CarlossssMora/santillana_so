import mongoose from 'mongoose';  
const { Schema } = mongoose;

const contactoSchema = new Schema({
    nombre_representante: { type: String, required: true },
    nombre_empresa: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String },
    pais: { type: String, required: true },
    fecha_cita: { type: Date, required: true },
});

export default mongoose.model('Contacto', contactoSchema);
