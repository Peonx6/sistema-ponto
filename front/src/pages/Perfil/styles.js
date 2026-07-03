import styled from "styled-components";
import { Button, Typography } from "antd";

const { Title } = Typography;

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

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;
`;

export const StyledTitle = styled(Title)`
  color: #ffd700 !important;
  margin-bottom: 40px !important;
  letter-spacing: 1px;
`;

export const ProfileCard = styled.div`
  background-color: #333333;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
`;

export const ProfileField = styled.div`
  display: flex;
  font-size: 20px;
`;

export const ProfileLabel = styled.span`
  color: #ffe712;
  font-weight: bold;
  width: 90px;
`;

export const ProfileValue = styled.span`
  color: #ffe712;
`;

export const SubmitButton = styled(Button)`
  background-color: #ffd700;
  color: #000000;
  font-weight: bold;
  border-radius: 25px;
  padding: 0 50px;
  height: 45px;
  margin-top: 50px;
  border: none;
`;
