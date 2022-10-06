import { Link } from "react-router-dom";
import { useAppSelector } from "app/hooks";
import { getUserInfo } from "app/selectors/userSelectors";
import { Logo, Search, Account, Favorites, Burger } from "assets/index";
import { useWindowSize, useToggle } from "hooks/index";
import { ROUTE } from "routes";
import { Breakpoint } from "ui";

import {
  NavbarList,
  StyledNavbar,
  SearchItem,
  NavItem,
  FavoritesItem,
  AccountItem,
  AccountEmail,
  ButtonBurger,
} from "./styles";
import { BurgerMenu } from "../index";

export const Navbar = () => {
  const { isAuth, email } = useAppSelector(getUserInfo);
  const { width = 0 } = useWindowSize();
  const [isOpen, setIsOpen] = useToggle(false);

  const handleBurger = (): void => {
    setIsOpen();
  };

  return (
    <StyledNavbar>
      <Link to={ROUTE.HOME}>
        <Logo />
      </Link>
      {width > Breakpoint.SM && (
        <>
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
        </>
      )}

      {width < Breakpoint.SM && (
        <>
          <ButtonBurger onClick={handleBurger}>
            {" "}
            <Burger />
          </ButtonBurger>
        </>
      )}

      {isOpen === true && <BurgerMenu handleBurger={handleBurger} isOpen={isOpen} />}
    </StyledNavbar>
  );
};
