import mongoose from "mongoose";
import { rolesPermitidos } from "../const/roles.js";
import { estadoEmpleado } from "../const/estado.js";

const { Schema } = mongoose;
const empleadoSchema = new Schema(
  {
    nombre: { type: String, required: true, trim: true },
    puesto: { type: String, required: true, trim: true },
    contacto: { type: String, required: true, trim: true },
    rol: { type: String, enum: rolesPermitidos, default: "recepcion" },
    estado: { type: String, enum: estadoEmpleado, default: "activo" },
  },
  {
    timestamps: true,
  },
);
export const empleadoModel = mongoose.model("empleado", empleadoSchema);
