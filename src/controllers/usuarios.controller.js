import { registroUsuarioServicio } from "../services/usuarios.service.js";
import { loginUsuarioServicio } from "../services/usuarios.service.js";

export const registroUsuarioController = async (req, res) => {
  try {
    const usuario = await registroUsuarioServicio(req.body);
    res.status(201).json({
      msg: "Usuario creado",
      usuario,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg: "Error al crear usuario",
    });
  }
};

export const loginUsuarioController = async (req, res) => {
  try {
    const usuario = await loginUsuarioServicio(req.body);

    if (!usuario) {
      return res.status(401).json({
        msg: "Usuario o contraseña incorrectos",
      });
    }

    res.json({
      msg: "Usuario logueado con éxito",
      usuario,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Error interno",
    });
  }
};


