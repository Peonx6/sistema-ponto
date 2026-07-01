import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importando as páginas (Como você usou o padrão index.jsx nas pastas, a importação fica bem limpa!)
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Usuarios from '../pages/Usuarios';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROTAS PÚBLICAS */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* ROTAS PRIVADAS (Por enquanto estão abertas, depois adicionaremos a trava de sessão) */}
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/usuarios" element={<Usuarios />} />

        {/* REDIRECIONAMENTO PADRÃO: Se o usuário entrar na raiz do site (/), joga ele pro /login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;