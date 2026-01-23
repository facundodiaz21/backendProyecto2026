import { crearEmpleadoService, obtenerEmpleadosService } from "../services/empleados.service.js";

export const obtenerEmpleadosController = async (req, res) => {
  const empleados = await obtenerEmpleadosService();
  res.status(200).json({
    mensaje: "peticion exitosa",
    datos: empleados,
  });
};
export const crearEmpleadoController = async (req, res) => {
  const empleado = await crearEmpleadoService(req.body);
  res.status(201).json({
    mensaje: "Empleado creado con exito!",
    empleado,
  });
};
