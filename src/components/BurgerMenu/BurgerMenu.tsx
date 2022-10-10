import { Link } from "react-router-dom";
import { useAppSelector } from "app/hooks";
import { Account, Close, Favorites, Logo, Search } from "assets/index";
import { useWindowSize } from "hooks/index";
import { ROUTE } from "routes";
import { Breakpoint } from "ui";
import { AnimatePresence } from "framer-motion";

import {
  AccountItem,
  FavoritesItem,
  NavbarList,
  NavItem,
  SearchItem,
  StyledBurgerMenu,
  CloseButton,
  BurgerHeader,
  Wrapper,
} from "./styles";
import { getUserInfo } from "app/selectors";
import { CustomLink } from "components";

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
            <AnimatePresence>
              {isOpen && (
                <>
                  <Wrapper
                    animate={{ y: 0 }}
                    initial={{ y: -300 }}
                    transition={{ delay: 0.005 }}
                    exit={{ x: -300 }}
                  >
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
                        <CustomLink to={ROUTE.SEARCH} key={1}>
                          {" "}
                          <Search /> Search
                        </CustomLink>
                      </SearchItem>
                      {isAuth ? (
                        <>
                          <FavoritesItem>
                            <CustomLink to={ROUTE.FAVORITES} key={2}>
                              {" "}
                              <Favorites />
                              Favorites
                            </CustomLink>
                          </FavoritesItem>
                          {isAuth ? (
                            <AccountItem>
                              <CustomLink to={ROUTE.ACCOUNT} key={3}>
                                {" "}
                                {email}
                              </CustomLink>
                            </AccountItem>
                          ) : (
                            <AccountItem>
                              <CustomLink to={ROUTE.ACCOUNT} key={3}>
                                <Account />
                              </CustomLink>
                            </AccountItem>
                          )}
                        </>
                      ) : (
                        <NavItem>
                          <CustomLink to={ROUTE.SING_IN} key={4}>
                            {" "}
                            Sign In
                          </CustomLink>
                        </NavItem>
                      )}
                    </NavbarList>
                  </Wrapper>
                </>
              )}
            </AnimatePresence>
          </StyledBurgerMenu>
        </>
      )}
    </>
  );
};
