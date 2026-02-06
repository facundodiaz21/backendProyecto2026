import UsuarioModel from "../models/usuarios.model.js"
import argon from "argon2"
import jwt from "jsonwebtoken"

export const registroUsuarioServicio = async (datosUsuario)=>{
  const nuevoUsuarioDB = new UsuarioModel (datosUsuario);
  nuevoUsuarioDB.password = await argon.hash(nuevoUsuarioDB.password);
  await nuevoUsuarioDB.save();
  return nuevoUsuarioDB;
}

export const loginUsuarioServicio = async (datosUsuario) => {
  const usuarioExistente = await UsuarioModel.findOne({
    email: datosUsuario.email,
  });
  if (!usuarioExistente) return null;

  const contraseniaOk = await argon.verify(
    usuarioExistente.password,
    datosUsuario.password
  );
  if (!contraseniaOk) return null;

  const rolPermitidos = ["admin", "usuario"];
  const rolValido = rolPermitidos.includes(usuarioExistente.rol);

  const payload = {
    usuario: usuarioExistente.usuario,
    email: usuarioExistente.email,
    rol: usuarioExistente.rol,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });

  return {
    statusCode: 200,
    json: {
      msg: `Bienvenido ${
        rolValido ? usuarioExistente.rol : "ROL DESCONOCIDO"
      }`,
      usuarioLogueado: payload,
      token,
    },
  };
};