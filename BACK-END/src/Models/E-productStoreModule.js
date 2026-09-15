import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    imagen: { type: String, default: "" },
    stock: { type: Number, default: 0 },
    valoracion: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("Product", productSchema);