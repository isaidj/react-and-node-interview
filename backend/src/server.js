const express = require("express");
const connectDB = require("./config/database");
const articleRoutes = require("./routes/articleRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Configuración de CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Permitir solicitudes desde el frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Cabeceras permitidas
  })
);

// Rutas
app.use("/articles", articleRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
