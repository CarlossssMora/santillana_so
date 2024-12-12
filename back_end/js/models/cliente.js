import mongoose from 'mongoose';  

const { Schema } = mongoose;

const clienteSchema = new Schema({
    usuario: { type: String, required: true, unique: true },
    contrasenia: { type: String, required: true },
    nombre: { type: String, required: true },
    nombreCompania:{type:String,reuired:true},
    razonSocial: { type: String, required:true,unique:true},
    RFC: { type: String, unique: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    correo: { type: String, required: true,unique:true },
}); 

export default mongoose.model('Cliente', clienteSchema);
