import { Form } from "antd";
import Header from "../../components/Header";
import {
  PageContainer,
  MainContent,
  FormWrapper,
  StyledTitle,
  ProfileCard,
  ProfileField,
  ProfileLabel,
  ProfileValue,
  SubmitButton,
} from "./styles";

export function Perfil() {
  const onFinish = (valores) => {
    //função que vai ser chamada quando o usuario clicar no botão de entrar
    console.log("Valores preenchidos:", valores);
  };
  /* TODO: conectar rotas*/

  return (
    // 1. Usamos o PageContainer em vez da <div> com estilos
    <PageContainer>
      <Header />

      {/* 2. Usamos o MainContent em vez da tag <main> */}
      <MainContent>
        {/* 3. Usamos o FormWrapper em vez da div que limitava o tamanho */}
        <FormWrapper>
          <StyledTitle level={2}>Perfil</StyledTitle>

          <Form
            name="form_login"
            layout="vertical"
            onFinish={onFinish}
            size="large"
          >
            {/* O cartão cinza */}
            <ProfileCard>
              {/* LINHA 1: NOME */}
              <ProfileField>
                <ProfileLabel>Nome:</ProfileLabel>
                <ProfileValue>Usuário 1</ProfileValue>
              </ProfileField>

              {/* LINHA 2: E-MAIL */}
              <ProfileField>
                <ProfileLabel>E-mail:</ProfileLabel>
                <ProfileValue>usuario1@gmail.com</ProfileValue>
              </ProfileField>

              {/* LINHA 3: CARGO */}
              <ProfileField>
                <ProfileLabel>Cargo:</ProfileLabel>
                <ProfileValue>Dev Líder</ProfileValue>
              </ProfileField>

              {/* 4. O erro principal estava aqui: a IA tinha colocado um </div> em vez de fechar o ProfileCard */}
            </ProfileCard>

            <Form.Item>
              <SubmitButton type="primary" htmlType="submit">
                EDITAR
              </SubmitButton>
            </Form.Item>
          </Form>
        </FormWrapper>
      </MainContent>
    </PageContainer>
  );
}
