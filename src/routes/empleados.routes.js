import { Router } from "express";
import { crearEmpleadoController, obtenerEmpleadosController } from "../controllers/empleados.controller.js";
const router = Router();

router.get("/", obtenerEmpleadosController);
router.post("/registro", crearEmpleadoController);
export default router;
