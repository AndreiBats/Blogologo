import styled from "styled-components";
import { Color } from "../../ui";

const StyledTabBar = styled.div`
  border-bottom: 2px solid ${Color.Light};
  margin-bottom: 64px;
`;

const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  background-color: transparent;
  padding: 0 40px 24px 40px;

  &:active,
  :focus {
    border-bottom: 2px solid ${Color.Secondary};
  }
`;

export { StyledTabBar, Button };
