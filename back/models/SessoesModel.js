import mongoose from "mongoose";

const { Schema } = mongoose;

const sessoesSchema = new Schema(
  {
    id_usuario: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
  },
  { timestamps: true },
);

const SessoesMongoModel = mongoose.model("Sessoes", sessoesSchema);

class SessoesService {
  async create(data) {
    return await SessoesMongoModel.create(data);
  }

  async find() {
    return await SessoesMongoModel.find().populate("id_usuario", "-senha");
  }

  async read(id) {
    return await SessoesMongoModel.findById(id).populate("id_usuario", "-senha");
  }

  async update(id, data) {
    return await SessoesMongoModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await SessoesMongoModel.findByIdAndDelete(id);
  }
}

export default new SessoesService();
