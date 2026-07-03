import { Form } from "antd";
import Header from "../../components/Header";
import {
  PageContainer,
  MainContent,
  FormContainer,
  StyledTitle,
  StyledInput,
  StyledPassword,
  LoginTextContainer,
  StyledText,
  StyledLink,
  SubmitButton,
} from "./styles";

export function Login() {
  const onFinish = (valores) => {
    console.log("Valores preenchidos:", valores);
  };

  return (
    <PageContainer>
      <Header />

      <MainContent>
        <FormContainer>
          <StyledTitle level={2}>LOGIN</StyledTitle>

          <Form
            name="form_login"
            layout="vertical"
            onFinish={onFinish}
            size="large"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Insira seu e-mail!" }]}
            >
              <StyledInput placeholder="E-mail" />
            </Form.Item>

            <Form.Item
              name="senha"
              rules={[{ required: true, message: "Insira sua senha!" }]}
            >
              <StyledPassword placeholder="Senha" />
            </Form.Item>

            <LoginTextContainer>
              <StyledText>Não tem login? Faça seu cadastro </StyledText>
              <StyledLink to="/cadastro">aqui.</StyledLink>
            </LoginTextContainer>

            <Form.Item>
              <SubmitButton type="primary" htmlType="submit">
                ENTRAR
              </SubmitButton>
            </Form.Item>
          </Form>
        </FormContainer>
      </MainContent>
    </PageContainer>
  );
}
