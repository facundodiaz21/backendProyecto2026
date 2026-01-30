import { Router } from "express";
import empleadosRoutes from "./empleados.routes.js"
import usuariosRoutes from "./usuarios.routes.js"

const router = Router();

router.use("/empleados", empleadosRoutes)
router.use("/usuarios", usuariosRoutes);

export default router;