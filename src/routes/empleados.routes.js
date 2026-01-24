import { Router } from "express";
import { crearEmpleadoController, estadoEmpleadoController, obtenerEmpleadosController, obtenerEmpleadosPorIdController } from "../controllers/empleados.controller.js";
const router = Router();

router.get("/", obtenerEmpleadosController);
router.post("/registro", crearEmpleadoController);
router.get("/:id", obtenerEmpleadosPorIdController)
router.patch("/:id/estado", estadoEmpleadoController)
export default router;
