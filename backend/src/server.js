import express from "express";
import connectDB from "./config/database.js";
import articleRoutes from "./routes/articleRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Conecting to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Allow the frontend to access this API
    methods: ["GET", "POST", "PUT", "DELETE"], // Methods allowed
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/articles", articleRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

export default app;
