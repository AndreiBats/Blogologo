import { useEffect } from "react";
import { ArticlesItem, Spinner } from "../index";
import { fetchArticles } from "app/features/articleSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getArticles } from "app/selectors/articleSelectors";
import { StyledArticlesList } from "./styles";
import { Link } from "react-router-dom";

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
      {articles.map((article) => {
        return (
          <Link to={`/article/${article.id}`} key={article.id}>
            <ArticlesItem article={article} />
          </Link>
        );
      })}
    </StyledArticlesList>
  );
};
