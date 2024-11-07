import mongoose from 'mongoose';  
const { Schema } = mongoose;

const proyectoSchema = new Schema({
    ClienteID: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
    nombre: { type: String, required: true },
    fechainicio: { type: Date, required: true },
    fechafin: { type: Date },
    responsable: { type: String },
    comentarios: { type: String },
    avance: { type: Number, min: 0, max: 100, default: 0 },
    factura: { type: String },
    monto: { type: Number, required: true },
    anticipo: { type: Number, default: 0 },
    restante: { type: Number },
    statusFactura: { type: String, enum: ['Pendiente', 'Pagado', 'Cancelado'], default: 'Pendiente' },
});

export default mongoose.model('Proyecto', proyectoSchema);
