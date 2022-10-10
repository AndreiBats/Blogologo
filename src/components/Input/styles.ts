import styled from "styled-components";
import { Color } from "ui";

const StyledInput = styled.input`
  margin-bottom: 40px;
  padding: 18px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border: 1px solid ${Color.Light};
  color: ${Color.Medium};
`;

export { StyledInput };
