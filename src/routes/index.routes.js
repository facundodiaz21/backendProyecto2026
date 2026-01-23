import { Router } from "express";
import empleadosRoutes from "./empleados.routes.js"
const router = Router();

router.use("/empleados", empleadosRoutes)
export default router;