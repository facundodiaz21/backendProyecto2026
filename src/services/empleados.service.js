import { empleadoModel } from "../models/empleados.models.js";

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
  return await empleadoModel.findByIdAndUpdate(
    id,
    { estado: estado },
    {
      new: true,
    },
  );
};
export const editarEmpleadoServicio = async (id, data) => {
  return await empleadoModel.findByIdAndUpdate(id, data, { new: true });
};
