import mongoose from '../db';
const { Schema } = mongoose;

const clienteSchema = new Schema({
    usuario: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    nombre: { type: String, required: true },
    regimenFiscal: { type: String, required: true },
    RFC: { type: String, required: true, unique: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    correo: { type: String, required: true },
});

export default mongoose.model('Cliente', clienteSchema);
