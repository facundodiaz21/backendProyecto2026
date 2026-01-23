import { Router } from "express";
import { crearEmpleadoController, obtenerEmpleadosController, obtenerEmpleadosPorIdController } from "../controllers/empleados.controller.js";
const router = Router();

router.get("/", obtenerEmpleadosController);
router.post("/registro", crearEmpleadoController);
router.get("/:id", obtenerEmpleadosPorIdController)
export default router;
