import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { getUserInfo } from "../../app/selectors/userSelectors";
import { Account, Close, Favorites, Logo, Search } from "../../assets/index";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ROUTE } from "../../routes";
import { Breakpoint } from "../../ui";
import {
  AccountEmail,
  AccountItem,
  FavoritesItem,
  NavbarList,
  NavItem,
  SearchItem,
  StyledBurgerMenu,
  CloseButton,
  BurgerHeader,
} from "./styles";

interface IProps {
  isOpen: boolean;
  handleBurger: () => void;
}

export const BurgerMenu = ({ isOpen, handleBurger }: IProps) => {
  const { isAuth, email } = useAppSelector(getUserInfo);
  const { width = 0 } = useWindowSize();

  return (
    <>
      {width < Breakpoint.SM && (
        <>
          <StyledBurgerMenu onClick={handleBurger}>
            {isOpen && (
              <>
                <BurgerHeader>
                  <Link to={ROUTE.HOME}>
                    <Logo />
                  </Link>
                  <CloseButton>
                    <Close />
                  </CloseButton>
                </BurgerHeader>

                <NavbarList>
                  <SearchItem>
                    <Link to={ROUTE.SEARCH} key={1}>
                      {" "}
                      <Search /> Search
                    </Link>
                  </SearchItem>
                  {isAuth ? (
                    <>
                      <FavoritesItem>
                        <Link to={ROUTE.FAVORITES} key={2}>
                          {" "}
                          <Favorites />
                          Favorites
                        </Link>
                      </FavoritesItem>
                      {isAuth ? (
                        <AccountItem>
                          <Link to={ROUTE.ACCOUNT} key={3}>
                            {" "}
                            {email}
                            {/* <AccountEmail>{email}</AccountEmail> */}
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
                      Sign In
                    </NavItem>
                  )}
                </NavbarList>
              </>
            )}
          </StyledBurgerMenu>
        </>
      )}
    </>
  );
};
