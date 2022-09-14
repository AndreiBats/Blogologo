import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui";

const StyledArticlesBlogs = styled.div`
  border-bottom: 2px solid ${Color.Light};
  margin-bottom: 64px;
  padding-bottom: 20px;
`;

const Button = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  border: none;
  background-color: transparent;
  padding: 0 40px 24px 40px;
  margin-bottom: -2px;

  &:active,
  :focus {
    border-bottom: 2px solid ${Color.Secondary};
  }
`;

export { StyledArticlesBlogs, Button };
