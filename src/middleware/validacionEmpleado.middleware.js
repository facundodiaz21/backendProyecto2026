import { body, param } from "express-validator";
import { handleValidationError } from "./validacionError.middleware.js";
import { rolesPermitidos } from "../const/roles.js";
import { estadoEmpleado } from "../const/estado.js";

export const validarEmpleadosPost = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2, max: 35 })
    .withMessage("El nombre debe tener entre 1 y 35 caracteres")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
    .withMessage("Solo se pueden utilizar letras y espacios"),
  body("contacto")
    .notEmpty()
    .withMessage("El contacto es obligatorio")
    .custom((value) => {
      const telefonoRegex = /^[0-9]{8,15}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (telefonoRegex.test(value) || emailRegex.test(value)) {
        return true;
      }
      throw new Error("El contacto debe ser un telefono valido o email valido");
    }),
  body("puesto")
    .optional()
    .isIn(["recepcion", "mantenimiento", "administracion"])
    .withMessage(
      "El puesto puede ser: recepcion, administracion o mantenimiento",
    ),

  handleValidationError,
];
export const validarEmpleadosPut = [
  param("id").isMongoId().withMessage("El id no es válido"),
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2, max: 35 })
    .withMessage("El nombre debe tener entre 1 y 35 caracteres")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
    .withMessage("Solo se pueden utilizar letras y espacios"),
  body("contacto")
    .notEmpty()
    .withMessage("El contacto es obligatorio")
    .custom((value) => {
      const telefonoRegex = /^[0-9]{8,15}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (telefonoRegex.test(value) || emailRegex.test(value)) {
        return true;
      }
      throw new Error("El contacto debe ser un telefono valido o email valido");
    }),
  body("puesto")
    .optional()
    .isIn(rolesPermitidos)
    .withMessage(`El puesto debe ser: ${rolesPermitidos.join(", ")}`),
  handleValidationError,
];
export const validarEmpleadoPatch = [
  param("id").isMongoId().withMessage("El id no es válido"),

  body("estado")
    .notEmpty()
    .withMessage("El estado es obligatorio")
    .isIn(estadoEmpleado)
    .withMessage(`El estado debe ser: ${estadoEmpleado.join(", ")}`),

  handleValidationError,
];
