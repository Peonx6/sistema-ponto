import app, { PORT } from "./App.js";
import Loaders from "./Loaders/index.js";

Loaders.start();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
