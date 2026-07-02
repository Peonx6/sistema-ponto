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
    console.log("Valores preenchidos:", valores);
  };

  return (
    <PageContainer>
      <Header />

      <MainContent>
        <FormWrapper>
          <StyledTitle level={2}>Perfil</StyledTitle>

          <Form
            name="form_login"
            layout="vertical"
            onFinish={onFinish}
            size="large"
          >
            <ProfileCard>
              <ProfileField>
                <ProfileLabel>Nome:</ProfileLabel>
                <ProfileValue>Usuário 1</ProfileValue>
              </ProfileField>

              <ProfileField>
                <ProfileLabel>E-mail:</ProfileLabel>
                <ProfileValue>usuario1@gmail.com</ProfileValue>
              </ProfileField>

              <ProfileField>
                <ProfileLabel>Cargo:</ProfileLabel>
                <ProfileValue>Dev Líder</ProfileValue>
              </ProfileField>
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
