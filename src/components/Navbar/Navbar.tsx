import { Link } from "react-router-dom";
import { Logo, Search, SignIn } from "../../assets/index";

import { ROUTE } from "../../routes";
import { NavbarList, StyledNavbar, SearchIcon, NavItem } from "./styles";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to={ROUTE.HOME}>
        <Logo />
      </Link>
      <NavbarList>
        <SearchIcon>
          <Link to={ROUTE.SEARCH}>
            {" "}
            <Search />
          </Link>
        </SearchIcon>
        <NavItem>
          <Link to={ROUTE.SING_IN}>
            {" "}
            <SignIn /> Sign In
          </Link>
        </NavItem>
      </NavbarList>
    </StyledNavbar>
  );
};
