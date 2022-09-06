import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as SignIn } from "../../assets/sign-in.svg";
import { ROUTE } from "../../routes";
import { NavbarList, StyledNavbar, SearchIcon, SignInIcon } from "./styles";

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
        <SignInIcon>
          <Link to={ROUTE.SING_IN}>
            {" "}
            <SignIn /> Sign In
          </Link>
        </SignInIcon>
      </NavbarList>
    </StyledNavbar>
  );
};
