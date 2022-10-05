import styled from "styled-components";

const StyledBurgerMenu = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column nowrap;
  z-index: 20;
`;

const NavbarList = styled.ul``;

const SearchItem = styled.li``;

const NavItem = styled.li``;

const FavoritesItem = styled.li``;

const AccountItem = styled.li``;

const AccountEmail = styled.h3`
  font-size: 16px;
`;

const CloseButton = styled.button``;

export {
  StyledBurgerMenu,
  NavbarList,
  SearchItem,
  NavItem,
  FavoritesItem,
  AccountItem,
  AccountEmail,
  CloseButton,
};
