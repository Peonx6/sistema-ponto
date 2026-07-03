import UsuarioModel from "../models/UsuarioModel.js";
import UsuarioService from "../models/UsuarioModel.js";

class UsuarioController {
  async create(req, res) {
    try {
      const usuario = await UsuarioModel.create(req.body);
      return res.status(201).json(usuario);
    } catch (err) {
      return res.status(400).json({ erro: err.message });
    }
  }

  async read(req, res) {
    try {
      const { id } = req.params;

      if (id) {
        const usuario = await UsuarioService.read(id);
        if (!usuario) {
          return res.status(404).json({ erro: "Usuário não encontrado" });
        }
        return res.status(200).json(usuario);
      }

      const usuarios = await UsuarioService.readAll();
      return res.status(200).json(usuarios);

    } catch (err) { 
      return res.status(500).json({ erro: err.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ erro: "ID é obrigatório" });
      }

      const usuario = await UsuarioModel.update(id, req.body);

      if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
      }

      return res.status(200).json(usuario);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ erro: "ID é obrigatório" });
      }

      const usuario = await UsuarioModel.delete(id);

      if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
      }

      return res
        .status(200)
        .json({ mensagem: "Usuário deletado com sucesso", usuario });
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }
}

export default new UsuarioController();
