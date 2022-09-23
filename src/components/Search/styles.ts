import styled from "styled-components";
import { Color } from "../../ui";

const StyledSearch = styled.div`
  display: flex;
`;

const SearchButton = styled.button`
  padding: 15px 24px;
  background-color: ${Color.Primary};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
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
`;

export { StyledSearch, SearchButton, Input };
