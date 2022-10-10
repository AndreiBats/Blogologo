import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledSignUpPage = styled.div``;

const Back = styled(Link)`
  margin-bottom: 32px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${Color.Secondary};
`;

const Title = styled.h2`
  margin-bottom: 72px;
  font-size: 56px;
  font-weight: 700;
  line-height: 80px;
  color: ${Color.Secondary};
`;

export { StyledSignUpPage, Back, Title };
