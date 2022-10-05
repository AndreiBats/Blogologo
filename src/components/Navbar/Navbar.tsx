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
  AccountEmail,
} from "./styles";

export const Navbar = () => {
  const { isAuth, email } = useAppSelector(getUserInfo);

  return (
    <StyledNavbar>
      <Link to={ROUTE.HOME}>
        <Logo />
      </Link>
      <NavbarList>
        <SearchItem>
          <Link to={ROUTE.SEARCH} key={1}>
            {" "}
            <Search />
          </Link>
        </SearchItem>
        {isAuth ? (
          <>
            <FavoritesItem>
              <Link to={ROUTE.FAVORITES} key={2}>
                {" "}
                <Favorites />
              </Link>
            </FavoritesItem>
            {isAuth ? (
              <AccountItem>
                <Link to={ROUTE.ACCOUNT} key={3}>
                  {/* <Account /> */}
                  <AccountEmail>{email}</AccountEmail>
                </Link>
              </AccountItem>
            ) : (
              <AccountItem>
                <Link to={ROUTE.ACCOUNT} key={3}>
                  <Account />
                </Link>
              </AccountItem>
            )}

            <AccountItem>
              <Link to={ROUTE.ACCOUNT} key={3}>
                <Account />
              </Link>
            </AccountItem>
          </>
        ) : (
          <NavItem>
            <Link to={ROUTE.SING_IN} key={4}>
              {" "}
              Sign In
            </Link>
          </NavItem>
        )}
      </NavbarList>
    </StyledNavbar>
  );
};
