import { useEffect } from "react";
import { ArticlesItem, Spinner } from "../index";
import { fetchArticles } from "../../app/feautures/articleSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getArticles } from "../../app/selectors/articleSelectors";
import { StyledArticlesList } from "./styles";

type InputValues = {
  title: string;
  imageUrl: number;
  publishedAt: string;
};

export const ArticlesList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, articles } = useAppSelector(getArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <StyledArticlesList>
      {articles.map((article) => {
        return <ArticlesItem article={article} />;
      })}
    </StyledArticlesList>
  );
};
