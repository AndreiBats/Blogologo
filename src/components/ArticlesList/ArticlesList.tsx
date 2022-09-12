import React, { useEffect } from "react";
import { fetchArticles } from "../../app/feautures/articleSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getArticles } from "../../app/selectors/articleSelectors";
import { InputValues } from "../../types";
import { ArticlesItem } from "../ArticlesItem/ArticlesItem";
import { Spinner } from "../Spinner/Spinner";
import { StyledArticlesList } from "./styles";

export const ArticlesList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, articles } = useAppSelector(getArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
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
