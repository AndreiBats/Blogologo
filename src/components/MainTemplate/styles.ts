import styled from "styled-components";

const StyledMainTemplate = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const Main = styled.div`
  flex-grow: 1;
`;

export { Main, StyledMainTemplate, Container };
