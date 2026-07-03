import { Router } from "express";
import UsuarioController from "./Controllers/UsuarioController.js";
import SessoesController from "./Controllers/SessoesController.js";

const router = Router();

router.post("/usuarios", UsuarioController.create);
router.get("/usuarios", UsuarioController.read);
router.get("/usuarios/:id", UsuarioController.read);
router.put("/usuarios/:id", UsuarioController.update);
router.delete("/usuarios/:id", UsuarioController.delete);

router.post("/sessoes", SessoesController.create);
router.get("/sessoes", SessoesController.read);
router.get("/sessoes/:id", SessoesController.read);
router.put("/sessoes/:id", SessoesController.update);
router.delete("/sessoes/:id", SessoesController.delete);

export default router;
