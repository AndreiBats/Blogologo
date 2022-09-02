import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { StyledMainTemplate, Main, Container } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Navbar />
      <Container>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Container>
    </StyledMainTemplate>
  );
};
