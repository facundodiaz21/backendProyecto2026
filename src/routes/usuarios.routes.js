import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { roleMiddleware } from "../middleware/role.middleware.js";
import {
  loginUsuarioController,
  registroUsuarioController,
  obtenerPerfilController,
  obtenerUsuariosController,
  eliminarUsuarioController,
} from "../controllers/usuarios.controller.js";

const router = Router();

// Auth
router.post("/registro", registroUsuarioController);
router.post("/login", loginUsuarioController);

// Perfil
router.get("/perfil", authMiddleware, obtenerPerfilController);

// Admin
router.get("/", authMiddleware, roleMiddleware(["admin"]), obtenerUsuariosController);
router.delete("/:id",authMiddleware,roleMiddleware(["admin"]),eliminarUsuarioController);

export default router;