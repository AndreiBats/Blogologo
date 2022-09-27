import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { getUserInfo } from "../../app/selectors/userSelectors";
import { Logo, Search, Account, Favorites } from "../../assets/index";
import { ROUTE } from "../../routes";
import {
  NavbarList,
  StyledNavbar,
  SearchItem,
  NavItem,
  FavoritesItem,
  AccountItem,
} from "./styles";

export const Navbar = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return (
    <StyledNavbar>
      <Link to={ROUTE.HOME}>
        <Logo />
      </Link>
      <NavbarList>
        <SearchItem>
          <Link to={ROUTE.SEARCH}>
            {" "}
            <Search />
          </Link>
        </SearchItem>
        {isAuth ? (
          <>
            <FavoritesItem>
              <Link to={ROUTE.FAVORITES}>
                {" "}
                <Favorites />
              </Link>
            </FavoritesItem>

            <AccountItem>
              <Link to={ROUTE.ACCOUNT}>
                <Account />
              </Link>
            </AccountItem>
          </>
        ) : (
          <NavItem>
            <Link to={ROUTE.SING_IN}> Sign In</Link>
          </NavItem>
        )}
      </NavbarList>
    </StyledNavbar>
  );
};
