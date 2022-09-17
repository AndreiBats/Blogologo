import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../index";

import { Wrapper, Container, Main } from "./styles";

export const MainTemplate = () => {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Container>
    </Wrapper>
  );
};
