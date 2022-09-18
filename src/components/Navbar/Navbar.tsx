import { Link } from "react-router-dom";
import { Logo, Search, SignIn, Favorites } from "../../assets/index";
import { ROUTE } from "../../routes";
import { NavbarList, StyledNavbar, SearchItem, NavItem, FavoritesItem } from "./styles";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to={ROUTE.HOME}>
        <Logo />
      </Link>
      <NavbarList>
        <FavoritesItem>
          <Link to={ROUTE.FAVORITES}>
            {" "}
            <Favorites />
          </Link>
        </FavoritesItem>
        <SearchItem>
          <Link to={ROUTE.SEARCH}>
            {" "}
            <Search />
          </Link>
        </SearchItem>
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
