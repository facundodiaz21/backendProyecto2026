import express from "express";
import { connectDB } from "./src/config/config.db.js";
import routes from "./src/routes/index.routes.js";
import { errorHandle } from "./src/middleware/errorMiddleware.js";
import cors from "cors";

const app = express();
const PORT = 3000;

//middleware para leer json
app.use(cors());
app.use(express.json());
app.use("/api", routes);
//conexion base de datos
connectDB();
app.use(errorHandle);

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto:", PORT);
});
