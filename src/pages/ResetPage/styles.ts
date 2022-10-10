import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledResetPage = styled.div``;

const Back = styled(Link)`
  margin-bottom: 32px;
  padding: 15px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
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

export { StyledResetPage, Back, Title };
