import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledSignInPage = styled.div``;

const Back = styled(Link)`
  color: ${Color.Secondary};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
  text-decoration: none;
`;

const Title = styled.h2`
  color: ${Color.Secondary};
  font-size: 56px;
  font-weight: 700;
  line-height: 80px;
  margin-bottom: 72px;
`;

export { StyledSignInPage, Back, Title };
