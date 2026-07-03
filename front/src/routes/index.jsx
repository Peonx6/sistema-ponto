import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Perfil } from "../pages/Perfil/Perfil";
import { Usuarios } from "../pages/Usuarios/Usuarios";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/usuarios" element={<Usuarios />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Route>,
  ),
);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
