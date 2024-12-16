import mongoose from 'mongoose';  

const { Schema } = mongoose;

const adminSchema = new Schema({
    contrasenia: { type: String, required: true },
    correo: { type: String, required: true,unique:true },
    nombre: {type: String, required:true},
}); 

export default mongoose.model('Administrador', adminSchema);

