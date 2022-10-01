import styled from "styled-components";
import { Color } from "../../ui";

const StyledInput = styled.input`
  border: 1px solid ${Color.Light};
  border-radius: 4px;
  color: ${Color.Medium};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 40px;
  padding: 18px;
`;

export { StyledInput };
