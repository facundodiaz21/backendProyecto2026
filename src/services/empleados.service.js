import { empleadoModel } from "../models/empleados.models.js";

export const obtenerEmpleadosService = async ()=>{
    return await empleadoModel.find()
}