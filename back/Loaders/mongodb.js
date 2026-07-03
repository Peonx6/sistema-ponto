import mongoose from "mongoose";

async function startDB() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error("❌ MONGO_URI não definido em back/.env");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri, {
      autoIndex: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("✅ MongoDB conectado");
  } catch (err) {
    console.error("❌ Erro ao conectar MongoDB:", err.message);
    console.error("   Verifique as credenciais e permissões no MongoDB Atlas");
    process.exit(1);
  }
}

export default startDB;
