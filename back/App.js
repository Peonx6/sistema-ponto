import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes.js";
import cors from "cors";

dotenv.config({ path: new URL("./.env", import.meta.url).pathname });

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Conexão com o Banco de Dados
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI, { autoIndex: true })
    .then(() => console.log("MongoDB conectado"))
    .catch((err) => console.error("Erro ao conectar MongoDB:", err.message));
}

app.use(routes);

app.get("", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.get("/cadastro", (req, res) => {
  return res.json({ message: "cadastro" });
});

app.get("/login", (req, res) => {
  return res.json({ message: "login" });
});

app.get("/perfil", (req, res) => {
  return res.json({ message: "perfil" });
});

app.get("/home", (req, res) => {
  return res.json({ message: "home" });
});

app.get("/usuarios", (req, res) => {
  return res.json({ message: "usuarios" });
});


app.use((req, res) => {
  return res.status(404).json({ erro: `Rota '${req.originalUrl}' não encontrada` });
});

export { app, PORT };
export default app;