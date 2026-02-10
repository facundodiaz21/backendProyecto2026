import jwt from "jsonwebtoken";
import Usuario from "../models/usuarios.model.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acceso no autorizado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const usuario = await Usuario.findById(decoded.id).select("-password");

    if (!usuario) {
      return res.status(401).json({ msg: "Usuario no encontrado" });
    }

    req.usuario = usuario;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Token inválido" });
  }
};