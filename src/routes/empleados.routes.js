import { Router } from "express";
import { crearEmpleadoController, editarEmpleadoController, estadoEmpleadoController, obtenerEmpleadosController, obtenerEmpleadosPorIdController } from "../controllers/empleados.controller.js";
const router = Router();

router.get("/", obtenerEmpleadosController);
router.post("/registro", crearEmpleadoController);
router.get("/:id", obtenerEmpleadosPorIdController)
router.patch("/:id/estado", estadoEmpleadoController)
router.put("/:id", editarEmpleadoController)
export default router;
