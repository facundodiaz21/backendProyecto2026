import {
  crearEmpleadoService,
  obtenerEmpleadosPorIdService,
  obtenerEmpleadosService,
} from "../services/empleados.service.js";

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
export const obtenerEmpleadosPorIdController = async (req, res) => {
  const id = req.params.id;
  const empleado = await obtenerEmpleadosPorIdService(id);

  if (!empleado)
    return res.status(404).json({
      mensaje: "usuario no encontrado",
      datos: null,
    });
  return res.status(202).json({
    mensaje: "usuario encontrado con exito",
    empleado,
  });
};
