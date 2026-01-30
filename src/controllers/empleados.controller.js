import {
  crearEmpleadoService,
  editarEmpleadoServicio,
  eliminarEmpleadoService,
  estadoEmpleadoService,
  obtenerEmpleadosPorIdService,
  obtenerEmpleadosService,
} from "../services/empleados.service.js";
import { AppError } from "../utils/appError.js";

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
export const obtenerEmpleadosPorIdController = async (req, res, next) => {
  try {
    const empleado = await obtenerEmpleadosPorIdService(req.params.id);
    if (!empleado) {
      throw new AppError("empleado no encontrado", 404);
    }
    return res.status(200).json({
      message: "usuario encontrado con exito",
      empleado,
    });
  } catch (error) {
    next(error);
  }
};
export const estadoEmpleadoController = async (req, res, next) => {
  try {
    const empleadoActualizado = await estadoEmpleadoService(
      req.params.id,
      req.body.estado,
    );
    if (!empleadoActualizado) {
      throw new AppError("empleado no encontrado", 404);
    }

    return res.status(200).json({
      message: "Estado actualizado correctamente",
      empleadoActualizado,
    });
  } catch (error) {
    next(error);
  }
};
export const editarEmpleadoController = async (req, res, next) => {
  try {
    const empleadoEditado = await editarEmpleadoServicio(
      req.params.id,
      req.body,
    );
    if (!empleadoEditado) {
      throw new AppError("Usuario no encontrado", 404);
    }
    return res.status(200).json({
      mensaje: "Usuario actualizado con exito",
      empleadoEditado,
    });
  } catch (error) {
    next(error);
  }
};
export const eliminarEmpleadoController = async (req, res, next) => {
  try {
    const empleadoEliminado = await eliminarEmpleadoService(req.params.id);
    if (!empleadoEliminado) {
      throw new AppError("empleado no encontrado", 404);
    }
    return res.status(200).json({
      message: "Empleado eliminado correctamente",
    });
  } catch (error) {
    next(error);
  }
};
