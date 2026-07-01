import { Input, Table, Select } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
import Header from "../../components/Header";

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
      render: (texto) => (
        <span style={{ fontWeight: "500", color: "#FFFFFF" }}>{texto}</span>
      ),
    },
    {
      title: "Cargo",
      dataIndex: "cargo",
      key: "cargo",
      render: (texto) => <span style={{ color: "#FFFFFF" }}>{texto}</span>,
    },
    {
      title: "Usuário",
      dataIndex: "tipo",
      key: "tipo",
      render: (tipoAtual) => (
        <Select
          defaultValue={tipoAtual}
          style={{ width: "150px" }}
          dropdownStyle={{ backgroundColor: "#333333" }}
        >
          <Select.Option value="admin">▲ Administrador</Select.Option>
          <Select.Option value="comum">▼ Comum</Select.Option>
        </Select>
      ),
    },
    {
      title: "",
      key: "acao",
      render: () => (
        <DeleteOutlined
          style={{ fontSize: "22px", color: "#FFFFFF", cursor: "pointer" }}
          onClick={() => console.log("Deletar utilizador clicado")}
        />
      ),
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        /* Remove o fundo do cabeçalho e coloca letras brancas e maiores */
        .ant-table-thead > tr > th {
          background-color: transparent !important;
          color: #FFFFFF !important;
          font-size: 24px !important;
          font-weight: bold !important;
          border-bottom: 2px solid #FFFFFF !important; /* Linha grossa abaixo do título */
          padding-left: 0 !important;
        }

        /* Configura as linhas: fundo preto e linhas brancas finas separando */
        .ant-table-tbody > tr > td {
          background-color: #000000 !important;
          border-bottom: 1px solid #FFFFFF !important;
          font-size: 18px !important;
          padding: 20px 0 !important; /* Espaçamento interno das linhas */
        }

        /* Remove bordas gerais indesejadas do Ant Design */
        .ant-table {
          background: transparent !important;
        }
        
        /* Estilização do Select para ficar parecido com o do Figma */
        .ant-select-selector {
          background-color: #FFFFFF !important;
          color: #000000 !important;
          border-radius: 4px !important;
          font-weight: bold !important;
        }
      `}</style>

      {/* O topo da página */}
      <Header />

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
          gap: "40px",
        }}
      >
        {/* TÍTULO */}
        <h1
          style={{
            color: "#FFE712",
            fontSize: "36px",
            fontWeight: "bold",
            margin: 0,
            letterSpacing: "1px",
          }}
        >
          GERENCIAR USUÁRIOS
        </h1>

        {/* BARRA DE PESQUISA (INPUT) */}
        <div style={{ width: "100%", maxWidth: "750px" }}>
          <Input
            placeholder="Pesquisar usuários"
            prefix={
              <SearchOutlined
                style={{ color: "#000000", marginRight: "5px" }}
              />
            } // Ícone de lupa na esquerda
            style={{
              borderRadius: "25px",
              padding: "10px 20px",
              backgroundColor: "#F5F5F5",
              fontSize: "16px",
              border: "none",
            }}
          />
        </div>

        {/* TABELA DE USUÁRIOS */}
        <div style={{ width: "100%", maxWidth: "750px" }}>
          <Table
            dataSource={dadosMocados}
            columns={colunas}
            pagination={false}
          />
        </div>
      </main>
    </div>
  );
}
