export const errorHandle = (err, req, res, next) => {
  console.log("🔥 ENTRO AL ERROR HANDLER");
  console.error(err);
  const statusCode = err.statusCode || 500;
  res
    .status(statusCode)
    .json({ message: err.message || "error interno del servidor" });
};
