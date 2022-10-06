import styled from "styled-components";
import { Color } from "../../ui";

const StyledBurgerMenu = styled.div`
  background-color: ${Color.Primary};
  width: 100%;
  height: 50vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  padding: 15px;
`;

const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const SearchItem = styled.li``;

const NavItem = styled.li``;

const FavoritesItem = styled.li``;

const AccountItem = styled.li``;

const AccountEmail = styled.h3`
  font-size: 16px;
`;

const CloseButton = styled.button`
  width: 48px;
`;

const BurgerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export {
  StyledBurgerMenu,
  NavbarList,
  SearchItem,
  NavItem,
  FavoritesItem,
  AccountItem,
  AccountEmail,
  CloseButton,
  BurgerHeader,
};
