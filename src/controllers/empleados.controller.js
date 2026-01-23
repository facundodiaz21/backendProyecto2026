import { obtenerEmpleadosService } from "../services/empleados.service.js";

export const obtenerEmpleadosController = async (req, res) => {
  const empleados = await obtenerEmpleadosService();
  res.status(200).json({
    mensaje: "peticion exitosa",
    datos: empleados,
  });
};
