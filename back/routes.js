import { Router } from "express";
import UsuarioController from "./Controllers/UsuarioController.js";
import SessoesController from "./Controllers/SessoesController.js";
import usuarioValidator from "./Validators/UsuarioValidator.js";
import sessoesValidator from "./Validators/SessoesValidator.js"; // Importando o novo validador

const router = Router();

// --- Rotas de Usuários ---
router.post("/usuarios", usuarioValidator.create, UsuarioController.create);
router.get("/usuarios", UsuarioController.read);
router.get("/usuarios/:id", usuarioValidator.idParam, UsuarioController.read);     // Validando ID
router.put("/usuarios/:id", usuarioValidator.update, UsuarioController.update);
router.delete("/usuarios/:id", usuarioValidator.idParam, UsuarioController.delete); // Validando ID

// --- Rotas de Sessões ---
router.post("/sessoes", sessoesValidator.create, SessoesController.create);
router.get("/sessoes", SessoesController.read);
router.get("/sessoes/:id", sessoesValidator.idParam, SessoesController.read);     // Validando ID
router.put("/sessoes/:id", sessoesValidator.update, SessoesController.update);
router.delete("/sessoes/:id", sessoesValidator.idParam, SessoesController.delete); // Validando ID

export default router;