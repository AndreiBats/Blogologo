import { Link } from "react-router-dom";
import { useAppSelector } from "app/hooks";

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
import { BurgerMenu, CustomLink } from "../index";
import { getUserInfo } from "app/selectors";

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
              <CustomLink to={ROUTE.SEARCH} key={1}>
                {" "}
                <Search />
              </CustomLink>
            </SearchItem>
            {isAuth ? (
              <>
                <FavoritesItem>
                  <CustomLink to={ROUTE.FAVORITES} key={2}>
                    {" "}
                    <Favorites />
                  </CustomLink>
                </FavoritesItem>
                {isAuth ? (
                  <AccountItem>
                    <CustomLink to={ROUTE.ACCOUNT} key={3}>
                      {/* <Account /> */}
                      <AccountEmail>{email}</AccountEmail>
                    </CustomLink>
                  </AccountItem>
                ) : (
                  <AccountItem>
                    <CustomLink to={ROUTE.ACCOUNT} key={4}>
                      <Account />
                    </CustomLink>
                  </AccountItem>
                )}

                <AccountItem>
                  <CustomLink to={ROUTE.ACCOUNT} key={5}>
                    <Account />
                  </CustomLink>
                </AccountItem>
              </>
            ) : (
              <NavItem>
                <CustomLink to={ROUTE.SING_IN} key={6}>
                  {" "}
                  Sign In
                </CustomLink>
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
