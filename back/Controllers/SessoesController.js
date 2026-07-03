import SessoesModel from "../models/SessoesModel.js";

class SessoesController {
  async create(req, res) {
    try {
      const sessao = await SessoesModel.create(req.body);
      return res.status(201).json(sessao);
    } catch (err) {
      return res.status(400).json({ erro: err.message });
    }
  }

  async read(req, res) {
    try {
      const { id } = req.params;

      if (id) {
        const sessao = await SessoesModel.read(id);
        if (!sessao) {
          return res.status(404).json({ erro: "Sessão não encontrada" });
        }
        return res.status(200).json(sessao);
      }

      const sessoes = await SessoesModel.find();
      return res.status(200).json(sessoes);
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

      const sessao = await SessoesModel.update(id, req.body);
      if (!sessao) {
        return res.status(404).json({ erro: "Sessão não encontrada" });
      }
      return res.status(200).json(sessao);
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

      const sessao = await SessoesModel.delete(id);
      if (!sessao) {
        return res.status(404).json({ erro: "Sessão não encontrada" });
      }
      return res
        .status(200)
        .json({ mensagem: "Sessão deletada com sucesso", sessao });
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }
}

export default new SessoesController();
