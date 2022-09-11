import React, { useEffect } from "react";
import { fetchArticles } from "../../app/feautures/articleSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { InputValues } from "../../types";
import { ArticlesItem } from "../ArticlesItem/ArticlesItem";
import { StyledArticlesList } from "./styles";

export const ArticlesList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, articles } = useAppSelector(
    (state) => state.article
  );

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <StyledArticlesList>
      {articles.map(({ title, imageUrl, publishedAt }: InputValues) => {
        return (
          <ArticlesItem
            title={title}
            imageUrl={imageUrl}
            publishedAt={publishedAt}
          />
        );
      })}
    </StyledArticlesList>
  );
};
