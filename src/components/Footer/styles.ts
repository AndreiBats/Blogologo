import styled from "styled-components";
import { Color } from "../../ui";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  margin: 0 15px;
`;

const CopyRight = styled.h3`
  color: ${Color.Medium};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const ThemeToggle = styled.button`
  color: ${Color.Medium};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 10px;
  border-radius: 4px;
`;

export { StyledFooter, ThemeToggle, CopyRight };
