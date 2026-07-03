import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: #ffe712;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div``;

export const LogoImage = styled.img`
  height: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 300px;
`;

export const NavLink = styled(Link)`
  color: #000000;
  font-weight: bold;
  text-decoration: none;
`;
