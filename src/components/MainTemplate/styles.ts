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
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;
`;

const Main = styled.div`
  flex-grow: 1;
`;
export { Wrapper, Container, Main };
