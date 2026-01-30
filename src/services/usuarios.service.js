import UsuarioModel from "../models/usuarios.model.js"


export const registroUsuarioServicio = async (datosUsuario)=>{
    try {
       const nuevoUsuarioDB = new UsuarioModel (datosUsuario);
       await nuevoUsuarioDB.save();
       console.log(nuevoUsuarioDB);
       return {
      statusCode: 201,
      json: { msg: "Usuario Creado", usuarioCreado: nuevoUsuarioDB },
    };
  } catch (error) {
    return {
      statusCode: 400,
      json: { msg: "Error al crear usuario", usuarioCreado: null },
    };
    }
}
