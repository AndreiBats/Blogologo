import styled from "styled-components";
import { Color } from "ui";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 20px 32px;
  background-color: ${Color.White};
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;

const SearchItem = styled.li`
  align-self: center;
  list-style: none;
`;

const NavItem = styled.li`
  color: ${Color.Primary};
`;

const FavoritesItem = styled.li``;

const AccountItem = styled.li``;

const AccountEmail = styled.h3`
  font-size: 16px;
`;

const ButtonBurger = styled.button`
  background-color: ${Color.White};
`;

export {
  StyledNavbar,
  NavbarList,
  SearchItem,
  NavItem,
  FavoritesItem,
  AccountItem,
  AccountEmail,
  ButtonBurger,
};
