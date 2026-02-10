import { registroUsuarioServicio } from "../services/usuarios.service.js";
import { loginUsuarioServicio } from "../services/usuarios.service.js";
import usuariosModel from "../models/usuarios.model.js";

export const registroUsuarioController = async (req, res) => {
  try {
    const usuario = await registroUsuarioServicio(req.body);
    res.status(201).json({
      msg: "Usuario creado",
      usuario,
    });
  } catch (error) {
    next (error);
  }
};

export const loginUsuarioController = async (req, res) => {
  try {
    const {token, usuario} = await loginUsuarioServicio(req.body);

    if (!usuario) {
      return res.status(401).json({
        msg: "Usuario o contraseña incorrectos",
      });
    }

    res.json({
      msg: `Bienvenido ${usuario.rol}`,
      token,
      usuario,
    });
  } catch (error) {
    next(error);
  } 
};

// Obtener Perfil
export const obtenerPerfilController = async (req, res) => {
  try {
    res.json({
      usuario: {
        id: req.usuario._id,
        usuario: req.usuario.usuario,
        email: req.usuario.email,
        rol: req.usuario.rol,
      },
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al obtener el perfil",
    });
  }
};

export const obtenerUsuariosController = async (req, res) => {
  try {
    const usuarios = await usuariosModel.find({}, "-password");

    res.json({
      usuarios,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al obtener usuarios",
    });
  }
};

// Eliminar usuario
export const eliminarUsuarioController = async (req, res) => {
  try {
    const { id } = req.params;

    const usuarioEliminado = await usuariosModel.findByIdAndDelete(id);

    if (!usuarioEliminado) {
      return res.status(404).json({
        msg: "Usuario no encontrado",
      });
    }

    res.json({
      msg: "Usuario eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al eliminar usuario",
    });
  }
};

