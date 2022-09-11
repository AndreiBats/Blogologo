import React from "react";
import { ArticlesList } from "../ArticlesList/ArticlesList";
import { CustomSelect } from "../CustomSelect/CustomSelect";

import { StyledHome, ArticlesNews, ButtonArticles, ButtonNews } from "./styles";

export const Home = () => {
  return (
    <StyledHome>
      <ArticlesNews>
        <ButtonArticles>Articles</ButtonArticles>
        <ButtonNews>News</ButtonNews>
      </ArticlesNews>
      <CustomSelect />
      <ArticlesList />
    </StyledHome>
  );
};
