import React from "react";
import { ArticlesItem } from "../ArticlesItem/ArticlesItem";
import { StyledArticlesList } from "./styles";

export const ArticlesList = () => {
  return (
    <StyledArticlesList>
      <ArticlesItem />
    </StyledArticlesList>
  );
};
