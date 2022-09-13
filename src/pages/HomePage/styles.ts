import styled from "styled-components";
import { Color } from "../../ui";

const StyledHomePage = styled.div``;

const ArticlesNews = styled.div`
  border-bottom: 2px solid ${Color.Light};
  margin-bottom: 64px;
`;

const ButtonArticles = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  border: none;
  background-color: transparent;
  padding: 0 40px 24px 40px;
  margin-bottom: -2px;

  &:active,
  :focus {
    border-bottom: 2px solid ${Color.Secondary};
  }
`;

const ButtonNews = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  border: none;
  background-color: transparent;
  padding: 0 40px 24px 40px;
  margin-bottom: -2px;

  &:active,
  :focus {
    border-bottom: 2px solid ${Color.Secondary};
  }
`;

export { ArticlesNews, ButtonArticles, ButtonNews, StyledHomePage };
