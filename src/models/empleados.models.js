import mongoose from "mongoose";
import { rolesPermitidos } from "../const/roles.js";
import { estadoEmpleado } from "../const/estado.js";

const { Schema } = mongoose;
const empleadoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 35,
    },
    puesto: {
      type: String,
      enum: rolesPermitidos,
      default: "recepcion",
      minlength: 3,
      maxlength: 15,
    },
    contacto: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 10,
    },
    estado: { type: String, enum: estadoEmpleado, default: "activo" },
  },
  {
    timestamps: true,
  },
);
export const empleadoModel = mongoose.model("empleado", empleadoSchema);
