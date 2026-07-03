import mongoose from "mongoose";

const { Schema } = mongoose;

const usuarioSchema = new Schema({
  email: { type: String, required: true },
  senha: { type: String, required: true },
  nome: { type: String, required: true },
  cargo: { type: String, required: true },
  status: { type: String, required: true, default: "ativo" },
});

const UsuarioModel = mongoose.model("Usuario", usuarioSchema);

class UsuarioService {
  async create(data) {
    return await UsuarioModel.create(data);
  }
  
  async readAll() {
    return await UsuarioModel.find();
  }

  async find() {
    return await UsuarioModel.find();
  }

  async read(id) {
    return await UsuarioModel.findById(id);
  }

  async update(id, data) {
    return await UsuarioModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await UsuarioModel.findByIdAndDelete(id);
  }
}

export default new UsuarioService();
