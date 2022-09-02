import styled from "styled-components";
import { Color } from "../../config";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 32px;
  background-color: ${Color.White};
  margin-bottom: 72px;
`;

const SearchList = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const SearchItem = styled.li`
  list-style: none;
  align-self: center;
  text-decoration: none;
`;

export { StyledNavbar, SearchList, SearchItem };
