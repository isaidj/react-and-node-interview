import express from "express";
import connectDB from "./config/database.js";
import articleRoutes from "./routes/articleRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Configuración de CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Permitir solicitudes desde el frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Cabeceras permitidas
  })
);

// Rutas
app.use("/articles", articleRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
