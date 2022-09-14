import styled from "styled-components";

const StyledBlogsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 40px 32px;
`;

export { StyledBlogsList };
