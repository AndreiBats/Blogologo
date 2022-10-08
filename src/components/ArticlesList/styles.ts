import styled from "styled-components";
import { Media } from "../../ui";

const StyledArticlesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 30px 22px;
  margin-bottom: 32px;
  ${Media.Medium} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px 16px;
  }

  ${Media.Small} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { StyledArticlesList };
