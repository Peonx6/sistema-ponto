import { Table, Select, message, Spin } from "antd";
import Header from "../../components/Header";

import {
  useGetUsuarios as useGetUsers,
  useUpdateUsuario as useUpdateUser,
  useDeleteUsuario as useDeleteUser,
} from "../../hook/users";

import {
  PageContainer,
  MainContent,
  PageTitle,
  SearchContainer,
  SearchInput,
  SearchIcon,
  TableWrapper,
  TableText,
  TableTextBold,
  StyledSelect,
  StyledDeleteIcon,
  GlobalTableStyles,
} from "./styles";

export function Usuarios() {
  const { data: usuariosDaApi, isLoading } = useGetUsers();

  const { mutate: atualizarUsuario } = useUpdateUser({
    onSuccess: () => message.success("Usuário atualizado com sucesso!"),
  });
  const { mutate: deletarUsuario } = useDeleteUser({
    onSuccess: () => message.success("Usuário deletado com sucesso!"),
  });

  const handleAtualizarTipo = (novoValor, idUsuario) => {
    atualizarUsuario({ id: idUsuario, dados: { status: novoValor } });
  };

  const handleDeletar = (idUsuario) => {
    deletarUsuario(idUsuario);
  };

  const colunas = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
      render: (texto) => <TableTextBold>{texto}</TableTextBold>,
    },
    {
      title: "Cargo",
      dataIndex: "cargo",
      key: "cargo",
      render: (texto) => <TableText>{texto}</TableText>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (statusAtual, registro) => (
        <StyledSelect
          defaultValue={statusAtual}
          onChange={(valor) => handleAtualizarTipo(valor, registro._id)}
        >
          <Select.Option value="ativo">▲ Ativo</Select.Option>
          <Select.Option value="inativo">▼ Inativo</Select.Option>
        </StyledSelect>
      ),
    },
    {
      title: "",
      key: "acao",
      render: (_, registro) => (
        <StyledDeleteIcon onClick={() => handleDeletar(registro._id)} />
      ),
    },
  ];

  return (
    <PageContainer>
      <GlobalTableStyles />
      <Header />

      <MainContent>
        <PageTitle>GERENCIAR USUÁRIOS</PageTitle>

        <SearchContainer>
          <SearchInput
            placeholder="Pesquisar usuários"
            prefix={<SearchIcon />}
          />
        </SearchContainer>

        <TableWrapper>
          {isLoading ? (
            <Spin size="large" />
          ) : (
            <Table
              dataSource={usuariosDaApi}
              rowKey="_id"
              columns={colunas}
              pagination={false}
            />
          )}
        </TableWrapper>
      </MainContent>
    </PageContainer>
  );
}
