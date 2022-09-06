import styled from "styled-components";
import { Color } from "../../ui";

const StyledSignIn = styled.div``;

const Back = styled.h3`
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  margin-bottom: 32px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  color: ${Color.Secondary};
  margin-bottom: 72px;
`;

export { StyledSignIn, Back, Title };
