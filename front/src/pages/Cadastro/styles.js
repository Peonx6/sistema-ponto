import styled from "styled-components";

import { Typography, Input, Button } from "antd";

//(usado para trocar de página)
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

// Cria uma div que será o fundo de toda a página
export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
`;

// Cria a tag <main> que guarda o conteúdo principal
export const MainContent = styled.main`
  /* O flex: 1 faz essa área crescer e empurrar o rodapé (se houvesse) para o final da tela */
  flex: 1;

  /* Ativa o Flexbox novamente para alinhar o que está dentro dessa tag */
  display: flex;

  /* Centraliza o conteúdo horizontalmente (esquerda/direita) */
  justify-content: center;

  /* Centraliza o conteúdo verticalmente (cima/baixo) */
  align-items: center;

  /* Dá um respiro de 20 pixels nas bordas para o conteúdo não grudar na tela do celular */
  padding: 20px;
`;

// Cria uma div que vai "abraçar" o formulário para limitar o tamanho dele
export const FormContainer = styled.div`
  /* Diz que a largura básica deve ocupar 100% do espaço disponível */
  width: 100%;

  /* MAS limita essa largura a no máximo 350 pixels. Isso evita que o form fique gigante no PC */
  max-width: 350px;

  /* Centraliza todos os textos que estiverem soltos dentro dessa caixa */
  text-align: center;
`;

// Cria uma div para agrupar o texto "Já tem cadastro? Faça o login aqui."
export const LoginTextContainer = styled.div`
  /* Empurra os itens que estão abaixo desta caixa para 30 pixels de distância */
  margin-bottom: 30px;

  /* Puxa a caixa 10 pixels para cima (diminuindo o espaço padrão que o Ant Design coloca) */
  margin-top: -10px;
`;

// Quando o elemento não é do HTML puro, nós colocamos ele entre parênteses: styled(Elemento)

// Pega o Título do Ant Design e aplica nossas regras por cima
export const StyledTitle = styled(Title)`
  /* O !important força o navegador a usar o nosso amarelo, ignorando a cor padrão do Ant Design */
  color: #ffd700 !important;

  /* Dá uma margem de 40 pixels para baixo, afastando o título do primeiro input */
  margin-bottom: 40px !important;

  /* Aumenta o espaçamento entre cada letra do título para ficar mais elegante */
  letter-spacing: 1px;
`;

// Pega o Input de texto comum do Ant Design e arredonda a borda
export const StyledInput = styled(Input)`
  border-radius: 25px;
`;

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Pega o Input de Senha (aquele que tem o olhinho de mostrar/esconder) e arredonda a borda
export const StyledPassword = styled(Input.Password)`
  border-radius: 25px;
`;

// Pega o texto comum do Ant Design e pinta de branco
export const StyledText = styled(Text)`
  color: #ffffff;
`;

// Pega o Link do React Router (que geralmente é azul e sublinhado) e deixa do nosso jeito
export const StyledLink = styled(Link)`
  /* Pinta o link de amarelo */
  color: #ffd700;

  /* Deixa o texto do link em negrito (bold) para chamar atenção */
  font-weight: bold;
`;

// Pega o Botão do Ant Design e transforma no nosso botão principal amarelo
export const SubmitButton = styled(Button)`
  /* Fundo amarelo */
  background-color: #ffd700;

  /* Texto preto para dar contraste */
  color: #000000;

  /* Texto em negrito */
  font-weight: bold;

  /* Bordas perfeitamente arredondadas */
  border-radius: 25px;

  /* Padding: 0 em cima e embaixo, 50 pixels nas laterais (deixa o botão largo) */
  padding: 0 50px;

  /* Define uma altura fixa de 45 pixels para o botão ficar mais "gordinho" e fácil de clicar */
  height: 45px;

  /* Remove qualquer borda padrão que o Ant Design tente colocar, deixando o botão liso */
  border: none;
`;
