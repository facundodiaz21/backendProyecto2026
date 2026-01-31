import UsuarioModel from "../models/usuarios.model.js"
import argon from "argon2"

export const registroUsuarioServicio = async (datosUsuario)=>{
  const nuevoUsuarioDB = new UsuarioModel (datosUsuario);
  nuevoUsuarioDB.password = await argon.hash(nuevoUsuarioDB.password);
  await nuevoUsuarioDB.save();
  return nuevoUsuarioDB;
}

export const loginUsuarioServicio = async (datosUsuario) => {
  const usuarioExistente = await UsuarioModel.findOne({
    usuario: datosUsuario.usuario,
  });
  if(!usuarioExistente) return null
    
 const contraseniaOk = await argon.verify(usuarioExistente.password,datosUsuario.password);
    if (!contraseniaOk) return null;

  return usuarioExistente
  }