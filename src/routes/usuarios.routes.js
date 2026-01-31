import { Router } from "express";
import {
  loginUsuarioController,
  registroUsuarioController,
} from "../controllers/usuarios.controller.js";

const router = Router();

router.post("/registro", registroUsuarioController);
router.post("/login", loginUsuarioController);

export default router;