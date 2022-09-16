import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "..";

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
