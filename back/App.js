import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes.js";

dotenv.config({ path: new URL("./.env", import.meta.url).pathname });

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(routes);

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI, { autoIndex: true })
    .then(() => console.log("MongoDB conectado"))
    .catch((err) => console.error("Erro ao conectar MongoDB:", err.message));
}

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

export { app, PORT };
export default app;
