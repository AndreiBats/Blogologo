import styled from "styled-components";
import { Color, Media } from "../../ui";

const StyledTabBar = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Media.Small} {
    display: flex;
    flex-direction: column;
  }
`;

const TabItems = styled.div`
  ${Media.Small} {
    margin-bottom: 15px;
  }
`;

const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  background-color: ${Color.Light};
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 6px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transition: all 0.5s;
  }

  &:active {
    background-color: ${Color.Primary};
  }

  &:focus {
    background-color: ${Color.Primary};
    color: ${Color.White};
  }
`;

export { StyledTabBar, Button, TabItems };
