import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchArticlesRecommendations } from "../../app/features/articleRecommendationSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getArticlesRecommendations } from "../../app/selectors/articleRecommendationsSelectors";
// eslint-disable-next-line max-len
import { ArticleRecommendationsItem } from "../ArticleRecommendationsItem/ArticleRecommendationsItem";

import { StyledArticleRecommendations } from "./styles";

export const ArticleRecommendations = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, articles } = useAppSelector(getArticlesRecommendations);

  useEffect(() => {
    dispatch(fetchArticlesRecommendations());
  }, [dispatch]);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <StyledArticleRecommendations>
      {articles.map((article) => {
        return (
          <Link to={`/article/${article.id}`}>
            <ArticleRecommendationsItem article={article} key={article.id} />
          </Link>
        );
      })}
    </StyledArticleRecommendations>
  );
};
