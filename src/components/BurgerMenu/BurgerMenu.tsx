import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { getUserInfo } from "../../app/selectors/userSelectors";
import { Account, Close, Favorites, Logo, Search } from "../../assets/index";
import { ROUTE } from "../../routes";
import {
  AccountEmail,
  AccountItem,
  FavoritesItem,
  NavbarList,
  NavItem,
  SearchItem,
  StyledBurgerMenu,
  CloseButton,
} from "./styles";

interface IProps {
  isOpen: boolean;
  handleBurger: () => void;
}

export const BurgerMenu = ({ isOpen, handleBurger }: IProps) => {
  const { isAuth, email } = useAppSelector(getUserInfo);

  return (
    <StyledBurgerMenu>
      {isOpen && (
        <>
          <CloseButton onClick={handleBurger}>
            <Close />
          </CloseButton>

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
                Sign In
              </NavItem>
            )}
          </NavbarList>
        </>
      )}
    </StyledBurgerMenu>
  );
};
