import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as SignIn } from "../../assets/sign-in.svg";
import { ROUTE } from "../../routes";
import { SearchList, StyledNavbar, SearchItem } from "./styles";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to={ROUTE.HOME}>
        <Logo />
      </Link>

      <SearchList>
        <SearchItem>
          <Link to={ROUTE.SEARCH}>
            {" "}
            <Search />
          </Link>
        </SearchItem>
        <SearchItem>
          <Link to={ROUTE.SING_IN}>
            {" "}
            <SignIn /> Sign In
          </Link>
        </SearchItem>
      </SearchList>
    </StyledNavbar>
  );
};
