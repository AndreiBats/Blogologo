import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledSignInPage = styled.div``;

const Back = styled(Link)`
  padding: 15px;
  margin-bottom: 32px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-decoration: none;
  color: ${Color.Secondary};
`;

const Title = styled.h2`
  margin-bottom: 72px;
  padding: 15px;
  font-size: 56px;
  font-weight: 700;
  line-height: 80px;
  color: ${Color.Secondary};
`;

export { StyledSignInPage, Back, Title };
