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
  margin-right: 6px;
  padding: 12px 20px;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: ${({ $isActive }) => ($isActive ? Color.White : Color.Secondary)};
  background-color: ${({ $isActive }) => ($isActive ? Color.Primary : Color.Light)};
`;

const ButtonBlogs = styled.button<{ $isActive: boolean }>`
  margin-right: 6px;
  padding: 12px 20px;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: ${({ $isActive }) => ($isActive ? Color.Secondary : Color.White)};
  background-color: ${({ $isActive }) => ($isActive ? Color.Light : Color.Primary)};
`;

export { StyledTabBar, ButtonArticles, ButtonBlogs, TabItems };
