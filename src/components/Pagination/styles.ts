import styled from "styled-components";
import { Color } from "../../ui";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: o 15px;
`;

const ButtonPrev = styled.button`
  padding: 5px 12px;
  color: ${Color.White};
  background-color: ${Color.Secondary};
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transition: all 0.5s;
  }
`;

const ButtonNext = styled.button`
  padding: 5px 12px;
  color: ${Color.White};
  background-color: ${Color.Secondary};
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transition: all 0.5s;
  }
`;

const Pages = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 70px;
`;

const Page = styled.li`
  cursor: pointer;
`;

export { StyledPagination, ButtonPrev, ButtonNext, Pages, Page };
