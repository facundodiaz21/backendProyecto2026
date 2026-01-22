import express from "express";
import { connectDB } from "./src/config/config.db.js";
const app = express();
const PORT = 3000;

//middleware para leer json
app.use(express.json())

//conexion base de datos
connectDB();

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto:", PORT);
});

app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "su consulta salio bien" });
});
