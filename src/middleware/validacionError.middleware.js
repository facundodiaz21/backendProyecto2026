import { validationResult } from "express-validator";
export const handleValidationError = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formatedErrors = errors.array().map((err) => ({
      field: err.path || err.param, 
      message: err.msg, 
      value: err.value, 
    }));
    return res.status(400).json({
      message: "Errores de validación",
      errors: formatedErrors,
      totalErrors: formatedErrors.length,
    });
  }
  next();
};
