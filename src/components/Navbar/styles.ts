import styled from "styled-components";
import { Color } from "../../ui";

const StyledNavbar = styled.nav`
  background-color: ${Color.White};
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 20px 32px;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

const SearchItem = styled.li`
  align-self: center;
  list-style: none;
`;

const NavItem = styled.li``;

const FavoritesItem = styled.li``;

export { StyledNavbar, NavbarList, SearchItem, NavItem, FavoritesItem };
