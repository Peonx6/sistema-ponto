import { Form, message } from "antd";
import { useForm, Controller } from "react-hook-form";
import Header from "../../components/Header";
// IMPORTANTE: Ajuste o caminho do seu hook
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

export function Cadastro() {
  const { control, handleSubmit, watch } = useForm();

  // Hook de criação (React Query)
  const { mutate: postUser, isPending } = useCreateUser({
    onSuccess: () => message.success("Conta criada com sucesso!"),
    onError: () => message.error("Erro ao criar conta."),
  });

  // Usamos o watch para monitorar o valor da senha e comparar com o "repetir senha"
  const senhaAtual = watch("senha");

  const onSubmit = (valores) => {
    // O back-end não precisa receber a confirmação de senha, então nós a removemos
    const payload = {
      nome: valores.nome,
      email: valores.email,
      cargo: valores.cargo,
      senha: valores.senha,
    };

    console.log("Valores enviados para a API:", payload);
    postUser(payload); // Chama o back-end
  };

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <FormContainer>
          <StyledTitle level={2}>CADASTRO</StyledTitle>

          <Form
            layout="vertical"
            onFinish={handleSubmit(onSubmit)}
            size="large"
          >
            <Controller
              name="nome"
              control={control}
              rules={{ required: "Insira seu nome!" }}
              render={({ field, fieldState }) => (
                <Form.Item
                  validateStatus={fieldState.error ? "error" : ""}
                  help={fieldState.error?.message}
                >
                  <StyledInput {...field} placeholder="Nome" />
                </Form.Item>
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{ required: "Insira seu e-mail!" }}
              render={({ field, fieldState }) => (
                <Form.Item
                  validateStatus={fieldState.error ? "error" : ""}
                  help={fieldState.error?.message}
                >
                  <StyledInput {...field} type="email" placeholder="E-mail" />
                </Form.Item>
              )}
            />

            <Controller
              name="cargo"
              control={control}
              rules={{ required: "Insira seu cargo!" }}
              render={({ field, fieldState }) => (
                <Form.Item
                  validateStatus={fieldState.error ? "error" : ""}
                  help={fieldState.error?.message}
                >
                  <StyledInput {...field} placeholder="Cargo" />
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
                  help={fieldState.error?.message}
                >
                  <StyledPassword
                    {...field}
                    type="password"
                    placeholder="Senha"
                  />
                </Form.Item>
              )}
            />

            <Controller
              name="repita_senha"
              control={control}
              rules={{
                required: "Repita sua senha!",
                validate: (value) =>
                  value === senhaAtual || "As senhas não coincidem!",
              }}
              render={({ field, fieldState }) => (
                <Form.Item
                  validateStatus={fieldState.error ? "error" : ""}
                  help={fieldState.error?.message}
                >
                  <StyledPassword
                    {...field}
                    type="password"
                    placeholder="Repita sua senha"
                  />
                </Form.Item>
              )}
            />

            <LoginTextContainer>
              <StyledText>
                Já tem cadastro? Faça o login{" "}
                <StyledLink to="/login">aqui.</StyledLink>
              </StyledText>
            </LoginTextContainer>

            <Form.Item>
              <SubmitButton
                type="primary"
                htmlType="submit"
                loading={isPending}
              >
                CRIAR CONTA
              </SubmitButton>
            </Form.Item>
          </Form>
        </FormContainer>
      </MainContent>
    </PageContainer>
  );
}
