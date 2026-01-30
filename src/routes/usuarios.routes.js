import { Router } from "express";
import {
  registroUsuarioController,
} from "../controllers/usuarios.controller.js";

const router = Router();

router.post("/registro", registroUsuarioController);

export default router;