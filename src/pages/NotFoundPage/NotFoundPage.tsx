import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { StyledNotFoundPage, Title, Description } from "./styles";

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <Title>Something wrong!!!</Title>
      <Description>
        Try reloading the page, or return to the <Link to={ROUTE.HOME}>main</Link> page!
      </Description>
    </StyledNotFoundPage>
  );
};
