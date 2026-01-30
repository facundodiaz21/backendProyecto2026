import express from "express";
import { connectDB } from "./src/config/config.db.js";

const app = express();
const PORT = 3000;

//middleware para leer json
app.use(express.json())

//conexion base de datos
await connectDB();

//importar rutas despues de conectar
const routes = (await import ("./src/routes/index.routes.js")).default;

app.use("/api", routes)

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto:", PORT);
});
