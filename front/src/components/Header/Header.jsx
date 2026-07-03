import logoCpe from "../../assets/logo-cpe.svg";
import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  Nav,
  NavLink,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={logoCpe} alt="Logo da CPE" />
      </LogoContainer>

      <Nav>
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/perfil">PERFIL</NavLink>
        <NavLink to="/usuarios">USUÁRIOS</NavLink>
      </Nav>
    </HeaderContainer>
  );
}
