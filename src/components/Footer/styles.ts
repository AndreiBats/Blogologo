import styled from "styled-components";
import { Color, Media } from "ui";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
  padding: 24px 0;

  ${Media.Small} {
    display: block;
    text-align: center;
  }
`;

const CopyRight = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Medium};

  ${Media.Small} {
    margin-bottom: 16px;
  }
`;

const ThemeToggle = styled.button`
  border-radius: 4px;
  margin-right: 6px;
  padding: 6px 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  background-color: ${Color.Light};
  border: none;
  cursor: pointer;

  &:active {
    background-color: ${Color.Primary};
  }

  &:focus {
    background-color: ${Color.Primary};
    color: ${Color.White};
  }
`;

export { StyledFooter, ThemeToggle, CopyRight };
