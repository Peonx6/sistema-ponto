import { Form, Button, Typography } from "antd"; //componentes do Ant Design
import Header from "../../components/Header"; //Header
const { Title } = Typography;

export function Perfil() {
  const onFinish = (valores) => {
    //função que vai ser chamada quando o usuario clicar no botão de entrar
    console.log("Valores preenchidos:", valores);
  };
  /* TODO: conectar rotas*/

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {" "}
        {/* div centralizada */}
        <div style={{ width: "100%", maxWidth: "350px", textAlign: "center" }}>
          <Title
            level={2}
            style={{
              color: "#FFD700",
              marginBottom: "40px",
              letterSpacing: "1px",
            }}
          >
            Perfil
          </Title>

          {/* ANT DESIGN */}
          <Form
            name="form_login"
            layout="vertical" // Deixa um campo debaixo do outro
            onFinish={onFinish}
            size="large" // Deixa os inputs maiores
          >
            <div
              style={{
                backgroundColor: "#333333", // O cinza escuro do fundo
                borderRadius: "10px", // Bordas arredondadas
                padding: "40px", // Espaço interno para o texto não colar nas bordas
                display: "flex",
                flexDirection: "column", // Um item embaixo do outro
                gap: "20px", // Espaço entre as linhas de texto
                width: "100%",
                maxWidth: "500px", // Limita a largura para não esticar na tela toda
              }}
            >
              {/* LINHA 1: NOME */}
              <div style={{ display: "flex", fontSize: "20px" }}>
                {/* Damos uma largura fixa (width: 90px) para os títulos ficarem todos alinhados como numa tabela */}
                <span
                  style={{
                    color: "#FFE712",
                    fontWeight: "bold",
                    width: "90px",
                  }}
                >
                  Nome:
                </span>
                <span style={{ color: "#FFE712" }}>Usuário 1</span>
              </div>

              {/* LINHA 2: E-MAIL */}
              <div style={{ display: "flex", fontSize: "20px" }}>
                <span
                  style={{
                    color: "#FFE712",
                    fontWeight: "bold",
                    width: "90px",
                  }}
                >
                  E-mail:
                </span>
                <span style={{ color: "#FFE712" }}>usuario1@gmail.com</span>
              </div>

              {/* LINHA 3: CARGO */}
              <div style={{ display: "flex", fontSize: "20px" }}>
                <span
                  style={{
                    color: "#FFE712",
                    fontWeight: "bold",
                    width: "90px",
                  }}
                >
                  Cargo:
                </span>
                <span style={{ color: "#FFE712" }}>Dev Líder</span>
              </div>
            </div>

            {/* BOTÃO DE EDITAR */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#FFD700",
                  color: "#000000",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  padding: "0 50px",
                  height: "45px",
                  marginTop: "50px",
                }}
              >
                EDITAR
              </Button>
            </Form.Item>
          </Form>
        </div>
      </main>
    </div>
  );
}
