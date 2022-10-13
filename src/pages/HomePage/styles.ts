import styled from "styled-components";
import { Media } from "ui";

const StyledHomePage = styled.div`
  margin: 0 15px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;

  ${Media.Small} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export { StyledHomePage, Tabs };
