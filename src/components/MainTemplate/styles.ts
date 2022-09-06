import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 1120px;
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
`;
export { Wrapper, Container, Main };
