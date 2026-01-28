import { Router } from "express";
import {
  crearEmpleadoController,
  editarEmpleadoController,
  eliminarEmpleadoController,
  estadoEmpleadoController,
  obtenerEmpleadosController,
  obtenerEmpleadosPorIdController,
} from "../controllers/empleados.controller.js";
import { validarEmpleadoPatch, validarEmpleadosPost, validarEmpleadosPut } from "../middleware/validacionEmpleado.middleware.js";
const router = Router();

router.get("/", obtenerEmpleadosController);
router.post("/registro", validarEmpleadosPost, crearEmpleadoController);
router.get("/:id", obtenerEmpleadosPorIdController);
router.patch("/:id/estado",validarEmpleadoPatch, estadoEmpleadoController);
router.put("/:id",validarEmpleadosPut, editarEmpleadoController);
router.delete("/:id", eliminarEmpleadoController);
export default router;
