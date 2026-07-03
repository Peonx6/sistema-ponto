import { useState, useEffect } from "react";
import { Form, Spin, message } from "antd";
import { useForm, Controller } from "react-hook-form";
import Header from "../../components/Header";

import {
  useGetUsuario as useGetUser,
  useUpdateUsuario as useUpdateUser,
} from "../../hook/users";

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
  StyledInput, // IMPORTANTE: Lembre-se de importar o StyledInput do seu styles.js
} from "./styles";

export function Perfil() {
  const [isEditing, setIsEditing] = useState(false);

  // NOTA: Em um sistema real, você pegaria esse ID do Contexto de Autenticação,
  // do LocalStorage, ou da rota atual. Coloquei uma string vazia como placeholder.
  const idDoUsuarioLogado = "SUBSTITUIR_PELO_ID_REAL";

  // 1. READ: Buscar os dados do usuário logado
  const { data: usuario, isLoading } = useGetUser(idDoUsuarioLogado);

  // 2. UPDATE: Hook de atualização
  const { mutate: atualizarUsuario, isPending } = useUpdateUser({
    onSuccess: () => {
      message.success("Perfil atualizado com sucesso!");
      setIsEditing(false); // Volta para o modo de visualização
    },
    onError: () => message.error("Erro ao atualizar o perfil."),
  });

  const { control, handleSubmit, reset } = useForm();

  // Quando a API retornar os dados do usuário, preenchemos o formulário automaticamente
  useEffect(() => {
    if (usuario) {
      reset({
        nome: usuario.nome,
        email: usuario.email,
        cargo: usuario.cargo,
      });
    }
  }, [usuario, reset]);

  const onFinish = (valores) => {
    console.log("Valores para atualizar:", valores);
    atualizarUsuario({ id: idDoUsuarioLogado, dados: valores });
  };

  return (
    <PageContainer>
      <Header />

      <MainContent>
        <FormWrapper>
          <StyledTitle level={2}>Perfil</StyledTitle>

          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2rem 0",
              }}
            >
              <Spin size="large" />
            </div>
          ) : (
            <Form
              name="form_perfil"
              layout="vertical"
              onFinish={
                isEditing ? handleSubmit(onFinish) : () => setIsEditing(true)
              }
              size="large"
            >
              <ProfileCard>
                {/* CAMPO NOME */}
                <ProfileField>
                  <ProfileLabel>Nome:</ProfileLabel>
                  {isEditing ? (
                    <Controller
                      name="nome"
                      control={control}
                      rules={{ required: "O nome é obrigatório!" }}
                      render={({ field, fieldState }) => (
                        <Form.Item
                          validateStatus={fieldState.error ? "error" : ""}
                          help={fieldState.error?.message}
                          style={{ margin: 0, width: "100%" }}
                        >
                          <StyledInput {...field} placeholder="Nome" />
                        </Form.Item>
                      )}
                    />
                  ) : (
                    <ProfileValue>{usuario?.nome}</ProfileValue>
                  )}
                </ProfileField>

                {/* CAMPO E-MAIL */}
                <ProfileField>
                  <ProfileLabel>E-mail:</ProfileLabel>
                  {isEditing ? (
                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: "O e-mail é obrigatório!" }}
                      render={({ field, fieldState }) => (
                        <Form.Item
                          validateStatus={fieldState.error ? "error" : ""}
                          help={fieldState.error?.message}
                          style={{ margin: 0, width: "100%" }}
                        >
                          <StyledInput
                            {...field}
                            type="email"
                            placeholder="E-mail"
                          />
                        </Form.Item>
                      )}
                    />
                  ) : (
                    <ProfileValue>{usuario?.email}</ProfileValue>
                  )}
                </ProfileField>

                {/* CAMPO CARGO */}
                <ProfileField>
                  <ProfileLabel>Cargo:</ProfileLabel>
                  {isEditing ? (
                    <Controller
                      name="cargo"
                      control={control}
                      rules={{ required: "O cargo é obrigatório!" }}
                      render={({ field, fieldState }) => (
                        <Form.Item
                          validateStatus={fieldState.error ? "error" : ""}
                          help={fieldState.error?.message}
                          style={{ margin: 0, width: "100%" }}
                        >
                          <StyledInput {...field} placeholder="Cargo" />
                        </Form.Item>
                      )}
                    />
                  ) : (
                    <ProfileValue>{usuario?.cargo}</ProfileValue>
                  )}
                </ProfileField>
              </ProfileCard>

              <Form.Item style={{ marginTop: "24px" }}>
                <SubmitButton
                  type="primary"
                  htmlType="submit"
                  loading={isPending}
                >
                  {isEditing ? "SALVAR ALTERAÇÕES" : "EDITAR"}
                </SubmitButton>

                {/* Botão de Cancelar, aparece apenas no modo de edição */}
                {isEditing && (
                  <SubmitButton
                    type="default"
                    onClick={() => {
                      setIsEditing(false);
                      reset(); // Restaura os dados originais se o usuário cancelar
                    }}
                    style={{ marginLeft: "12px" }}
                  >
                    CANCELAR
                  </SubmitButton>
                )}
              </Form.Item>
            </Form>
          )}
        </FormWrapper>
      </MainContent>
    </PageContainer>
  );
}
