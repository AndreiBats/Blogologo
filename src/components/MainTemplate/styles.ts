import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;

const Main = styled.div`
  flex-grow: 1;
`;
export { Wrapper, Container, Main };
