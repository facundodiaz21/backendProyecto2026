import { empleadoModel } from "../models/empleados.models.js";
import mongoose from "mongoose";

export const obtenerEmpleadosService = async () => {
  return await empleadoModel.find({
    estado: { $ne: "inactivo" },
  });
};
export const crearEmpleadoService = async (data) => {
  return await empleadoModel.create(data);
};
export const obtenerEmpleadosPorIdService = async (id) => {
  return await empleadoModel.findById(id);
};
export const estadoEmpleadoService = async (id, estado) => {
  const empleado = await empleadoModel.findById(id);
  if (!empleado) return null;

  empleado.estado = estado;
  return await empleado.save();
};
export const editarEmpleadoServicio = async (id, data) => {
  const empleado = await empleadoModel.findById(id);
  if (!empleado) return null;

  const { nombre, contacto, puesto } = data;
  Object.assign(empleado, { nombre, contacto, puesto });
  return await empleado.save();
};
export const eliminarEmpleadoService = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }
  const empleadoEliminado = await empleadoModel.findByIdAndDelete(id);
  return empleadoEliminado;
};
