import styled from "styled-components";
import { Color, Media } from "ui";

const StyledTabBar = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Media.Small} {
    display: flex;
    flex-direction: column;
  }
`;

const TabItems = styled.div`
  ${Media.Small} {
    margin-bottom: 15px;
  }
`;

const ButtonArticles = styled.button<{ $isActive: boolean }>`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${({ $isActive }) => ($isActive ? Color.White : Color.Secondary)};
  background-color: ${({ $isActive }) => ($isActive ? Color.Primary : Color.Light)};
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 6px;
`;

const ButtonBlogs = styled.button<{ $isActive: boolean }>`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${({ $isActive }) => ($isActive ? Color.Secondary : Color.White)};
  background-color: ${({ $isActive }) => ($isActive ? Color.Light : Color.Primary)};
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 6px;
`;

export { StyledTabBar, ButtonArticles, ButtonBlogs, TabItems };
