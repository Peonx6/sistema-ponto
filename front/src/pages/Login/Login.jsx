import { Form } from "antd";
import { useForm, Controller } from "react-hook-form";
import Header from "../../components/Header";
import { useCreateUsuario as useCreateUser } from "../../hook/users";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const { mutate: postUser, inPending } = useCreateUser({});

  function response(data) {
    postUser(data);
  }

  const onSubmit = (valores) => {
    console.log("Valores armazenados pelo React Hook Form:", valores);
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
            onFinish={handleSubmit(onSubmit)}
            size="large"
          >
            {/* Campo E-mail */}
            <Controller
              name="email"
              control={control}
              rules={{ required: "Insira seu e-mail!" }}
              render={({ field, fieldState }) => (
                <Form.Item
                  validateStatus={fieldState.error ? "error" : ""}
                  help={fieldState.error ? fieldState.error.message : null}
                >
                  <StyledInput {...field} placeholder="E-mail" />
                </Form.Item>
              )}
            />

            <Controller
              name="senha"
              control={control}
              rules={{ required: "Insira sua senha!" }}
              render={({ field, fieldState }) => (
                <Form.Item
                  validateStatus={fieldState.error ? "error" : ""}
                  help={fieldState.error ? fieldState.error.message : null}
                >
                  <StyledPassword
                    {...field}
                    type="password"
                    placeholder="Senha"
                  />
                </Form.Item>
              )}
            />

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
