import { empleadoModel } from "../models/empleados.models.js";

export const obtenerEmpleadosService = async () => {
  return await empleadoModel.find({
    estado: { $ne: "inactivo" },
  });
};
export const crearEmpleadoService = async (data) => {
  return await empleadoModel.create(data);
};
export const obtenerEmpleadosPorIdService = async (id)=>{
return await empleadoModel.findById(id)
}