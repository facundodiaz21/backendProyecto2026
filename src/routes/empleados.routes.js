import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  console.log("hola, estoy funcionando");
  res.status(200).json({mensaje: "estoy funcionando perfecto crack"})
});
export default router;
