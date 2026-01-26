import {
  crearEmpleadoService,
  editarEmpleadoServicio,
  eliminarEmpleadoService,
  estadoEmpleadoService,
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
export const estadoEmpleadoController = async (req, res) => {
  const id = req.params.id;
  const estado = req.body.estado;
  const empleadoActualizado = await estadoEmpleadoService(id, estado);

  if (!empleadoActualizado)
    return res.status(404).json({
      mensaje: "empleado no encontrado",
      datos: null,
    });
  res.status(200).json({
    mensaje: "estado de usuario modificado con exito",
    empleadoActualizado,
  });
};
export const editarEmpleadoController = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const empleadoEditado = await editarEmpleadoServicio(id, data);

  if (!empleadoEditado) {
    return res.status(404).json({
      mensaje: "Usuario no encontrado",
      datos: null,
    });
  }
  res.status(200).json({
    mensaje: "Usuario actualizado con exito",
    empleadoEditado,
  });
};
export const eliminarEmpleadoController = async (req, res) => {
  const id = req.params.id;
  const empleadoEliminado = await eliminarEmpleadoService(id);

  if (!empleadoEliminado) {
    return res.status(404).json({ mensaje: "usuario no encontrado" });
  }
  res.status(200).json({ mensaje: "empleado eliminado con exito" });
};
