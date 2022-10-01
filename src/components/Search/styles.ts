import styled from "styled-components";
import { Color, Media } from "../../ui";

const StyledSearch = styled.div`
  display: flex;
  margin: 0 15px;
`;

const SearchButton = styled.button`
  padding: 18px 24px;
  background-color: ${Color.Primary};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  ${Media.Medium} {
    padding: 10px 14px;
  }

  ${Media.Small} {
    padding: 6px 10px;
  }
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

export { StyledSearch, SearchButton, Input };
