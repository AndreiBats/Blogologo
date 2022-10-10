import styled from "styled-components";
import { Color, Media } from "ui";

const StyledSearch = styled.div`
  display: flex;
  margin: 30px 15px;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 15px;
  padding: 18px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border: 1px solid ${Color.Light};
  color: ${Color.Medium};

  ${Media.Medium} {
    padding: 10px 14px;
  }

  ${Media.Small} {
    padding: 6px 10px;
  }
`;

export { StyledSearch, Input };
