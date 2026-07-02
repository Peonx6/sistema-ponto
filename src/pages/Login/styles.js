import styled from "styled-components";
import { Typography, Input, Button } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;
`;

export const LoginTextContainer = styled.div`
  margin-bottom: 30px;
  margin-top: -10px;
`;

export const StyledTitle = styled(Title)`
  color: #ffd700 !important;
  margin-bottom: 40px !important;
  letter-spacing: 1px;
`;

export const StyledInput = styled(Input)`
  border-radius: 25px;
`;

export const StyledPassword = styled(Input.Password)`
  border-radius: 25px;
`;

export const StyledText = styled(Text)`
  color: #ffffff;
`;

export const StyledLink = styled(Link)`
  color: #ffd700;
  font-weight: bold;
  text-decoration: none;
`;

export const SubmitButton = styled(Button)`
  background-color: #ffd700;
  color: #000000;
  font-weight: bold;
  border-radius: 25px;
  padding: 0 50px;
  height: 45px;
  border: none;
`;
