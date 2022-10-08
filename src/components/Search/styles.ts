import styled from "styled-components";
import { Color, Media } from "ui";

const StyledSearch = styled.div`
  display: flex;
  margin: 30px 15px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${Color.Light};
  border-radius: 4px;
  color: ${Color.Medium};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  padding: 18px;
  margin-right: 15px;

  ${Media.Medium} {
    padding: 10px 14px;
  }

  ${Media.Small} {
    padding: 6px 10px;
  }
`;

export { StyledSearch, Input };
