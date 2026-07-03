import { Table, Select } from "antd";
import Header from "../../components/Header";
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
  const dadosMocados = [
    {
      key: "1",
      nome: "Usuário 1",
      cargo: "Dev Líder",
      tipo: "admin",
    },
    {
      key: "2",
      nome: "Usuário 2",
      cargo: "Presidente",
      tipo: "admin",
    },
    {
      key: "3",
      nome: "Usuário 3",
      cargo: "Consultor de tecnologia",
      tipo: "comum",
    },
  ];

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
      title: "Usuário",
      dataIndex: "tipo",
      key: "tipo",
      render: (tipoAtual) => (
        <StyledSelect defaultValue={tipoAtual}>
          <Select.Option value="admin">▲ Administrador</Select.Option>
          <Select.Option value="comum">▼ Comum</Select.Option>
        </StyledSelect>
      ),
    },
    {
      title: "",
      key: "acao",
      render: () => (
        <StyledDeleteIcon
          onClick={() => console.log("Deletar utilizador clicado")}
        />
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
          <Table
            dataSource={dadosMocados}
            columns={colunas}
            pagination={false}
          />
        </TableWrapper>
      </MainContent>
    </PageContainer>
  );
}
