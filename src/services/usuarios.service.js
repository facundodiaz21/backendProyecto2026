import UsuarioModel from "../models/usuarios.model.js";
import argon from "argon2";
import jwt from "jsonwebtoken";

// Registro
export const registroUsuarioServicio = async (datosUsuario) => {
  const { email, password } = datosUsuario;

  const usuarioExistente = await UsuarioModel.findOne({ email });
  if (usuarioExistente) {
    throw new Error("El email ya está registrado");
  }

  const nuevoUsuario = new UsuarioModel(datosUsuario);

  nuevoUsuario.password = await argon.hash(password);

  await nuevoUsuario.save();

  return {
    id: nuevoUsuario._id,
    usuario: nuevoUsuario.usuario,
    email: nuevoUsuario.email,
    rol: nuevoUsuario.rol,
  };
};

// Login
export const loginUsuarioServicio = async ({ email, password }) => {
  const usuarioExistente = await UsuarioModel.findOne({ email }).select(
    "+password"
  );

  if (!usuarioExistente) {
    throw new Error("Usuario o contraseña incorrectos");
  }

  const passwordOk = await argon.verify(
    usuarioExistente.password,
    password
  );

  if (!passwordOk) {
    throw new Error("Usuario o contraseña incorrectos");
  }

  const payload = {
    id: usuarioExistente._id,
    rol: usuarioExistente.rol,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });

  return {
    token,
    usuario: {
      id: usuarioExistente._id,
      usuario: usuarioExistente.usuario,
      email: usuarioExistente.email,
      rol: usuarioExistente.rol,
    },
  };
};