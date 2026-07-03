import { ConfigProvider, theme } from "antd";
import AppRoutes from "./routes"; // Seu arquivo de rotas que vamos criar

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#FFE712",
          colorBgBase: "#000000",
        },
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  );
}

export default App;
