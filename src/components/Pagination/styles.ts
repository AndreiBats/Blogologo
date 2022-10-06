import styled from "styled-components";
import { Color } from "../../ui";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: o 15px;
`;

const ButtonPrev = styled.button`
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

const ButtonNext = styled.button`
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

const Pages = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 70px;
  color: ${Color.Secondary};
`;

const Page = styled.li`
  cursor: pointer;
`;

export { StyledPagination, ButtonPrev, ButtonNext, Pages, Page };
