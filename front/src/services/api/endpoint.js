import api from "./api";

//Usuarios

export async function getUsuarios() {
  try {
    const { data } = await api.get("/usuarios");
    return data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
}

export async function getUsuario(id) {
  try {
    const { data } = await api.get(`/usuarios/${id}`);
    return data;
  } catch (error) {
    console.error(`Erro ao buscar usuário com ID ${id}:`, error);
    throw error;
  }
}

export async function createUsuario(body) {
  try {
    const { data } = await api.post("/usuarios", body);
    return data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
}

export async function updateUsuario(id, body) {
  try {
    const { data } = await api.put(`/usuarios/${id}`, body);
    return data;
  } catch (error) {
    console.error(`Erro ao atualizar usuário com ID ${id}:`, error);
    throw error;
  }
}

export async function deleteUsuario(id, body) {
  try {
    const { data } = await api.delete(`/usuarios/${id}`, body);
    return data;
  } catch (error) {
    console.error(`Erro ao excluir usuário com ID ${id}:`, error);
    throw error;
  }
}

//Sessoes

export async function getSessoes() {
  try {
    const { data } = await api.get("/sessoes");
    return data;
  } catch (error) {
    console.error("Erro ao buscar sessões:", error);
    throw error;
  }
}

export async function createSessao(body) {
  try {
    const { data } = await api.post("/sessoes", body);
    return data;
  } catch (error) {
    console.error("Erro ao criar sessão:", error);
    throw error;
  }
}

export async function updateSessao(id, body) {
  try {
    const { data } = await api.put(`/sessoes/${id}`, body);
    return data;
  } catch (error) {
    console.error(`Erro ao atualizar sessão com ID ${id}:`, error);
    throw error;
  }
}

export async function deleteSessao(id, body) {
  try {
    const { data } = await api.delete(`/sessoes/${id}`, body);
    return data;
  } catch (error) {
    console.error(`Erro ao excluir sessão com ID ${id}:`, error);
    throw error;
  }
}
