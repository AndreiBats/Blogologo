import styled from "styled-components";
import { Color } from "ui";
import { motion } from "framer-motion";

const StyledBurgerMenu = styled.div`
  background-color: ${Color.ExtraLight};
  max-width: 300px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 20;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid;
`;

const Wrapper = styled(motion.div)`
  background-color: ${Color.ExtraLight};
  height: 300px;
`;

const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const SearchItem = styled.li`
  margin: 16px 0;
`;

const NavItem = styled.li``;

const FavoritesItem = styled.li`
  margin-bottom: 16px;
`;

const AccountItem = styled.li``;

const AccountEmail = styled.h3`
  margin-bottom: 16px;
`;

const CloseButton = styled.button`
  width: 48px;
  background-color: ${Color.ExtraLight};
`;

const BurgerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export {
  StyledBurgerMenu,
  Wrapper,
  NavbarList,
  SearchItem,
  NavItem,
  FavoritesItem,
  AccountItem,
  AccountEmail,
  CloseButton,
  BurgerHeader,
};
