import styled from "styled-components";
import { Color, Media } from "ui";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  margin: 0 15px;

  ${Media.Small} {
    display: block;
    text-align: center;
  }
`;

const CopyRight = styled.h3`
  color: ${Color.Medium};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  ${Media.Small} {
    margin-bottom: 16px;
  }
`;

const ThemeToggle = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  background-color: ${Color.Light};
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 6px;

  &:active {
    background-color: ${Color.Primary};
  }

  &:focus {
    background-color: ${Color.Primary};
    color: ${Color.White};
  }
`;

export { StyledFooter, ThemeToggle, CopyRight };
