import styled from "styled-components";
import { Color } from "../../ui";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 32px;
  background-color: ${Color.White};
  margin-bottom: 50px;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const SearchIcon = styled.li`
  list-style: none;
  align-self: center;
  margin-right: 70px;
`;

const SignInIcon = styled.li`
  list-style: none;
`;

export { StyledNavbar, NavbarList, SearchIcon, SignInIcon };
