import styled from "styled-components";
import { Color } from "../../ui";
import { motion } from "framer-motion";

const StyledBurgerMenu = styled.div`
  background-color: ${Color.White};
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  padding: 15px;
`;

const Wrapper = styled(motion.div)`
  background-color: ${Color.White};
  height: 300px;
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
  background-color: ${Color.White};
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
