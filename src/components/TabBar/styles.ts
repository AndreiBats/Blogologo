import styled from "styled-components";
import { Color } from "../../ui";

const StyledTabBar = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabItems = styled.div``;

const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  background-color: transparent;
  padding: 16px 24px;
  border: none;
  border-radius: 4px;

  &:active,
  :focus {
    background-color: ${Color.Primary};
  }
`;

export { StyledTabBar, Button, TabItems };
