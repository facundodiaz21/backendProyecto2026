import { Router } from "express";
import { obtenerEmpleadosController } from "../controllers/empleados.controller.js";
const router = Router();

router.get("/", obtenerEmpleadosController);
export default router;
