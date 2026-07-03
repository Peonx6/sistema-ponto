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
  FormContent,
} from "./styles";

export function Cadastro() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado com sucesso!");
  };

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <FormContainer>
          <StyledTitle>CADASTRO</StyledTitle>

          <FormContent onSubmit={handleSubmit}>
            <StyledInput type="text" placeholder="Nome" required />
            <StyledInput type="email" placeholder="E-mail" required />
            <StyledInput type="text" placeholder="Cargo" required />
            <StyledPassword type="password" placeholder="Senha" required />
            <StyledPassword
              type="password"
              placeholder="Repita sua senha"
              required
            />

            <LoginTextContainer>
              <StyledText>
                Já tem cadastro? Faça o login{" "}
                <StyledLink to="/login">aqui.</StyledLink>
              </StyledText>
            </LoginTextContainer>

            <SubmitButton type="submit">CRIAR CONTA</SubmitButton>
          </FormContent>
        </FormContainer>
      </MainContent>
    </PageContainer>
  );
}

export default Cadastro;
