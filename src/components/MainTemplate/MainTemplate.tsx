import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
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
